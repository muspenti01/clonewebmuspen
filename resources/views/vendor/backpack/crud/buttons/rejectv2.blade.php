@if ($crud->hasAccess('update'))
  <a href="{{ url($crud->route.'/'.$entry->getKey().'/rejectv2') }}" class="btn btn-sm btn-link text-capitalize">
    <i class="la la-times"></i> Reject
  </a>
@endif