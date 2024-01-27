# lab_project
CRUD Web App
# Spring Boot CRUD Application

This is a simple Spring Boot CRUD (Create, Read, Update, Delete) application using Spring MVC, Thymeleaf, and MySQL. It demonstrates the concept of a 3-tier web architecture.

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

- **src/main/java/com/example/controller**: Contains the controllers for Home, Search, and Detail pages.
- **src/main/java/com/example/model**: Defines the User entity.
- **src/main/java/com/example/repository**: Provides the repository interface for database operations.
- **src/main/java/com/example/service**: Contains the service interface and its implementation.
- **src/main/resources/templates**: Thymeleaf templates for home, search, and detail pages.
- **src/main/resources/application.properties**: Configuration file for database and other properties.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/springboot-crud-app.git`
2. Navigate to the project directory: `cd springboot-crud-app`
3. Configure the database connection in `src/main/resources/application.properties`.
4. Build the project: `./mvnw clean install`
5. Run the application: `./mvnw spring-boot:run`

## Usage

1. Access the home page: [http://localhost:8080/](http://localhost:8080/)
2. Navigate to the search page to perform CRUD operations.

### How it works

When we open the application using localhost at default port, the interface/landing page of the application would look like this
- Point 1: Create/add new employee in the database
- Point 2: Update details for any exisitng user/employee
- Point 3: Delete any user/employee
- Point 4: View details for any employee
- Point 5: Filter details of employee based on table columns
- Point 6: Search any employee from the database

## Features

- **Home Page**: Landing page with navigation functions.
- **Search Page**: Criteria filter and results areas for searching and CRUD operations.
- **Detail Page**: Displays detailed information for a selected record.
- **CRUD Operations**: Demonstrates Create, Read, Update, and Delete operations.
- **Navigation**: Demonstrates navigation using Close, Cancel, and Save buttons.

## Contributing

Feel free to contribute by opening issues, providing feedback, or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

