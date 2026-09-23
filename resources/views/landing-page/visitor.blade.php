@extends('landing-page.layout')

@section('title','Museum Penerangan RI')

@section('main-content')
<div id="waButton"></div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>Visitor</h2>

            </div>
        </div>
        <div class="divider"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="banner-shape1"><img src="{{asset('assets/img/shape/shape9.png')}}" alt="image"></div>
    </div>
    <!-- End Page Title Area -->

    <div class="container py-4 g-3">
        <div class="row">
            <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                {{-- <div class="h5 font-weight-bold">Guest Book Data</div> --}}
                <div class="card">
                    <div class="card-body">
                        <canvas id="onsite_visitor" height="200"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                {{-- <div class="h5 font-weight-bold">Guest Book Data</div> --}}
                <div class="card">
                    <div class="card-body">
                        <canvas id="online_visitor" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('custom-js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.1.0/chartjs-plugin-datalabels.min.js" integrity="sha512-Tfw6etYMUhL4RTki37niav99C6OHwMDB2iBT5S5piyHO+ltK2YX8Hjy9TXxhE1Gm/TmAV0uaykSpnHKFIAif/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>

    var chartOnsiteVisitorData = {
        'labels': JSON.parse('@json($chartOnsiteVisitorData->map->date)'),
        'data': JSON.parse('@json($chartOnsiteVisitorData->map->amount)'),
    }
    var chartOnlineVisitorData = {
        'labels': JSON.parse('@json($chartOnlineVisitorData->map->date)'),
        'data': JSON.parse('@json($chartOnlineVisitorData->map->amount)'),
    }

    const ctx = document.getElementById('onsite_visitor').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartOnsiteVisitorData.labels,
            datasets: [{
                label: 'Visitor',
                data: chartOnsiteVisitorData.data,
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
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Visitor Onsite Recent Month',
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

    const ctx2 = document.getElementById('online_visitor').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: chartOnlineVisitorData.labels,
            datasets: [{
                label: 'Visitor',
                data: chartOnlineVisitorData.data,
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
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Visitor Online Recent Month',
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
@endsection
