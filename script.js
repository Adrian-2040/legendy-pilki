// Funkcja pomocnicza – pobiera parametr z URL
function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  // Główna funkcja – generuje zawartość strony na podstawie danych z legendy.json
  async function pokazLegende() {
    const id = getParam("id");
    const section = document.querySelector("main section");
  
    try {
      const response = await fetch("https://adrian-2040.github.io/legendy-pilki/legendy.json");
      if (!response.ok) throw new Error("Błąd podczas pobierania danych");
  
      const legendy = await response.json();
      const legenda = legendy.find(item => item.id === id);
  
      if (!legenda) {
        section.innerHTML = `<p>Nie znaleziono legendy.</p><button onclick="history.back()">Wróć</button>`;
        return;
      }
  
      const ikonyHTML = legenda.ikony.map(i => `<li>${i}</li>`).join("");
  
      section.innerHTML = `
        <div class="legenda-wrapper">
          <div class="legenda-text">
            <h2>${legenda.imie}</h2>
            <p><strong>${legenda.opis}</strong></p>
            <p>${legenda.historia}</p>
            <ul class="ikony">${ikonyHTML}</ul>
            <button onclick="history.back()">Wróć</button>
          </div>
          <div class="legenda-obraz">
            <img src="${legenda.obraz}" alt="${legenda.imie}">
          </div>
        </div>
      `;
    } catch (error) {
      section.innerHTML = `<p>Wystąpił błąd przy ładowaniu danych: ${error.message}</p>`;
    }
  }
  
  // Wywołanie funkcji po załadowaniu strony
  document.addEventListener("DOMContentLoaded", pokazLegende);
  
