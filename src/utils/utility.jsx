export function formatString(inputString) {
    // Replace underscores with spaces
    let spacedString = inputString.replaceAll('_', ' ');

    // Capitalize the first letter
    if (spacedString.length === 0) {
        return ""; // Handle empty string case
    }
    let capitalizedString = spacedString.charAt(0).toUpperCase() + spacedString.substring(1);

    return capitalizedString;
}