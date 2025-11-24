# 🎵 Color Chart

A full-stack application for managing and displaying music tracks.  
Built with **Express + MongoDB** on the backend and **React + Vite** on the frontend.

---
# 📊 Jira Dashboard

Here’s a look at my Jira dashboard:

![Jira_Dashboard](Wilson_Leslie_Music_Chart_Capstone/Jira_Dashboard.png)

---

## 🚀 Features

- **Backend (Express + MongoDB)**
  - Create new track requests (`POST /trackrequest`)
  - Retrieve all tracks (`GET /trackrequest`)
  - Update a track by ID (`PUT /trackrequest/:id`)
  - Delete a track by ID (`DELETE /trackrequest/:id`)

- **Frontend (React + Vite)**
  - Fetch tracks from the backend API
  - Display tracks in a chart/table format
  - Configurable number of songs shown (default 10, customizable via props)

---

## 📂 Project Structure
project-root/ ├── models/ │   └── Track.js          # Mongoose schema ├── routes/ │   └── trackRoutes.js    # Express routes ├── controllers/          # Optional controller separation ├── client/ │   ├── src/ │   │   ├── Chart.jsx     # React component for displaying tracks │   │   └── App.jsx │   └── vite.config.js ├── server.js             # Express entry point └── README.md

---
## 📄 Application Pages

This app includes four main pages:

1. **Home**
   - Displays the **Top 10 Chart**.
   - Fetches data from the backend and shows the first 10 songs.
   - Uses the `Chart`.

2. **About**
   - Provides a summary of the application.
   - Explains the purpose: a music chart app where users can view and request tracks.

3. **Form**
   - Allows users to **submit a track request**.
   - Sends data to the backend via `POST /trackrequest`.
   - Fields: `track`, `artist`, `year`.

4. **Tracks**
   - Displays the **Top 15 Songs**.
   - Fetches data from the backend and shows the first 15 songs.
   - Uses the `Chart` component with `limit={15}`.
