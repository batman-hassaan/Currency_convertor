# Currency Converter

## Overview
The **Currency Converter** is a web-based application that allows users to convert currencies in real-time. It provides live exchange rates, supports multiple currencies, and features an easy-to-use interface.

## Features
- **Real-Time Exchange Rates:** Get the latest exchange rates for your selected currencies.
- **Interactive User Interface:** Simple, intuitive, and responsive design.
- **Dropdown with Flags:** Easily select currencies with flags for visual assistance.
- **Error Handling:** Displays appropriate messages for invalid input.

## Technologies Used
- **HTML5** for the structure of the application.
- **CSS3** for styling and responsiveness.
- **JavaScript** for functionality and API integration.
- **Exchange Rate API** for fetching live currency rates.

## Installation
To use this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```
3. Open the `index.html` file in your web browser.

## How to Use
1. Enter the amount you want to convert in the input field.
2. Select the currencies you want to convert **from** and **to** using the dropdowns.
3. Click the **Convert** button to see the result.
4. The converted amount will appear below the button.

## Files in the Project
### HTML:
- `index.html`: Contains the structure of the application.

### CSS:
- `currency.css`: Styles the application with a clean, modern look.

### JavaScript:
- `currencies.js`: Contains the currency list with their codes and flag URLs.
- `currency.js`: Handles the core logic for fetching exchange rates and updating the UI.

### Assets:
- `currency-exchange.png`: The favicon for the application.

## API Information
The project uses the [Exchange Rate API](https://www.exchangerate-api.com/) to fetch live exchange rates.

- **API Key:** `c180a7f59501c2fc5f7fa3cf`

### Example API Request:
```bash
https://v6.exchangerate-api.com/v6/c180a7f59501c2fc5f7fa3cf/latest/USD
```

## Contributing
Contributions are welcome! If you'd like to improve this project:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature name'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Screenshots
![Screenshot of Currency Converter](Screenshot.png)

## Acknowledgements
- [Exchange Rate API](https://www.exchangerate-api.com/) for providing reliable exchange rate data.
- [Google Fonts](https://fonts.google.com/) for the "Josefin Sans" font.

## Contact
For any questions or feedback, please reach out to [ME!!](shahidhassaan17@gmail.com).

---

Enjoy using the Currency Converter!

