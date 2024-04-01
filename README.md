## LinkButton

The LinkButton is a Mendix pluggable widget designed for Mendix native mobile applications, enabling the creation of
text elements that function as interactive buttons. These buttons can be configured to act as hyperlinks, leading users
to different URLs or triggering specific actions within the app, thereby enhancing user engagement and interactivity.

## Features

-   **Interactive Text Buttons**: Transforms text into interactive buttons, augmenting user engagement in Mendix native
    mobile applications.
-   **Dynamic URL and Action Handling**: Enables dynamic assignment of URLs or the execution of actions upon button tap.
-   **Customizable Appearance**: Provides options for styling the button text and its container, aligning with the
    application's design aesthetics.
-   **Multi-Line and Text Overflow Support**: Supports multiple lines of text and includes an ellipsis mode for handling
    text overflow, improving text display and readability.
-   **React Native Integration**: Constructed using React Native, assuring smooth integration and performance in Mendix
    native mobile apps.
-   **Adaptive Rendering**: Smartly differentiates between standard text and link text, rendering based on the
    configured properties.

## Usage

To use the `LinkButton` widget in your Mendix app:

1. Download the widget from the Mendix Marketplace and add it to your app project.
2. In Mendix Studio Pro, go to the page where you want to add the interactive text button.
3. Drag and drop the `LinkButton` widget onto the desired location on your page.
4. Set the necessary properties of the `LinkButton`, such as the text caption, the URL to open or the action to execute
   upon click, and any styling preferences.
5. Run your app locally or publish it to see the `LinkButton` in action

## Issues, suggestions and feature requests

We welcome your feedback and contributions. Please report any issues or suggest features on our GitHub repository:

[Report an issue or suggest a feature](https://github.com/Gedikoglu-ICT-Consultancy/LinkButton/issues)

## Development and contribution

1. Clone the repository to your local machine.
2. Install the necessary packages using `npm install`.
3. Use `npm start` to begin compilation in watch mode.
4. Make changes to the source code. The widget will automatically recompile.
5. Test the widget within your Mendix app by importing the MPK file from the `dist` folder.

Contribution guidelines:

-   **Code Contributions**: Submit pull requests with detailed descriptions of changes.
-   **Issue Reporting**: Use the GitHub issues template to report problems or suggest features.
-   **Documentation**: Help improve or correct the documentation.
