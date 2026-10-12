<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class UpdateVisiMisiInSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('settings')->updateOrInsert(
            ['key' => 'visi'],
            [
                'name' => 'Visi',
                'description' => 'Visi Museum Penerangan',
                'value' => '“Menjadi SMART Museum yang edukatif, inklusif, dan inovatif.”',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
            ]
        );

        DB::table('settings')->updateOrInsert(
            ['key' => 'misi'],
            [
                'name' => 'Misi',
                'description' => 'Misi Museum Penerangan',
                'value' => "1. Mewujudkan tata kelola kelembagaan museum yang berintegritas, akuntabel, dan berkelanjutan.\n2. Mengelola dan melestarikan koleksi sejarah komunikasi bangsa secara profesional dan berstandar internasional.\n3. Meningkatkan mutu pelayanan publik prima yang berorientasi pada kepuasan pengunjung.\n4. Memperkuat partisipasi, kolaborasi dan kemitraan strategis untuk pengembangan pengetahuan dan inovasi komunikasi publik.",
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Rollback intentionally left empty to preserve updated content
    }
}
