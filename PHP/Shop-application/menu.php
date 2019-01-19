 <!-- Меню -->
    <? 
    if(!createMenu($menu,false)){
    	trigger_error(ERR_ON_DRAW_MENU, E_USER_ERROR);
    }
    if(!createMenu($subMenu,false)){
        trigger_error(ERR_ON_DRAW_MENU, E_USER_ERROR);
    }
    ?>
    <!-- Меню -->