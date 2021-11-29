-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: mahasiswa_std
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `data_mahasiswa`
--

DROP TABLE IF EXISTS `data_mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_mahasiswa` (
  `ID_MAHASISWA` int(100) NOT NULL AUTO_INCREMENT,
  `NPM_MAHASISWA` int(100) DEFAULT NULL,
  `NAMA_MAHASISWA` varchar(100) DEFAULT NULL,
  `JURUSAN_MAHASISWA` varchar(100) DEFAULT NULL,
  `SEMESTER_MAHASISWA` int(100) DEFAULT NULL,
  `TIPE_MAHASISWA` varchar(100) DEFAULT NULL,
  `TTL_MAHASISWA` date DEFAULT NULL,
  `JK_MAHASISWA` varchar(100) DEFAULT NULL,
  `AGAMA_MAHASISWA` varchar(100) DEFAULT NULL,
  `ALAMAT_MAHASISWA` text DEFAULT NULL,
  `NHP_MAHASISWA` int(100) DEFAULT NULL,
  `EMAIL_MAHASISWA` varchar(100) DEFAULT NULL,
  `FOTO_MAHASISWA` text DEFAULT NULL,
  `USERNAME_MAHASISWA` varchar(100) DEFAULT NULL,
  `PASSWORD_MAHASISWA` varchar(100) DEFAULT NULL,
  `STATUS_MAHASISWA` varchar(100) DEFAULT NULL,
  `DO_MAHASISWA` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_MAHASISWA`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_mahasiswa`
--

LOCK TABLES `data_mahasiswa` WRITE;
/*!40000 ALTER TABLE `data_mahasiswa` DISABLE KEYS */;
INSERT INTO `data_mahasiswa` VALUES (2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Mahasiswa Baru','Tidak Drop Out'),(3,NULL,'1','Sistem Komputer',5,'Reguler',NULL,'Pria','Islam','PERUM BCF SEKAWAN MOLEK 1/D 28, SIDOARJO, JAWA TIMUR, 61213',2147483647,'akbarbintangmahendra@gmail.com',NULL,NULL,'123','Mahasiswa Baru','Tidak Drop Out'),(4,NULL,'Akbar Bintang M','Sistem Informasi',5,'Reguler',NULL,'Pria','Islam','PERUM BCF SEKAWAN MOLEK 1/D 28, SIDOARJO, JAWA TIMUR, 61213',2147483647,'akbarbintangmahendra@gmail.com',NULL,NULL,'akbartuf1','Mahasiswa Baru','Tidak Drop Out');
/*!40000 ALTER TABLE `data_mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-29 23:40:44
