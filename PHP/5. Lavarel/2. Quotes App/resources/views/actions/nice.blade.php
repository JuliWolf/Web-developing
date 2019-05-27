@extends('layouts.master')

@section('content')
    <div class="centered">
        <a href="{{ route('home') }}">Back</a>
        <h1>{{ $action }} {{ $name }}</h1>
    </div>
@endsection