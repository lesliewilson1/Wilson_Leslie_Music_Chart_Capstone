# 🎵🔵🔴🟢 Color Chart 🔵🔴🟢🎵

## 📎About
A full-stack application for managing and displaying music tracks.  
Built with **Express + MongoDB** on the backend and **React + Vite** on the frontend. **Visit the app [here](https://color-chart-frontend.onrender.com/).**
![Home](Images/Home.png)

---
# 📄 The Process

I tracked my progress using Jira, and created the idea on a piece of paper (you could say this was my 'wireframe')

## 📊 Jira Dashboard

Here’s a look at my Jira dashboard:

![Jira_Dashboard](Images/Jira_Dashboard.png)

---
## 🛠️ Features

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

## 🔗 API Routes

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/trackrequest`       | Fetch all tracks             |
| POST   | `/trackrequest`       | Add a new track              |
| PUT    | `/trackrequest/:id`   | Update a track by ID         |
| DELETE | `/trackrequest/:id`   | Delete a track by ID         |

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

---
## 🤔 Improvements

There's a few!

* THe formula needs to be updated
* Incorporate music
   * I think this goes without saying considering this is a music application after all
* Update:
   * background image
   * reorganize styling
* Articles page
* Add a description of the mood or genre in Home
* Refactor code


---
## 🪶Copyright

Pull requests are welcome. Good Luck.

---

## 🤩Acknowledgement

A special thank you to all the people who helped me along the way! You know who you are... I liked your videos on YouTube!😉

