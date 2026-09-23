@if ($crud->hasAccess('create'))
    <a href="{{url('secureadminpanelmuspen/api-survey/excel')}}" target="_blank" onclick="cloneEntry(this)" data-route="{{ url($crud->route.'/excel') }}" class="btn btn-sm btn-default" data-button-type="clone">Excel</a>
    <a href="{{url('secureadminpanelmuspen/api-survey/pdf')}}" target="_blank" onclick="cloneEntry(this)" data-route="{{ url($crud->route.'/pdf') }}" class="btn btn-sm btn-default" data-button-type="clone">PDF</a>
@endif

{{-- Button Javascript --}}
{{-- - used right away in AJAX operations (ex: List) --}}
{{-- - pushed to the end of the page, after jQuery is loaded, for non-AJAX operations (ex: Show) --}}
@push('after_scripts') @if (request()->ajax()) @endpush @endif
<script>
    if (typeof cloneEntry != 'function') {
      $("[data-button-type=clone]").unbind('click');

      function cloneEntry(button) {
        let new_params = JSON.stringify({
            from: JSON.parse((new URL(window.location.href)).searchParams.get('from_to'))?.from ?? null,
            to: JSON.parse((new URL(window.location.href)).searchParams.get('from_to'))?.to ?? null
        })

        target_url = new URL(button.href);
        target_url.searchParams.set('filter', new_params.toString());
        
        button.href = target_url.toString();

        return;
          // ask for confirmation before deleting an item
          // e.preventDefault();
          var button = $(button);
          var route = button.attr('data-route');

          $.ajax({
              url: route,
              type: 'POST',
              success: function(result) {
                  // Show an alert with the result
                  new Noty({
                    type: "success",
                    text: "<strong>Entry cloned</strong><br>A new entry has been added, with the same information as this one."
                  }).show();

                  // Hide the modal, if any
                  $('.modal').modal('hide');

                  if (typeof crud !== 'undefined') {
                    crud.table.ajax.reload();
                  }
              },
              error: function(result) {
                  // Show an alert with the result
                  new Noty({
                    type: "warning",
                    text: "<strong>Cloning failed</strong><br>The new entry could not be created. Please try again."
                  }).show();
              }
          });
      }
    }

    // make it so that the function above is run after each DataTable draw event
    // crud.addFunctionToDataTablesDrawEventQueue('cloneEntry');
</script>
@if (!request()->ajax()) @endpush @endif