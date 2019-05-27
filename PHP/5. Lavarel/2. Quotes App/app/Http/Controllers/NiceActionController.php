<?php

namespace App\Http\Controllers;

use \Illuminate\http\Request;

class NiceActionController extends Controller{
    public function getNiceAction($action, $name = null){
        return view('actions.'.$action, ['name' => $name]);
    }

    public function postNiceAction(Request $request){

        if(isset($request['action']) && $request['name']){
            if(strlen($request['name']) > 0){
                return view('actions.nice', ['action' => $request['action'], 'name' => $this->transformationName($request['name'])]);
            }
            return redirect()->back();
        }
        return redirect()->back();
    }

    private function transformationName($name){
        $prefix = 'KING ';
        return $prefix . strtoupper($name);
    }
};

