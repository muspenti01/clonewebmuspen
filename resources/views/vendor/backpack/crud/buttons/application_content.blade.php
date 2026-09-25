@if ($crud->hasAccess('update'))
<a href="{{ url(backpack_url().'/cms-application/'.$entry->getKey().'/content') }}"
    class="btn btn-sm btn-link text-capitalize">
    <i class="la la-book"></i> Content
</a>
@endif