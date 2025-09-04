
# AI Financial Management Recommendation

## Table of Contents

1.  [Introduction](#introduction)
2.  [Functionality](#functionality)
3.  [Technologies Used](#technologies-used)
4.  [Setup](#setup)
5.  [Usage](#usage)
6.  [Contributing](#contributing)
7.  [License](#license)

## Introduction

The AI Financial Management Recommendation project is a web application designed to assist users in optimizing their financial planning through AI-driven insights. Built using React.js for the front-end and integrated with the Gemini AI API, the application provides personalized recommendations for expense categorization, insurance needs, and emergency fund allocation. User data and AI-generated responses are securely stored in Firebase, ensuring a seamless and informative user experience.

## Functionality

*   **Expense Categorization:** Allows users to input and categorize their expenses to gain insights into their spending habits.
*   **Insurance Recommendations:** Provides personalized insurance recommendations based on user-provided financial details.
*   **Emergency Fund Allocation:** Determines the appropriate emergency fund allocation based on the user's financial situation.
*   **AI-Driven Analysis:** Leverages the Gemini AI API to process user data and generate insightful financial recommendations.
*   **Data Storage:** Securely stores user data and AI responses in Firebase.
*   **Historical Data:** Displays AI responses in descending order, allowing users to access their previous financial insights.

## Technologies Used

*   **React.js:** A JavaScript library for building user interfaces.
*   **CSS:** Used for styling the web application.
*   **Gemini AI API:** An AI service used for generating financial recommendations.
*   **Firebase:** A platform for building web and mobile applications, used for data storage and authentication.

## Setup

> Before you begin, ensure you have the following installed:
>
> *   Node.js (version >=14)
> *   npm or yarn
> *   Firebase project set up with necessary API keys
>
> Follow these steps to set up the project locally:

1.  Clone the repository:

    > *   Create a `.env` file in the root directory.
    > *   Add your Firebase configuration details to the `.env` file:


    REACT_APP_FIREBASE_API_KEY=<your_api_key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your_auth_domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your_project_id>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<your_storage_bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_sender_id>
    REACT_APP_FIREBASE_APP_ID=<your_app_id>
    2.  Open your browser and navigate to `http://localhost:3000`.
3.  Input your financial details to receive personalized recommendations.
4.  Review the AI-generated insights displayed on the page.

## Contributing

> We welcome contributions to the AI Financial Management Recommendation project! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main branch of the original repository.

> Please adhere to the coding standards and guidelines of the project.

