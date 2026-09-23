<?php

namespace App\Exports;

use App\Models\GuestBook;
use App\Models\Survey as ModelsSurvey;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithPreCalculateFormulas;
use Maatwebsite\Excel\Events\BeforeSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class Survey implements FromCollection, WithHeadings, WithEvents, WithStyles, WithPreCalculateFormulas, ShouldAutoSize
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
        //     ModelsSurvey::with('guestbook')->when($this->from != null, fn($q) => $q->where('surveys.created_at', '>=', $this->from))
        //     ->when($this->to != null, fn($q) => $q->where('surveys.created_at', '<=', $this->to))
        //     ->orderBy('surveys.created_at', 'desc')
        //     ->selectRaw('ROW_NUMBER() OVER (ORDER BY created_at DESC) as "No"' )
        //     ->selectRaw('COALESCE(surveys.guest_book_id, "-") as "Guest ID"')
        //     ->selectRaw('COALESCE(guest_books.name, "-") as Nama')
        //     ->selectRaw('COALESCE(surveys.phone, "-") as Telepon')
        //     ->selectRaw('COALESCE(surveys.pameran, "-") as Pameran')
        //     ->selectRaw('COALESCE(surveys.pemandu, "-") as Pemandu')
        //     ->selectRaw('COALESCE(surveys.museum, "-") as Museum')
        //     ->selectRaw('COALESCE(surveys.saran, "-") as Saran')
        //     ->selectRaw('COALESCE(surveys.created_at, "-") as Tanggal')
        //     // ->selectRaw('guest_book_id')
        //     ->leftJoin('guest_books', 'guest_books.id', '=', 'guest_book_id')
        //     ->selectRaw('guest_books.*')
        //     ->get()->toArray(),
        // );
        
        
        return ModelsSurvey::when($this->from != null, fn($q) => $q->where('created_at', '>=', $this->from))
        ->when($this->to != null, fn($q) => $q->where('created_at', '<=', $this->to))
        ->orderBy('created_at', 'desc')
        ->selectRaw('@rownum := @rownum + 1 as "No"')
        ->selectRaw('COALESCE(guest_book_id, "-") as "Guest ID"')
        ->selectRaw('COALESCE(name, "-") as Nama')
        ->selectRaw('COALESCE(phone, "-") as Telepon')
        ->selectRaw('COALESCE(pameran, "-") as Pameran')
        ->selectRaw('COALESCE(pemandu, "-") as Pemandu')
        ->selectRaw('COALESCE(museum, "-") as Museum')
        ->selectRaw('COALESCE(saran, "-") as Saran')
        ->selectRaw('COALESCE(created_at, "-") as Tanggal')
        ->addSelect(DB::raw('@rownum:=0'))
        ->get();
    }



    public function headings(): array
    {
        return [
            ['No', 'Guest ID', 'Nama', 'Telepon', 'Pameran', 'Pemandu', 'Museum', 'Saran', 'Tanggal'],
        ];
    }

    public function registerEvents(): array
    {
        return [
            // Apply custom formatting
            BeforeSheet::class => function (BeforeSheet $event) {
                $event->sheet
                    ->setCellValue('A1', 'Survey')
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
                $event->sheet->setCellValue('A3', 'Tanggal')->mergeCells('A3:B3');
                $event->sheet->setCellValue('C3', now()->format('d-M-Y'));
                $event->sheet->setCellValue('A4', '');
            },
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text
            5 => [
                'font' => [
                    'bold' => true,
                ],
            ],
        ];
    }
}