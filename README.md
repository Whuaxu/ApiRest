# APIREST Practice Project

>[!NOTE]
>This project was created at **Alia Technologies** as a practice exercise to work with APIREST technologies. The project was initially published on GitLab.

## Overview

This repository contains a RESTful API built with Node.js, Express, MongoDB, MySQL, and JWT authentication. It is designed for learning and practicing API development, database integration, and containerization with Docker.

## Features

- User, client, and project management endpoints
- Authentication with JWT
- MongoDB and MySQL support
- API documentation with Swagger
- Docker and Docker Compose for local and production environments

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Docker & Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy and edit the environment variables:
   ```bash
   cp .env.example .env
   # Edit .env as needed
   ```

### Running Locally

```bash
docker compose up --build
```

The API will be available at [http://localhost:3000/api](http://localhost:3000/api)  
Swagger docs: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
