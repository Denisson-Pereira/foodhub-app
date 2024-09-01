CREATE DATABASE  IF NOT EXISTS `foodhub` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `foodhub`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: foodhub
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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Burger','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group.png?alt=media&token=d42d4657-9af1-4ac4-84e6-a2774c183cfd'),(2,'Donat','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group%20(1).png?alt=media&token=d6633fe5-d259-4a29-a53c-908de806be2e'),(3,'Pizza','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group%20(2).png?alt=media&token=44c09aa9-c76d-42b3-b939-193dc2527a55'),(4,'Mexican','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group%20(3).png?alt=media&token=77008dea-fbba-41ce-b447-146121be92ab'),(5,'Asian','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group%20(4).png?alt=media&token=42c8898d-1883-4309-9bd5-0aa1e5e15957'),(6,'Cream','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/categorias%2FMask%20Group%20(5).png?alt=media&token=3d815547-214d-4f72-9534-c2dbc4a5b60e');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `establishments`
--

DROP TABLE IF EXISTS `establishments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `establishments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `evaluation` varchar(10) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `tag_1` varchar(50) DEFAULT NULL,
  `tag_2` varchar(50) DEFAULT NULL,
  `tag_3` varchar(50) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `cover` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `establishments`
--

LOCK TABLES `establishments` WRITE;
/*!40000 ALTER TABLE `establishments` DISABLE KEYS */;
INSERT INTO `establishments` VALUES (1,'Subway','5','Monte o sanduíche dos seus sonhos no Subway! Ingredientes frescos e sabor incomparável esperam por você.','Free delivery','10-15 mins','burger','fast food','chicken','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2Fimage%2076.png?alt=media&token=53ab80e1-13c0-4e11-be11-f88c7d0fac45','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FMask%20Group%20(8).png?alt=media&token=b78bda12-c2ce-4a80-9d0c-3039f9f1bf3a'),(2,'Jimmy John\'s','4','Desfrute de lanches saborosos e feitos na hora em nossa lanchonete. Um lugar perfeito para matar a fome com qualidade e rapidez!','Free delivery','15 - 50 mins','burger','fast food','Pizza','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2Fimage%2035.png?alt=media&token=5da6e328-8978-4249-97d2-709fe6ffdf5e','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FFood%20image%202.png?alt=media&token=a62a2e8c-4d95-42be-ad31-4962ff420c1b'),(3,NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `establishments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `evaluation` varchar(10) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `establishment` varchar(50) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Margherita Bliss ','5','A classic Margherita with fresh tomatoes, mozzarella, and basil','49999','pizza','Subway','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FRed%20Pizza.png?alt=media&token=66048747-3137-49d2-849e-e7118683761a'),(2,'Pepperoni Supreme ','4','Pepperoni pizza loaded with spicy slices and melted cheese','3999','pizza','Subway','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FChicken%20wailan.png?alt=media&token=21eb816b-f5b7-42a7-b134-b8144cb95ff6'),(3,'BBQ Chicken Delight','3','Enjoy a BBQ Chicken pizza with tangy sauce and juicy chicken','1999','pizza','Jimmy John\'s','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FRed%20Pizza.png?alt=media&token=66048747-3137-49d2-849e-e7118683761a'),(4,'Veggie Garden Extravaganza','2','Indulge in a Veggie Delight with mushrooms, peppers, and olives','4499','pizza','Jimmy John\'s','https://firebasestorage.googleapis.com/v0/b/foodhub-ba95f.appspot.com/o/estabelecimentos%2FChicken%20wailan.png?alt=media&token=21eb816b-f5b7-42a7-b134-b8144cb95ff6');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'foodhub'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-31 21:00:13
