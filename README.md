# Recruitment Task

The goal of the project was to create a responsive web application that aligns with the design provided in Figma. The application was built using **React JS**, **Swiper** for carousels, **Tailwind CSS** for styling, and **Flatpickr** for date selection. The project also implements **lazy loading** and dynamic fetching of data from **local JSON files**.

## Technologies

- **React JS**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Swiper**: A modern library to create responsive, touch-enabled carousels and sliders.
- **Flatpickr**: A lightweight and feature-rich date picker library.
- **Local JSON Files**: The application fetches data and images from locally stored JSON files.
- **Lazy Loading**: Images and resources are loaded only when they are in the viewport, optimizing performance.

## Interactivity

- **React JS**: Used for building the interactive components of the application, with state management to handle dynamic data and update the UI accordingly.
- **Swiper**: A carousel/slider library used to display content in a visually appealing, responsive way.
- **Flatpickr**: Integrated into form elements to provide an intuitive and smooth date-picking experience.

## Data Fetching

The project fetches data and images dynamically from **locally stored JSON files** instead of an external API. This allows for easy data management and testing in a development environment. Lazy loading is used to ensure that images and resources are only loaded when they are about to enter the viewport, improving performance and page load times.

## GitHub Repository

The entire project is hosted on GitHub. Example commit naming conventions include:

- **Feature**: Add Swiper carousel integration
- **Refactor**: Resolve date picker issue with Flatpickr
- **Style**: Update Tailwind styling for mobile responsiveness
- **Docs**: Update README with project setup instructions

## How to Run the Project

To run the project, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have the latest version of Node.js installed. You can download it from the [Node.js website](https://nodejs.org).
- **NPM**: Installing Node.js usually includes npm (Node Package Manager), which is required for installing dependencies.

### Installing Dependencies and Running the Project

1. **Clone the Repository**: Start by cloning the repository to your local machine:
   ```bash
   git clone https://github.com/Mishaheero/crafton.git

2. **Navigate into the Project Directory**: Go to the project folder where the repository was cloned:
   ```bash
   cd crafton
3. **Install the Required Dependencies**: Install the necessary npm packages and dependencies that are listed in the package.json file:
   ```bash
   npm install

### Building the Production Version
To create an optimized production build of the project, run:
npm run build
