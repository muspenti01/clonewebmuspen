@if ($crud->hasAccess('create'))
    <a href="{{url('secureadminpanelmuspen/offline-visitor/excel')}}" target="_blank" onclick="cloneEntry(this)" data-route="{{ url($crud->route.'/excel') }}" class="btn btn-sm btn-default" data-button-type="clone">Excel</a>
    {{-- <a href="{{url('secureadminpanelmuspen/offline-visitor/pdf')}}" target="_blank" onclick="cloneEntry(this)" data-route="{{ url($crud->route.'/pdf') }}" class="btn btn-sm btn-default" data-button-type="clone">PDF</a> --}}
@endif

@push('after_scripts') @if (request()->ajax()) @endpush @endif
<script>
    if (typeof cloneEntry != 'function') {
      $("[data-button-type=clone]").unbind('click');

      function cloneEntry(button) {
        let new_params = JSON.stringify({
            from: JSON.parse((new URL(window.location.href)).searchParams.get('created_at'))?.from ?? null,
            to: JSON.parse((new URL(window.location.href)).searchParams.get('created_at'))?.to ?? null
        })

        target_url = new URL(button.href);
        target_url.searchParams.set('filter', new_params.toString());
        
        button.href = target_url.toString();

        return;
      }
    }
</script>
@if (!request()->ajax()) @endpush @endif