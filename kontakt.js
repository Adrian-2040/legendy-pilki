document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    // Tworzymy element na komunikat
    const messageBox = document.createElement("p");
    messageBox.style.color = "green";
    messageBox.style.marginTop = "15px";
    form.appendChild(messageBox);
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      messageBox.textContent = "Dziękujemy za wiadomość!";
      form.reset();
    });
  });
  
  