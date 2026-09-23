@extends(backpack_view('blank'))

@php
Widget::add()->to('before_content')->type('div')->class('row')->content([
    Widget::make()
        ->type('monthly_visitor_chart')
        ->view('vendor.backpack.base.widgets.monthly_visitor_chart')
        // ->view('vendor.backpack.custom.widget.table')
        ->content(null),
]);
@endphp
@php
  $breadcrumbs = [
    //   'Admin' => backpack_url('dashboard'),
      'Monthly Visitor' => backpack_url('monthly-visitor-chart'),
  ];
@endphp