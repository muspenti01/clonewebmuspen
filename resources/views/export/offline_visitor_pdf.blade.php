<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ 'Guest Book Report'.date('d-m-Y').'.pdf' }}</title>

    <style>
        @page {
            /* size: 210mm 297mm potrait !important; */
            size: A4;
            margin: 20px;
        }

        body {
            font-family: 'Helvetica', 'Times-Roman', 'serif';
        }

        table {
            border-collapse: collapse;
        }

        .table {
            width: 100%;
            margin-bottom: 1rem;
            color: #212529;
        }

        .table th,
        .table td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
            white-space: wrap;
            /* word-wrap: break-word; */
            /* word-break: break-word; */
        }

        .table tbody td {
            word-break: break-word;
        }

        .table thead th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
        }

        .table tbody+tbody {
            border-top: 2px solid #dee2e6;
        }

        .table-sm th,
        .table-sm td {
            padding: 0.3rem;
        }

        .table-bordered {
            border: 1px solid #dee2e6;
        }

        .table-bordered th,
        .table-bordered td {
            border: 1px solid #dee2e6;
        }

        .table-bordered thead th,
        .table-bordered thead td {
            border-bottom-width: 2px;
        }

        .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0, 0, 0, 0.05);
        }

        .table-hover tbody tr:hover {
            color: #212529;
            background-color: rgba(0, 0, 0, 0.075);
        }

        .text-wrap {
            white-space: normal !important;
        }

        .text-left {
            text-align: left !important;
        }

        .text-right {
            text-align: right !important;
        }

        .text-center {
            text-align: center !important;
        }
    </style>
</head>

<body>
    <div class="canvas" style="">

        <div class="text-center">
            <h3>Guest Book</h3>
        </div>
        <div style="margin: 10px 0">
            <table style="width: 100%">
                <td>Tanggal : {{ now()->format('d F Y') }}</td>
                <td class="text-right">Total Jumlah Pengunjung : {{ $sum_total_visitor ?? 0 }}</td>
            </table>
        </div>
        <table class="table table-sm table-bordered table-striped bg-black" style="max-width: 500px">
            <thead class="">
                <tr>
                    <th>Timestamp</th>
                    <th>Kategori Pengunjung</th>
                    <th>Jenjang</th>
                    <th>Nama</th>
                    <th>Nama Kelompok/Asal</th>
                    <th>No. Telpon</th>
                    <th>Email</th>
                    <th>Jumlah Pengunjung</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($guest_books as $member)
                    <tr>
                        <td class="text-wrap" style="">{{ $member->created_at ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->visitor_type ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->school ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->name ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ join(' / ', array_filter([$member->origin ?? null, $member->group_name ?? null])) != '' ? join(' / ', array_filter([$member->origin ?? null, $member->group_name ?? null])) : '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->no_whatsapp ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->email ?? '-' }}</td>
                        <td class="text-wrap" style="">{{ $member->group_member_total ?? '-' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>

</html>
