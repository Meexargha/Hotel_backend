#  Hotel Backend API

A **Node.js backend API** for managing hotel staff, built with **Express.js** and **MongoDB**.  
This project allows adding, retrieving, updating, deleting, bulk managing, and filtering staff members with roles such as **Chef, Manager, Worker, Receptionist, CEO, and Chairman**.

---

##  Features

- Add new staff members
- Retrieve all staff members
- Retrieve a single staff member by ID
- Update staff member details
- Delete staff members
- Bulk insert multiple staff members at once
- Filter staff by role
- Built with Node.js, Express.js, and MongoDB
- Environment variables managed via `.env`

---

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Meexargha/Hotel_backend.git
cd Hotel_backend
```
2.Install dependencies:

```bash
npm install
```



#  API Endpoints

| Method | Endpoint                        | Description                          |
|--------|---------------------------------|--------------------------------------|
| POST   | /api/person                     | Add a new staff member               |
| POST   | /api/person/bulk                | Add multiple staff members (bulk)    |
| GET    | /api/person                     | Get all staff members                 |
| GET    | /api/person/:id                 | Get a single staff member by ID       |
| GET    | /api/person/role/:role          | Get staff filtered by role            |
| PUT    | /api/person/:id                 | Update staff member details           |
| DELETE | /api/person/:id                 | Delete a staff member                 |



#Example Staff Data
```bash
{
  "name": "Priya Singh",
  "age": 28,
  "role": "Receptionist",
  "email": "priya@example.com",
  "phone": "9876543210",
  "department": "Front Desk"
}
```
#bulk Staff Data
```bash
[
  {
    "name": "Rohit Sharma",
    "age": 35,
    "role": "Chef",
    "email": "rohit@example.com",
    "phone": "9876501234",
    "department": "Kitchen"
  },
  {
    "name": "Anita Verma",
    "age": 30,
    "role": "Waiter",
    "email": "anita@example.com",
    "phone": "9876512345",
    "department": "Restaurant"
  }
]
```
## Contributing
1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a Pull Request


# Architecture Drawing: Hotel Backend API

This textual architecture drawing illustrates the main components and their interactions for the **Hotel Backend API**. This Node.js backend application leverages **Express.js** for HTTP routing and **MongoDB** as a database to efficiently manage hotel staff.

---

## 1. High-Level System Overview

```
+---------------------+
|    Client Apps      |
| (Web/Mobile/Admin)  |
+----------+----------+
           |
           v
+---------------------+
|   Express.js API    |
+---------------------+
           |
           v
+---------------------+
|    MongoDB Atlas    |
|   (Staff Database)  |
+---------------------+
```

---

## 2. Express.js API Layer

- **Routes**: `/staff`, `/staff/:id`, `/staff/bulk`, `/staff/filter`
- **Controllers**: handle business logic for each endpoint.
- **Middleware**: authentication, validation, error handling.

---

## 3. MongoDB Schema

**Staff Collection (staff):**
- `_id`
- `name`
- `role` (Chef, Manager, Worker, Receptionist, CEO, Chairman)
- `contact`
- `address`
- `salary`
- `dateOfJoining`
- ... (other fields)

---

## 4. Endpoints

| Endpoint            | Method | Description                                     |
|---------------------|--------|-------------------------------------------------|
| `/staff`            | POST   | Add a new staff member                          |
| `/staff`            | GET    | List all staff members                          |
| `/staff/:id`        | GET    | Get details of a specific staff member          |
| `/staff/:id`        | PUT    | Update a staff member's details                 |
| `/staff/:id`        | DELETE | Remove a staff member                           |
| `/staff/bulk`       | POST   | Bulk add or update staff members                |
| `/staff/filter`     | GET    | Filter staff by role, date, etc.                |

---

## 5. Staff Management Flow

```
(Client) --> [API Endpoint] --> (Controller) --> [MongoDB Query]
                   ^                             |
                   |                             v
              (Response) <-------------------- (Data)
```

---

## 6. Example Data Model (Mongoose Schema)

```js
const StaffSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ["Chef", "Manager", "Worker", "Receptionist", "CEO", "Chairman"] },
  contact: String,
  address: String,
  salary: Number,
  dateOfJoining: Date,
  // ...other fields
});
```

---

## 7. Role-Based Filtering

- The `/staff/filter` endpoint accepts query parameters like `role=Chef` to fetch only Chefs, or any other role.

---

## 8. Bulk Operations

- `/staff/bulk` allows adding or updating multiple staff records in one request, increasing operational efficiency.

---

## 9. Security & Middleware

- **Authentication**: Token-based (e.g., JWT)
- **Validation**: Ensures correct data before DB operations.
- **Error Handling**: Unified error responses.

---

## 10. Deployment

- **Node.js** server hosted on a cloud provider (e.g., AWS, Heroku).
- **MongoDB Atlas** for managed, scalable database storage.

---

**Summary:**  
The Hotel Backend API is a modular, scalable system that supports comprehensive staff management through RESTful endpoints, robust data modeling, and secure, validated interactions.
