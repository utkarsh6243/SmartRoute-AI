SmartRoute-AI

Overview

SmartRoute-AI is an AI-powered route planning and traffic prediction application developed using React and Flask. The application enables users to search locations, visualize routes on an interactive map, view traffic insights, and receive AI-based road condition predictions. It is designed to provide an intelligent and user-friendly navigation experience with a scalable architecture for future enhancements.

---

## Features

- Smart route planning
- Source and destination search
- Interactive maps using Leaflet and OpenStreetMap
- AI-based route recommendations
- Traffic status visualization
- Future road condition prediction
- Distance and estimated travel time
- Responsive user interface
- Flask backend integration
- Modular React architecture

---

## Technology Stack

### Frontend

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Leaflet
- Leaflet

### Backend

- Python
- Flask
- FastAPI
- Pandas
- NumPy

### APIs and Services

- OpenStreetMap
- Nominatim Geocoding API
- OSRM Routing Engine

---

## Project Structure

```text
SmartRoute-AI
│
├── backend
│   ├── api
│   ├── database
│   ├── models
│   ├── services
│   ├── utils
│   ├── app.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── utils
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/utkarsh6243/SmartRoute-AI.git
```

```bash
cd SmartRoute-AI
```

---

## Frontend Setup

Install dependencies.

```bash
cd frontend
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows**

```bash
venv\Scripts\activate
```

**macOS / Linux**

```bash
source venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run the backend server.

```bash
python app.py
```

## Current Features

- Location search
- Interactive map visualization
- Route planning interface
- AI suggestion panel
- Traffic information card
- Future road prediction module
- Responsive dashboard layout

## Planned Enhancements

- Multiple route alternatives
- Real-time traffic integration
- Weather-aware routing
- Accident prediction
- Fuel-efficient route recommendations
- Voice navigation
- User authentication
- Route history
- Saved locations
- Machine learning-based traffic forecasting

## Future Scope
The project is designed to be extended with intelligent transportation features, including real-time traffic analytics, machine learning-based congestion prediction, navigation assistance, and smart city integration.

---

## Author
Utkarsh Sharma
GitHub: https://github.com/utkarsh6243

 License
This project is intended for educational purposes and software engineering learning.

---
 Acknowledgements

- React
- Flask
- Leaflet
- OpenStreetMap
- Nominatim API
- OSRM Routing Engine
