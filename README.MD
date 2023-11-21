    Google Photos All Deletion Tool

    This tool is designed to automate the process of deleting all google photos from a web application. It uses a set of selectors to identify and interact with checkboxes, delete buttons, and confirmation buttons on the web page.

    Usage:
    1. Copy and paste this script into the console of the web browser's developer tools while on the target web page.
    2. Configure the parameters in the script according to your needs.
    3. Execute the script to initiate the automated photo deletion process.

    Configuration:
    1. maxImageCount:
        - Type: Number or "ALL_PHOTOS"
        - Description: Maximum number of photos to delete. Set to "ALL_PHOTOS" to delete all available photos.
        - Example: const maxImageCount = 5896;

    2. ELEMENT_SELECTORS:
        - Description: Selectors used to identify HTML elements on the web page.
        - Properties:
            - checkboxClass: Selector for checkboxes associated with each image.
            - languageAgnosticDeleteButton: Selector for the delete button (works across different languages if available).
            - deleteButton: Selector for the delete button (specific to the language).
            - confirmationButton: Selector for the confirmation button after deletion.

    Notes:
    - Make sure to test the script in a safe environment before using it on valuable data.
    - Use responsibly and in compliance with the terms of service of the web application.

    Author: Laxman Magarati
    Version: 1.0
    Last Updated: 21 November, 2023
