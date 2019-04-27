<!doctype html>
<html lang="en">
<head>
    <title>Admin area</title>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script
            src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ URL::asset('src/css/admin.css') }}">
    @yield('styles')
</head>
<body>
    @include('includes.admin-header')
    @yield('content')
    <script>
        var baseUrl = "{{ URL::to('/') }}";
    </script>
    @yield('scripts')


</body>
</html>
