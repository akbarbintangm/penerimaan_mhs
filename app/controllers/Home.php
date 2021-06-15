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
            $data['HTMLtitle'] = 'Add Data - Form CRUD';
            $data['mahasiswa'] = $this->model('MHS_model')->getAllMHS();
            
            $this->view('templates/header_top');
            $this->view('templates/header', $data);
            
            $this->view('home/addData', $data);
            
            $this->view('templates/footer');
            $this->view('templates/header_bottom');
        }
        public function updateData() {
            $data['HTMLtitle'] = 'Update Data - Form CRUD';
            $data['mahasiswa'] = $this->model('MHS_model')->getAllMHS();
            
            $this->view('templates/header_top');
            $this->view('templates/header', $data);
            
            $this->view('home/updateData', $data);
            
            $this->view('templates/footer');
            $this->view('templates/header_bottom');
        }
        public function deleteData($id) {
            $data['HTMLtitle'] = 'Delete Data - Form CRUD';
            $data['mahasiswa'] = $this->model('MHS_model')->deleteIdMHS($id);
            
            $this->view('templates/header_top');
            $this->view('templates/header', $data);
            
            $this->view('home/deleteData', $data);
            
            $this->view('templates/footer');
            $this->view('templates/header_bottom');
        }
    }
?>