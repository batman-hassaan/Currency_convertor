const populateDropdown = (dropdown) => {
    currencies.forEach((currency) => {
        const option = document.createElement("option");
        option.value = currency.code;
        option.textContent = `${currency.code} - ${currency.name}`;
        dropdown.appendChild(option);
    });
}
updateflag = (dropdown) => {
    const selectedCurrencyCode = dropdown.value;
    const selectedCurrency = currencies.find(
        (currency) => currency.code === selectedCurrencyCode
      );
    if (selectedCurrency) {
        dropdown.style.backgroundImage = `url(${selectedCurrency.flag})`;
        dropdown.style.backgroundRepeat = "no-repeat";
        dropdown.style.backgroundPosition = "95% center";
        dropdown.style.backgroundSize = "20px 20px";
    }
}


const fromDropdown = document.getElementById("from");
const toDropdown = document.getElementById("to");
populateDropdown(fromDropdown);
populateDropdown(toDropdown);

fromDropdown.addEventListener("change", () => updateflag(fromDropdown));
toDropdown.addEventListener("change", () => updateflag(toDropdown));

// Initialize default flags for both dropdowns
updateflag(fromDropdown);
updateflag(toDropdown);

document.getElementById("convert").addEventListener("click", async () => {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;



    if (!amount || isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
    }

    const apiKey = "c180a7f59501c2fc5f7fa3cf";

    const a = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
    const data = await a.json();
    const rate = data.conversion_rates[to];
    const camount = (amount * rate).toFixed(2);
    document.getElementById("result").textContent =
        `${amount} ${from} = ${camount} ${to}`

})

