<?php

use Illuminate\Database\Seeder;
use App\NiceAction;

class NiceActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category1 = new Category();
        $category1->name = 'Cat 1';
        $category1->save();

        $category2 = new Category();
        $category2->name = 'Cat 2';
        $category2->save();

        $nice_action = new NiceAction();
        $nice_action->name = 'Greet';
        $nice_action->niceess = 3;
        $nice_action->save();

        $category1->nice_actions()->attach($nice_action);
        $category2->nice_actions()->attach($nice_action);

        $nice_action = new NiceAction();
        $nice_action->name = 'Hug';
        $nice_action->niceess = 6;
        $nice_action->save();

        $category1->nice_actions()->attach($nice_action);

        $nice_action = new NiceAction();
        $nice_action->name = 'Kiss';
        $nice_action->niceess = 12;
        $nice_action->save();

        $category2->nice_actions()->attach($nice_action);

        $nice_action = new NiceAction();
        $nice_action->name = 'Wave';
        $nice_action->niceess = 2;
        $nice_action->save();

        $category1->nice_actions()->attach($nice_action);
        $category2->nice_actions()->attach($nice_action);
    }
}