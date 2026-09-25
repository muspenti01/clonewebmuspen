<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        DB::table('users')->delete();

        DB::table('users')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'Admin example',
                'email' => 'admin@example.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$/kXZKUHAcubrDTDnmo3MSun7nkkvNutVUBL8AYZuly5sRNxpHAtAy',
                'remember_token' => 'SSz26fcfNG2q3vkMtElaXD4IlyrFo2mR6lDBcKk7wifF9sxqoQTjGlOJM6cn',
                'created_at' => '2022-06-23 08:17:53',
                'updated_at' => '2022-06-23 08:17:53',
            ),
            1 =>
            array (
                'id' => 2,
                'name' => 'Daquan Sykes',
                'email' => 'jahyjiface@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$WiPtV79Pt8BRcuOQvXxQO.uR/JGLghKY5pjIp.SPqMtmaPGhFuGxG',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 15:59:48',
                'updated_at' => '2022-06-30 15:59:48',
            ),
            2 =>
            array (
                'id' => 3,
                'name' => 'Keaton Clark',
                'email' => 'pizymunila@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$z5gCkW..AMzgzoVwMuxDN.eGtFSmxkOpppGqJqGktYPPruJoP9g/2',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:30:00',
                'updated_at' => '2022-06-30 16:30:00',
            ),
            3 =>
            array (
                'id' => 4,
                'name' => 'Callum Mcleod',
                'email' => 'quqyfomek@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$iOSgFD.I/et7bp9TyVY73eK0FJ5LGJkX7PUs3VcyZlceI.nNGMSem',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:30:43',
                'updated_at' => '2022-06-30 16:30:43',
            ),
            4 =>
            array (
                'id' => 5,
                'name' => 'Mona Turner',
                'email' => 'lylecow@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$eczl96C4CZ/Nil20VbY9PuPTdUWR7CsS2MsLF5FT3dGUI2ACEOsra',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:30:59',
                'updated_at' => '2022-06-30 16:30:59',
            ),
            5 =>
            array (
                'id' => 6,
                'name' => 'Abdul Douglas',
                'email' => 'hele@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$5rW9ewjJ5T0MXTWzJFB4c.OWNJEM8b6N4pn1bgNvbjhLSZMw7wHdS',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:31:30',
                'updated_at' => '2022-06-30 16:31:30',
            ),
            6 =>
            array (
                'id' => 7,
                'name' => 'Jacob Farrell',
                'email' => 'lunowecyz@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$oIHh8d8ONLDO9hb2oXFHmuryyryfboTIPJSMjLMo97yzynPQY4i/C',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:31:42',
                'updated_at' => '2022-06-30 16:31:42',
            ),
            7 =>
            array (
                'id' => 8,
                'name' => 'Abigail Robertson',
                'email' => 'zylyfuke@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$ItV8yncpOhmRP5Em/3CIlOIVnplUkpR81anYT7rDWXPduyiP6wxdO',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:32:08',
                'updated_at' => '2022-06-30 16:32:08',
            ),
            8 =>
            array (
                'id' => 9,
                'name' => 'Isabella Hamilton',
                'email' => 'hikiki@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$oPMTPqvdqM8Hi7n66K.kTeatBYNVYfR2ks/K2ZTjiWlzM40bU9Qnq',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:32:19',
                'updated_at' => '2022-06-30 16:32:19',
            ),
            9 =>
            array (
                'id' => 10,
                'name' => 'Gil Hardin',
                'email' => 'qywifok@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$gjJBFYnanvWTPo3JXorGnewyqjmOGx.Qd.Jmm/MELTVTnKPxTKlVO',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:32:36',
                'updated_at' => '2022-06-30 16:32:36',
            ),
            10 =>
            array (
                'id' => 11,
                'name' => 'Iola Townsend',
                'email' => 'hapuvim@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$pwmaziwZe7tUe.9dMuVnEuRO9YmQdzrsg55lvcArRkK9q3X4txKQa',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:35:57',
                'updated_at' => '2022-06-30 16:35:57',
            ),
            11 =>
            array (
                'id' => 12,
                'name' => 'Karleigh Michael',
                'email' => 'nifadub@mailinator.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$giNHruply1XY1TN/eaDKd.uvVZuQgYjo3cZ9/DzN59ASrjUPbzHCO',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:45:09',
                'updated_at' => '2022-06-30 16:45:09',
            ),
            12 =>
            array (
                'id' => 13,
                'name' => 'member',
                'email' => 'member@example.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$UrghmZlWCdUgHt.rqZ8WneyToW5kPTDpkN7tfzKXDHmLBKHAsU7bm',
                'remember_token' => NULL,
                'created_at' => '2022-06-30 16:57:30',
                'updated_at' => '2022-06-30 16:57:30',
            ),
        ));


    }
}
