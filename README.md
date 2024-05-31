# Express React Postgres Project

This project is a full-stack application built using Express.js for the backend, React.js for the frontend, and PostgreSQL as the database. It includes features like user authentication, an admin panel for managing users, and a post system with upvote/downvote functionality.

## Features

- **User Authentication**: Register, login, and secure routes.
- **Admin Panel**: Manage users and view all tables.

## Technologies Used

- **Backend**: Node.js, Express.js, Sequelize (ORM), PostgreSQL
- **Frontend**: React.js, Redux
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/w1lt/express-react-postgres.git
   cd express-react-postgres
   ```

2. **Install dependencies**:

   - Backend:
     ```sh
     cd backend
     npm install
     ```
   - Frontend:
     ```sh
     cd frontend
     npm install
     ```

3. **Configure Environment Variables**:

   - Create a `.env` file in the `backend` directory with the following content:
     ```
     PORT=5000
     DATABASE_URL=your_postgres_database_url
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**:
   - Backend:
     ```sh
     cd backend
     npm start
     ```
   - Frontend:
     ```sh
     cd frontend
     npm start
     ```

## Usage

- Access the frontend at `http://localhost:3000`.
- The backend runs on `http://localhost:5000`.

## Project Structure

- **backend**: Contains the Express server, models, controllers, and routes.
- **frontend**: Contains the React application with components, Redux setup, and styling.

## License

This project is licensed under the MIT License.

## Contact

- GitHub: [w1lt](https://github.com/w1lt)

---
