@php
    $reservationWaitingd = \App\Models\Booking::where('approval_status', \App\Models\Booking::APPROVAL_DEFAULT)
                                ->orderByDesc('created_at')
                                ->get();
@endphp
<div class="{{ $widget['wrapperClass'] ?? 'col-sm-12 col-md-6 ' }}">
    <div class="card">
        <div class="card-header">
            Antrian
        </div>
        <div class="card-body">
            <div class="{{ $widget['class'] ?? 'mb-3 ' }}">
                <table id="reservation_waiting" class="bg-white table dataTable table-striped table-hover nowrap rounded shadow-xs border-xs mt-2  dtr-inline">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Category</th>
                            <th>Visitor</th>
                            <th>Booked At</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($reservationWaitingd as $data)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $data->name ?? '-' }}</td>
                            <td>{{ $data->place ?? '-' }}</td>
                            <td>{{ $data->category ?? '-' }}</td>
                            <td>{{ $data->visitor ?? '-' }}</td>
                            <td>{{ $data->date ?? '-' }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@push('after_styles')
<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap4.min.css">
@endpush
@push('after_scripts')
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap4.min.js"></script>
<script>
    var widgetDataTablesDom = `
        <"row"
            <"col-sm-12 col-md-6"l>
        >
        <"row"
            <"col-sm-12 overflow-auto"t>
        >
        <"row"
            <"col-sm-12 col-md-5"i>
            <"col-sm-12 col-md-7"p>
        >`
    $('#reservation_waiting').DataTable({
        // "pageLength": 1,
        order: [[1, 'desc']],
        "dom": widgetDataTablesDom,
    })
</script>
@endpush
@push('after_scripts')
@endpush