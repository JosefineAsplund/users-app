# User Directory

User Directory is a small React application created as an examination project. The purpose of the project is not to build a complete user management system, but to demonstrate the technologies, patterns, and development practices covered by the examination.

The application fetches user data from an external API and presents the users in a responsive directory. Each user is displayed through a reusable `UserCard` component and has a separate details page with additional information.

The application also handles common UI states such as loading, errors, empty data, missing users, and unknown routes.

## Tech Stack

- **React** – component-based user interface
- **TypeScript** – static typing for application and API data
- **React Router** – routing between the user directory and user details
- **TanStack Query** – data fetching, caching, and query state management
- **Tailwind CSS** – responsive layout and styling
- **Lucide React** – icons
- **Vite** – development and build tooling

## Technical Approach

The project separates data fetching, query logic, presentation, and types into different parts of the application.

The API request is defined separately from the React components. A custom `useUsers` hook uses TanStack Query to fetch the user data and manage loading, error, and cached states.

Both `UsersPage` and `UserDetailsPage` use the same TanStack Query query with the `["users"]` query key. The details page finds the requested user from the users array based on the `id` URL parameter.

This allows both pages to reuse the same cached data instead of making separate API requests. Since the external API is limited to **100 requests per day**, reusing the query cache helps avoid unnecessary requests.

The source code is divided into the following areas:

```text
src/
├── api/          # API requests
├── components/   # Reusable UI components
├── hooks/        # Custom hooks and query logic
├── pages/        # Route-level components
└── types/        # TypeScript types
```

This structure keeps responsibilities separated and makes the project easier to understand and maintain.

## Features

- Fetches users from an external API
- Displays users in a responsive card grid
- Reusable `UserCard` components
- Individual user detail pages
- Shared TanStack Query cache between views
- Loading state
- Friendly API error handling
- Empty data handling
- User not found handling
- 404 handling for unknown routes
- Responsive styling with Tailwind CSS

## Routes

```text
/           User directory
/users/:id  User details
*           Page not found
```

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Linting

Run ESLint:

```bash
npm run lint
```

## Build

Create a production build:

```bash
npm run build
```

## Project Scope

User Directory is intentionally kept small and focused. It is an examination project designed to demonstrate practical use of React, TypeScript, routing, asynchronous data fetching, caching, reusable components, error and UI state handling, and responsive styling.

Features expected from a complete user management system, such as authentication, creating users, editing users, deleting users, or managing permissions, are outside the scope of this project.
