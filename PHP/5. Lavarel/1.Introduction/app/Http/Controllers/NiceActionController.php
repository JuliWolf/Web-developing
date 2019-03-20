<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\NiceAction;
use App\NiceActionLog;
use DB;

class NiceActionController extends Controller{

    public function getHome(){
        $actions = NiceAction::orderBy('niceess', 'desc')->get();
//        $actions = DB::table('nice_actions')->get();

        $logged_actions = NiceActionLog::paginate(5);
        //whereHas('nice_action', function($query){
        //    $query->where('name', '=', 'kiss');
        //})->get();

//        $query = DB::table('nice_action_logs');
//            ->insertGetId([
//                'nice_action_id' => DB::table('nice_actions')->select('id')
//                    ->where('name', 'Hug')->first()->id
//            ]);
        //$query = '';

//        $hug = NiceAction::where('name', '=', 'hug')->first();
//        if($hug){
//            $hug->name = 'Smile';
//            $hug->update();
//        }

//        $kiss = NiceAction::where('name', '=', 'Kiss')->first();
//        if($kiss){
//            $kiss->delete();
//        }
            //->max('id');
            //->where('id', '>', '3')
            //->count();

            //->join('nice_actions', 'nice_action_logs.nice_action_id', '=', 'nice_actions.id')
            //->where('nice_actions.name', '=', 'kiss')
            //->get();

//        При каждом обновлении страницы добавляет в список использованных ссылок "kiss"
//        $nice_action = NiceAction::where('name', 'kiss')->first();
//        $nice_action_log = new NiceActionLog();
//        $nice_action->logged_actions()->save($nice_action_log);



        return view('home', ['actions' => $actions, 'logged_actions'=> $logged_actions]);
    }

    public function getNiceAction($action, $name = null){
        if($name === null){
            $name = 'you';
        }
        $nice_action = NiceAction::where('name', $action)->first();
        $nice_action_log = new NiceActionLog();
        $nice_action->logged_actions()->save($nice_action_log);
        return view('actions.nice',  ['action' => $action,'name' => $name]);
    }

    public function postInsertNiceAction(Request $request) {
        $this->validate($request, [
            'name' => 'required|alpha|unique:nice_actions',
            'niceess' => 'required|numeric',

        ]);
        $action = new NiceAction();
        $action->name = ucfirst(strtolower($request['name']));
        $action->niceess = $request['niceess'];
        $action->save();

        $actions = NiceAction::all();

        if($request->ajax()){
            return response()->json();
        }
        return redirect()->route('home', ['actions' => $actions]);

    }

    private function transformName($name){
        $prefix = 'KING ';
        return $prefix.strtoupper($name);
    }
}

