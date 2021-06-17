<?php
    if( !session_id()) {
        session_start();
    }
    else {
        session_destroy();
    }
    require_once "../app/init.php";
    require_once "../app/config/config.php";
    $app = new App;
?>