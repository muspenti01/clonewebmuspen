@if ($crud->hasAccess('update'))
  <a href="{{ url($crud->route.'/'.$entry->getKey().'/edit') }}" class="btn btn-sm btn-link text-capitalize">
    <i class="la la-times"></i> Reject
  </a>
@endif