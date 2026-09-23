<?php

namespace App\Console\Commands;

use App\Models\GuestBook;
use App\Models\Survey;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class ImportGuestBookSurvey extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'guestbooksurvey:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $json = collect(json_decode(file_get_contents(public_path('json/guestbooksurvey.json')), true));
        $guestbooks = $json->where('name', 'guests')->first()['data'];

        foreach($guestbooks as $guestbook) {
            GuestBook::updateOrCreate(
                ['id' => $guestbook['id']],
                [
                    'name' => $guestbook['name'],
                    // 'sex'  => $guestbook['sex'],
                    'email'=> $guestbook['email'],
                    'no_whatsapp' => $guestbook['phone'],
                    // 'subs' => $guestbook['subscribe'],
                    // 'age' => $guestbook['age'],
                    'visitor_type' => $guestbook['wisatawan'] ? 'tourist' : 'umum',
                    'group_name' => $guestbook['instansi'],
                    'group_member_total' => $guestbook['jumlah'],
                    'image_url' => $guestbook['photo'],
                ]
           );
        }

        $json = collect(json_decode(file_get_contents(public_path('json/guestbooksurvey.json')), true));
        $surveys = $json->where('name', 'surveys')->first()['data'];

        foreach($surveys as $survey) {
            Survey::updateOrCreate(
                ['id' => $survey['id']],
                [
                    'pameran' =>  $survey['pameran'],
                    'pemandu' => $survey['pemandu'],
                    'museum' => $survey['museum'],
                    'guest_book_id' => $survey['guest_id'],
                    'saran' => $survey['saran']
                ]
           );
        }
    }
}
