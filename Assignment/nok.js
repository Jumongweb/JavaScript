const prompt = require("prompt-sync")();

let currentMenu = "main"; // Initialize current menu
let previousMenu = "";    // Initialize previous menu

// Main menu options
const mainMenu = `
1. Phonebook 
2. Message
3. Chat 
4. Call Register
5. Tone
6. Settings
7. Call Divert 
8. Games
9. Calculator
10. Reminder
11. Clock 
12. Profile
13. SIM Services
14. Exit
`;

// Phonebook menu options
const phonebookMenu = `
PHONEBOOK 
1. Search
2. Service Nos
3. Add Name
4. Erase
5. Edit
6. Assign tone
7. Send B' Card
8. Options
9. Speed Dials
10. Voice Tags
Reply: `;

while (true) {
    let menu = currentMenu === "main" ? mainMenu : (currentMenu === "phonebook" ? phonebookMenu : "");

    console.log(menu);

    let response = parseInt(prompt("Response: "));
    while (isNaN(response) || (currentMenu === "phonebook" && (response < 1 || response > 10))) {
        console.log("Numbers only, select from 1 - 10");
        response = parseInt(prompt("Response: "));
    }

    // Handle navigation between menus
    switch (currentMenu) {
        case "main":
            switch (response) {
                case 1:
                    previousMenu = currentMenu;
                    currentMenu = "phonebook";
                    break;
                // Add cases for other main menu options
                case 14:
                    process.exit(); // Exit the program
                    break;
                default:
                    console.log("Invalid response, please try again.");
            }
            break;
        case "phonebook":
            // Handle options in the Phonebook menu
            switch (response) {
                case 1:
                    console.log("Performing phonebook search...");
                    // Add functionality for phonebook search
                    break;
                case 8:
                    // Option submenu
                    console.log("Options submenu selected...");
                    // Add functionality for options submenu
                    break;
                case 10:
                    // Handle other options in the Phonebook menu
                    break;
                default:
                    console.log("Invalid response, please try again.");
            }
            // Go back to the previous menu (main menu)
            if (response === 0) {
                currentMenu = previousMenu;
            }
            break;
        // Add cases for other menus
        default:
            console.log("Invalid menu state.");
            process.exit(1); // Exit with error code
    }
}
