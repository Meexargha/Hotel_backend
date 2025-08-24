# Hotel Backend API

A Node.js backend API for managing hotel staff, built with **Express.js** and **MongoDB**.  
This project allows adding, retrieving, and deleting staff members with different roles such as Chef, Manager, Worker, Receptionist, CEO, and Chairman.

---

## **Features**

- Add new staff members
- Retrieve all staff members
- Retrieve a single staff member by ID
- Delete staff members
- Built with Node.js, Express.js, and MongoDB
- Environment variables managed via `.env`

---

## **Tech Stack**

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/Meexargha/Hotel_backend.git
cd Hotel_backend
```
2.Install dependencies:
```bash:

npm install
```
3.Create a .env file in the root folder with:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
4.Run Server
```bash
npm run dev

```
---
### API Endpoints (Staff Routes)
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| POST   | /api/person     | Add a new staff member    |
| GET    | /api/person     | Get all staff members     |
| GET    | /api/person/:id | Get a single staff by ID  |
| DELETE | /api/person/:id | Delete a staff member     |

### Example Staff Data

```json
{
  "name": "Priya Singh",
  "age": 28,
  "role": "Receptionist",
  "email": "priya@example.com",
  "phone": "9876543210",
  "department": "Front Desk"
}
