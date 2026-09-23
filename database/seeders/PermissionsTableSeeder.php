<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        DB::table('permissions')->delete();

        DB::table('permissions')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'create-article',
                'guard_name' => 'web',
                'created_at' => '2022-06-30 15:59:15',
                'updated_at' => '2022-06-30 15:59:15',
            ),
            1 =>
            array (
                'id' => 2,
                'name' => 'all',
                'guard_name' => 'web',
                'created_at' => '2022-06-30 16:00:17',
                'updated_at' => '2022-06-30 16:00:17',
            ),
        ));


    }
}
