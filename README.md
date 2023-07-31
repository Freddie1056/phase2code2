# Bot Battlr - Bot Army Recruitment Web App

![Bot Battlr](./screenshot.png)

Bot Battlr is a web application that allows users to recruit and manage their bot army. Users can view a collection of available bots, enlist them into their army, view detailed information about enlisted bots, and retire them as needed. The app provides a user-friendly interface for seamless bot management.

## Features

- View a collection of available bots for recruitment.
- Enlist bots into your personal bot army.
- View detailed specifications of enlisted bots.
- Retire enlisted bots from your bot army.
- Sort available bots based on various criteria.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

git clone https://github.com/Freddie1056/phase2code2.git
cd bot-battlr

    Install the dependencies:

npm install

    Start the development server:

npm start

The application will be accessible at http://localhost:3000 in your web browser.
Usage

    Visit http://localhost:3000 in your web browser to access the Bot Battlr application.
    Browse the available bots in the "Bot Army Recruitment" section.
    Click on a bot card to view detailed specifications in the "Bot Specs" section.
    Enlist a bot by clicking the "Enlist" button in the "Bot Specs" section.
    View your enlisted bots in the "Your Bot Army" section and retire them if needed.

API Endpoints

The application communicates with the following API endpoints:

    GET /bots: Fetches the list of available bots.
    GET /bots/:id: Fetches detailed information about a specific bot.
    DELETE /bots/:id: Removes a bot from the list (retiring the bot).

Contributing

Contributions are welcome! If you find any issues with the application or want to enhance it, feel free to submit a pull request.

    Fork the repository.
    Create a new branch: git checkout -b feature/your-feature-name
    Commit your changes: git commit -m "Add some feature"
    Push to the branch: git push origin feature/your-feature-name
    Submit a pull request.

Please ensure that your code follows the project's coding guidelines and has appropriate tests.


License

This project is licensed under the MIT License - see the LICENSE file for details.
