<?php

namespace App\Console\Commands;

use App\Models\Collection;
use App\Models\Event as ModelsEvent;
use Illuminate\Console\Command;

class SluggingCollectionEvent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:slug';

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
        foreach(Collection::all() as $collection) {
            $collection->slug = \Str::slug($collection->title);
            $collection->save();
        }

        foreach(ModelsEvent::all() as $collection) {
            $collection->slug = \Str::slug($collection->name);
            $collection->save();
        }
        return 0;
    }
}
