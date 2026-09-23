<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        DB::table('roles')->delete();

        DB::table('roles')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'member',
                'guard_name' => 'web',
                'created_at' => '2022-06-30 15:59:23',
                'updated_at' => '2022-06-30 15:59:23',
            ),
            1 =>
            array (
                'id' => 2,
                'name' => 'admin',
                'guard_name' => 'web',
                'created_at' => '2022-06-30 16:00:06',
                'updated_at' => '2022-06-30 16:00:06',
            ),
        ));


    }
}
