<?php

namespace Database\Seeders;

use App\Models\GuestBook;
use Illuminate\Database\Seeder;

class NonNullGuestBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GuestBook::where('group_member_total', 0)
            ->update(['group_member_total' => 1]);
    }
}
