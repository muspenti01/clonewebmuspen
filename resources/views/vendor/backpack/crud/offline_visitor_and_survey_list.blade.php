@extends(backpack_view('blank'))

@php
  $defaultBreadcrumbs = [
    trans('backpack::crud.admin') => url(config('backpack.base.route_prefix'), 'dashboard'),
    $crud->entity_name_plural => url($crud->route),
    trans('backpack::crud.list') => false,
  ];

  // if breadcrumbs aren't defined in the CrudController, use the default breadcrumbs
  $breadcrumbs = $breadcrumbs ?? $defaultBreadcrumbs;
@endphp

@section('header')
  <div class="container-fluid">
    <h2>
      <span class="text-capitalize">{!! $crud->getHeading() ?? $crud->entity_name_plural !!}</span>
      <small id="datatable_info_stack">{!! $crud->getSubheading() ?? '' !!}</small>
    </h2>
  </div>
@endsection

@section('content')
  <!-- Default box -->
  <div class="row">
    <style>
      #datatable_button_stack .dt-button-collection{
        top: 100% !important;
      }

      #datatable_button_stack .btn-group div:has(.buttons-colvis){
        position: absolute !important;
      }
      /* .waveTotal-wrapper{
        display: none;
      } */
      
    </style>
    <!-- THE ACTUAL CONTENT -->
    <div class="{{ $crud->getListContentClass() }}">

        <div class="row mb-0">
          <div class="col-sm-6">
            @if ( $crud->buttons()->where('stack', 'top')->count() ||  $crud->exportButtons())
              <div class="d-print-none {{ $crud->hasAccess('create')?'with-border':'' }}">

                @include('crud::inc.button_stack', ['stack' => 'top'])

              </div>
            @endif
          </div>
          <div class="col-sm-6 d-flex align-items-center justify-content-end gap-1" style="gap: 10px">
            <div class="align-items-center d-print-none mb-2">Export: 
              @include('crud::inc.button_stack', ['stack' => 'top-right'])
              {{-- <div class="btn btn-sm btn-default" style="cursor: pointer" onclick="exportTrigger('copy')">Copy</div>
              <div class="btn btn-sm btn-default" style="cursor: pointer" onclick="exportTrigger('excel')">Excel</div>
              <div class="btn btn-sm btn-default" style="cursor: pointer" onclick="exportTrigger('csv')">CSV</div>
              <div class="btn btn-sm btn-default" style="cursor: pointer" onclick="exportTrigger('pdf')">PDF</div>
              <div class="btn btn-sm btn-default" style="cursor: pointer" onclick="exportTrigger('print')">Print</div> --}}
            </div>
            <div id="datatable_button_stack" class="mb-2 justify-content-center text-right hidden-xs d-print-none d-none"></div>
            <div id="datatable_search_stack" class="mt-sm-0 mt-2 d-print-none"></div>
          </div>
          <div class="col-12 text-right @if(request()->is('secureadminpanelmuspen/api-survey*') ) d-none @endif waveTotal-wrapper">
            <div>Total jumlah pengunjung: <span id="waveTotal"></span></div>
          </div>
        </div>

        {{-- Backpack List Filters --}}
        @if ($crud->filtersEnabled())
          @include('crud::inc.filters_navbar')
        @endif

        <table id="crudTable" class="bg-white table table-striped table-hover nowrap rounded shadow-xs border-xs mt-2" cellspacing="0">
            <thead>
              <tr>
                {{-- Table columns --}}
                @foreach ($crud->columns() as $column)
                  <th
                    data-orderable="{{ var_export($column['orderable'], true) }}"
                    data-priority="{{ $column['priority'] }}"
                     {{--

                        data-visible-in-table => if developer forced field in table with 'visibleInTable => true'
                        data-visible => regular visibility of the field
                        data-can-be-visible-in-table => prevents the column to be loaded into the table (export-only)
                        data-visible-in-modal => if column apears on responsive modal
                        data-visible-in-export => if this field is exportable
                        data-force-export => force export even if field are hidden

                    --}}

                    {{-- If it is an export field only, we are done. --}}
                    @if(isset($column['exportOnlyField']) && $column['exportOnlyField'] === true)
                      data-visible="false"
                      data-visible-in-table="false"
                      data-can-be-visible-in-table="false"
                      data-visible-in-modal="false"
                      data-visible-in-export="true"
                      data-force-export="true"
                    @else
                      data-visible-in-table="{{var_export($column['visibleInTable'] ?? false)}}"
                      data-visible="{{var_export($column['visibleInTable'] ?? true)}}"
                      data-can-be-visible-in-table="true"
                      data-visible-in-modal="{{var_export($column['visibleInModal'] ?? true)}}"
                      @if(isset($column['visibleInExport']))
                         @if($column['visibleInExport'] === false)
                           data-visible-in-export="false"
                           data-force-export="false"
                         @else
                           data-visible-in-export="true"
                           data-force-export="true"
                         @endif
                       @else
                         data-visible-in-export="true"
                         data-force-export="false"
                       @endif
                    @endif
                  >
                    {!! $column['label'] !!}
                  </th>
                @endforeach

                @if ( $crud->buttons()->where('stack', 'line')->count() )
                  <th data-orderable="false"
                      data-priority="{{ $crud->getActionsColumnPriority() }}"
                      data-visible-in-export="false"
                      >{{ trans('backpack::crud.actions') }}</th>
                @endif
              </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot>
              <tr class="d-none">
                {{-- Table columns --}}
                @foreach ($crud->columns() as $column)
                  <th class="d-none d-print-none">{!! $column['label'] !!}</th>
                @endforeach

                @if ( $crud->buttons()->where('stack', 'line')->count() )
                  <th class="d-print">{{ trans('backpack::crud.actions') }}</th>
                @endif
              </tr>
            </tfoot>
          </table>

          @if ( $crud->buttons()->where('stack', 'bottom')->count() )
          <div id="bottom_buttons" class="d-print-none text-center text-sm-left">
            @include('crud::inc.button_stack', ['stack' => 'bottom'])

            {{-- <div id="datatable_button_stack" class="float-right text-right hidden-xs"></div> --}}
          </div>
          @endif

    </div>

  </div>

