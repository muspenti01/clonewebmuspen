@extends(backpack_view('blank'))

@php
$visitor_weekly = \App\Models\GuestBook::select(DB::raw('count("id") as count'),DB::raw('DAYNAME(created_at) as day'))->groupBy(DB::raw('day'))->get()->sortBy(function ($visitor) {
        return (6 + constant('\Carbon\Carbon::'.strtoupper($visitor->day))) % 7;
    })->take(5)->toBase();

$visitor_weekly_online_event = \App\Models\Booking::whereType('museum')->select(DB::raw('count("id") as count'),DB::raw('DAYNAME(created_at) as day'))->groupBy(DB::raw('day'))->get()->sortBy(function ($visitor) {
        return (6 + constant('\Carbon\Carbon::'.strtoupper($visitor->day))) % 7;
    })->take(5)->toBase();

$visitor_weekly_online_kunjungan = \App\Models\Booking::where('type', '<>', 'museum')->select(DB::raw('count("id") as count'),DB::raw('DAYNAME(created_at) as day'))->groupBy(DB::raw('day'))->get()->sortBy(function ($visitor) {
        return (6 + constant('\Carbon\Carbon::'.strtoupper($visitor->day))) % 7;
    })->take(5)->toBase();

$offline_survei_data = new \App\Models\Survey;
@endphp

@php
  $breadcrumbs = [
      'Admin' => backpack_url('dashboard'),
      'Dashboard' => true,
  ];
@endphp

