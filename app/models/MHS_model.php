<?php
    class MHS_model {
        private $tablePrimary = 'data_mahasiswa';
        private $db;
        
        public function __construct() {
            $this->db = new Database;
        }
        
        public function getAllMHS() {
            $this->db->query('SELECT * FROM ' . $this->tablePrimary);
            return $this->db->resultAll();
        }
        
        public function addIdMHS($data) {
            $this->db->query('INSERT INTO '. $this->tablePrimary .' VALUES (:ID_MAHASISWA, :NPM_MAHASISWA, :NAMA_MAHASISWA, :JURUSAN_MAHASISWA, :SEMESTER_MAHASISWA, :TIPE_MAHASISWA, :TTL_MAHASISWA, :JK_MAHASISWA, :AGAMA_MAHASISWA, :ALAMAT_MAHASISWA, :NHP_MAHASISWA, :EMAIL_MAHASISWA, :FOTO_MAHASISWA, :USERNAME_MAHASISWA, :PASSWORD_MAHASISWA, :STATUS_MAHASISWA, :DO_MAHASISWA)');
            
            $this->db->bind('ID_MAHASISWA', '');
            $this->db->bind('NPM_MAHASISWA', null);
            $this->db->bind('NAMA_MAHASISWA', $data['inputName1']);
            $this->db->bind('JURUSAN_MAHASISWA', $data['inputDepartment1']);
            $this->db->bind('SEMESTER_MAHASISWA', $data['inputSemester1']);
            $this->db->bind('TIPE_MAHASISWA', $data['inputRegistType']);
            $this->db->bind('TTL_MAHASISWA', null);
            $this->db->bind('JK_MAHASISWA', $data['inputGenderType']);
            $this->db->bind('AGAMA_MAHASISWA', $data['inputReligion1']);
            $this->db->bind('ALAMAT_MAHASISWA', $data['inputAddress1']);
            $this->db->bind('NHP_MAHASISWA', $data['inputPhone1']);
            $this->db->bind('EMAIL_MAHASISWA', $data['inputEmail1']);
            $this->db->bind('FOTO_MAHASISWA', null);
            $this->db->bind('USERNAME_MAHASISWA', null);
            $this->db->bind('PASSWORD_MAHASISWA', $data['inputPassword1']);
            $this->db->bind('STATUS_MAHASISWA', 'Mahasiswa Baru');
            $this->db->bind('DO_MAHASISWA', 'Tidak Drop Out');

            $this->db->execute();
            
            return $this->db->rowCount();
        }
        
        public function getIdMHS($id) {
            $this->db->query('SELECT * FROM ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:id');
            $this->db->bind('id', $id);
            return $this->db->resultSingle();
        }
        
        public function updateIdMHS($data) {
            $checkStatues1 = implode(',',$data['checkStatues1']);
        
            $this->db->query('UPDATE ' . $this->tablePrimary .' SET 
            ID_MAHASISWA = :ID_MAHASISWA, 
            NPM_MAHASISWA = :NPM_MAHASISWA, 
            NAMA_MAHASISWA = :NAMA_MAHASISWA, 
            JURUSAN_MAHASISWA = :JURUSAN_MAHASISWA, 
            SEMESTER_MAHASISWA = :SEMESTER_MAHASISWA, 
            TIPE_MAHASISWA = :TIPE_MAHASISWA, 
            TTL_MAHASISWA = :TTL_MAHASISWA, 
            JK_MAHASISWA = :JK_MAHASISWA, 
            AGAMA_MAHASISWA = :AGAMA_MAHASISWA, 
            ALAMAT_MAHASISWA = :ALAMAT_MAHASISWA, 
            NHP_MAHASISWA = :NHP_MAHASISWA, 
            EMAIL_MAHASISWA = :EMAIL_MAHASISWA, 
            FOTO_MAHASISWA = :FOTO_MAHASISWA, 
            USERNAME_MAHASISWA = :USERNAME_MAHASISWA, 
            PASSWORD_MAHASISWA = :PASSWORD_MAHASISWA, 
            STATUS_MAHASISWA = :STATUS_MAHASISWA, 
            DO_MAHASISWA = :DO_MAHASISWA
            WHERE ID_MAHASISWA = :ID_MAHASISWA');
            
            $this->db->bind('ID_MAHASISWA', $data['hiddenID']);
            $this->db->bind('NPM_MAHASISWA', $data['inputNPM1']);
            $this->db->bind('NAMA_MAHASISWA', $data['inputName1']);
            $this->db->bind('JURUSAN_MAHASISWA', $data['inputDepartment1']);
            $this->db->bind('SEMESTER_MAHASISWA', $data['inputSemester1']);
            $this->db->bind('TIPE_MAHASISWA', $data['inputRegistType']);
            $this->db->bind('TTL_MAHASISWA', $data['inputDate1']);
            $this->db->bind('JK_MAHASISWA', $data['inputGenderType']);
            $this->db->bind('AGAMA_MAHASISWA', $data['inputReligion1']);
            $this->db->bind('ALAMAT_MAHASISWA', $data['inputAddress1']);
            $this->db->bind('NHP_MAHASISWA', $data['inputPhone1']);
            $this->db->bind('EMAIL_MAHASISWA', $data['inputEmail1']);
            $this->db->bind('FOTO_MAHASISWA', null);
            $this->db->bind('USERNAME_MAHASISWA', $data['inputUsername1']);
            $this->db->bind('PASSWORD_MAHASISWA', $data['inputPassword1']);
            $this->db->bind('STATUS_MAHASISWA', $checkStatues1);
            $this->db->bind('DO_MAHASISWA', $data['checkDO']);
            
            $this->db->execute();
            
            return $this->db->rowCount();
        }
        
        public function deleteIdMHS($data) {
            $this->db->query('DELETE FROM ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:ID_MAHASISWA');
            $this->db->bind('ID_MAHASISWA', $data['hiddenID']);
            return $this->db->resultSingle();
        }
        public function searchIdMHS() {
            $searchInput = $_POST['inputSearch1'];
            $this->db->query('SELECT * FROM '. $this->tablePrimary .' WHERE NAMA_MAHASISWA LIKE :searchInput OR NPM_MAHASISWA LIKE :searchInput');
            $this->db->bind('searchInput', "%$searchInput%");
            return $this->db->resultAll();
        }   
    }
?>