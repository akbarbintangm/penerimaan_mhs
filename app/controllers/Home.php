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
		public function deleteData() {
			if( $this->model('MHS_Model')->deleteIdMHS($_POST) > 0) {
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
		public function searchData() {
			$data['HTMLtitle'] = 'Search Data - Form CRUD';
			$data['mahasiswa'] = $this->model('MHS_model')->searchIdMHS();
			
			$this->view('templates/header_top');
			$this->view('templates/header', $data);
			
			$this->view('home/index', $data);
			
			$this->view('templates/footer');
			$this->view('templates/header_bottom');
		}
		public function uploadPhotos() {
		
            $output_dir = BASEURL."/uploads";//Path for file upload
            $fileCount = count($_FILES["image"]['name']);
            $RandomNum = time();
            $ImageName = str_replace(' ','-',strtolower($_FILES['image']['name'][$i]));
            $ImageType = $_FILES['image']['type'][$i]; //"image/png", image/jpeg etc.
            $ImageExt = substr($ImageName, strrpos($ImageName, '.'));
            $ImageExt = str_replace('.','',$ImageExt);
            $ImageName = preg_replace("/\.[^.\s]{3,4}$/", "", $ImageName);
            $NewImageName = $ImageName.'-'.$RandomNum.'.'.$ImageExt;
            $ret[$NewImageName]= $output_dir.$NewImageName;
            move_uploaded_file($_FILES["image"]["tmp_name"][$i],$output_dir."/".$NewImageName );
            $data = array('image' =>$NewImageName);
            
            $this->model->file_details($data);
            echo "Image Uploaded Successfully";
            $this->view->render('home/index', $data);
        }
	}
?>