-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: agmarket
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `quantity` int(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (22,7,5,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `parentid` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'crop',0),(2,'livestock',0),(3,'machinery',0),(4,'plant and seed',0),(5,'cash crop',1),(6,'cereal',1),(7,'fruit',1),(8,'vegetable',1),(9,'other',1),(10,'bird',2),(11,'fish',2),(12,'animal',2),(13,'other',2),(14,'fertilizer spreader',3),(15,'harvester',3),(16,'plow',3),(17,'seeder',3),(18,'tractor',3),(19,'other',3),(20,'plant',4),(21,'seed',4),(22,'other',4);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commodities`
--

DROP TABLE IF EXISTS `commodities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commodities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `avail` int(15) NOT NULL,
  `vid` int(11) NOT NULL,
  `price` int(15) NOT NULL,
  `catid` int(11) NOT NULL,
  `image_url` varchar(35) NOT NULL DEFAULT 'https://i.imgur.com/F7NPA5B.png',
  PRIMARY KEY (`id`),
  KEY `vid` (`vid`),
  KEY `catid` (`catid`),
  CONSTRAINT `commodities_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vendors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `commodities_ibfk_2` FOREIGN KEY (`catid`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commodities`
--

LOCK TABLES `commodities` WRITE;
/*!40000 ALTER TABLE `commodities` DISABLE KEYS */;
INSERT INTO `commodities` VALUES (5,'Cucumber',123,8,12,8,'https://i.imgur.com/RdYA2NU.jpg'),(6,'Tomato',100,8,15,8,'https://i.imgur.com/FeTCit9.jpg'),(15,'Plow',2,9,21000,16,'https://i.imgur.com/iFikjvZ.jpg'),(16,'Tractor without plow or carriage',1,9,35000,18,'https://i.imgur.com/3p7eXp7.jpg'),(17,'Tomato Local',225,8,23,8,'https://i.imgur.com/Dyrq7cg.jpg'),(18,'Tractor Plow',3,8,19950,16,'https://i.imgur.com/rMDFzA4.jpg'),(22,'Local duck',20,11,500,10,'https://i.imgur.com/ba3vwda.jpg'),(24,'White grapes',200,11,20,7,'https://i.imgur.com/xLRpUSa.jpg'),(25,'Millate',50,11,45,6,'https://i.imgur.com/Du7YxUY.jpg'),(26,'Plow',2,11,100000,16,'https://i.imgur.com/rWldTDQ.jpg'),(27,'Brinjal',50,11,10,8,'https://i.imgur.com/jnRbuDW.jpg'),(28,'Cauliflower',25,11,35,8,'https://i.imgur.com/I7xHxve.jpg'),(29,'Capsicum',50,11,25,8,'https://i.imgur.com/YzPoecw.jpg'),(30,'Potato',60,11,16,8,'https://i.imgur.com/GABVdDR.jpg'),(31,'Pig',50,11,100,12,'https://i.imgur.com/UFTusAg.jpg'),(32,'Cotton',20,11,50,5,'https://i.imgur.com/IEvcucC.jpg'),(33,'Sugarcane',250,11,15,5,'https://i.imgur.com/tk6eej7.jpg'),(34,'Potatoes ',200,12,20,8,'https://i.imgur.com/TQ1W0jy.jpg'),(35,'Rice harvester',1,11,120000,15,'https://i.imgur.com/KgapiA4.jpg'),(36,'Fresh Apple',250,8,140,7,'https://i.imgur.com/ATHrJWG.jpg'),(37,'Pumpkin',150,13,40,8,'https://i.imgur.com/76mxQjb.png'),(38,'Pumpkin',150,13,40,8,'https://i.imgur.com/kgHJFpH.png');
/*!40000 ALTER TABLE `commodities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(35) NOT NULL,
  `place` varchar(30) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `lon` decimal(10,8) DEFAULT NULL,
  `saltstring` varchar(21) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (6,'p','d2c4bee02c128ddf5f9e8c07fd5ba6ee','Bengaluru Urban',9999999999,'p@p.p',13.16158040,77.63451270,'10uzEbOb3jqE6MlikxAW'),(7,'Pradeep','d279c07884110c343560604a7f3422b0','Dakshina Kannada',8660495335,'prad33ep@gmail.com',13.15971950,77.63607400,'jlqP2AF7rBYylabKRuBN'),(8,'Rahul','d646b52a57a4965033eafd8822ba86f2','Mysuru',9972202601,'gsjsj@gmaul.com',12.29581040,76.63938050,'ILPBwPpCWDJlA1Y3NTCj'),(9,'aishwarya','d745b0454cade50dcd47d263c936169f','Bidar',9482545664,'aishuvk.96@gmail.com',13.15987970,77.63579650,'GSxTbef1sfemaF0Be3rn'),(10,'monika','e7923a3a55e6438933b46d49d55be59b','Belgaum',9066257413,'moni.sah28@gmail.com',13.16003260,77.63598650,'2PsMy2Oj2x1uqUDYpnE5'),(11,'ramesh','3fbf191309837a04b59cb753d2a5ada3','Bagalkot',9842078509,'lrbasnet@gmail.com',12.97002470,77.65361250,'ORI1GwUFJ3DS1DseAtKA'),(12,'Bismita Khadka','ded34da379a9fb97ac3a0168f2c7e882','Others',9816650068,'bismitak6@gmail.com',46.87869140,-96.78772410,'L3hb8lzHfISv0lYoObUx'),(13,'Renu','783c535064472ee0409adca563270441','Hassan',9842103493,'lrbasnet@gmail.com',26.65304094,87.26910433,'ofNaOaC2FF1KewfU3thO');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `comid` int(11) NOT NULL,
  `quantity` int(25) NOT NULL,
  `ordertype` varchar(10) NOT NULL,
  `status` varchar(30) DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `comid` (`comid`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`comid`) REFERENCES `commodities` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (6,6,6,50,'delivery','done','2018-05-04 12:51:13');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `rating` int(2) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `vid` (`vid`),
  KEY `uid` (`uid`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vendors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (7,6,8,4,'2018-05-07 19:38:59'),(8,6,9,4,'2018-05-07 07:51:12'),(9,6,10,2,'2018-05-05 20:16:13'),(10,6,8,4,'2018-05-07 19:38:59'),(11,6,8,4,'2018-05-07 19:38:59');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid` int(11) NOT NULL,
  `star5` int(11) NOT NULL,
  `star4` int(11) NOT NULL,
  `star3` int(11) NOT NULL,
  `star2` int(11) NOT NULL,
  `star1` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vid` (`vid`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vendors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(35) NOT NULL,
  `place` varchar(30) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `lon` decimal(10,8) DEFAULT NULL,
  `saltstring` varchar(21) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (8,'a','881d80c2cf5337e3fcb499f7d528bbeb','Bengaluru Urban',1111111111,'a@a.a',13.16155280,77.63439390,'78UOZ9xUhSfRnfsYouDW'),(9,'x','c4756b3b8609c8204e2ebcfc5e657d3f','Bengaluru Urban',8888888888,'x@x.x',13.16144980,77.63425940,'1WiXDjklMs9jEyJ9Srux'),(10,'7','ca82ef2f97b94c480bc55459582129a8','Bengaluru Urban',7777777777,'7@7.7',13.16184490,77.63487750,'5SvT6uENqPlhKQqW5gB7'),(11,'raunak','01568f67bc24390472b71af678ffd059','Bengaluru Rural',8123998921,'',13.28469930,77.60778650,'P6XtcnIgLNKEtfC9bLoN'),(12,'Pradeep Gautam','d34ef0f8279dbb7d6645f0b30849b149','Bidar',9842079855,'prad33ep@gmail.com',17.91487990,77.50461010,'VN5aBOqZBUPhh5nZy0th'),(13,'Bismita Khadka','c48132eea84ad8de4a8f92a53d5cecc9','Others',9816650068,'bismitak6@gmail.com',46.87869140,-96.78772410,'9rtjLxK7TQf7CRagRwAB');
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-08 22:36:31