@push('after_scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.1.0/chartjs-plugin-datalabels.min.js" integrity="sha512-Tfw6etYMUhL4RTki37niav99C6OHwMDB2iBT5S5piyHO+ltK2YX8Hjy9TXxhE1Gm/TmAV0uaykSpnHKFIAif/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				@foreach($visitor_weekly as $visitor)
					{!! "'".$visitor->day."'," !!}
				@endforeach
			],
			datasets: [{
				label: 'Offline Visitor',
				data: [
					@foreach($visitor_weekly as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(54, 162, 235, 0.5)'
				],
				borderColor: [
					'rgb(54, 162, 235)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			},
			plugins: {
				title: {
					display: true,
					text: 'Total Weekly Offline Visitor',
					font: {
						size: 28
					}
				},
				datalabels: {
					anchor: 'end',
					align: 'top',
					formatter: Math.round,
					font: {
						weight: 'bold'
					}
				}
			}
		}
	});
	</script>

	<script>
	const cty= document.getElementById('online-visitor').getContext('2d');
	new Chart(cty, {
		type: 'bar',
		data: {
			labels: [
				@foreach($visitor_weekly_online_event as $visitor)
					{!! "'".$visitor->day."'," !!}
				@endforeach
			],
			datasets: [{
				label: 'Event',
				data: [
					@foreach($visitor_weekly_online_event as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(54, 162, 235, 0.5)'
				],
				borderColor: [
					'rgb(54, 162, 235)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			},
			{
				label: 'Kunjungan',
				data: [
					@foreach($visitor_weekly_online_kunjungan as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(255, 99, 132, 0.5)',
				],
				borderColor: [
					'rgb(255, 99, 132)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			},
			plugins: {
				title: {
					display: true,
					text: 'Total Weekly Online Visitor',
					font: {
						size: 28
					}
				},
				datalabels: {
					anchor: 'end',
					align: 'top',
					formatter: Math.round,
					font: {
						weight: 'bold'
					}
				}
			}
		}
	});
	</script>

	<script>
	const srv= document.getElementById('survei-chart').getContext('2d');
	new Chart(srv, {
		type: 'bar',
		data: {
			labels: [
				'5', '4', '3', '2', '1',
			],
			datasets: [{
				label: 'pameran',
				data: [
					@foreach($offline_survei_data->select(['pameran', DB::raw('count(guest_book_id) as count')])->groupBy('pameran')->get() as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(75, 192, 192, 0.5)'
				],
				borderColor: [
					'rgb(75, 192, 192)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			},
			{
				label: 'Pemandu',
				data: [
					@foreach($offline_survei_data->select(['pemandu', DB::raw('count(guest_book_id) as count')])->groupBy('pemandu')->get() as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(153, 102, 255, 0.5)',
				],
				borderColor: [
					'rgb(153, 102, 255)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			},
			{
				label: 'Museum',
				data: [
					@foreach($offline_survei_data->select(['museum', DB::raw('count(guest_book_id) as count')])->groupBy('museum')->get() as $visitor)
						{!! "'".$visitor->count."'," !!}
					@endforeach
				],
				backgroundColor: [
					'rgb(255, 159, 64, 0.5)',
				],
				borderColor: [
					'rgb(255, 159, 64)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			},
			plugins: {
				title: {
					display: true,
					text: 'Total Survei Results',
					font: {
						size: 28
					}
				},
				datalabels: {
					anchor: 'end',
					align: 'top',
					formatter: Math.round,
					font: {
						weight: 'bold'
					}
				}
			}
		}
	});
	</script>
@endpush


@php

    $collections = \App\Models\Collection::where('status','=', \App\Models\Collection::STATUS_PUBLISH)
            ->orderBy('created_at','desc')->count();

    $events = \App\Models\Event::where('status','=',\App\Models\Event::STATUS_PUBLISH)
            ->orderBy('created_at','desc')->count();

    $articles = \App\Models\Article::where('status','=',\App\Models\Article::ARTICLE_PUBLISHED)
            ->count();

    $galleries = \App\Models\Gallery::count();

    $online_visitor = \App\Models\Booking::count();

	$offline_visitor = \App\Models\GuestBook::count();

	// $offline_visitor_today = \App\Models\OfflineVisitor::whereDate('created_at', \Carbon\Carbon::today())->count();
	$offline_visitor_today = \App\Models\Visitor::where('date', now()->format('Y-m-d'))->where('type', 'onsite')->first()->amount ?? 0;
	// $online_visitor_today = \App\Models\Booking::whereDate('date', \Carbon\Carbon::today())->count();
	$online_visitor_today = \App\Models\Visitor::where('date', now()->format('Y-m-d'))->where('type', 'online')->first()->amount ?? 0;

	$offline_survei = \App\Models\Survey::count();

    // dd(\Illuminate\Support\Facades\Http::get('https://muspenguestsurvey.invm.info/api/guest')->json()->count);
	Widget::add()->to('before_content')->type('div')->class('row')->content([
		Widget::make()
			->type('progress_white')
			->class('card border-1 text-dark')
			->wrapper(['class' => 'col-md-6'])
			->value($offline_visitor_today)
			->description('Offline Visitor Today <a href="'.route('monthly-visitor-chart.index').'"><i class="nav-icon la la-link"></i></a>')
			->progress(100)
			->progressClass('progress-bar bg-primary')
			->hint('Jumlah Pengunjung Offline Hari Ini: '.date('d M Y')),
		Widget::make()
			->type('progress_white')
			->wrapper(['class' => 'col-md-6'])
			->class('card border-1 text-dark')
			->value($online_visitor_today)
			->description('Online Visitor Today <a href="'.route('monthly-visitor-chart.index').'"><i class="nav-icon la la-link"></i></a>')
			->progress(100)
			->progressClass('progress-bar bg-primary')
			->hint('Jumlah Pengunjung Online Hari Ini: '.date('d M Y')),
	]);
	
	Widget::add()->to('before_content')->type('div')->class('row')->content([
		Widget::make([
			'type'          => 'card',
			'wrapper'       => ['class' => 'col-md-6'],
			'class'         => 'card text-white text-center',
			'content'       => [
				// 'header' => 'Another card title',
				'body'      => '<canvas id="myChart" height="200"></canvas>',
			],
		]),
		Widget::make([
			'type'          => 'card',
			'wrapper'       => ['class' => 'col-md-6'],
			'class'         => 'card text-white text-center',
			'content'       => [
				// 'header' => 'Another card title',
				'body'      => '<canvas id="online-visitor" height="200"></canvas>',
			],
		])
	]);

	Widget::add()->to('after_content')->type('div')->class('row')->content([
		Widget::make()
			->type('div')
			->class('col-md-6')
			->content([
				Widget::make([
					'type'          => 'card',
					'wrapper'       => ['class' => ''],
					'class'         => 'card text-white text-center',
					'content'       => [
						// 'header' => 'Another card title',
						'body'      => '<canvas id="survei-chart" height="200"></canvas>',
					],
				]),
			]),
		Widget::make()
			->type('div')
			->class('col-md-6')
			->content([
				Widget::make()
				->type('div')
				->class('row')
				->content([
					Widget::make()
						->type('progress')
						->wrapper(['class' => 'col-lg-6'])
						->class('card border-0 text-white bg-dark')
						->progressClass('progress-bar')
						->value($online_visitor)
						->description('Total Online visitor.')
						->progress(0)
						->hint('Jumlah Pengunjung Online.'),
					// alternatively, to use widgets as content, we can use the same add() method,
					// but we need to use onlyHere() or remove() at the end
					Widget::add()
						->type('progress')
						->wrapper(['class' => 'col-lg-6'])
						->class('card border-0 text-white bg-dark')
						->progressClass('progress-bar')
						->value($offline_visitor)
						->description('Total Offline visitor.')
						->progress(0)
						->hint('Jumlah Pengunjung Offline.')
						->onlyHere(),
					Widget::add()
						->type('progress')
						->wrapper(['class' => 'col-lg-6'])
						->class('card border-0 text-white bg-dark')
						->progressClass('progress-bar')
						->value($offline_survei)
						->description('Total Offline Survei.')
						->progress(0)
						->hint('Jumlah Survei Offline.')
						->onlyHere(), 
					// alternatively, you can just push the widget to a "hidden" group
					Widget::make()
						->type('progress')
						->wrapper(['class' => 'col-lg-6'])
						->class('card border-0 text-white bg-dark')
						->value($collections)
						->progressClass('progress-bar')
						->description('Collections.')
						->progress(0)
						->hint('Jumlah Koleksi.'),
					// both Widget::make() and Widget::add() accept an array as a parameter
					// if you prefer defining your widgets as arrays
					Widget::make([
						'type' => 'progress',
						'wrapper' => ['class' => 'col-lg-6'],
						'class'=> 'card border-0 text-white bg-dark',
						'progressClass' => 'progress-bar',
						'value' => $events,
						'description' => 'Events.',
						'progress' => 0,
						'hint' => 'Jumlah Events.',
					]),
					Widget::make([
						'type' => 'progress',
						'wrapper' => ['class' => 'col-lg-6'],
						'class'=> 'card border-0 text-white bg-dark',
						'progressClass' => 'progress-bar',
						'value' => $articles,
						'description' => 'Articles.',
						'progress' => 0,
						'hint' => 'Jumlah Artikel.',
					]),
				]),
			]),
		Widget::make()
			->type('reservation_waiting')
			->view('vendor.backpack.base.widgets.reservation_waiting')
			// ->view('vendor.backpack.custom.widget.table')
			->content(null),
		Widget::make()
			->type('reservation_approved')
			->view('vendor.backpack.base.widgets.reservation_approved')
			// ->view('vendor.backpack.custom.widget.table')
			->content(null),
	]);

@endphp