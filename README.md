# Lendsqr test

## Overview
This project is a user management system built with React. The project showcases a responsive design and incorporates features like data fetching from a mock API, search functionality, and pagination.

## Features
1. **Styled Components & SCSS**: Utilized styled components combined with SCSS for consistent and modular styling.
2. **Mock API**: User data is fetched from a mock API containing 500 records generated using Mockaroo.
3. **Responsive Design**: The design adapts to various media types for an optimal viewing experience.
4. **Search Functionality**: Users can search through the user data table.
5. **Pagination**: Data is displayed in a paginated format for better usability.
6. **User Details**: Individual user details can be viewed by pulling data from the API.

## Getting Started
### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lendsqr-fe-test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project
1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## API
The mock API is created using Mockaroo and serves 500 user records. The API is structured as follows:

- **Endpoint**: `https://api.mockaroo.com/api/your-mock-api-key`

### Sample Data
The mock data includes fields such as:
- id
- full name
- email
- address
- phone

## Styling
- **Styled Components**: Used for component-level styling to keep styles modular and scoped.
- **SCSS**: Employed for global styles and complex styling requirements that are shared across multiple components.

## Responsiveness
The application is designed to be responsive, adapting to various screen sizes and devices. Media queries in SCSS handle different breakpoints to ensure a seamless user experience across all devices.

## Search and Pagination
- **Search**: Implemented to allow users to filter through the user table efficiently.
- **Pagination**: Data is paginated to enhance the user experience and performance.

## Decisions and Approach
1. **Styled Components and SCSS**: Combining styled components with SCSS allows for a modular approach to styling while leveraging the power of SCSS for more complex styles.
2. **Mockaroo for Mock API**: Chose Mockaroo due to its flexibility and ease of generating realistic mock data.
3. **Figma Design**: Followed the provided Figma design closely to ensure a consistent and visually appealing UI.
4. **Responsive Design**: Prioritized responsiveness to ensure the application is usable on a wide range of devices.
5. **Search and Pagination**: Added to improve data handling and user experience by making it easy to find specific records and manage large datasets.

## Conclusion
This project demonstrates a well-rounded approach to building a responsive user management system with modern tools and best practices in front-end development. The combination of styled components, SCSS, and a mock API ensures a scalable and maintainable codebase.

## Future Improvements
- Implement user authentication and authorization.
- Add user data editing and deletion features.
- Enhance error handling and loading states.
- Optimize performance for large datasets.

## Contributions
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

---

For any questions or suggestions, please contact [pelumimoses04@gmail.com].
