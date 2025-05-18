// Dane legend
const legendy = [
    {
        id: "1",
        imie: "Bobby Charlton",
        narodowosc: "Anglia",
        opis: "Angielski pomocnik uznawany za jednego z najwybitniejszych piłkarzy Manchesteru United.",
        historia: "Bobby Charlton to ikona angielskiego futbolu i jeden z najwybitniejszych piłkarzy w historii Manchesteru United. Jego kariera rozpoczęła się w młodzieżowych drużynach, a jego talent szybko zauważyli trenerzy United. Z reprezentacją Anglii zdobył Mistrzostwo Świata w 1966 roku, stając się jednym z kluczowych graczy. Charlton miał również ogromny wpływ na rozwój Manchesteru United, z którym zdobył wiele tytułów krajowych i międzynarodowych. Jego historia była także związana z katastrofą lotniczą w Monachium, z której udało mu się przeżyć, co miało duży wpływ na jego późniejsze życie. W 1966 roku zdobył Złotą Piłkę, co podkreśliło jego status jednego z najlepszych graczy tamtej epoki.",
        obraz: "Charlton.jpg",
        ikony: ["🏆 MŚ 1966", "⚽ Manchester United 1968", "🎖️ Ballon d'Or 1966"]
      },
      {
        id: "2",
        imie: "Franz Beckenbauer",
        narodowosc: "Niemcy",
        opis: "Legendarny niemiecki obrońca, twórca pozycji 'libero'.",
        historia: "Franz Beckenbauer to jeden z najwybitniejszych niemieckich piłkarzy w historii. Beckenbauer zasłynął dzięki swojej inteligencji boiskowej i eleganckiej grze, ale to on wynalazł i udoskonalił pozycję 'libero' – obrońcy, który wychodził z tyłu, rozgrywając piłkę i uczestnicząc w ofensywie. Beckenbauer osiągnął ogromne sukcesy zarówno jako piłkarz, jak i trener. Dwukrotnie zdobywał Mistrzostwo Świata – raz jako zawodnik w 1974 roku, a potem jako trener w 1990 roku. W swojej karierze grał głównie w Bayernie Monachium, z którym zdobył liczne tytuły mistrzowskie i Puchary Europy. Jego elegancja na boisku oraz zdolność do kontrolowania gry w środku pola sprawiły, że był jednym z najbardziej szanowanych piłkarzy na świecie.",
        obraz: "Beckenbauer.jpg",
        ikony: ["🏆 MŚ 1974, ME 1972", "⚽ Bayern Monachium UCL 1974, 1975, 1976", "🎖️ Ballon d'Or 1972, 1976"]
      },
      {
        id: "3",
        imie: "Gerd Müller",
        narodowosc: "Niemcy",
        opis: "Niemiecki napastnik o niesamowitej skuteczności. Jedna z największych legend niemieckiego futbolu.",
        historia: "Gerd Müller, zwany 'Królem Pola Kary', był niezwykle efektywnym napastnikiem, który przez całą swoją karierę strzelił ponad 700 goli. Jego najważniejszymi osiągnięciami były wygrana w Mistrzostwach Świata w 1974 roku oraz Złoty But na Mistrzostwach Świata 1970, gdzie zdobył 10 bramek. Przez całą swoją karierę grał głównie w Bayernie Monachium, gdzie zdobył 4 razy Mistrzostwo Niemiec i 3 Puchary Niemiec.",
        obraz: "Mueller.jpg",
        ikony: ["🏆 MŚ 1974", "⚽ Bayern Monachium UCL 1974, 1975, 1976", "🎖️ Ballon d'Or 1970"]
      },
      {
        id: "4",
        imie: "Paolo Rossi",
        narodowosc: "Włochy",
        opis: "Włoski bohater mundialu 1982. Jego historia to pasmo trudnych momentów, które zakończyły się największym triumfem.",
        historia: "Paolo Rossi to symbol powrotu do wielkiej formy. Po zawieszeniu przez włoską federację, wrócił do reprezentacji na Mistrzostwa Świata 1982. W tym turnieju stał się bohaterem, strzelając 6 bramek, w tym hat-tricka przeciwko Brazylii w ćwierćfinale. Ostatecznie Włochy wygrały mistrzostwo świata, a Rossi został królem strzelców i MVP turnieju. Grał w takich klubach jak Juventus, AC Milan czy Verona, gdzie niejednokrotnie udowadniał swoją klasę strzelecką.",
        obraz: "Rossi.jpg",
        ikony: ["🏆 MŚ 1982", "⚽ Juventus UCL 1985", "🎖️ Ballon d'Or 1982"]
      },
      {
        id: "5",
        imie: "Zinedine Zidane",
        narodowosc: "Francja",
        opis: "Francuski maestro środka pola, znany z finezji i zimnej krwi.",
        historia: "Zinedine Zidane to jeden z najwybitniejszych piłkarzy swojej generacji, który na zawsze zapisał się w historii francuskiego futbolu. W swojej karierze zdobył niemal wszystko, a jego umiejętności techniczne oraz zimna krew w decydujących momentach były jego znakami rozpoznawczymi. Zidane poprowadził Francję do zwycięstwa w Mistrzostwach Świata w 1998 roku, a dwa lata później zdobył Mistrzostwo Europy w 2000 roku. Jego występy w finale Ligi Mistrzów 2002, gdzie strzelił jedną z najpiękniejszych bramek w historii tego turnieju, pozostaną w pamięci fanów na całym świecie. Zidane zdobył również Złotą Piłkę w 1998 roku i był uważany za jednego z najlepszych piłkarzy na świecie. Jego kariera trenerska, m.in. w Realu Madryt, również była pełna sukcesów, a Zidane pozostaje jednym z najwybitniejszych menedżerów w historii piłki nożnej.",
        obraz: "Zidane.jpg",
        ikony: ["🏆 MŚ 1998", "⚽ Real Madryt UCL 2002", "🎖️ Ballon d'Or 1998"]
      },
      {
        id: "6",
        imie: "Rivaldo",
        narodowosc: "Brazylia",
        opis: "Brazylijski geniusz, który zdobył serca kibiców na całym świecie dzięki swoim niepowtarzalnym umiejętnościom.",
        historia: "Rivaldo to jeden z najlepszych piłkarzy swojej generacji, który przez lata grał na najwyższym poziomie w Brazylii i Europie. Jego umiejętności techniczne, fenomenalny lewy strzał oraz nieprzewidywalność na boisku sprawiły, że był uznawany za jednego z najlepszych ofensywnych pomocników. Był kluczowym zawodnikiem, który przyczynił się do zdobycia Mistrzostwa Świata 2002. Grał m.in. w Barcelonie, gdzie stał się jednym z liderów drużyny, oraz w brazylijskim klubie Corinthians. Jego sukcesy obejmują m.in. zdobycie Złotej Piłki w 1999 roku.",
        obraz: "Rivaldo.jpg",
        ikony: ["🏆 MŚ 2002, CA 1999", "⚽ AC Milan UCL 2003", "🎖️ Ballon d'Or 1999"]
      },
      {
        id: "7",
        imie: "Ronaldinho",
        narodowosc: "Brazylia",
        opis: "Brazylijski magik, który sprawił, że piłka nożna stała się sztuką, łącząc technikę, radość z gry i nieprzewidywalność.",
        historia: "Ronaldinho to jeden z najbardziej utalentowanych piłkarzy, jakich kiedykolwiek widział świat. Jego umiejętności techniczne, dribling i fantazyjne zagrania czyniły go jednym z najwspanialszych graczy swojej ery. Jego magiczne momenty z piłką na nogach nie miały sobie równych, a mecze z jego udziałem były prawdziwymi spektaklami. Ronaldinho był kluczowym zawodnikiem zarówno w reprezentacji Brazylii, jak i w Barcelonie, z którą zdobył dwa mistrzostwa Hiszpanii. W 2005 roku zdobył Złotą Piłkę, a w 2002 roku poprowadził Brazylię do triumfu w Mistrzostwach Świata.",
        obraz: "Ronaldinho.jpg",
        ikony: ["🏆 MŚ 2002, CA 1999", "⚽ FC Barcelona UCL 2006", "🎖️ Ballon d'Or 2005"]
      },
      {
        id: "8",
        imie: "Kaká",
        narodowosc: "Brazylia",
        opis: "Brazylijski dżentelmen boiska, który swoją grą i stylem życia podbił serca fanów na całym świecie.",
        historia: "Kaká to jeden z najlepszych piłkarzy swojego pokolenia, który połączył talent, inteligencję boiskową i elegancję. Jego błyskawiczne tempo, precyzyjne podania i strzały z dystansu sprawiały, że był jednym z najbardziej niebezpiecznych pomocników. W 2007 roku zdobył Złotą Piłkę, a jego największym osiągnięciem było wygranie Ligi Mistrzów z Milanem, gdzie odegrał kluczową rolę w zwycięstwie. Kaka był również ważnym ogniwem w drużynie narodowej Brazylii, z którą zdobył Puchar Konfederacji w 2005 roku.",
        obraz: "Kaka.jpg",
        ikony: ["🏆 MŚ 2002", "⚽ AC Milan UCL 2007", "🎖️ Ballon d'Or 2007"]
      }
  ];
  
  // Funkcja pomocnicza – pobiera parametr z URL
  function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  // Główna funkcja – generuje zawartość strony
  function pokazLegende() {
    const id = getParam("id");
    const legenda = legendy.find(item => item.id === id);
    const section = document.querySelector("main section");
  
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
  }
  
// Wywołanie funkcji po załadowaniu strony - TYLKO jeśli jesteśmy na szczegoly.html
if (document.body.contains(document.querySelector("main section")) && window.location.pathname.includes("szczegoly.html")) {
  // Proste sprawdzenie, zakłada, że 'main section' istnieje, a ścieżka zawiera 'szczegoly.html'
  // Możesz chcieć bardziej niezawodnego sprawdzenia, np. przez sprawdzenie konkretnego ID w body na stronie szczegoly.html
  document.addEventListener("DOMContentLoaded", pokazLegende);
}
  
