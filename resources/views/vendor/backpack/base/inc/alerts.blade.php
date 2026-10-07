{{-- Bootstrap Notifications using Prologue Alerts & Noty --}}
<script type="text/javascript">
  jQuery(document).ready(function($) {
    @foreach (Alert::getMessages() as $type => $messages)
        @foreach ($messages as $message)
            @if(!str_contains(strtolower($message), 'unlicensed'))
                new Noty({
                    type: "{{ $type }}",
                    text: "{!! addslashes($message) !!}"
                }).show();
            @endif
        @endforeach
    @endforeach
  });
</script>
