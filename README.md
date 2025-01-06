# MongoDB with Express - Cursors and Aggregation Queries

## Project Overview

This project demonstrates the use of MongoDB cursors and aggregation queries within an Express server. The application includes routes to fetch data efficiently and gather statistical insights.

### Features

1. **Cursor-based Data Fetching**: Efficiently iterates over large datasets using MongoDB cursors.
2. **Aggregation Queries**: Collects statistical data.

### Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up `.env` with your MongoDB connection string.
4. Start the server: `npm start`.

### Testing Instructions

Use Postman or any API client to test the endpoints:

1. **GET /api/users**: Fetch all items.
2. **GET /api/users/stats**: Fetch statistical data.
