CREATE DATABASE  IF NOT EXISTS `accounting` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `accounting`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: accounting
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_firms`
--

DROP TABLE IF EXISTS `tbl_firms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_firms` (
  `firm_id` int NOT NULL AUTO_INCREMENT,
  `firm_name` varchar(255) NOT NULL,
  `firm_email` varchar(45) DEFAULT NULL,
  `firm_gstno` varchar(255) NOT NULL,
  `firm_address` varchar(255) NOT NULL,
  `firm_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `firm_created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `firm_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`firm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_firms`
--

LOCK TABLES `tbl_firms` WRITE;
/*!40000 ALTER TABLE `tbl_firms` DISABLE KEYS */;
INSERT INTO `tbl_firms` VALUES (8,'Tekhno Space','tekhnospace@gmail.com','hvjh65','Hinjewadi Pune','Active','2024-06-06 11:33:31','2024-06-06 11:33:31'),(9,'Tekhno gg','tekhnospacee@gmail.com','hvjh65','Hinjewadi Pune','Active','2024-06-06 11:36:32','2024-06-06 11:36:32'),(10,'Tekhno gg','tekhnogg55@gmail.com','KIKIKIKI153','Aurangabad','Active','2024-06-06 11:37:52','2024-06-18 12:51:03'),(12,'SayaliFirm Pvt ','firmsayali22@gmail.com','fffefr51','dfsf','Active','2024-06-11 12:50:43','2024-06-11 12:50:43'),(14,'SayaliFirm Pvt ','firmsayali33@gmail.com','ascdsvthbg','gjndgset','Active','2024-06-12 06:37:46','2024-06-12 06:37:46'),(16,'dscdscds','yashfirm22sc@gmail.com','ascas','asdca','Active','2024-06-12 06:59:42','2024-06-12 06:59:42'),(19,'Kajal Fashion Pvt Ltd','kajalfashion@gmail.com','HVHJ1531315','Wardha','Active','2024-06-12 10:41:13','2024-06-21 10:23:13'),(20,'Yashhhh pvt ltd','yashfirm22323@gmail.com','dvcxdv','vfv','Active','2024-06-12 10:47:00','2024-06-12 10:47:00'),(21,'Yash Textiles Pvt Ltd','yash_textiles@gmail.com','KBJKKBJ23','Pimpri, Pune','Active','2024-06-12 10:47:46','2024-06-21 10:25:06'),(23,'Tekhno Space Pvt. Ltd.','tekhnospace66@gmail.com','YFKJB154155','Pune','Active','2024-06-17 10:07:51','2024-06-17 10:07:51'),(24,'India Oil Solutions Pvt Ltd','indiaoil@gmail.com','YGYGV131131','Mumbai','Active','2024-06-17 10:09:06','2024-06-17 10:09:06'),(25,'Sujit Manufacturing Pvt Ltd','sm@gmail.com','sdvdsdvd','sfvsdd','Active','2024-06-17 10:14:49','2024-06-17 10:14:49'),(26,'Payal Steels Pvt Ltd','payalsteel@gmail.com','FNJJB545641','Pune','Active','2024-06-17 11:28:37','2024-06-17 11:28:37'),(31,'Saya Manufacturing Pvt Ltd','sayamanu@gmail.com','BBJKBJB3515313','Dhule','Active','2024-06-19 12:50:24','2024-06-21 10:25:27'),(33,'Abhinav Foods Pvt Ltd','abhinavfoods@gmail.com','BKJBJJ256135','Deccan, Mumbai','Active','2024-06-21 10:26:24','2024-06-21 10:26:24'),(34,'Balaji Infrastructure Pvt. Ltd.','balajiinfra@gmail.com','YGIKBJ135','Washim','Active','2024-06-26 06:17:59','2024-06-26 06:17:59'),(35,'H2M Movieplex Pvt. Ltd.','h2mmo@gmail.com','ETJND1563','H2M Theatres, Washim','Active','2024-06-26 06:32:18','2024-06-26 06:32:18'),(36,'Tekhnologia Innovations India Pvt Ltd','tekhnologiaindia@gmail.com','HGLJ13511','Bandal Complex, Pune','Active','2024-06-26 06:36:32','2024-06-26 06:36:32'),(37,'Happy Faces The Concept School','happyfaces@gmail.com','IJOIHN468513','Happy Faces Campus, Washim','Active','2024-06-26 06:48:44','2024-06-26 06:48:44'),(44,'chota bheem','chotabheem@gmail.com','215313','vashim','Active','2024-07-04 11:06:30','2024-07-04 11:06:30'),(45,'Lakhpati Pvt Ltd','lakhpati@gmail.com','IUYV161','Pune Kothrud','Active','2024-07-08 10:55:42','2024-07-08 10:55:42'),(46,'Kala Jamun Pvt Ltd','kalajamun@gmail.com','IHIO1313J','Wakad wala Pune','Active','2024-07-09 10:37:59','2024-07-09 10:37:59'),(47,'Hara Jamun Pvt Ltd','harajamun@gmail.com','DRCGHJV65153','Wakad wala Pune','Active','2024-07-09 10:38:35','2024-07-09 10:38:35'),(49,'Rajaram Firm Pvt Ltd','rfirm@gmail.com','DRYDYC1321','Dhule','Active','2024-07-11 07:09:36','2024-07-11 07:09:36'),(50,'Siyaram Firm Pvt Ltd','siyafirm@gmail.com','OIOPI153132','Dhule','Active','2024-07-11 07:10:01','2024-07-11 07:10:01'),(52,'Lakshman Firm Pvt Ltd','lakshfirm@gmail.com','IUIOJK51322','Dhule','Active','2024-07-11 07:11:25','2024-07-11 07:11:25'),(53,'sayali patil firm','sayali12@gmail.com','3242344','pune','Active','2024-07-11 07:23:06','2024-07-11 07:23:06'),(54,'kaju badam firm','kajubadam@gmail.com','43746334','mumbai','Active','2024-07-11 07:32:13','2024-07-11 07:32:13'),(55,'Dada Bhai','dadab@gmail.com','POIGYJ513121','Dhule','Active','2024-07-11 07:55:40','2024-07-11 07:55:40'),(58,'Happy face firm','happyface@gmail.com','3222343','pune','Active','2024-07-11 12:53:00','2024-07-11 12:53:00'),(59,'Sayali Big Firm ','sayalim@gmail.com','43534534','pune','Active','2024-07-11 12:53:45','2024-07-11 12:53:45'),(60,'SayaliBigFirm Pvt Ltd','sayalifirm@gmail.com','324234242435544','Pune','Active','2024-07-12 05:47:32','2024-07-12 05:47:32'),(61,'Danish 1','danish1@gmail.com','324234233','vashim','Active','2024-07-12 06:11:28','2024-07-12 06:11:28'),(62,'Vada Sambhar Pvt Ltd','vadasambhar@gmail.com','IYGVV265646dddd','Wade, Washim','Active','2024-07-12 10:21:39','2024-07-18 07:35:22'),(64,'ghgfg','dfdsf@gmail.com','dfef','Washim','Active','2024-07-18 11:10:14','2024-07-18 11:10:14'),(65,'H2m','tekh@gmail.com','sdfdsafdas132341324','Mumbai','Active','2024-07-19 05:24:59','2024-07-19 05:30:33'),(67,'Tekhnologia','tekhnologia@gmail.com','ufsdgh27345287','Aundh','Active','2024-07-19 05:42:53','2024-07-19 05:42:53'),(69,'Happy Faces','happyfaces','dsfjbgsu76548723','Pune','Active','2024-07-19 06:51:19','2024-07-19 06:51:19'),(71,'Shagun Saree','shagunsaree@gmail.com','sdffkghisu785689','Washim','Active','2024-07-19 06:52:31','2024-07-19 06:52:31');
/*!40000 ALTER TABLE `tbl_firms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_general_ledgers`
--

DROP TABLE IF EXISTS `tbl_general_ledgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_general_ledgers` (
  `gl_id` int NOT NULL AUTO_INCREMENT,
  `firm_id` int DEFAULT NULL,
  `gl_name` varchar(255) NOT NULL,
  `gl_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `gl_created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `gl_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `balance` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`gl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_general_ledgers`
--

LOCK TABLES `tbl_general_ledgers` WRITE;
/*!40000 ALTER TABLE `tbl_general_ledgers` DISABLE KEYS */;
INSERT INTO `tbl_general_ledgers` VALUES (1,8,'Cash','Active','2024-06-07 06:34:59','2024-06-14 11:09:18',-2500.00),(2,10,'Cash','Active','2024-06-07 06:46:44','2024-06-14 11:09:18',2500.00),(3,8,'Bank','Active','2024-06-07 06:47:03','2024-06-07 06:47:03',0.00),(4,10,'GL1','Active','2024-06-07 06:47:09','2024-06-12 09:59:56',0.00),(5,9,'Bank','Active','2024-06-07 06:47:17','2024-06-07 06:47:17',0.00),(28,21,'Cash','Active','2024-06-15 06:56:58','2024-06-24 11:34:44',5500.00),(29,21,'Bank','Active','2024-06-15 06:57:03','2024-07-19 13:39:35',-630048.00),(30,21,'Private','Active','2024-06-15 06:57:07','2024-07-19 14:02:12',-65700.00),(31,22,'Dada GL1','Active','2024-06-15 06:57:20','2024-06-17 07:38:55',-150.00),(32,22,'Dada GL2','Active','2024-06-15 06:57:27','2024-06-17 07:39:07',4000.00),(33,22,'Dada GL3','Active','2024-06-15 06:57:35','2024-06-15 10:44:06',700.00),(34,23,'Cash','Active','2024-06-17 10:09:24','2024-06-17 10:12:26',-2000.00),(35,23,'Salary','Active','2024-06-17 10:09:35','2024-06-17 10:09:35',0.00),(36,23,'Bank','Active','2024-06-17 10:11:03','2024-06-17 10:11:03',0.00),(37,24,'Cash','Active','2024-06-17 10:11:16','2024-06-17 10:13:22',1200.00),(38,24,'Salary','Active','2024-06-17 10:11:27','2024-06-17 10:17:08',3300.00),(39,24,'Private','Active','2024-06-17 10:11:41','2024-06-17 10:13:36',500.00),(40,25,'Salaries','Active','2024-06-17 10:15:15','2024-06-17 11:30:54',15000.00),(41,25,'Private Account','Active','2024-06-17 10:15:42','2024-06-17 10:17:28',6000.00),(42,25,'Maintenance Account','Active','2024-06-17 10:16:04','2024-06-17 10:17:28',-9000.00),(43,26,'Cash 1','Active','2024-06-17 11:29:16','2024-06-17 11:31:38',-20000.00),(44,26,'Salary','Active','2024-06-17 11:29:37','2024-06-17 11:31:38',5000.00),(45,30,'PLastics GL1','Active','2024-06-19 12:51:24','2024-06-19 12:51:24',0.00),(46,30,'PLastics GL2','Active','2024-06-19 12:51:32','2024-06-19 12:51:32',0.00),(47,31,'Cash','Active','2024-06-19 12:51:51','2024-07-05 06:08:08',-500.00),(48,32,'Darinda GL1','Active','2024-06-19 12:52:20','2024-06-19 12:52:20',0.00),(49,32,'Darinda GL2','Active','2024-06-19 12:52:25','2024-06-19 12:52:25',0.00),(50,19,'Cash','Active','2024-06-21 10:27:14','2024-07-18 10:14:56',63400.00),(51,19,'Bank','Active','2024-06-21 10:27:22','2024-07-18 09:50:21',7840.00),(52,31,'Bank','Active','2024-06-21 10:27:34','2024-07-08 10:53:30',-4444.00),(53,31,'Private','Active','2024-06-21 10:27:46','2024-07-19 13:32:16',113447.00),(54,33,'Cash','Active','2024-06-21 10:27:53','2024-07-18 09:50:21',34950.00),(55,33,'Bank','Active','2024-06-21 10:28:02','2024-07-19 13:39:35',651475.00),(56,34,'Cash','Active','2024-06-26 06:36:45','2024-07-18 11:20:14',-330000.00),(57,34,'Bank','Active','2024-06-26 06:37:20','2024-07-18 11:19:30',744237.00),(58,35,'Cash','Active','2024-06-26 06:37:31','2024-06-26 06:56:01',750000.00),(59,35,'Bank','Active','2024-06-26 06:37:42','2024-07-18 11:20:14',965000.00),(60,36,'Cash','Active','2024-06-26 06:37:52','2024-06-26 10:11:10',1590000.00),(61,36,'Bank','Active','2024-06-26 06:37:57','2024-07-18 11:19:30',345763.00),(62,37,'Cash','Active','2024-06-26 06:48:55','2024-06-26 08:04:56',850000.00),(63,37,'Bank','Active','2024-06-26 06:49:01','2024-06-26 08:46:34',1000000.00),(64,45,'Bank','Active','2024-07-08 10:56:03','2024-07-08 10:56:03',0.00),(66,45,'GPAY','Active','2024-07-08 10:56:31','2024-07-19 14:01:03',110645.00),(67,46,'Cash','Active','2024-07-09 10:39:18','2024-07-09 10:40:31',-80000.00),(68,46,'Bank Account','Active','2024-07-09 10:39:38','2024-07-11 13:22:50',-11450.00),(69,47,'Cash','Active','2024-07-09 10:39:46','2024-07-19 14:00:36',-70115.00),(71,48,'Cash','Active','2024-07-11 05:46:09','2024-07-11 05:46:09',0.00),(72,48,'Bank','Active','2024-07-11 05:46:15','2024-07-11 09:55:05',5600.00),(75,49,'Cash','Active','2024-07-11 07:11:39','2024-07-11 07:13:06',-5000.00),(76,49,'Bank','Active','2024-07-11 07:11:47','2024-07-11 07:14:20',-75000.00),(77,49,'Phonepe','Active','2024-07-11 07:12:03','2024-07-11 07:14:44',-9000.00),(78,50,'Gpay','Active','2024-07-11 07:12:10','2024-07-11 07:14:44',9000.00),(79,50,'Cash','Active','2024-07-11 07:12:18','2024-07-11 07:16:33',1000.00),(80,52,'Bank','Active','2024-07-11 07:12:28','2024-07-11 07:12:28',0.00),(81,52,'GPAY','Active','2024-07-11 07:12:32','2024-07-11 07:16:33',79000.00),(82,53,'cash','Active','2024-07-11 07:32:39','2024-07-11 07:32:39',0.00),(83,53,'goggle pay','Active','2024-07-11 07:32:46','2024-07-11 07:32:46',0.00),(84,53,'ATM','Active','2024-07-11 07:32:51','2024-07-11 07:32:51',0.00),(85,54,'goggle pay','Active','2024-07-11 07:32:59','2024-07-11 07:32:59',0.00),(86,54,'phone pay','Active','2024-07-11 07:33:06','2024-07-11 07:33:06',0.00),(87,56,'Bank','Active','2024-07-11 09:52:57','2024-07-11 10:56:32',-5300.00),(88,57,'Cash','Active','2024-07-11 10:49:17','2024-07-11 10:56:32',-300.00),(89,58,'goggle pay','Active','2024-07-11 12:53:58','2024-07-11 12:53:58',0.00),(90,58,'phone pay','Active','2024-07-11 12:54:09','2024-07-11 12:54:09',0.00),(91,58,'cash','Active','2024-07-11 12:54:15','2024-07-11 12:54:15',0.00),(92,59,'goggle pay','Active','2024-07-11 12:54:23','2024-07-11 12:54:23',0.00),(93,59,'phone pay','Active','2024-07-11 12:54:31','2024-07-11 12:54:31',0.00),(94,59,'cash','Active','2024-07-11 12:54:35','2024-07-11 12:54:35',0.00),(95,60,'goggle pay','Active','2024-07-12 06:14:00','2024-07-12 09:39:39',-900.00),(96,60,'phone pay','Active','2024-07-12 06:14:10','2024-07-12 09:39:39',-100.00),(97,61,'goggle pay','Active','2024-07-12 06:14:19','2024-07-12 09:25:56',1000.00),(98,61,'phone pay','Active','2024-07-12 06:14:24','2024-07-12 06:14:24',0.00),(99,61,'cash','Active','2024-07-12 06:14:30','2024-07-12 06:14:30',0.00),(101,31,'trdrtcghsss','Active','2024-07-18 07:07:30','2024-07-18 07:35:06',0.00),(102,64,'GPAY','Active','2024-07-18 11:10:40','2024-07-18 11:11:12',85000.00),(103,36,'Private','Active','2024-07-18 11:17:54','2024-07-18 11:17:54',0.00),(104,36,'Salaries','Active','2024-07-18 11:18:18','2024-07-18 11:18:18',0.00),(105,65,'Phone pe','Active','2024-07-19 05:46:47','2024-07-19 13:50:58',-100000.00),(106,65,'Google pay','Active','2024-07-19 05:46:56','2024-07-19 06:32:39',-10000.00),(107,65,'Net Banking','Active','2024-07-19 05:47:05','2024-07-19 13:31:03',-60000.00),(108,65,'UPI','Active','2024-07-19 05:47:42','2024-07-19 13:50:32',-60000.00),(109,65,'234253','Active','2024-07-19 05:53:29','2024-07-19 05:53:29',0.00),(110,67,'Cash','Active','2024-07-19 06:29:33','2024-07-19 06:32:39',10000.00),(111,67,'UPI','Active','2024-07-19 06:29:38','2024-07-19 06:30:41',100000.00),(112,19,'Kartik','Active','2024-07-19 06:34:27','2024-07-19 13:29:58',767.00),(113,65,'Aditya','Active','2024-07-19 06:36:33','2024-07-19 06:36:33',0.00),(114,69,'Phone pe','Active','2024-07-19 06:53:07','2024-07-19 06:53:07',0.00),(115,69,'Google pay','Active','2024-07-19 06:53:34','2024-07-19 13:50:58',-10000.00),(116,69,'Cash','Active','2024-07-19 06:53:42','2024-07-19 13:31:58',40000.00),(117,69,'Net Banking','Active','2024-07-19 06:53:49','2024-07-19 13:50:32',0.00),(118,70,'Cash','Active','2024-07-19 06:54:05','2024-07-19 06:54:05',0.00),(119,70,'UPI ID','Active','2024-07-19 06:54:42','2024-07-19 06:57:00',10000.00),(120,70,'Cheque Book','Active','2024-07-19 06:55:03','2024-07-19 06:55:03',0.00),(121,71,'UPI ID','Active','2024-07-19 06:59:57','2024-07-19 13:31:03',80000.00),(122,33,'Aditya','Active','2024-07-19 07:30:21','2024-07-19 14:01:35',-60767.00),(123,65,'452345','Active','2024-07-19 13:03:34','2024-07-19 13:03:34',0.00),(124,44,'Shubham S','Active','2024-07-19 13:59:16','2024-07-19 14:00:36',-10000.00),(125,44,'Akash','Active','2024-07-19 13:59:29','2024-07-19 14:01:03',-20000.00),(126,44,'Rushi','Active','2024-07-19 13:59:35','2024-07-19 14:02:12',130000.00);
/*!40000 ALTER TABLE `tbl_general_ledgers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ledgers`
--

DROP TABLE IF EXISTS `tbl_ledgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ledgers` (
  `lgr_id` int NOT NULL AUTO_INCREMENT,
  `gl_id` int DEFAULT NULL,
  `lgr_name` varchar(255) NOT NULL,
  `lgr_open_bal` decimal(10,2) NOT NULL,
  `lgr_status` enum('Active','Inactive') NOT NULL,
  `lgr_created_at` datetime DEFAULT NULL,
  `lgr_updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`lgr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ledgers`
--

LOCK TABLES `tbl_ledgers` WRITE;
/*!40000 ALTER TABLE `tbl_ledgers` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ledgers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_transactions`
--

DROP TABLE IF EXISTS `tbl_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_transactions` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `from_firm_id` int DEFAULT NULL,
  `to_firm_id` int DEFAULT NULL,
  `from_gl_id` int DEFAULT NULL,
  `to_gl_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `transaction_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_transactions`
--

LOCK TABLES `tbl_transactions` WRITE;
/*!40000 ALTER TABLE `tbl_transactions` DISABLE KEYS */;
INSERT INTO `tbl_transactions` VALUES (8,21,22,28,31,300.00,'2024-06-15 09:34:47',39),(9,21,22,29,32,5000.00,'2024-06-15 10:43:41',39),(10,21,22,30,33,700.00,'2024-06-15 10:44:06',39),(11,21,21,28,30,800.00,'2024-06-17 05:38:14',39),(12,21,21,30,29,800.00,'2024-06-17 05:44:04',39),(13,21,21,29,30,800.00,'2024-06-17 05:44:37',39),(14,21,21,30,29,100.00,'2024-06-17 05:44:51',39),(15,21,21,30,29,200.00,'2024-06-17 06:20:09',39),(16,22,21,32,30,150.00,'2024-06-17 07:37:51',39),(17,22,21,31,30,450.00,'2024-06-17 07:38:55',39),(18,22,21,32,30,850.00,'2024-06-17 07:39:07',39),(19,23,24,34,39,2000.00,'2024-06-17 10:12:26',51),(20,24,24,39,37,1200.00,'2024-06-17 10:13:22',51),(21,24,24,39,38,300.00,'2024-06-17 10:13:36',51),(22,25,24,42,38,3000.00,'2024-06-17 10:17:08',51),(23,25,25,42,41,6000.00,'2024-06-17 10:17:28',51),(24,26,25,43,40,15000.00,'2024-06-17 11:30:54',51),(25,26,26,43,44,5000.00,'2024-06-17 11:31:38',51),(26,21,31,30,47,700.00,'2024-06-20 10:40:06',39),(27,19,21,50,28,500.00,'2024-06-24 11:34:44',39),(28,34,36,56,60,150000.00,'2024-01-08 06:44:27',52),(29,34,36,56,60,200000.00,'2024-02-06 06:49:59',52),(30,34,36,57,61,65000.00,'2024-02-17 06:50:17',52),(31,34,36,56,60,150000.00,'2024-03-07 06:51:44',52),(32,34,36,56,60,150000.00,'2024-04-12 06:55:22',52),(33,35,36,58,60,250000.00,'2024-05-13 06:56:01',52),(34,37,36,62,60,150000.00,'2024-06-02 07:05:29',52),(35,34,36,57,61,252763.00,'2024-06-03 07:34:05',52),(36,34,36,56,60,140000.00,'2023-10-28 10:10:55',52),(37,34,36,56,60,100000.00,'2023-11-17 10:11:04',52),(38,34,36,56,60,300000.00,'2023-12-16 10:11:10',52),(39,21,19,29,51,670.00,'2024-07-03 09:40:02',39),(41,31,19,47,50,1200.00,'2024-07-05 06:08:08',39),(42,21,33,29,54,25000.00,'2024-07-05 13:03:21',39),(43,33,31,54,53,55000.00,'2024-07-08 10:51:39',39),(44,31,31,52,53,4444.00,'2024-07-08 10:53:30',39),(45,33,45,55,66,85000.00,'2024-07-08 10:56:50',39),(46,46,47,67,70,80000.00,'2024-07-09 10:40:31',39),(47,47,46,69,68,6000.00,'2024-07-09 10:42:12',39),(48,47,48,69,74,8000.00,'2024-07-11 06:04:42',39),(49,48,47,74,69,8000.00,'2024-07-11 06:05:29',39),(50,49,50,75,79,5000.00,'2024-07-11 07:13:06',74),(51,49,52,76,81,75000.00,'2024-07-11 07:14:20',74),(52,49,50,77,78,9000.00,'2024-07-11 07:14:44',74),(53,50,52,79,81,4000.00,'2024-07-11 07:16:33',74),(54,56,48,87,72,5600.00,'2024-07-11 09:55:05',39),(55,56,57,87,88,650.00,'2024-07-11 10:54:33',39),(56,57,56,88,87,950.00,'2024-07-11 10:56:32',39),(57,46,47,68,69,750.00,'2024-07-11 12:33:20',39),(58,46,47,68,69,8000.00,'2024-07-11 12:49:21',39),(59,46,47,68,69,8700.00,'2024-07-11 13:22:50',39),(60,60,61,95,97,1000.00,'2024-07-12 09:25:56',81),(61,60,60,96,95,100.00,'2024-07-12 09:39:39',81),(62,33,31,54,53,8550.00,'2024-07-15 11:58:35',68),(63,19,33,50,55,85000.00,'2024-07-18 09:48:57',39),(64,33,19,54,51,6500.00,'2024-07-18 09:50:21',39),(65,19,21,50,29,2300.00,'2024-07-18 10:14:56',39),(66,34,64,56,102,85000.00,'2024-07-18 11:11:12',52),(67,34,36,56,61,90000.00,'2024-07-18 11:18:38',52),(68,36,34,61,57,62000.00,'2024-07-18 11:19:30',52),(69,35,34,59,56,35000.00,'2024-07-18 11:20:14',52),(70,65,67,105,111,50000.00,'2024-07-19 06:30:07',105),(71,65,67,105,111,50000.00,'2024-07-19 06:30:41',105),(72,65,67,106,110,10000.00,'2024-07-19 06:32:39',105),(73,47,33,69,55,95000.00,'2024-07-19 06:40:47',39),(74,69,70,115,119,10000.00,'2024-07-19 06:57:00',105),(75,69,71,116,121,10000.00,'2024-07-19 13:13:20',105),(76,69,71,116,121,10000.00,'2024-07-19 13:15:05',105),(77,33,19,122,112,767.00,'2024-07-19 13:29:58',68),(78,65,71,107,121,60000.00,'2024-07-19 13:31:03',110),(79,65,69,108,116,60000.00,'2024-07-19 13:31:58',110),(80,21,31,29,53,45453.00,'2024-07-19 13:32:16',39),(81,33,47,55,69,3435.00,'2024-07-19 13:37:35',68),(82,33,45,55,66,5645.00,'2024-07-19 13:37:54',68),(83,21,33,29,55,565555.00,'2024-07-19 13:39:35',68),(84,69,65,117,108,20000.00,'2024-07-19 13:44:33',114),(85,69,65,115,105,20000.00,'2024-07-19 13:46:10',114),(86,65,69,108,117,20000.00,'2024-07-19 13:50:32',114),(87,65,69,105,115,20000.00,'2024-07-19 13:50:58',114),(88,44,47,124,69,10000.00,'2024-07-19 14:00:36',115),(89,44,45,125,66,20000.00,'2024-07-19 14:01:03',115),(90,33,44,122,126,60000.00,'2024-07-19 14:01:35',115),(91,21,44,30,126,70000.00,'2024-07-19 14:02:12',115);
/*!40000 ALTER TABLE `tbl_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_firm`
--

DROP TABLE IF EXISTS `tbl_user_firm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_firm` (
  `uf_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `firm_id` int DEFAULT NULL,
  `uf_usr_role` enum('Super Admin','firm_user') DEFAULT NULL,
  `uf_created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `uf_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `added_by_user_id` int DEFAULT NULL,
  PRIMARY KEY (`uf_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_firm`
--

LOCK TABLES `tbl_user_firm` WRITE;
/*!40000 ALTER TABLE `tbl_user_firm` DISABLE KEYS */;
INSERT INTO `tbl_user_firm` VALUES (1,1,2,NULL,'2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(2,2,2,NULL,'2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(3,1,2,NULL,'2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(4,22,2,NULL,'2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(5,27,1,NULL,'2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(6,28,11,'Super Admin','2024-06-11 12:42:10','2024-06-11 12:42:10',NULL),(8,28,14,'Super Admin','2024-06-12 06:37:46','2024-06-12 06:37:46',NULL),(12,39,19,'Super Admin','2024-06-12 10:41:13','2024-06-12 10:41:13',NULL),(13,39,21,'Super Admin','2024-06-12 10:47:46','2024-06-12 10:47:46',NULL),(15,51,23,'Super Admin','2024-06-17 10:07:51','2024-06-17 10:07:51',NULL),(16,51,24,'Super Admin','2024-06-17 10:09:06','2024-06-17 10:09:06',NULL),(17,51,25,'Super Admin','2024-06-17 10:14:49','2024-06-17 10:14:49',NULL),(18,51,26,'Super Admin','2024-06-17 11:28:37','2024-06-17 11:28:37',NULL),(23,39,31,'Super Admin','2024-06-19 12:50:24','2024-06-19 12:50:24',NULL),(25,39,33,'Super Admin','2024-06-21 10:26:24','2024-06-21 10:26:24',NULL),(26,52,34,'Super Admin','2024-06-26 06:17:59','2024-06-26 06:17:59',NULL),(27,52,35,'Super Admin','2024-06-26 06:32:18','2024-06-26 06:32:18',NULL),(28,52,36,'Super Admin','2024-06-26 06:36:32','2024-06-26 06:36:32',NULL),(29,52,37,'Super Admin','2024-06-26 06:48:44','2024-06-26 06:48:44',NULL),(36,39,44,'Super Admin','2024-07-04 11:06:30','2024-07-04 11:06:30',NULL),(37,61,33,NULL,'2024-07-08 07:40:47','2024-07-08 07:40:47',NULL),(38,39,45,'Super Admin','2024-07-08 10:55:42','2024-07-08 10:55:42',NULL),(42,39,46,'Super Admin','2024-07-09 10:37:59','2024-07-09 10:37:59',NULL),(43,39,47,'Super Admin','2024-07-09 10:38:35','2024-07-09 10:38:35',NULL),(44,68,33,'firm_user','2024-07-10 05:44:16','2024-07-10 12:51:07',39),(45,69,45,'firm_user','2024-07-10 05:51:29','2024-07-10 05:51:29',39),(46,70,47,'firm_user','2024-07-10 06:59:21','2024-07-11 05:58:22',39),(53,74,49,'Super Admin','2024-07-11 07:09:36','2024-07-11 07:09:36',NULL),(54,74,50,'Super Admin','2024-07-11 07:10:01','2024-07-11 07:10:01',NULL),(56,74,52,'Super Admin','2024-07-11 07:11:25','2024-07-11 07:11:25',NULL),(57,75,53,'Super Admin','2024-07-11 07:23:06','2024-07-11 07:23:06',NULL),(58,75,54,'Super Admin','2024-07-11 07:32:13','2024-07-11 07:32:13',NULL),(59,74,55,'Super Admin','2024-07-11 07:55:40','2024-07-11 07:55:40',NULL),(60,76,54,'firm_user','2024-07-11 09:41:01','2024-07-11 09:41:01',75),(66,80,58,'Super Admin','2024-07-11 12:53:00','2024-07-11 12:53:00',NULL),(67,80,59,'Super Admin','2024-07-11 12:53:45','2024-07-11 12:53:45',NULL),(68,81,60,'Super Admin','2024-07-12 05:47:32','2024-07-12 05:47:32',NULL),(69,81,61,'Super Admin','2024-07-12 06:11:28','2024-07-12 06:11:28',NULL),(70,82,60,'firm_user','2024-07-12 06:51:11','2024-07-12 06:51:11',81),(71,83,60,'firm_user','2024-07-12 06:51:47','2024-07-12 06:51:47',81),(72,84,61,'firm_user','2024-07-12 09:24:25','2024-07-12 09:24:25',81),(73,39,62,'Super Admin','2024-07-12 10:21:39','2024-07-12 10:21:39',NULL),(75,86,62,'firm_user','2024-07-12 12:22:46','2024-07-18 07:26:42',39),(77,99,47,'firm_user','2024-07-18 07:40:31','2024-07-18 08:03:23',39),(78,52,64,'Super Admin','2024-07-18 11:10:14','2024-07-18 11:10:14',NULL),(80,101,35,'firm_user','2024-07-18 11:14:32','2024-07-18 11:14:32',52),(81,102,34,'firm_user','2024-07-18 11:15:47','2024-07-18 11:15:47',52),(82,103,37,'firm_user','2024-07-18 11:16:26','2024-07-18 11:16:26',52),(83,104,36,'firm_user','2024-07-18 11:17:11','2024-07-18 11:17:11',52),(84,105,65,'Super Admin','2024-07-19 05:24:59','2024-07-19 05:24:59',NULL),(86,105,67,'Super Admin','2024-07-19 05:42:53','2024-07-19 05:42:53',NULL),(88,108,65,'firm_user','2024-07-19 05:48:39','2024-07-19 05:48:39',105),(89,110,65,'firm_user','2024-07-19 05:58:54','2024-07-19 05:58:54',105),(90,112,65,'firm_user','2024-07-19 06:16:23','2024-07-19 06:16:23',105),(91,105,69,'Super Admin','2024-07-19 06:51:19','2024-07-19 06:51:19',NULL),(93,105,71,'Super Admin','2024-07-19 06:52:31','2024-07-19 06:52:31',NULL),(96,114,69,'firm_user','2024-07-19 13:41:38','2024-07-19 13:41:38',105),(97,115,44,'firm_user','2024-07-19 13:58:32','2024-07-19 13:58:32',39);
/*!40000 ALTER TABLE `tbl_user_firm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `usr_name` varchar(255) NOT NULL,
  `usr_email` varchar(255) NOT NULL,
  `usr_password` varchar(255) NOT NULL,
  `usr_contact` varchar(255) NOT NULL,
  `usr_address` varchar(255) NOT NULL,
  `usr_status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `usr_role` enum('Super Admin','firm_user') NOT NULL DEFAULT 'Super Admin',
  `usr_created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usr_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `usr_email` (`usr_email`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users`
--

LOCK TABLES `tbl_users` WRITE;
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
INSERT INTO `tbl_users` VALUES (1,'rushi','rr@gmail','ttttyyyy','4545344444','Pune','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(2,'abhi','abhi@gmail.com','ygasck','5655555557','Sangli','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(3,'John Doe','john.doe@example.com','securepassword','1234567890','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(5,'Abhi','abhi@@example.com','ttttttt','1234567890','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(8,'Abhi','abhi@example.com','ttttttt','1234567890','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(12,'Abhiii','abhiii@example.com','ttttttt','1234567890','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(13,'Yashh','Yash@example.com','ttttttt','1111155555','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(15,'Yashh','Yash1@example.com','ttttttt','1111155555','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(19,'Shubham','shubham@example.com','ttttttt','1111155555','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(21,'Yash','akhi@example.com','ttttttt','1111155555','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(22,'Rupesh','rupesh@gmail.com','ttttttt','1111155555','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(23,'Saurabh','saurabh@gmail.com','ttttttt','1111155555','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(24,'Akash','akash@gmail.com','ttttttt','1111155555','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(26,'Sayali','sayali@gmail.com','ttttttt','2222255555','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(27,'Shubhangi','shubhangi@gmail.com','ttttttt','2222233333','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(28,'Rahul','rahul@gmail.com','$2b$10$TZ5sW0dA.Ayv1B8Gbrvre.nBIbhltZxgtIEJWK2RmmIhSsnC0eqJS','4444455555','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(29,'Ganesh','ganesh@gmail.com','$2b$10$z4PD/3pIjfL50B5BP29TCeY5bYLmA2I3GbRkyqBpyq8dVpTpPzTN2','4444477777','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(30,'Ganesh','bahu@gmail.com','$2b$10$yMzPlR0LO0MzmjDgAVXoIOvOuKcLXcK04zcaDmerFXJX7HQUicllK','5555566666','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(31,'Ganesh1','bahu11@gmail.com','$2b$10$3DKagKWLIr8I1f6BQijN2.OrN3bwdSbYeJ3fYM9X9NGM7ONFl4K2S','5555599996','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(32,'Ganesh1','bahu111@gmail.com','$2b$10$OCoTczUHFKVd0tKEbws/b.onQHWkpi3kxVjQhs609Ir7ILMh/nb1S','5555599991','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(33,'Ganesh1','bahu1111@gmail.com','$2b$10$IP5pi11awYi1mHBxaVepN.VUNtLE6DNEIc3r1dlVPmnAow6xY4vl6','5555599922','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(34,'Ganesh1','bahu2@gmail.com','$2b$10$Xtb/v3py/0K7OW367x6LCulK7TB9ROLgbugutzOVs4ZombEDGBx7K','5555599333','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(35,'Ganesh1','bahu22@gmail.com','$2b$10$9F3lIyipmAiNhdf3ITaOk.2f64o4m9ngkTKDNKTt9PD89XxZXQ/Uy','5555599344','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(36,'Bahu','bahu33@gmail.com','$2b$10$RLKxb528qCBDuy4JWKaH2efB3iVRzF9ZU0P8au/V4bgpl9OhUJ95W','1111199999','123 Main St','Active','Super Admin','2024-06-06 11:42:23','2024-06-06 11:42:23'),(37,'Yashhhhh','yashhhhh@gmail.com','$2b$10$NwBsbFv0X4xrN2LntiTl2O5I6IfKoJnIuSDhK4fBuhiW.0Cq3kFzy','2525253333','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(38,'Sayali','sayali11@gmail.com','$2b$10$/SU7nm6XHRw2rlV8hPONd.JKAVtbZoRgbweR8lq3zDc0ahZc73ePK','2121213333','123 Main St','Active','firm_user','2024-06-06 11:42:23','2024-06-06 11:42:23'),(39,'Sayali','sayali111@gmail.com','$2b$10$uTslp7K7LPcldLaBFyUBVeL/nC8en1sygkgrf4BgzVQm12i8YCZ/2','21212133333','123 Main St','Active','Super Admin','2024-06-10 09:56:06','2024-07-19 12:32:23'),(40,'Sayali','sayali1111@gmail.com','$2b$10$aIUfwA2O7DB682uVsOwXrOzmQcDEauZ31YnzKUh13YZ4SHXsxZqIq','212121333333','123 Main St','Active','Super Admin','2024-06-10 10:50:08','2024-06-10 10:50:08'),(41,'Rushikesh raut','rushikesh.tekhno7879@gmail.com','$2b$10$85/QRi1PmdjaME.ANbLaoOQx2.xtnCbis0BSwB1uV.hZDXyNm0lEm','7894561237','sdvsd','Active','Super Admin','2024-06-10 12:08:14','2024-06-10 12:08:14'),(42,'dfsdf','dsfsd@gmail.com','$2b$10$iyI7BbywH6wkZGtPVHAyAuomgD3ndHdKXB5Ap7Jpx2uVQjzZBuw7.','4561237895','sdas','Active','Super Admin','2024-06-10 12:09:55','2024-06-10 12:09:55'),(43,'Rushikesh raut','rushikesh.tekhnologia456@gmail.com','$2b$10$rR72.QwkRPzIYspaJ5l5.uMDqgTgjH33LXqvEDJgpFHYkBM4vQSyG','7894561234','hbsdvsd','Active','Super Admin','2024-06-10 12:11:07','2024-06-10 12:11:07'),(44,'Rushikesh raut','rushikesh.tekhno1112@gmail.com','$2b$10$Ebx7Hx8mf.b6UhriA/87hOCT4FB4jEhFoU4UNv3woT7XOzG.91NGe','7987212213','dcasd','Active','Super Admin','2024-06-10 12:51:45','2024-06-10 12:51:45'),(45,'vxcv','zdcx@gmail.com','$2b$10$V24k4aUSoC6sGNjOtpo4Qe6AtZAaBTJDb42ptqTtvepSTm21IiYr6','78954665','zxczxczx','Active','Super Admin','2024-06-10 12:55:44','2024-06-10 12:55:44'),(46,'czxc','xczxc@gmail.com','$2b$10$817yOt2ex3WMSBtfCNBR1.gtafg0ypuhCQCwab8BKxRWHJaGmlJ4.','87895456516','scxxzcz','Active','Super Admin','2024-06-10 12:56:14','2024-06-10 12:56:14'),(47,'fvsdvc','adc@gmail.com','$2b$10$xdQgu1IOeF4OrW.snhtYU.7jumvANS/.mMfSZglmXCoumwd/5vgYa','789456132','uasbdxs','Active','Super Admin','2024-06-10 12:58:36','2024-06-10 12:58:36'),(48,'dcxa','newRushi@gmail.com','$2b$10$vgtLD37wyvymYC5swbHsue7CQP3UmG5sy9RZ/V3huYHawxvfOyN3y','871246532','ascsxczd','Active','Super Admin','2024-06-10 13:03:18','2024-06-10 13:03:18'),(49,'scsdc','rushikeshrautabk122@gmail.com','$2b$10$fMI769tiF4FRxBW8Cjn5Ou8llNP/IlhWUAV7J9gXkP87ORcQvy8qy','413313151','scascxasc','Active','Super Admin','2024-06-10 13:04:21','2024-06-10 13:04:21'),(50,'RushiMR','rushimr@gmail.com','$2b$10$smNxbH6.X3BBdt26xl6fZuFY05hZJw6W7j/S4Em2988G9a53y1fj6','1231234562','hbdcd','Active','Super Admin','2024-06-11 06:05:23','2024-06-11 06:05:23'),(51,'Sujit Auti','sujit77@gmail.com','$2b$10$iV0NIqfWRrgYPsZiPhCTN.Xu7xE2AOnpbWGF8KZJfNcaQrOD/w6YO','15864655456','Aundh, Pune','Active','Super Admin','2024-06-17 10:06:25','2024-06-17 10:06:25'),(52,'Dilip H','diliph@gmail.com','$2b$10$9edINkLjD6f0kEPAbnV0yebN3RlhlzDVkQKOTuKHSOXOzGDRoR.PK','7894561235','Washim','Active','Super Admin','2024-06-26 06:16:08','2024-07-18 11:09:31'),(53,'Jane Doe','jane.doe@example.com','$2b$10$607R6Ga5LVwN54XA/GeuBuiXfFqyKUZA2Df4f9zP7TXuGctbcZ5RG','9876543210','456 Main St','Active','firm_user','2024-07-06 12:13:59','2024-07-06 12:13:59'),(55,'Maa ki chu','makichu@example.com','$2b$10$P3I13swUWY1HXKhjOrfWR.F3b/44y9vZV/AU/bInpLwt2P5hbgUba','2522521463','456 Main St','Active','firm_user','2024-07-06 12:26:39','2024-07-06 12:26:39'),(58,'Sayali','jane.doe@example.co','$2b$10$98htH6kfLEDbZBN3.QSVYO2sLRak8jPwHgnxZkujTPtP/s6ekuxNq','987654321','123 Main St','Active','Super Admin','2024-07-06 12:38:51','2024-07-06 12:38:51'),(59,'RushiBhai','rushibhai@gmail.com','$2b$10$Md6yolWKCNTjZALyNmvi/.vckGBpi2o2ykzZimZN3egntcXBUEsrK','6775765676653','Punehj','Active','Super Admin','2024-07-08 05:58:47','2024-07-08 05:58:47'),(60,'YashMama','yashmama@gmail.com','$2b$10$lkaWs2ewwvsZCKel4sH.x.IkDOPJtIFKfpc/Dm3svzlz69iIWfLXq','45678912305','123 Main St','Active','Super Admin','2024-07-08 06:04:01','2024-07-08 06:04:01'),(61,'Jane Doe','janemanja@example.com','$2b$10$jFuJnneMOOlT8b8yFwzdsu3R/fI830T4VRUt9YxghJH3cynseUGHa','51255121153','Kachuhcu','Active','firm_user','2024-07-08 06:19:39','2024-07-08 07:31:24'),(66,'Jumanji','jumanji11@example.com','$2b$10$/e28J7u.zMv2L.kiQTUC3evDxSrlmHpwGnxcja0Iv9wHm70CmwBhe','64551845131','Shirpur','Active','firm_user','2024-07-09 13:15:47','2024-07-09 13:15:47'),(67,'Jumanji','jumanji33@example.com','$2b$10$rWTws3pLhbOST.8TFNWcLegPP23bcpyNa2fVGVxFtxL3ao8joJ9QC','645651845131','Shirpur','Active','firm_user','2024-07-09 13:16:12','2024-07-09 13:16:12'),(68,'Dukkar Tawade','dukkartawade@gmail.com','$2b$10$U61N95ckqYQdYU9F8/82eOYnuozoF1kxuoWqm6fVIV/ZCjI5krwEq','9879855113','Washim','Active','firm_user','2024-07-10 05:44:16','2024-07-10 13:15:20'),(69,'Masaan Mhalunge','masan@gmail.com','$2b$10$8PSYOySgbI8noMkDPtiEE.sH7AgeP/1ElxOhW0oIwWugPPjJgSvpG','656444456456','Washim','Active','firm_user','2024-07-10 05:51:29','2024-07-10 05:51:29'),(70,'Kamal Hasan','kamalhasan@gmail.com','$2b$10$xwVCE.xRIMKpEEDWseo1/O6mUweVQqRSgkwxhDEkjCvLkykOB6hte','56456444','Washim, Maha','Active','firm_user','2024-07-10 06:59:21','2024-07-18 07:35:59'),(71,'Amitabh Bachhan','amitabhb@gmail.com','$2b$10$8zU09YhsnjN/TFdt9oFeGeLxFSczLRyx9Ic.NIQRkdyXbunExTFuy','8974846456','Akola','Active','firm_user','2024-07-10 09:51:18','2024-07-10 09:51:18'),(72,'Aishwarya Bachhan','aishb@gmail.com','$2b$10$PxqQQVd34MFj5ZojNxrTpu7R1a70qwIQjbdNDe7l33XoG3bHe3U6G','546564565656','Shegaon','Active','firm_user','2024-07-10 12:54:56','2024-07-10 12:54:56'),(73,'ggbb','ddsvd@gmail.com','$2b$10$2wCeIzZNt5M32qNSc9rCu.bnON0bXL9K4YTpAMRTeUzGMF8Bv94QW','12315','Ooo','Active','firm_user','2024-07-10 12:56:39','2024-07-10 12:57:21'),(74,'Rajaram Ram','rajaram@gmail.com','$2b$10$iId1he42G5XaPFlzxCqdmO5sFG5.ZV/qT7VXNRlS0sW8lsad.1y2O','5465133121','Dhule','Active','Super Admin','2024-07-11 07:08:41','2024-07-11 07:08:41'),(75,'rajkumari','rajkumari@gmail.com','$2b$10$nke6DJh2v36MWaToj16HeuTtm1eK/rztO6bR6cvI1pGpCLZiLtSFS','9898984545','pune','Active','Super Admin','2024-07-11 07:20:36','2024-07-11 07:20:36'),(76,'john','john@gmail.com','$2b$10$8DHXLnsxzwH94iiWSGaLRePIfbSZTezBMVuocv83C8xhFcHjqwE9q','3333333333','pune','Active','firm_user','2024-07-11 09:41:01','2024-07-11 09:41:01'),(77,'Alu Matar Firm Pvt Ltd','alimatar@gmail.com','$2b$10$m81.m.ktXFRc1by78/VaCuyZWARWXJkZuzQKJBnCA3airN76pnnNC','53646531546','Yawatmal','Active','firm_user','2024-07-11 09:56:59','2024-07-11 09:56:59'),(78,'Dadaji','dadaji11@gmail.com','$2b$10$LjmMJAcBNA8dtHrWEJqQGO1rFszXDi8VKhoBVgiT2EUzy1XVAkXbO','5486456131','Warje, Pune','Active','firm_user','2024-07-11 10:50:15','2024-07-11 10:50:15'),(79,'Tara Sutariya','tarasuta@gmail.com','$2b$10$GkaKtpk7CO0NGMwD4ci27uk22mCuuw99FFtkRtxM4jphG0a3vLyIe','2156446451','Warje, Pune','Active','firm_user','2024-07-11 10:53:55','2024-07-11 10:53:55'),(80,'takaluram','takaluram@gmail.com','$2b$10$rVYu00aQn79HFd4rczNzRuUPRjvS/NGAfOyJOck1KvUJJjGHcbZdq','6767676767','pune','Active','Super Admin','2024-07-11 12:14:58','2024-07-11 12:14:58'),(81,'Nikhil patil','nikhil@gmail.com','$2b$10$q0v8JgKG7yip/0Z.9PKYOeAl82D7enTYLJbZH2xCxJuHLoz2xlFOO','9812321234','pune','Active','Super Admin','2024-07-12 05:29:27','2024-07-12 05:29:27'),(82,'krishu','krishu@gmail.com','$2b$10$N8xjU/WOtBWKJ0rkFobXnuhepTq.4AshOTE084ZGomGuhI.RgYv1O','9956342567','pune','Active','firm_user','2024-07-12 06:51:11','2024-07-12 06:51:11'),(83,'mina','mina@gmail.com','$2b$10$MggoISc3iVj2vIihaa/NnuCAxvR6whZgC4ldighH7vteR6XlBhStm','8756765434','pune','Active','firm_user','2024-07-12 06:51:47','2024-07-12 06:51:47'),(84,'rajkumar bacchan','rajkumar@gmail.com','$2b$10$bkLYiU58ojqMoEKFV3eg8.asL.Yq/kAbYjyfL2zqOkGvPSyyNDmH.','7878787878','pune','Active','firm_user','2024-07-12 09:24:23','2024-07-12 09:24:23'),(85,'Ashu Wadewale','ashuwade@gmail.com','$2b$10$SEfoZnzg23tvkrJ4OO//xuqJEK3TimrTwVvMqCceDqTk40B6eQc0q','879465413','Washim','Active','firm_user','2024-07-12 10:39:12','2024-07-18 07:08:42'),(86,'Dukkar Tawade','dukkartawade1@gmail.com','$2b$10$diI0blJNVss2TYAI6u15iempS8WVBUKvuLRsTwzcK/qZp5GoNhBjy','98798551131','AMRAVATI','Active','firm_user','2024-07-12 12:22:46','2024-07-18 07:23:17'),(87,'fffff','sayali85@gmail.com','$2b$10$lvkVJQAUwMiGKTKfyKPm2ueBrJBhF67vViM/T4eFkg1XmTcsQ1/36','514615151','adsfdfd','Active','Super Admin','2024-07-15 13:18:40','2024-07-15 13:18:40'),(88,'sdfds','ddesfsd@gmail.com','$2b$10$TBd94y3ihuomaFRqM6v/dOihW5z33gVt6sHZkmJSBsJ3/2sLJL0nG','5315311','dcdcdc','Active','Super Admin','2024-07-15 13:21:42','2024-07-15 13:21:42'),(89,'ffdgf','fsdf@gmail.com','$2b$10$uAcHvMrQfl13H0IhhSCMROnDvcdleORMIp6dVuqtwtZ0nqYrizhOi','245313','dfdfdf','Active','Super Admin','2024-07-15 13:22:19','2024-07-15 13:22:19'),(90,'dfsdf','ssmjg@gmail.com','$2b$10$eyAqnvioKqzIz6b0ldYMHugT9SqP.nfXP7oZInorMtd4irfc7dPv6','dfdsfdff','dfsdfd','Active','Super Admin','2024-07-15 13:23:15','2024-07-15 13:23:15'),(91,'tawade','AD@GMAIL.CO','$2b$10$cy7k9mawUBqFxRqu4.k.E.CtqEcnvIH/8Kv2Li2lpUDIIEKva/q6C','9966335512','','Active','Super Admin','2024-07-16 13:16:15','2024-07-16 13:16:15'),(92,'dada re','dadare@gmail.com','$2b$10$mqe2.R6ALDaowiYAWQ.4Be5jskS1KjCLaLwoCqjSRsnSaEzXC8vW6','1521654512','ee','Active','Super Admin','2024-07-16 13:16:54','2024-07-16 13:16:54'),(93,'xs','sa@gmail.co','$2b$10$BgeEHTN0t2ZpJqILVA/p.uLao9RVdgTBqpcghS7wpwSgBHJEtIZ.2','3248946515','AMRAVATI','Active','Super Admin','2024-07-16 13:23:16','2024-07-16 13:23:16'),(94,'sx','saxs@gmail.com','$2b$10$6L0JJyooT4MVs6UdWFXLEuXnOhG.Dw0Kl9A1vP.gAXtLV7tk66Wpy','6548985113','sacs','Active','Super Admin','2024-07-16 13:30:55','2024-07-16 13:30:55'),(95,'casc','dv@gmail.com','$2b$10$MZcMXQO6SG2PmIkc61G/Lu36uI6J8SF57McGdZn6LgRB.kptvoOte','2463555533','AMRAVATI','Active','Super Admin','2024-07-16 13:39:39','2024-07-16 13:39:39'),(96,'casc','ynbvsc@gmail.com','$2b$10$G0RErNg.drrDK0apuPoI9OJGo9KcM5gQUCynQZIchbn5Q4hPtEhhG','6548941113','AMRAVATI','Active','Super Admin','2024-07-16 13:41:26','2024-07-16 13:41:26'),(97,'sasdcasc','wefcc@gmail.com','$2b$10$nLskiB1kEbegvxCkkiFbQe18EGVMe91BksJ6eYEOQuC5AYIMyero2','1351456456','AMRAVATI','Active','Super Admin','2024-07-16 13:42:10','2024-07-16 13:42:10'),(98,'axAX','axAX@GMAIL.COM','$2b$10$yFtad3u85aeqgdOWW9BMP.XHDGA0VcZTg4S5aopmuWsKpcsXUNJFe','2315464651','AMRAVATI','Active','Super Admin','2024-07-16 13:43:25','2024-07-16 13:43:25'),(99,'Thakur Pratap','thakurpr@gmail.com','$2b$10$dA4AXmJ2TWGO/iCvR2LfwunOHvkh5ALMN4ad56s.JQA7DsbiUG41a','9468656561651','AMRAVATI','Active','firm_user','2024-07-18 07:40:31','2024-07-18 08:03:53'),(100,'Rushikesh','rushikeshr@gmail.com','$2b$10$O5T1YhSdZiCvF.pol6MM5uMRGlsKzrHg7xWeNFYsFXzjRFSrkUq7K','54894613513','AMRAVATI','Active','firm_user','2024-07-18 11:13:09','2024-07-18 11:13:09'),(101,'Rohit Heda','rohith@gmail.com','$2b$10$kLgWOsspAldKhT3KFnj5VuuGGGYw1.W9rSHWOkilP5KnCjYdb9PPS','56484655645','Washim','Active','firm_user','2024-07-18 11:14:32','2024-07-18 11:14:32'),(102,'Dilip Heda','dilip33@gmail.com','$2b$10$lpV5axycYt6jL7pbhQa72e8JBzgn1LhLmt.vST0b7Gou3axUJrwuW','1556844556','Washim','Active','firm_user','2024-07-18 11:15:47','2024-07-18 11:15:47'),(103,'Dilip Heda','dilip44@gmail.com','$2b$10$ZLdp23ukNxHEV6kby1IHmeKB/sHZk/OZNHJxIZ45.u0EXee0OPN/S','5156441313','Washim','Active','firm_user','2024-07-18 11:16:26','2024-07-18 11:16:26'),(104,'Rupesh Khillare','rupesh33@gmail.com','$2b$10$P9DrV/60guhUHAW4r1AYZ.oHOTCFKyzkPjWao1woMPBfX27Kes3SO','6633234844','Pune','Active','firm_user','2024-07-18 11:17:11','2024-07-18 11:17:11'),(105,'Rushi kadam','rushi@gmail.com','$2b$10$bccD/iYHbCCwFLImeQzUYeO7CvBmTBFC7DjN9f2WQNHLnSD14sQge','8767898787','765997','Active','Super Admin','2024-07-19 05:21:44','2024-07-19 05:21:44'),(106,'Kartik','viresh@gmail.com','$2b$10$g7i4EMrdvz4V7Vw4csfwaeQXn8XWSWKVJXwthnnwr3Whv6g2Yl2Be','8767890977','Pune','Active','Super Admin','2024-07-19 05:35:27','2024-07-19 05:35:27'),(107,'SASA','S@gmail.co','$2b$10$u3ZmxqHzggijctZR4ePqNOVYXbFgWjVGZyYQ6b8z85ABYsd1psZIO','43334','4rd','Active','Super Admin','2024-07-19 05:48:02','2024-07-19 05:48:02'),(108,'22333','rushikesh@gmail.com','$2b$10$XMeSlqdSUbH.4OwQK6wO/.FWhiPr7vmCbBU4KkMeMtJ78JaTpqFjO','sdfvsdfvsfv','Pune','Active','firm_user','2024-07-19 05:48:39','2024-07-19 05:48:39'),(109,'sdas','fgc@gmail.co','$2b$10$0Rlxo2rmmt8LZait1lHPm.yn0Fd3UN/iYbRo.Yqsja8zYYEyLdKUW','454545454','BHJ','Active','Super Admin','2024-07-19 05:50:34','2024-07-19 05:50:34'),(110,'Vinay','vinay@gmail.com','$2b$10$8VhVVdVsVVAu13iW2wM3P.VM2H/qOiH0Kh/4AmRlhN29mCEQ7s6e.','dfgbdfhwesdfgs','Pune','Active','firm_user','2024-07-19 05:58:54','2024-07-19 05:58:54'),(111,'GVGH','dgg@gmail.co','$2b$10$efGAvXh9C.a64MNUD1Z6deobNFNL8PdL7bxWbOxPaGvgWZXTDG6BO','6756557576','vbnbv','Active','Super Admin','2024-07-19 06:12:06','2024-07-19 06:12:06'),(112,'Sujit','sujit@gmail.com','$2b$10$m.v1y99.qz8TCYSyT/6K3.t/YF8hViiL0evlpEW7INmFJGqCPiEbK','7667787656','Pune','Active','firm_user','2024-07-19 06:16:22','2024-07-19 06:16:22'),(113,'Justin','justin@gmail.com','$2b$10$SFWRyd.rE8XrRbPQ93jlreBgZm8vCrHCXjRBYIwEAYbgiw.GBLVN2','8776788987','Pune','Active','Super Admin','2024-07-19 11:22:59','2024-07-19 11:22:59'),(114,'Rohit','rohit@gmail.com','$2b$10$OzSew.gDqhKrKqo5nsYFR.8DO8kOr1kzCT1a4bzyfNO/nt493BOQ6','7656674677','Pune','Active','firm_user','2024-07-19 13:41:38','2024-07-19 13:41:38'),(115,'Champu','champu@gmail.com','$2b$10$NLQH3o8VJtkplP6i701PgeY9pEBDW1qNdDbIbfsfrgbt03AyBk/3C','654533446','Fg','Active','firm_user','2024-07-19 13:58:32','2024-07-19 13:58:32');
/*!40000 ALTER TABLE `tbl_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vouchers`
--

DROP TABLE IF EXISTS `tbl_vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vouchers` (
  `vhr_id` int NOT NULL AUTO_INCREMENT,
  `vhr_type` varchar(255) NOT NULL,
  `vhr_date` varchar(45) DEFAULT NULL,
  `vhr_amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`vhr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vouchers`
--

LOCK TABLES `tbl_vouchers` WRITE;
/*!40000 ALTER TABLE `tbl_vouchers` DISABLE KEYS */;
INSERT INTO `tbl_vouchers` VALUES (1,'payment',NULL,NULL),(2,'receipt',NULL,NULL),(3,'transfer',NULL,NULL);
/*!40000 ALTER TABLE `tbl_vouchers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'accounting'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddFirm`(IN firmName VARCHAR(255),  firmgstNo VARCHAR(255), firmAddress VARCHAR(255), firmStatus VARCHAR(255))
BEGIN
    INSERT INTO tbl_firms (firm_name, firm_gstno, firm_address, firm_status) VALUES (firmName, firmgstNo, firmAddress, firmStatus);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AssignUserToFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AssignUserToFirm`(IN userID INT, IN firmID INT)
BEGIN
    INSERT INTO tbl_user_firm (user_id, firm_id) VALUES (userID, firmID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetFirmUserDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetFirmUserDetails`()
BEGIN
    SELECT f.firm_name, u.usr_name
    FROM tbl_firms f
    JOIN tbl_user_firm uf ON f.firm_id = uf.firm_id
    JOIN tbl_users u ON uf.user_id = u.user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-19 19:33:48