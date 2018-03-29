-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 28, 2018 at 05:35 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id3574120_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `stock_id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `cropname` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `kgavail` int(5) NOT NULL,
  `costpk` int(5) NOT NULL,
  `place` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`stock_id`, `vendor_id`, `cropname`, `kgavail`, `costpk`, `place`) VALUES
(1, 1, 'Cocunut', 280, 35, 'Bellary'),
(2, 1, 'Cocunut', 253, 30, 'Bagalkot'),
(3, 1, 'Chillies', 350, 90, 'Bagalkot'),
(4, 1, 'Cocunut', 750, 22, 'Bellary'),
(5, 3, 'Chillies', 100, 70, 'Chikkamagaluru'),
(6, 3, 'Cocunut', 225, 30, 'Bellary'),
(7, 3, 'Coffee', 333, 250, 'Dakshina Kannada'),
(8, 3, 'Ragi', 120, 45, 'Bengaluru Urban'),
(9, 3, 'Rice', 350, 40, 'Kodagu'),
(11, 5, 'Jowar', 33, 12, 'Chikkaballapur'),
(12, 5, 'Maize', 45, 8, 'Chikkamagaluru'),
(17, 4, 'Cotton', 34, 12, 'Chikkamagaluru'),
(18, 4, 'Maize', 23, 67, 'Haveri'),
(19, 4, 'Chillies', 45, 12, 'Bagalkot'),
(20, 1, 'Coffee', 500, 350, 'Bengaluru Urban');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `phonenumber` bigint(20) NOT NULL,
  `password` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `place` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `phonenumber`, `password`, `place`) VALUES
(1, 'a', 1231231231, '0cc175b9c0f1b6a831c399e269772661', 'Bagalkot'),
(2, 'asd', 1234567902, '202cb962ac59075b964b07152d234b70', 'Bengaluru Rural'),
(3, 'Balu', 7760579605, '6a3358e3c83a4d40d082ceefcb1c959a', 'Bengaluru Urban');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `vendor_id` int(11) NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `phonenumber` bigint(20) NOT NULL,
  `password` varchar(35) COLLATE utf8_unicode_ci NOT NULL,
  `place` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`vendor_id`, `username`, `phonenumber`, `password`, `place`) VALUES
(1, 'v', 1234123131, '9e3669d19b675bd57058fd4664205d2a', 'Bagalkot'),
(3, 'prash', 1231321321, 'e2bd5eb970e9a1e051159a1877c31e88', 'Bagalkot'),
(4, 'as', 1234567890, 'f970e2767d0cfe75876ea857f92e319b', 'Bellary'),
(5, 'Vai', 1234567890, '6825e367626d14c6580fdc500546a2b5', 'Bengaluru Urban');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`stock_id`),
  ADD KEY `vendor_id` (`vendor_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `stock_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`vendor_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