@endsection

@section('after_styles')
  <!-- DATA TABLES -->
  <link rel="stylesheet" type="text/css" href="{{ asset('packages/datatables.net-bs4/css/dataTables.bootstrap4.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('packages/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('packages/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css') }}">

  <link rel="stylesheet" href="{{ asset('packages/backpack/crud/css/crud.css').'?v='.config('backpack.base.cachebusting_string') }}">
  <link rel="stylesheet" href="{{ asset('packages/backpack/crud/css/form.css').'?v='.config('backpack.base.cachebusting_string') }}">
  <link rel="stylesheet" href="{{ asset('packages/backpack/crud/css/list.css').'?v='.config('backpack.base.cachebusting_string') }}">

  <!-- CRUD LIST CONTENT - crud_list_styles stack -->
  @stack('crud_list_styles')
@endsection

@section('after_scripts')
  @include('crud::inc.datatables_logic')
  <script src="{{ asset('packages/backpack/crud/js/crud.js').'?v='.config('backpack.base.cachebusting_string') }}"></script>
  <script src="{{ asset('packages/backpack/crud/js/form.js').'?v='.config('backpack.base.cachebusting_string') }}"></script>
  <script src="{{ asset('packages/backpack/crud/js/list.js').'?v='.config('backpack.base.cachebusting_string') }}"></script>

  <!-- CRUD LIST CONTENT - crud_list_scripts stack -->
  @stack('crud_list_scripts')

  <script>
    function exportTrigger(type) {
      $('#datatable_button_stack > div > div:nth-child(1) > button').click();
      setTimeout(function() {
        $('#datatable_button_stack .buttons-'+type).click()
      }, 250)
    }
  </script>
  
  @if(request()->is('secureadminpanelmuspen/offline-visitor*'))
  <script>
      // Insert the sum of a column into the columns footer, for the visible
      // data on each draw
      // var table = $('#crudTable').DataTable();
     // $("#wave_total").html( $('#crudTable').column( 3 ).data().sum());
      jQuery(document).ready(function($) {
          // jQuery.fn.dataTable.Api.register( 'sum()', function ( ) {
          //     return this.flatten().reduce( function ( a, b ) {
          //         if ( typeof a === 'string' ) {
          //             a = a.replace(/[^\d.-]/g, '') * 1;
          //         }
          //         if ( typeof b === 'string' ) {
          //             b = b.replace(/[^\d.-]/g, '') * 1;
          //         }
          //         return a + b;
          //     }, 0 );
          // } );
          // var table = $('#crudTable').DataTable();
          crud.table.on('draw.dt', function () {
              // console.log('Redraw occurred at: ' + new Date().getTime());
            // $("#waveTotal").html(crud.table.column(7).data().sum()  );

            let filter = JSON.stringify({
                from: JSON.parse((new URL(window.location.href)).searchParams.get('created_at'))?.from ?? null,
                to: JSON.parse((new URL(window.location.href)).searchParams.get('created_at'))?.to ?? null
            })

            target_url = new URL("{{ route('offline-visitor.getTotalVisitor') }}");
            target_url.searchParams.set('filter', filter);
            
            $.ajax({
                url: target_url.toString(),
                type: 'GET',
                success: function(res) {
                    $("#waveTotal").html(res.data.total_visitor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
                }
            });
            // console.log(crud.table.column(5).data().sum())
          });
    });
  </script>
  @endif
@endsection
