@php
    $dates = [
        'Hari Ini' =>  [\Carbon\Carbon::now()->startOfDay()->toDateTimeString(), \Carbon\Carbon::now()->endOfDay()->toDateTimeString()],
        'Minggu Ini' => [\Carbon\Carbon::now()->startOfWeek()->toDateTimeString(), \Carbon\Carbon::now()->endOfWeek()->toDateTimeString()],
        'Bulan Ini' => [\Carbon\Carbon::now()->startOfMonth()->toDateTimeString(), \Carbon\Carbon::now()->endOfMonth()->toDateTimeString()],
        'Tahun Ini' => [\Carbon\Carbon::now()->startOfYear()->toDateTimeString(), \Carbon\Carbon::now()->endOfYear()->toDateTimeString()],
    ];

    $quickFilter = '';
    try {
        if (json_decode(request()->created_at)->from == $dates['Tahun Ini'][0] && json_decode(request()->created_at)->to == $dates['Tahun Ini'][1]) {
            $quickFilter = 'Tahun Ini';
        } elseif (json_decode(request()->created_at)->from == $dates['Bulan Ini'][0] && json_decode(request()->created_at)->to == $dates['Bulan Ini'][1]) {
            $quickFilter = 'Bulan Ini';
        } elseif (json_decode(request()->created_at)->from == $dates['Minggu Ini'][0] && json_decode(request()->created_at)->to == $dates['Minggu Ini'][1]) {
            $quickFilter = 'Minggu Ini';
        } elseif (json_decode(request()->created_at)->from == $dates['Hari Ini'][0] && json_decode(request()->created_at)->to == $dates['Hari Ini'][1]) {
            $quickFilter = 'Hari Ini';
        }
    } catch (\Throwable $th) {
        //throw $th;
    }
@endphp
@if ($crud->hasAccess('create'))
<div id="offline-visitor-quick-filter">
    <a href="javascript:void(0)" onclick="importTransaction(this)" data-selected-range-identifier="Tahun ini" data-selected-range="{{ json_encode($dates['Tahun Ini']) }}" data-route="{{ url($crud->route.'/import') }}"
        class="btn btn-sm btn-default @if ($quickFilter == 'Tahun Ini') active @endif"
        data-button-type="import">
        <span class="ladda-label">
            <i class="fa fa-plus"></i> Tahun ini
        </span>
    </a>
    <a href="javascript:void(0)" onclick="importTransaction(this)" data-selected-range-identifier="Bulan Ini" data-selected-range="{{ json_encode($dates['Bulan Ini']) }}" data-route="{{ url($crud->route.'/import') }}"
        class="btn btn-sm btn-default @if ($quickFilter == 'Bulan Ini') active @endif"
        data-button-type="import">
        <span class="ladda-label">
            <i class="fa fa-plus"></i> Bulan Ini
        </span>
    </a>
    <a href="javascript:void(0)" onclick="importTransaction(this)" data-selected-range-identifier="Minggu Ini" data-selected-range="{{ json_encode($dates['Minggu Ini']) }}" data-route="{{ url($crud->route.'/import') }}"
        class="btn btn-sm btn-default @if ($quickFilter == 'Minggu Ini') active @endif"
        data-button-type="import">
        <span class="ladda-label">
            <i class="fa fa-plus"></i> Minggu Ini
        </span>
    </a>
    <a href="javascript:void(0)" onclick="importTransaction(this)" data-selected-range-identifier="Hari Ini" data-selected-range="{{ json_encode($dates['Hari Ini']) }}" data-route="{{ url($crud->route.'/import') }}"
        class="btn btn-sm btn-default @if ($quickFilter == 'Hari Ini') active @endif"
        data-button-type="import">
        <span class="ladda-label">
            <i class="fa fa-plus"></i> Hari Ini
        </span>
    </a>
</div>
@endif

@push('after_scripts')
<script>
    function replacePlaceholder () {
        let el = $('#crudTable_filter > label > input');
        if (el.length == 0) {
            setTimeout(() => {
                replacePlaceholder()
            }, 250); 
        } else {
            el.attr('placeholder', 'Nama/Kelompok...')
        }
    }
    replacePlaceholder();
    
    if (typeof importTransaction != 'function') {
      $("[data-button-type=import]").unbind('click');
      $("[data-button-type=import]").on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
      });
      $("#remove_filters_button").on('click', function(){
        $("[data-button-type=import]").removeClass('active');
      });

      function importTransaction(button) {
            new Noty({
                text: "Filter By "+$(button).find('span').text(),
                type: "success"
            }).show();

            // $('[data-range-key="Last 30 Days"]').click()

            let selectedRangeDateStart = moment(JSON.parse(button.dataset.selectedRange)[0]);
            let selectedRangeDateEnd = moment(JSON.parse(button.dataset.selectedRange)[1]);

            $('#daterangepicker-createdAt').data('daterangepicker').setStartDate(selectedRangeDateStart.format('D MMM YYYY'))
            $('#daterangepicker-createdAt').data('daterangepicker').setEndDate(selectedRangeDateEnd.format('D MMM YYYY'))

            applyDateRangeFiltercreatedAt(selectedRangeDateStart, selectedRangeDateEnd);
            
            // if (button.dataset.selectedRangeIdentifier == 'Tahun ini') {
                
            //     applyDateRangeFiltercreatedAt(moment(JSON.parse(button.dataset.selectedRange)[0]), moment(JSON.parse(button.dataset.selectedRange)[1]));

            // } else if (button.dataset.selectedRangeIdentifier == 'Bulan Ini') {
            //     applyDateRangeFiltercreatedAt(moment(JSON.parse(button.dataset.selectedRange)[0]), moment(JSON.parse(button.dataset.selectedRange)[1]));
                
            // } else if (button.dataset.selectedRangeIdentifier == 'Minggu Ini') {
            //     applyDateRangeFiltercreatedAt(moment(JSON.parse(button.dataset.selectedRange)[0]), moment(JSON.parse(button.dataset.selectedRange)[1]));
                
            // } else if (button.dataset.selectedRangeIdentifier == 'Hari Ini') {
            //     applyDateRangeFiltercreatedAt(moment(JSON.parse(button.dataset.selectedRange)[0]), moment(JSON.parse(button.dataset.selectedRange)[1]));
                
            // }
      }
    }
</script>
@endpush