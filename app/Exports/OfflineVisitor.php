<?php

namespace App\Exports;

use App\Models\GuestBook;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithPreCalculateFormulas;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class OfflineVisitor implements FromCollection, WithHeadings, WithEvents, WithStyles, WithPreCalculateFormulas, ShouldAutoSize
{
    public function __construct(private $from, private $to)
    {
        //
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        // dd(
        //     $this->from,
        //     $this->to,
        //     GuestBook::where('created_at', '>=', $this->from)->where('created_at', '<=', $this->to)->count(),
        //     GuestBook::when($this->from != null, fn($q) => $q->where('created_at', '>=', $this->from))
        //     ->when($this->to != null, fn($q) => $q->where('created_at', '<=', $this->to))
        //     ->orderBy('created_at', 'desc')
        //     ->selectRaw('ROW_NUMBER() OVER (ORDER BY created_at DESC) as "#"' )
        //     ->selectRaw('COALESCE(created_at,"-") as Timestamp')
        //     ->selectRaw('COALESCE(school,"-") as "Kategori Pengunjung"')
        //     ->selectRaw('COALESCE(category,"-") as Jenjang')
        //     ->selectRaw('COALESCE(name,"-") as Nama')
        //     ->selectRaw("CASE WHEN group_name IS NULL AND origin IS NULL THEN '-' ELSE COALESCE(CONCAT_WS(' / ', group_name, origin), '-') END as 'Nama Kelompok/Asal'")
        //     ->selectRaw('COALESCE(no_whatsapp, "-") as "No. Telpon"')
        //     ->selectRaw('COALESCE(email, "-") as Email')
        //     ->selectRaw('COALESCE(group_member_total, 1) as "Jumlah Pengunjung"')
        //     ->get(),
        // );
        
        return GuestBook::from(DB::raw('(SELECT @row_number := 0) as t, guest_books'))
            ->when($this->from != null, fn($q) => $q->where('created_at', '>=', $this->from))
            ->when($this->to != null, fn($q) => $q->where('created_at', '<=', $this->to))
            ->orderBy('created_at', 'desc')
            ->selectRaw('(@row_number := @row_number + 1) as no')
            ->selectRaw('COALESCE(created_at, "-") as timestamp')
            ->selectRaw('COALESCE(visitor_type, "-") as kategori_pengunjung')
            ->selectRaw('COALESCE(school, "-") as tingkat_pendidikan')
            ->selectRaw('COALESCE(name, "-") as nama')
            ->selectRaw("CASE WHEN group_name IS NULL AND origin IS NULL THEN '-' ELSE COALESCE(CONCAT_WS(' / ', group_name, origin), '-') END as nama_kelompok")
            ->selectRaw('COALESCE(no_whatsapp, "-") as no_telpon')
            ->selectRaw('COALESCE(email, "-") as email')
            ->selectRaw('COALESCE(group_member_total, 1) as jumlah_pengunjung')
            ->get();
    }



    public function headings(): array
    {
        return [
            // ['Custom Label Before Header'],
            [ 'No', 'Timestamp', 'Kategori Pengunjung', 'Tingkat Pendidikan', 'Nama', 'Nama Kelompok/Asal', 'No. Telpon', 'Email', 'Jumlah Pengunjung']
            // ['Header1', 'Header2', 'Header3'], // Headers
        ];
    }

    public function registerEvents(): array
    {
        return [
            // Apply custom formatting
            BeforeSheet::class => function (BeforeSheet $event) {
                $event->sheet
                    ->setCellValue('A1', 'Guest Book')
                    ->mergeCells('A1:I1') // Adjust the range as needed
                    ->getStyle('A1')
                    ->applyFromArray([
                        'font' => [
                            'bold' => true,
                            'size' => 14,
                        ],
                        'alignment' => [
                            'horizontal' => Alignment::HORIZONTAL_CENTER,
                        ],
                    ]);

                $event->sheet->setCellValue('A2', '');
                $event->sheet->setCellValue('A3', 'Tanggal');
                $event->sheet->setCellValue('C3', now()->format('d-M-Y'))->mergeCells('A3:B3');
                $event->sheet->setCellValue('A4', 'Total Jumlah Pengunjung');
                $event->sheet->setCellValue('C4', 0)->mergeCells('A4:B4');
                $event->sheet->setCellValue('A5', '');
            },

            // Add sum formula
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();
                
                $lastRow = $sheet->getHighestRow();
                $column = 'I'; // Column to sum
                $sheet->setCellValue('C4', '=SUM(' . $column . '7:' . $column . $lastRow . ')');
                
                $event->sheet
                    ->getStyle('A6:I6')
                    ->applyFromArray([
                        'font' => [
                            'bold' => true,
                            // 'size' => 12,
                        ],
                        // 'alignment' => [
                        //     'horizontal' => Alignment::HORIZONTAL_CENTER,
                        // ],
                    ]);
            },
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Define styling for headers, etc.
        ];
    }
}