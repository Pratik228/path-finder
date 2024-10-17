Certainly! Here's a nice, straightforward README.md file for your project:

```markdown
# Path Finder

A simple web application that visualizes the shortest path between two points on a grid using the BFS (Breadth-First Search) algorithm.

## Features

- Interactive 20x20 grid
- Set start and end points
- Find the shortest path between points
- Reset functionality

## Tech Stack

- Frontend: React with Vite
- Backend: Node.js with Express
- Styling: Tailwind CSS

## Setup and Running

### Backend

1. Navigate to the backend directory:
```

cd backend

```

2. Install dependencies:
```

npm install

```

3. Start the server:
```

npm start

```
The server will run on `http://localhost:7777`.

### Frontend

1. Navigate to the frontend directory:
```

cd frontend

```

2. Install dependencies:
```

npm install

```

3. Start the development server:
```

npm run dev

```
The application will be available at `http://localhost:5173`.

## How to Use

1. Click on a cell to set the start point (green).
2. Click on another cell to set the end point (red).
3. Click "Find Path" to visualize the shortest path (blue).
4. Use "Reset" to clear the grid and start over.

## API Endpoint

- POST `/api/find-path`
- Accepts: `{ start: [x, y], end: [x, y] }`
- Returns: `{ path: [[x, y], ...] }` or `{ message: "No Path found" }`

![alt text](image.png)

```
