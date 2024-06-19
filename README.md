# Auth App

A simple authentication service built using Next.js and deployed on Vercel.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description

Auth App is a streamlined authentication service that provides secure login, registration, and password management functionalities. It is built using the Next.js framework and leverages modern authentication practices.

### Key Directories and Files

- **actions/**: Contains server-side actions related to authentication.
- **app/**: Houses the main application components, including protected and public routes.
- **components/**: Reusable UI components and specific elements for authentication.
- **data/**: Data models and related logic.
- **hooks/**: Custom hooks for role and user management.
- **lib/**: Utility functions and libraries, including authentication logic and database connections.
- **prisma/**: Database schema.
- **public/**: Public assets like icons and images.
- **schemas/**: Validation schemas and related definitions.

## Installation

To get started with the Auth App, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/danielh987/auth-app.git
   cd auth-app
2. **Install the dependencies:**

    ```bash
    npm install
3. **Set up environment variables:**

    Create a .env file in the root directory and configure the necessary variables. Here’s an example:
    ```bash
    DATABASE_URL=your-database-url
    NEXTAUTH_URL=your-nextauth-url
4. **Run the development server:**

    ```bash
    npm run dev
    ```
    
    Open http://localhost:3000 in your browser to see the app.

## Usage

After installation, you can start using the app by navigating to the provided routes. The main functionalities include:

- **`User Registration and Login`**: Accessible through `/auth/register` and `/auth/login`.
- **`Password Management`**: Reset and update passwords through `/auth/reset` and `/auth/new-password`.
- **`Protected Routes`**: Access admin, client, and server-specific pages within the `/app/protected` directory.

## Configuration

The application uses various configuration files:

- **`next.config.mjs`**: Configuration for Next.js.
- **`auth.config.ts`**: Custom authentication configurations.
- **`tailwind.config.ts`**: Tailwind CSS configuration.
- **`.env`**: Environment variables for local development and deployment.

## Deployment

The Auth App is deployed using Vercel. Follow these steps to deploy your application:

1. **Sign up or log in to Vercel**.
2. **Connect your repository**: Vercel will automatically detect your Next.js project and suggest configuration.
3. **Set environment variables**: Ensure all necessary variables from `.env` are configured in Vercel.
4. **Deploy**: Click the deploy button and wait for the process to complete. Your application will be live at the Vercel provided URL.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature-branch`.
3. **Make your changes**.
4. **Commit your changes**: `git commit -m 'Add new feature'`.
5. **Push to the branch**: `git push origin feature-branch`.
6. **Create a pull request**: Describe your changes and request a review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
