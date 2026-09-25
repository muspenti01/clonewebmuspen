@if ($crud->hasAccess('update'))
	<!-- Single edit button -->
	<a href="{{ url($crud->route.'/'.$entry->getKey().'/edit') }}" class="btn btn-sm btn-link"><i class="la la-edit"></i> Reschedule</a>
@endif