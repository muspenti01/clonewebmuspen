
@role('member')
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('article') }}"><i class="nav-icon la la-newspaper-o"></i>
        Articles</a></li>
{{-- <li class='nav-item'><a class='nav-link' href='{{ backpack_url('report') }}'><i class='nav-icon la la-question'></i>
        Reports</a></li> --}}
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('guest-book') }}'><i class='nav-icon la la-users'></i> Guest books</a></li>

@php
$user_admin = \App\Models\User::whereRelation('roles', 'name', 'admin')->get();
$default_number_admin = '82113287777';
@endphp
@foreach ($user_admin as $admin)
<li class="nav-item">
        <div class="nav-link">{{ $admin->name }}<br>{{ '+62'.$default_number_admin }}</div>
</li>
@endforeach
@else

<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i
            class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('team') }}'><i class='nav-icon la la-users'></i>
        Teams</a></li>

<li class='nav-item'><a class='nav-link' href='{{ backpack_url('gallery') }}'><i class='nav-icon la la-image'></i>
        Galleries</a></li>
<!-- Users, Roles, Permissions -->
<li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-la la-anchor"></i> Collections</a>
        <ul class="nav-dropdown-items">
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('collection') }}'><i
                        class='nav-icon la la-anchor'></i> Collections</a></li>
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('collection-category') }}'><i class='nav-icon la la-tag'></i> Categories</a></li>
        </ul>
    </li>
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-file-text"></i> CMS</a>
    <ul class="nav-dropdown-items">
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('cms-application') }}'><i class='nav-icon la la-windows'></i> Application</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('cms-category') }}'><i class='nav-icon la la-list'></i> Categories</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('cms-location') }}'><i class='nav-icon la la-map-marker'></i> Location</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('cms-tag') }}'><i class='nav-icon la la-tags'></i> Tags</a></li>
        {{-- <li class='nav-item'><a class='nav-link' href='{{ backpack_url('cms-app-content') }}'><i class='nav-icon la la-list-alt'></i> Application contents</a></li> --}}
    </ul>
</li>

<li class='nav-item'><a class='nav-link' href='{{ backpack_url('partner') }}'><i
            class='nav-icon la la-handshake'></i> Partners</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('event') }}'><i class='nav-icon la la-people-carry'></i>
        Events</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('report') }}'><i class='nav-icon la la-flag'></i>
        Reports</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('update') }}'><i class='nav-icon la la-retweet'></i>Muspen Updates</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('tv-link') }}'><i class='nav-icon la la-tv'></i> TV links</a></li>

<li class='nav-item'><a class='nav-link' href='{{ backpack_url('complaint') }}'><i class='nav-icon la la-comment-medical'></i> Complaints</a></li>

<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i> Visitors</a>
    <ul class="nav-dropdown-items">
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('onsite-visitor') }}'><i class='nav-icon la la-user'></i> Onsite visitors</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('online-visitor') }}'><i class='nav-icon la la-user'></i> Online visitors</a></li>
    </ul>
</li>
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i> Reservasi</a>
    <ul class="nav-dropdown-items">
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('reservation-approval') }}'><i class='nav-icon la la-check-double'></i> Approval</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('booking') }}'><i class='nav-icon la la-book-open'></i> Event</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('booking-place') }}'><i class='nav-icon la la-book'></i> Terjadwal</a></li>
    </ul>
</li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('offline-visitor') }}'><i class='nav-icon la la-user-friends'></i> Guest book</a></li>
{{-- <li class='nav-item'><a class='nav-link' href='{{ backpack_url('offline-survey') }}'><i class='nav-icon la la-poll'></i> Survey data</a></li> --}}
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('api-survey') }}'><i class='nav-icon la la-poll'></i> Survey data</a></li>
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i> Forum</a>
    <ul class="nav-dropdown-items">
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('approval') }}'><i class='nav-icon la la-check-double'></i>
                Approvals</a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('category') }}"><i class="nav-icon la la-list"></i>
                Categories</a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('tag') }}"><i class="nav-icon la la-tag"></i>
                Tags</a></li>

        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('article') }}"><i
                    class="nav-icon la la-newspaper-o"></i> Articles</a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('comment') }}'><i class='nav-icon la la-comment'></i> Comments</a></li>

    </ul>
</li>

<!-- Users, Roles, Permissions -->
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-desktop"></i> System</a>
    <ul class="nav-dropdown-items">
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i
                    class="nav-icon la la-user"></i> <span>Users</span></a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('role') }}"><i
                    class="nav-icon la la-id-badge"></i> <span>Roles</span></a></li>
        <li class="nav-item"><a class="nav-link" href="{{ backpack_url('permission') }}"><i
                    class="nav-icon la la-key"></i> <span>Permissions</span></a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('log') }}'><i class='nav-icon la la-terminal'></i>
                Logs</a></li>
    </ul>
</li>
<!-- Users, Roles, Permissions -->
<li class="nav-item nav-dropdown">
    <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-cog"></i> Settings</a>
    <ul class="nav-dropdown-items">

        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('setting') }}'><i class='nav-icon la la-info'></i>
                <span>Info Perusahaan</span></a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('social-media') }}'><i class='nav-icon la la-thumbs-up'></i>
                <span>Social Media</span></a></li>
        <li class='nav-item'><a class='nav-link' href='{{ backpack_url('web-info') }}'><i class='nav-icon la la-info-circle'></i>
                <span>Web Info</span></a></li>
    </ul>
</li>
@endrole

{{-- <li class="nav-item"><a class="nav-link" href="{{ backpack_url('elfinder') }}"><i class="nav-icon la la-files-o"></i> <span>{{ trans('backpack::crud.file_manager') }}</span></a></li> --}}

{{-- <li class='nav-item'><a class='nav-link' href='{{ backpack_url('monthly-visitor-chart') }}'><i class='nav-icon la la-question'></i> Monthly visitor charts</a></li> --}}