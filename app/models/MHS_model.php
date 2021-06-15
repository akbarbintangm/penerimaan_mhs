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
            $this->db->query('SELECT * FROM ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:id');
            $this->db->bind('id', $id);
            return $this->db->resultSingle();
        }
        
        public function getIdMHS($id) {
            $this->db->query('SELECT * FROM ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:id');
            $this->db->bind('id', $id);
            return $this->db->resultSingle();
        }
        
        public function updateIdMHS($id) {
            $this->db->query('UPDATE data_mahasiswa SET ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:id');
            $this->db->bind('id', $id);
            return $this->db->resultSingle();
        }
        
        public function deleteIdMHS($id) {
            $this->db->query('DELETE FROM ' . $this->tablePrimary .' WHERE ID_MAHASISWA=:id');
            $this->db->bind('id', $id);
            return $this->db->resultSingle();
        }
    }
?>