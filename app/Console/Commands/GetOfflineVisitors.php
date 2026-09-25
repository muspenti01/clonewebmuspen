<?php

namespace App\Console\Commands;

use App\Models\OfflineVisitor;
use Illuminate\Console\Command;

class GetOfflineVisitors extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'offlinevisitor:get';

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
       $visitors = \Illuminate\Support\Facades\Http::get('https://muspenguestsurvey.invm.info/api/guest')->collect()['guest'];
       foreach($visitors as $visitor) {
            OfflineVisitor::updateOrCreate(
                 ['id' => $visitor['id']],
                 $visitor
            );
       };
    }
}
