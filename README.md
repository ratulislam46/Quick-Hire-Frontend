# QuickHire | Modern Job Portal Solution

QuickHire is a comprehensive, full-stack job portal platform designed with a minimalist aesthetic. It allows users to browse jobs by category, view detailed descriptions, and apply directly through a streamlined interface.

---

## Live Demo

**Live Site:** [Click Here](https://quick-hire-job-portal.netlify.app/)
**Backend Repesitory** [Click Here](https://github.com/ratulislam46/Quick-Hire-Backend)
**Backend API Link:** [Click Here](https://quick-hire-backend-rho.vercel.app)

---

## Key Features

- **Explore by Category**: Dynamic job browsing based on industry sectors like Design, Sales, Marketing, and Technology.
- **Featured & Latest Jobs**: A curated homepage experience showcasing the most relevant and recent job openings.
- **Search & Filter**: Find the perfect role using keyword search and filters for Category and Location.
- **Detailed Job View**: Individual job pages providing full descriptions, company details, and posting dates.
- **Apply Now System**: A seamless "Apply Now" form that captures applicant data, resume links, and cover notes directly to the database.
- **Admin Job Management**: Add new job listings and delete existing ones through a simple admin interface.
- **RESTful API Integration**: Fully structured backend with modular routes, controllers, and validation.
- **Clean Code Structure**: Modular components, organized folder structure, and meaningful naming conventions.
- **Responsive UI**: Optimized for a pixel-perfect experience across mobile, tablet, and desktop devices.

---

## Tech Stack

| Frontend      | Backend     | Database | Tools         |
|---------------|------------|----------|----------------|
| React.js      | Node.js    | MongoDB  | Tailwind CSS   |
| Axios         | Express.js |          | Lucide Icons   |
| React Router  | REST API   |          | SweetAlert2    |
| Firebase      |                       | Toast          |
                                        | Framer Motion  |

---

## API Endpoints

### Jobs

```bash
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
DELETE /api/jobs/:id
```

### Applications

```bash
POST   /api/applications
```

---

Relationship:

> One Job → Multiple Applications

---

## Installation & Setup

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=mongodb+srv://quick-hire:AG4nayqCBn8W3xPU@cluster0.ibgq1ve.mongodb.net/quickHireDB?retryWrites=true&w=majority&appName=Cluster0
```

### Frontend (.env if needed)

```env
VITE_apiKey=AIzaSyDjMIfaZmVa2Cuon63y68NzxsU6PQ5g33k
  VITE_authDomain=jtl-zk.firebaseapp.com
  VITE_projectId=jtl-zk
  VITE_storageBucket=jtl-zk.firebasestorage.app
  VITE_messagingSenderId=153283858218
  VITE_appId=1:153283858218:web:e09847cf07ffa4cd3b5853
  VITE_measurementId=G-E1RKFX9MYB
```

---

## Project Structure

### Frontend

```
/client
 ├── components
 ├── pages
 ├── routes
```

---

## Development Approach

- Designed database schema first
- Implemented RESTful API
- Connected frontend with backend
- Followed Figma UI structure
- Implemented validation (client + server)
- Maintained clean Git commit history
- Ensured full responsiveness

---

Run the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
npm install
npm run dev
```
---

## Credentials for Testing
* **Admin Email**: ratul@gmail.com
* **Admin Password**: 123456

* **User Email**: anisul@gmail.com
* **User Password**: 123456