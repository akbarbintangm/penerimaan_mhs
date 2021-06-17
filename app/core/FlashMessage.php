<?php
    class FlashMessage {
        public static function setFlash($message, $action, $type) {
            $_SESSION['flashmessage'] = [
                'message' => $message,
                'action' => $action,
                'type' => $type
            ];
        }
        
        public static function flashmessage() {
            if( isset($_SESSION['flashmessage'])) {
                echo '
                    <div class="toast bg-'.$_SESSION['flashmessage']['type'].' text-light shadow" role="alert" aria-live="assertive" aria-atomic="true" data-delay="7200">
                        <div class="toast-header bg-'.$_SESSION['flashmessage']['type'].' text-light">
                            <strong class="mr-auto">INFO</strong>
                            <small class="text-light">just now</small>
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body bg-'.$_SESSION['flashmessage']['type'].' text-light">
                            Data '.$_SESSION['flashmessage']['message'].' '.$_SESSION['flashmessage']['action'].'
                        </div>
                    </div>
                ';
                unset($_SESSION['flashmessage']);
            } 
            else {
                
            }
        }
    }
?>