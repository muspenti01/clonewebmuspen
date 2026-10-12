<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        
        @include('vendor.elfinder.common_scripts')
        @include('vendor.elfinder.common_styles')

        <!-- elFinder initialization (REQUIRED) -->
        <script type="text/javascript" charset="utf-8">
            // Helper function to get parameters from the query string.
            function getUrlParam(paramName) {
                var reParam = new RegExp('(?:[\?&]|&amp;)' + paramName + '=([^&]+)', 'i') ;
                var match = window.location.search.match(reParam) ;

                return (match && match.length > 1) ? match[1] : '' ;
            }

            $().ready(function() {
                var funcNum = getUrlParam('CKEditorFuncNum');

                var elf = $('#elfinder').elfinder({
                    // set your elFinder options here
                    @if($locale)
                        lang: '{{ $locale }}', // locale
                    @endif
                    customData: { 
                        _token: '{{ csrf_token() }}'
                    },
                    url: '{{ route("elfinder.connector") }}',  // connector URL
                    soundPath: '{{ asset($dir.'/sounds') }}',
                    getFileCallback : function(file) {
                        if (Array.isArray(file)) {
                            var editorName = getUrlParam('CKEditor');
                            if (editorName && window.opener.CKEDITOR && window.opener.CKEDITOR.instances[editorName]) {
                                var html = '';
                                file.forEach(function(f) {
                                    var fUrl = f.url || (typeof f === 'string' ? f : '');
                                    if (fUrl) {
                                        html += '<p><img src="' + fUrl + '" alt="" /></p>';
                                    }
                                });
                                window.opener.CKEDITOR.instances[editorName].insertHtml(html);
                            } else if (file.length > 0) {
                                var firstUrl = file[0].url || (typeof file[0] === 'string' ? file[0] : '');
                                window.opener.CKEDITOR.tools.callFunction(funcNum, firstUrl);
                            }
                        } else {
                            var fileUrl = file.url || (typeof file === 'string' ? file : '');
                            window.opener.CKEDITOR.tools.callFunction(funcNum, fileUrl);
                        }
                        window.close();
                    }
                }).elfinder('instance');
            });
        </script>
    </head>
    <body>

        <!-- Element where elFinder will be created (REQUIRED) -->
        <div id="elfinder"></div>

    </body>
</html>
