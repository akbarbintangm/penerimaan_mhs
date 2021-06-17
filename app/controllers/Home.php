<?php
    class Home extends Controller {
        // Standard Views
        public function index() {
            $data['HTMLtitle'] = 'Form CRUD';
            $data['mahasiswa'] = $this->model('MHS_model')->getAllMHS();
            
            $this->view('templates/header_top');
            $this->view('templates/header', $data);
            
            $this->view('home/index', $data);
            
            $this->view('templates/footer');
            $this->view('templates/header_bottom');
        }
        // CRUD
        public function viewData($id) {
            $data['HTMLtitle'] = 'View Data - Form CRUD';
            $data['mahasiswa'] = $this->model('MHS_model')->getIdMHS($id);
            
            $this->view('templates/header_top');
            $this->view('templates/header', $data);
            
            $this->view('home/viewData', $data);
            
            $this->view('templates/footer');
            $this->view('templates/header_bottom');
        }
        public function addData() {
            if( $this->model('MHS_Model')->addIdMHS($_POST) > 0) {
                FlashMessage::setFlash('berhasil', 'ditambahkan', 'success');
                header('Location: '. BASEURL . '/home');
                exit;
            }
            else {
                FlashMessage::setFlash('gagal', 'ditambahkan', 'danger');
                header('Location: '. BASEURL . '/home');
                exit;
            }
        }
        public function getInfoData() {
            echo json_encode($this->model('MHS_model')->getIdMHS($_POST['ID_MAHASISWA']));
        }
        public function updateData() {
            if( $this->model('MHS_Model')->updateIdMHS($_POST) > 0) {
                FlashMessage::setFlash('berhasil', 'diubah', 'success');
                header('Location: '. BASEURL . '/home');
                exit;
            }
            else {
                FlashMessage::setFlash('gagal', 'diubah', 'danger');
                header('Location: '. BASEURL . '/home');
                exit;
            }
        }
        public function deleteData($id) {
            if( $this->model('MHS_Model')->deleteIdMHS($id) >= 0) {
                FlashMessage::setFlash('berhasil', 'dihapus', 'success');
                header('Location: '. BASEURL . '/home');
                exit;
            }
            else {
                FlashMessage::setFlash('gagal', 'dihapus', 'danger');
                header('Location: '. BASEURL . '/home');
                exit;
            }
        }
    }
?>