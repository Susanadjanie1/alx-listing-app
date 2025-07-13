# ALX Listing App

## Project Description
This project aims to create an Airbnb clone listing page using Next.js, TypeScript, Tailwind CSS, and ESLint. The goal is to build a well-structured and maintainable codebase that showcases various property listings with reusable components.

## Project Structure
The project follows a modular structure to ensure maintainability and scalability:

* **`components/`**: Contains reusable React components.
    * **`common/`**: Houses generic, highly reusable components like `Card.tsx` and `Button.tsx`.
* **`interfaces/`**: Defines TypeScript interfaces for props, data structures, and type safety across the application (e.g., `CardProps`, `ButtonProps`).
* **`constants/`**: Stores application-wide constants such as API URLs, configuration settings, and common UI text (e.g., `PROJECT_TITLE`).
* **`public/assets/`**: Contains static assets like images and SVG files, which are publicly accessible.
* **`pages/`**: (Next.js specific) Contains the application's routes. `index.tsx` is the main homepage.
* **`styles/`**: Contains global stylesheets, including Tailwind CSS imports in `globals.css`.

## How to Run the Project Locally

To set up and run this project on your local machine, follow these steps:

### 1. Clone the Repository
First, clone the project repository to your local machine:

```bash
git clone [https://github.com/your-username/alx-listing-app.git](https://github.com/your-username/alx-listing-app.git)
cd alx-listing-app