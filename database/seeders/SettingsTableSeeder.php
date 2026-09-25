<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('settings')->delete();
        
        \DB::table('settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => 'email',
                'name' => 'Contact form email address',
                'description' => 'The email address that all emails from the contact form will go to.',
                'value' => 'admin@updivision.com',
                'field' => '{"name":"value","label":"Value","type":"email"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 7,
                'key' => 'about_us',
                'name' => 'About us',
                'description' => 'About us',
                'value' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend dictum lectus, eget sollicitudin felis volutpat id. Suspendisse erat neque, sodales vitae justo et, viverra sagittis mauris. Cras eget pulvinar ex. Morbi ac erat sed metus porta hendrerit in non orci. Sed augue diam, tincidunt id sem eget, tempor rhoncus justo. Nullam iaculis urna vitae eros semper blandit. Vestibulum lorem nisl, facilisis ut cursus eu, tincidunt a turpis. Morbi in blandit quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum augue et augue sodales convallis. Sed pretium finibus elit commodo hendrerit. Mauris ornare felis luctus molestie tempor. Aenean dapibus dui et sem tincidunt luctus. Nulla orci lacus, ultricies viverra dignissim ac, maximus vitae ligula.

Aliquam et dictum metus. In fermentum, velit vitae finibus efficitur, nisl tellus bibendum justo, non sodales enim leo ac quam. Donec sit amet eleifend magna. Cras vel fringilla ligula. Aliquam in nibh blandit, dignissim mauris quis, dictum est. Sed ut eros et risus ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam consequat dolor vitae neque dignissim molestie. Suspendisse feugiat feugiat scelerisque. Curabitur et tempor enim. Integer orci nisl, faucibus nec accumsan et, accumsan in erat. Donec at lorem ligula. Phasellus nec massa at eros elementum vulputate nec sit amet felis.',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-06-25 09:31:36',
            ),
            2 => 
            array (
                'id' => 9,
                'key' => 'site_title',
                'name' => 'Site title',
                'description' => 'Site Title',
                'value' => 'Museum',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 10,
                'key' => 'site_description',
                'name' => 'Site description',
                'description' => 'Site Description',
                'value' => 'Some classes need a working database connection. If you do not have a default working connection, some facades will not be included. You can use an in-memory SQLite driver by adding the -M option.

You can choose to include helper files. This is not enabled by default, but you can override it with the --helpers (-H) option. The Illuminate/Support/helpers.php is already set up, but you can add/remove your own files in the config file.',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 11,
                'key' => 'phone',
                'name' => 'phone',
                'description' => 'Phone',
                'value' => '082243629916',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-06-25 02:47:20',
            ),
            5 => 
            array (
                'id' => 12,
                'key' => 'maps',
                'name' => 'maps',
                'description' => 'maps',
                'value' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.065254953688!2d110.3189663!3d-7.7880945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a590911fd37e1%3A0x4d86403679c3c577!2sMIE%20GACOAN%20JOGJA%20-%20GODEAN!5e0!3m2!1sid!2sid!4v1656172620687!5m2!1sid!2sid" class="google-map__contact" allowfullscreen></iframe>',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-06-25 16:04:01',
            ),
            6 => 
            array (
                'id' => 13,
                'key' => 'facebook',
                'name' => 'facebook',
                'description' => 'facebook',
                'value' => 'facebook',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 14,
                'key' => 'youtube',
                'name' => 'youtube',
                'description' => 'youtube',
                'value' => 'youtube',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 15,
                'key' => 'instagram',
                'name' => 'instagram',
                'description' => 'instagram',
                'value' => 'asditaprasetya23',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-06-25 15:25:02',
            ),
            9 => 
            array (
                'id' => 21,
                'key' => 'site_motto',
                'name' => 'Site Moto',
                'description' => 'Site moto',
                'value' => 'Museum',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 22,
                'key' => '3d_maps',
                'name' => '3d Maps',
                'description' => '3D maps',
                'value' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.065254953688!2d110.3189663!3d-7.7880945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a590911fd37e1%3A0x4d86403679c3c577!2sMIE%20GACOAN%20JOGJA%20-%20GODEAN!5e0!3m2!1sid!2sid!4v1656172620687!5m2!1sid!2sid" class="google-map__contact" allowfullscreen></iframe>',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-06-25 16:04:01',
            ),
            11 => 
            array (
                'id' => 23,
                'key' => 'twitter',
                'name' => 'Twitter',
                'description' => 'twitter',
                'value' => 'Twitter',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 24,
                'key' => 'tiktok',
                'name' => 'tiktok',
                'description' => 'tiktok',
                'value' => 'tiktok',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 25,
                'key' => 'company_profile_link',
                'name' => 'Company profile link',
                'description' => 'Company profile link',
                'value' => 'http://facebook.com',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 26,
                'key' => 'standar_maklumat',
                'name' => 'Standar maklumat',
                'description' => 'standar maklumat',
                'value' => 'http://facebook.coms',
                'field' => '{"name":"value","label":"Value","type":"textarea"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => '2022-07-26 17:27:31',
            ),
            15 => 
            array (
                'id' => 27,
                'key' => 'site_logo',
                'name' => 'Site logo',
                'description' => 'Site logo',
                'value' => '',
                'field' => '{"name":"value","label":"Value","type":"image"}
',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 28,
                'key' => 'site_icon',
                'name' => 'Site Icon',
                'description' => 'Site logo',
                'value' => '',
                'field' => '{"name":"value","label":"Value","type":"image"}
',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 30,
                'key' => 'max_visitor',
                'name' => 'Maksimal visitor museum harian',
                'description' => 'max_visitor',
                'value' => '100',
                'field' => '{"name":"value","label":"Value","type":"number"}',
                'active' => 1,
                'created_at' => '2022-07-12 15:00:09',
                'updated_at' => '2022-07-12 15:00:17',
            ),
            18 => 
            array (
                'id' => 31,
                'key' => 'compay_profile_url',
                'name' => 'Company Profile url',
                'description' => 'Company Profile url',
                'value' => 'http://youtube.comsss',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => '2022-07-12 15:00:49',
                'updated_at' => '2022-07-26 17:27:41',
            ),
            19 => 
            array (
                'id' => 32,
                'key' => 'address',
                'name' => 'Site Moto',
                'description' => 'address',
                'value' => '',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 33,
                'key' => 'visi',
                'name' => 'Visi',
                'description' => 'visi',
                'value' => '',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 34,
                'key' => 'misi',
                'name' => 'misi',
                'description' => 'misi',
                'value' => '',
                'field' => '{"name":"value","label":"Value","type":"text"}',
                'active' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}