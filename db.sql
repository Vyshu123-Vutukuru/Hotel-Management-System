-- MySQL Database Schema for Hotel Management System

CREATE DATABASE IF NOT EXISTS hotel_system;
USE hotel_system;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'guest') NOT NULL
);

CREATE TABLE IF NOT EXISTS rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_number VARCHAR(10) NOT NULL,
    status ENUM('available', 'booked') DEFAULT 'available'
);

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    room_id INT,
    checkin_date DATE,
    checkout_date DATE,
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);