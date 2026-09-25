@php
    $guestBooksPelajar = \App\Models\GuestBook::where('visitor_type', 'pelajar')->orderByDesc('created_at')->get();
    $guestBooksUmum = \App\Models\GuestBook::where('visitor_type', 'umum')->orderByDesc('created_at')->get();
    $guestBooksTourist = \App\Models\GuestBook::where('visitor_type', 'tourist')->orderByDesc('created_at')->get();
    $guestBooks = \App\Models\GuestBook::orderByDesc('created_at')->get();

    // $chartGuestBookData = \App\Models\GuestBook::where('created_at')
    $chartGuestBookData = \App\Models\GuestBook::where('created_at', '>=', now()->subMonth())
            // ->where('visitor_type', 'individu')
            ->orderByDesc('created_at')
            ->get()
            ->groupBy(function ($item) {
                return $item->created_at->format('d');
            })->map->count();

    // dd(
    //     // $chartGuestBookData,
    //     $guestBooks,
    //     $chartGuestBookData->keys()->toArray(),
    //     $chartGuestBookData->flatten()->toArray(),
    // );
    
    // $guestBookChartData = $guestBooks->
@endphp
<div class="{{ $widget['wrapperClass'] ?? 'col-12' }}">
    {{-- <div class="h5 font-weight-bold">Guest Book Data</div> --}}
    <div class="card">
        <div class="card-body">
            <canvas id="myChart" height="100"></canvas>
        </div>
    </div>
</div>
<div class="{{ $widget['wrapperClass'] ?? 'col-sm-12 col-md-12 ' }}">
    <div class="card">
        <div class="card-header">
            Pengunjung Umum
        </div>
        <div class="card-body">
            <div class="{{ $widget['class'] ?? 'mb-3 ' }}">
                <table id="guest_book_umum_table" class="bg-white table dataTable table-striped table-hover nowrap rounded shadow-xs border-xs mt-2  dtr-inline">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Asal</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Visitor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($guestBooksUmum as $data)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $data->name ?? '-' }}</td>
                            <td>{{ $data->origin ?? '-' }}</td>
                            <td>{{ $data->no_whatsapp ?? '-' }}</td>
                            <td>{{ $data->email ?? '-' }}</td>
                            <td>{{ $data->group_member_total ?? '-' }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="{{ $widget['wrapperClass'] ?? 'col-sm-12 col-md-12 ' }}">
    <div class="card">
        <div class="card-header">
            Pengunjung Pelajar
        </div>

        <div class="card-body">
            <div class="{{ $widget['class'] ?? 'mb-3 ' }}">
                <table id="guest_book_pelajar_table" class="bg-white table dataTable table-striped table-hover nowrap rounded shadow-xs border-xs mt-2  dtr-inline">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tingkatan</th>
                            <th>Nama</th>
                            <th>Nama Kelompok</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Member Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($guestBooksPelajar as $data)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $data->school ?? '-' }}</td>
                            <td>{{ $data->name ?? '-' }}</td>
                            <td>{{ $data->group_name ?? '-' }}</td>
                            <td>{{ $data->no_whatsapp ?? '-' }}</td>
                            <td>{{ $data->email ?? '-' }}</td>
                            <td>{{ $data->group_member_total ?? '-' }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="{{ $widget['wrapperClass'] ?? 'col-sm-12 col-md-12 ' }}">
    <div class="card">
        <div class="card-header">
            Pengunjung Tourist
        </div>

        <div class="card-body">
            <div class="{{ $widget['class'] ?? 'mb-3 ' }}">
                <table id="guest_book_tourist_table" class="bg-white table dataTable table-striped table-hover nowrap rounded shadow-xs border-xs mt-2  dtr-inline">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Asal</th>
                            <th>Visitor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($guestBooksTourist as $data)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $data->name ?? '-' }}</td>
                            <td>{{ $data->origin ?? '-' }}</td>
                            <td>{{ $data->group_member_total ?? '-' }}</td>
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
    $('#guest_book_umum_table').DataTable({
        // "pageLength": 1,
        order: [[1, 'desc']],
        "dom": widgetDataTablesDom,
    })
    $('#guest_book_pelajar_table').DataTable({
        // "pageLength": 1,
        order: [[1, 'desc']],
        "dom": widgetDataTablesDom,
    })
    $('#guest_book_tourist_table').DataTable({
        // "pageLength": 1,
        order: [[1, 'desc']],
        "dom": widgetDataTablesDom,
    })
</script>
@endpush
@push('after_scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.1.0/chartjs-plugin-datalabels.min.js" integrity="sha512-Tfw6etYMUhL4RTki37niav99C6OHwMDB2iBT5S5piyHO+ltK2YX8Hjy9TXxhE1Gm/TmAV0uaykSpnHKFIAif/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    var chartData = {
        'labels': JSON.parse('@json($chartGuestBookData->keys()->toArray())'),
        'data': JSON.parse('@json($chartGuestBookData->flatten()->toArray())'),
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Visitor',
                data: chartData.data,
                backgroundColor: [
                    'rgb(54, 162, 235, 0.5)'
                ],
                borderColor: [
                    'rgb(54, 162, 235)'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Total Monthly Guest Book',
                    font: {
                        size: 28
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    });
</script>

@endpush