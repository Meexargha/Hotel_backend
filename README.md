# 🏨 Hotel Backend API

A **Node.js backend API** for managing hotel staff, built with **Express.js** and **MongoDB**.  
This project allows adding, retrieving, updating, deleting, bulk managing, and filtering staff members with roles such as **Chef, Manager, Worker, Receptionist, CEO, and Chairman**.

---

## ⚡ Features

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

## 🛠 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Meexargha/Hotel_backend.git
cd Hotel_backend
```
2.Install dependencies:

```bash
npm install
```



# 📌 API Endpoints

# Add a new staff member
curl -X POST http://localhost:5000/api/person \
-H "Content-Type: application/json" \
-d '{"name":"Priya Singh","age":28,"role":"Receptionist","email":"priya@example.com","phone":"9876543210","department":"Front Desk"}'

# Add multiple staff members (Bulk Insert)
curl -X POST http://localhost:5000/api/person/bulk \
-H "Content-Type: application/json" \
-d '[{"name":"Rohit Sharma","age":35,"role":"Chef","email":"rohit@example.com","phone":"9876501234","department":"Kitchen"},{"name":"Anita Verma","age":30,"role":"Waiter","email":"anita@example.com","phone":"9876512345","department":"Restaurant"}]'

# Get all staff members
curl -X GET http://localhost:5000/api/person

# Get a single staff member by ID
curl -X GET http://localhost:5000/api/person/<STAFF_ID>

# Filter staff by role
curl -X GET http://localhost:5000/api/person/role/Waiter

# Update staff member details
curl -X PUT http://localhost:5000/api/person/<STAFF_ID> \
-H "Content-Type: application/json" \
-d '{"age":29,"phone":"9876543211"}'

# Delete a staff member
curl -X DELETE http://localhost:5000/api/person/<STAFF_ID>



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
