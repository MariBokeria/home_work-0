document.getElementById("validateBtn").addEventListener("click", validatePassword);
document.getElementById("generateBtn").addEventListener("click", generateRandomPassword);

function validatePassword() {
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");
  
  const isValidLength = password.length >= 4 && password.length <= 12;
  const hasNoSpaces = !/\s/.test(password);
  const isValidChars = /^[a-zA-Z0-9._-]+$/.test(password);

  if (!isValidLength) {
    messageElement.textContent = "პაროლი უნდა იყოს 4-დან 12-მდე სიმბოლო.";
    messageElement.className = "invalid";
  } else if (!hasNoSpaces) {
    messageElement.textContent = "პაროლში ცარიელი ადგილები დაუშვებელია.";
    messageElement.className = "invalid";
  } else if (!isValidChars) {
    messageElement.textContent = "პაროლი უნდა შეიცავდეს მხოლოდ ასოებს, ციფრებს, '-', '.', ან '_'.";
    messageElement.className = "invalid";
  } else {
    messageElement.textContent = "პაროლი არის ვალიდური!";
    messageElement.className = "valid";
  }
}

function generateRandomPassword() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";
  const length = Math.floor(Math.random() * 9) + 4; // 4-დან 12-მდე
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
  validatePassword(); // ვალიდაციის ავტომატური შემოწმება
}
