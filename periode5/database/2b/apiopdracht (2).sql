-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 10, 2021 at 12:00 PM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apiopdracht`
--

-- --------------------------------------------------------

--
-- Table structure for table `cursewords`
--

CREATE TABLE `cursewords` (
  `id` int NOT NULL,
  `word` varchar(255) NOT NULL,
  `severity` int NOT NULL,
  `aproved` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cursewords`
--

INSERT INTO `cursewords` (`id`, `word`, `severity`, `aproved`) VALUES
(1, 'kanker', 100, 0),
(2, 'tering', 100, 1),
(3, 'kut', 100, 1),
(4, 'kaas', 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int UNSIGNED NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `naam` varchar(255) NOT NULL,
  `beschrijving` text NOT NULL,
  `prijs` decimal(6,2) NOT NULL,
  `toegevoegd_op` timestamp NOT NULL,
  `gewijzigd_op` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `naam`, `beschrijving`, `prijs`, `toegevoegd_op`) VALUES
(1, 1, 'Fanta', 'sinaasappel ', '9.00', '2021-09-20 22:00:00'),
(2, 1, 'remcola', 'Lekkah', '3.00', '2021-09-21 22:00:00'),
(5, 1, 'remcola', 'Lekkah', '3.00', '2021-09-21 22:00:00'),
(6, 2, 'naam', 'beschrijving', '3.00', '2021-09-20 22:00:00'),
(8, 2, '', '', '3.00', '2021-09-21 17:00:00'),
(9, 2, 'naam', 'beschrijving', '3.00', '2021-09-21 17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int NOT NULL,
  `naam` varchar(255) NOT NULL,
  `favorieteagent` varchar(255) NOT NULL,
  `bericht` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `naam`, `favorieteagent`, `bericht`) VALUES
(21, 'fenedefdsfs', 'omen', 'cool agent'),
(22, 'name', 'reyna', 'text'),
(23, 'fojbofg', 'cypher', 'gtrgf');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `permission` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`, `permission`) VALUES
(7, 'joost', 'PuppYLOver2021', '82f748c5-9840-4d1e-bfbb-d21acfa77484', 0),
(8, 'pieter', 'klein', 'asdasdwijIUHIULHDFoiu', 0),
(9, 'joost', 'PuppYLOver2021', 'cc973d60-337c-46d0-b144-737be5caaecc', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cursewords`
--
ALTER TABLE `cursewords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cursewords`
--
ALTER TABLE `cursewords`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
