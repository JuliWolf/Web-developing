@extends('layouts.master')
<script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"></script>

@section('content')
    <div class="centered">
        @foreach($actions as $action)
            <a href="{{ route('niceaction', ['action' => lcfirst($action->name)]) }}">{{ $action->name }}</a>
        @endforeach
        <br><br>
        @if (count($errors) > 0)
            <div>
                <ul>
                    @foreach($errors->all() as $error)
                        {{ $error }}
                    @endforeach
                </ul>
            </div>
        @endif
        <form action="{{ route('add_action') }}" method="post">
            <label for="name">Name of Action</label>
            <input type="text" name="name" id="name">
            <label for="niceess">Niceess</label>
            <input type="text" name="niceess" id="niceess">
            <button type="submit" obnclick="send(event)">Do a nice action</button>
            <input type="hidden" value="{{ Session::token() }}" name="_token">
            <br><br><br>
            <ul>
                @foreach($logged_actions as $logged_action)
                    <li>
                        {{ $logged_action->nice_action->name }}
                        @foreach($logged_action->nice_action->categories as $category)
                            {{ $category->name }}
                        @endforeach
                    </li>
                @endforeach
            </ul>
            {{--Следующий код будет читаться как код HTML--}}
            {{--{!! $logged_actions->links() !!}--}}
            @if($logged_actions->lastPage() > 1)
                @for($i = 1; $i <= $logged_actions->lastPage(); $i++)
                    <a href="{{ $logged_actions->url($i) }}">{{$i}}</a>
                @endfor
            @endif
            <script>
                function send(event){
                    event.preventDefault();
                    $.ajax({
                        type: "POST",
                        url: "{{ route('add_action') }}",
                        data: {
                            name: $('#name').val(),
                            niceess: $('#niceess').val(),
                            _token: "{{ Session::token() }}"
                        }
                    });
                }
            </script>
    </div>
@endsection
