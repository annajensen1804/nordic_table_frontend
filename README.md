# Nordic Table – Frontend Portfolio Project

A modern, responsive web application and desktop backoffice dashboard developed as a portfolio project during my Web Developer education at **Media College Denmark**.

The project is built for **Nordic Table**, a high-end restaurant focused on Nordic ingredients, quality, and minimalist design. The application enables customers to explore the menu and book tables online, while providing staff with an administrative control panel to manage dishes.

## Purpose & Core Features

The application is engineered strictly **mobile-first** (optimized from 390px up to 1440px desktop) for the public user experience, while the management system is optimized for desktop displays.

### Frontend & Guest Flow (Mobile-First)
*   **Dynamic Landing Page:** Features a hero banner, visual presentation layout, dynamic reservation teasers, and a signature dishes showcase component (`isSignature`) fetched from the API.
*   **Full Menu Architecture (`/menu`):** Dynamically loads all dishes from the API, grouping them cleanly into traditional courses: starters (*forret*), main courses (*hovedret*), and desserts (*dessert*).
*   **Online Table Booking (`/booking`):** A fully validated table reservation form capturing guest requirements (table size for 1–12 people, times, and contact data) and submitting them via `POST` requests.

### Backoffice Dashboard (Desktop View)
*   **Menu CRUD Operations:** A secure administrative workspace allowing staff to view all items, create new dishes (`POST`), edit existing recipes (`PUT/PATCH`), and remove entries (`DELETE`).
*   **UX/UI Resilience:** Built-in loading indicators, custom 404 error routes, and friendly interactive error status handlers for failed API requests.

## 🛠️ Tech Stack & Methodology

*   **Frontend Framework:** React + Vite (utilizing modern JavaScript ES6+)
*   **Typography:** Custom design fonts implemented via *Cormorant Garamond* (headings) and *Inter* (body text).
*   **Styling:** Semantically clean HTML5 and Module CSS, incorporating reusable component properties and mobile-first media queries.
*   **Data Handling:** Asynchronous JavaScript integration (`fetch`) connecting to a local MongoDB/Express REST API backend.
*   **Development Practices:** High emphasis on web accessibility (WCAG standard contrasts), modular component structure, and code profiling with AI assistance.

## Development & Local Setup

*Note: This repository contains the frontend application. The backend server and MongoDB database run locally and are not public.*

### 1. Installation
Clone the repository:
```bash
git clone https://github.com
cd nordic_table_frontend
```

Install the required node modules:
```bash
npm install
```

### 2. Configuration
The connection parameters to the API are managed in the central settings file (`src/settings.js`). By default, it is configured to link with the local backend port:
```javascript
export const serverPath = `http://localhost:3042`;
export const authmode = false; 
```

### 3. Running the App
To start the Vite development server locally:
```bash
npm run dev
```
The application will launch and be accessible in your browser at `http://localhost:5173`.
