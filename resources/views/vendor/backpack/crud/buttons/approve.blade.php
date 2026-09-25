@if ($crud->hasAccess('update'))
  <a href="{{ url($crud->route.'/'.$entry->getKey().'/approve') }}" class="btn btn-sm btn-link text-capitalize">
    <i class="la la-check"></i> Approve
  </a>
@endif