# Prince Weather Application.

This is the application that displays the weather data from the open weather map API to the dashboard.

The application has 3 pages Home, Dashboard and the Profile page.

 # Home
 The home page contains a welcome message and a button to access the dashboard. 

# Dashboard
The dashboard has a search bar, the recently searched cities section and the weather display section.

-- Search bar Functionality
The city name is collected by typing the city into the input field and press enter or the search button to request the data of the provided city from the API.

When the request is successful the data is displayed on the weather display section.

incases of invalid city name or request failure due to network an error UI is displayed and a warning message is displayed when the user try to search without any input.

-- Recently Searched Section
Three most recently searched cities are displayed for easier navigation. but the data doesnt not persist between sessions.

-- Weather Display Section
Consist of five variables to store the city name, weather icon, temperature, humidity and wind speed. upon successful request these variables are retrieved from a zustand store and displayed in their required fields.

# Profile
Displays the authors profile, experience and social links.


# Tech Used
- REACT JS
- Tailwind CSS
- Figma
- Git
