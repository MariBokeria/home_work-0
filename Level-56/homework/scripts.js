document.getElementById('submitBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('terms').checked;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Invalid password. Must be at least 8 characters long and contain letters and numbers.");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    const darkMode = confirm("Would you like to enable dark mode?");
    if (darkMode) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }

    displayProgrammersPage();
});

function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

function displayProgrammersPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Choose a Programmer</h1>
            <form id="programmersForm">
                <label><input type="radio" name="programmer" value="Ada Lovelace"> Ada Lovelace</label><br>
                <label><input type="radio" name="programmer" value="Alan Turing"> Alan Turing</label><br>
                <label><input type="radio" name="programmer" value="Grace Hopper"> Grace Hopper</label><br>
                <button type="button" id="showInfoBtn">Show Info</button>
            </form>
            <div id="infoBox"></div>
        </div>
    `;

    document.getElementById('showInfoBtn').addEventListener('click', showProgrammerInfo);
}

function showProgrammerInfo() {
    const selected = document.querySelector('input[name="programmer"]:checked');
    const infoBox = document.getElementById('infoBox');
    if (!selected) {
        alert("Please select a programmer.");
        return;
    }

    const programmerData = {
        "Ada Lovelace": "Ada Lovelace is considered the first computer programmer.",
        "Alan Turing": "Alan Turing is known for his work on theoretical computer science.",
        "Grace Hopper": "Grace Hopper was a pioneer in developing computer programming languages."
    };

    infoBox.innerHTML = `
        <div class="info-card">
            <h2>${selected.value}</h2>
            <p>${programmerData[selected.value]}</p>
        </div>
    `;
}
