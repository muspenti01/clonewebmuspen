@extends(backpack_view('blank'))

@php
Widget::add()->to('before_content')->type('div')->class('row')->content([
    Widget::make()
        ->type('guest_book_chart')
        ->view('vendor.backpack.base.widgets.guest_book_chart')
        // ->view('vendor.backpack.custom.widget.table')
        ->content(null),
]);
@endphp
@php
  $breadcrumbs = [
      'Admin' => backpack_url('dashboard'),
      'guest-book' => backpack_url('guest-book'),
  ];
@endphp