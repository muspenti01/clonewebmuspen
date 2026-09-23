<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class TruncateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Nonaktifkan pemeriksaan foreign key sementara untuk menghindari error
        Schema::disableForeignKeyConstraints();

        // Kosongkan tabel comments
        DB::table('comments')->truncate();

        // Aktifkan kembali pemeriksaan foreign key
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Tidak ada aksi rollback untuk penghapusan data
    }
}
