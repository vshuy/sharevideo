-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2020 at 10:12 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thangdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `acount`
--

CREATE TABLE `acount` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `acount`
--

INSERT INTO `acount` (`id`, `name`, `email`, `password`) VALUES
(1, 'huy', 'm134m4a1@gmail.com', '1234'),
(2, 'adming2', 'admin', 'admin'),
(3, 'admin', 'admin1', 'admin'),
(4, 'admin', '12345', 'admin'),
(5, 'adminupdate2', 'admin3', 'admin2');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(6) UNSIGNED NOT NULL,
  `content` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `timeup` varchar(50) NOT NULL,
  `linkimg` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `timeup` varchar(50) NOT NULL,
  `views` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `linkimg` varchar(50) NOT NULL,
  `linkvideo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `name`, `email`, `timeup`, `views`, `category`, `linkimg`, `linkvideo`) VALUES
(17, 'Đéo tin', 'admin', 'Sep 10 2020', '4', 'music', '5f59df96f0b45.png', '5f59df96f0b45.mp4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acount`
--
ALTER TABLE `acount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acount`
--
ALTER TABLE `acount`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
