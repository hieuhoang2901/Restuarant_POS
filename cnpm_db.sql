-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: cnpm1_db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `food`
--

CREATE DATABASE IF NOT EXISTS `cnpm_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cnpm_db`;
DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` (`id`, `name`, `description`, `image`, `price`, `type`) VALUES
(4, 'MAGHERITA', 'Pizza xốt cà chua & Phomai', '1638071783308-Pepperonis-Pizza-Margherita.jpg', 180000, 'pizza'),
(5, 'AMERICAN FRIES', 'khoai tây chiên kiểu mĩ', '1638071909574-Pepperonis-American-Fries.jpg', 70000, 'starter'),
(6, 'GREEN SALAD', 'Xà lách, cà chua, dưa chuột, rau chân vịt, hành tây trộn xốt dressing', '1638072366198-Pepperonis-Green-Garden-Salad.jpg', 80000, 'salad'),
(7, 'SPAGHETTI CHICKEN', 'Mỳ Ý với thịt gà, nấm và xốt kem', '1638073612553-Pepperonis-Spaghetti-Creamy-Chicken-1.jpg', 120000, 'pasta'),
(8, 'BBQ BEEF', 'Pizza với thịt ba chỉ bò, jambong, hành tây, nấm xào, xốt BBQ và phomai', '1638085666990-Pepperonis-Pizza-BBQ-Beef.jpg', 180000, 'pizza'),
(9, 'BOLOGNAISE', 'Pizza thịt bò xay, ngô hạt, ớt Đà Lạt, xốt Thousand Island & phomai', '1638085738340-Pepperonis-Pizza-Bolognaise.jpg', 140000, 'pizza'),
(10, 'PEPPERONI', 'Pizza xúc xích tiêu cay, xốt cà chua & phomai', '1638085836583-Pepperonis-Pizza-Pepperonis.jpg', 130000, 'pizza'),
(11, 'CHICKEN BASKET', 'Cánh gà & gà viên chiên giòn dùng kèm khoai tây chiên', '1638085925007-Pepperonis-Chicken-Basket.jpg', 90000, 'starter'),
(12, 'CHEFS WINGS', 'Chọn: cánh gà chiên mắm hoặc tẩm bột chiên giòn', '1638086124185-Pepperonis-Chefs-Wings.jpg', 90000, 'starter'),
(13, 'RIB TIP\'S', '5 miếng sườn nhập khẩu dùng kèm khoai tây chiên xóc bơ tỏi', '1638086209791-Pepperonis-Rib-Tips.jpg', 90000, 'starter'),
(14, ' SPECIAL SALAD', 'Salat rong biển với trứng tôm và xốt đặc biệt', '1638086320623-Pepperonis-Special-Salad.jpg', 90000, 'salad'),
(15, 'CAESAR SALAD', 'Xà lách thái nhỏ, thịt ba chỉ xông khói, bánh mỳ sấy với trứng chần và xốt...', '1638086380139-Pepperonis-Caesar-Salad.jpg', 90000, 'salad'),
(16, 'RUSSIAN SALAD', 'Khoai tây, jambong, đậu Hà Lan, cà rốt, dưa chuột muối, ngô hạt, trứng và xốt mayonnaise', '1638086537929-Pepperonis-Creamy-Russian-Salad.jpg', 90000, 'salad'),
(17, 'SPAGHETTI BEEFY', 'Mỳ Ý với jambong, xúc xích tiêu cay, thịt bò xay & xốt cà chua', '1638086656967-Pepperonis-Spaghetti-Beefy.jpg', 120000, 'pasta'),
(18, 'SPAGHETTI CARBONARA', 'Mỳ Ý với jambong và xốt kem', '1638086727135-Pepperonis-Spaghetti-Carbonara.jpg', 130000, 'pasta'),
(19, 'SPAGHETTI SEAFOOD', 'Mỳ Ý với ngao, tôm, mực, cá. Lựa chọn xốt kem tỏi hoặc xốt cà chua cay', '1638086910400-Pepperonis-Spaghetti-Seafood.jpg', 140000, 'pasta'),
(20, 'BOLOGNAISE BAKE', 'Mỳ Ý và thịt bò nghiền, xốt bechamel bỏ lò với phomai', '1638087003657-Pepperonis-Bolognaise-Bake.jpg', 140000, 'pasta'),
(21, 'BIG AUSSIE SAUSAGE', 'Xúc xích với hành xào. Dùng kèm khoai tây xóc bơ tỏi và xốt cay', '1638087508860-Pepperonis-Big-Aussie-Sausage.jpg', 110000, 'mains'),
(22, 'HONEY CHICKEN THIGH & RICE', 'Đùi gà rút xương tẩm mật ong, dùng kèm rau xào và cơm trắng', '1638087571716-5e6c3237-4161-454d-8028-0576ee843458.jpg', 140000, 'mains'),
(23, 'SEAFOOD FRIED RICE', 'Cơm chiên rau củ với hải sản', '1638087658576-Pepperonis-Seafood-Fried-Rice.jpg', 130000, 'mains'),
(24, 'COMBINATION FRIED RICE', 'Cơm chiên thập cẩm với tôm, gà và thịt bò', '1638087725762-Pepperonis-Combination-Frie-Rice.jpg', 130000, 'mains'),
(25, '1/4 RACK', '4 dẻ sườn nhập khẩu nướng xốt BBQ', '1638087815118-Pepperonis-1-4-Rack.jpg', 180000, 'steaks_ribs'),
(26, '1/2 RACK', '8 dẻ sườn nhập khẩu nướng xốt BBQ', '1638087867829-Pepperonis-1-2-Rack.jpg', 350000, 'steaks_ribs'),
(27, 'SIZZING PEPPER STEAK', '140gr thịt bò Mỹ nhập khẩu nướng, dùng kèm khoai tây chiên xóc bơ tỏi, hành, nấm,...', '1638087974696-Pepperonis-Sizzling-Pepper-Steak.jpg', 160000, 'steaks_ribs'),
(28, 'STEAK & RIBS', '140gr thịt bò Mỹ nhập khẩu, sườn nhập khẩu nướng, dùng kèm khoai tây xóc bơ tỏi. ', '1638088212134-Pepperonis-Steak-&-Ribs.jpg', 230000, 'steaks_ribs'),
(29, 'CHEESE BURGER', 'Hăm-Bơ-gơ thịt bò với hành xào, xà lách, cà chua & phomai. Dùng kèm khoai tây chiên', '1638088279652-Pepperonis-Cheese-Burger.jpg', 100000, 'steaks_ribs'),
(30, 'COKE', 'COKE', '1638088435067-1ef6ba08-b8de-4daa-b7f5-b749fa396ebd.jpg', 20000, 'drinks'),
(31, 'DIET COKE', 'DIET COKE', '1638088544390-28cb3adc-0689-425e-8bdd-9872ac6e367e.jpg', 20000, 'drinks'),
(32, 'SODA', 'SODA', '1638088565656-b4fe2063-3a0b-4392-aac3-8950a96ea30f.jpg', 20000, 'drinks'),
(33, 'NƯỚC CHANH', 'Nước Chanh', '1638088673086-1592538237845Lemon Juice.jpg', 30000, 'drinks'),
(34, 'NƯỚC DƯA HẤU', 'Nước dưa hấu', '1638088760645-8d9f096e-caf3-478f-9982-78255f1f7b0c.jpg', 30000, 'drinks'),
(35, 'NƯỚC CHANH LEO', 'Nước chanh leo', '1638088791438-1592382652691Passion.jpg', 30000, 'drinks'),
(36, 'NƯỚC CAM', 'nước cam', '1638088817155-1592382820585Orange.jpg', 50000, 'drinks'),
(37, 'TRÀ LIPTON VỚI SỮA', 'trà lipton với sữa', '1638088903202-1592539866102Lipton Milk Tea.jpg', 30000, 'drinks'),
(38, 'ICE CREAM SHAKES', 'Chọn kem Vani/ Dâu/ Socola. Xay cùng sữa tươi và đá', '1638088951524-1592461745005Ice cream shakes.jpg', 50000, 'drinks'),
(39, 'SPICY NOODLES', 'mì cay khô hàn quốc trộn nước xốt cà ri', '1638089775366-spicy-noodle.png', 120000, 'pasta'),
(40, 'FRIED CHICKEN', 'Gà quay truyền thống kèm tiêu đen, mộc nhĩ,...', '1638090055955-chicken.png', 180000, 'mains'),
(41, 'HOT PIZZA', 'pizza sốt nấm và cà chua', '1638090202056-pizza.png', 130000, 'pizza'),
(42, 'CHEESE TUNA', 'Pizza cá ngừ trộn xốt Thousand Island, ngô, hành tây xào và phomai', '1638090387364-Pepperonis-Pizza-Cheesy-Tuna.jpg', 210000, 'pizza');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listitemorder`
--

DROP TABLE IF EXISTS `listitemorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listitemorder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderID` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_ibfk_2` (`orderID`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listitemorder`
--

LOCK TABLES `listitemorder` WRITE;
/*!40000 ALTER TABLE `listitemorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `listitemorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userID` int NOT NULL,
  `totalCost` int NOT NULL,
  `orderStatus` varchar(255) NOT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderID`),
  KEY `userID` (`userID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'Customer',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'haha@gmail.com','123456','Haha Haaa','Ho Chi Minh','0556365365','Admin'),(2,'akirakuma5@gmail.com','123456','akirakuma','Binh Dinh','0774589578','Admin'),(3,'mytest@gmail.com','123456','test user','Ha Noi','05863259668','Customer'),(4,'clerk@gmail.com','123456','Toi la Clerk','dasdsa','0000000','Clerk'),(5,'customer@gmail.com','123456','Toi la customer','d','00000000','Customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-26  7:09:34
