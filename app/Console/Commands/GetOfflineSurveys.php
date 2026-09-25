<?php

namespace App\Console\Commands;

use App\Models\OfflineSurvey;
use Illuminate\Console\Command;

class GetOfflineSurveys extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'offlinesurvey:get';

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
       $surveys = \Illuminate\Support\Facades\Http::get('https://muspenguestsurvey.invm.info/api/survey')->collect()['survey'];
       foreach($surveys as $survey) {
            OfflineSurvey::updateOrCreate(
                 ['guest_id' => $survey['guest_id']],
                 $survey
            );
       };
    }
}
