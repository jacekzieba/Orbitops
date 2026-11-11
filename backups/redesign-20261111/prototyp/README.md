# OrbitOps — produkt i demonstrator

Aktualizacja 11 listopada 2026 na podstawie końcowego zakresu transkryptu: jeden landing page, demokratyzacja danych i cyfryzacja MŚP, produkt oraz interaktywne demo fabryki opakowań. PL / EN / DE.

## Uruchomienie

Z katalogu `prototyp`: `npm start`, następnie http://127.0.0.1:4173/.
Bieżąca strona nie wymaga instalacji pakietów npm ani zewnętrznych usług.

- `npm run build` generuje statyczny polski HTML strony i samodzielnego demo.
- `npm test` sprawdza model zapasów i kompletność słowników.
- `npm run package` generuje HTML oraz paczkę FTP `../DO_WGRANIA/` i `../OrbitOps-na-serwer.zip`.

## Pliki i edycja

- `landing-copy.js`: teksty PL/EN/DE strony oraz SEO.
- `landing-view.js`: wspólny widok strony, nagłówka, stopki i podglądu produktu.
- `landing.js`: przełączanie języka, metadane i nawigacja.
- `landing.css`: responsywny wygląd strony i dashboardu.
- `operations-model.js`: jeden model obliczeń zapasów.
- `operations-copy.js`: teksty PL/EN/DE dashboardu.
- `operations-demo.js`: pięć widoków, historia kroków, sygnały, warianty, propozycja decyzji i szkic wiadomości.
- `index.html`, `demo.html`: wygenerowany HTML. Po edycji źródeł uruchom `npm run build`.

Treści strony głównej są dostępne bez JavaScript. Demo oraz przełączanie języka wymagają JavaScript. Osobny `demo.html` jest dodatkowym widokiem tego samego komponentu; pełne demo działa również na landing page’u.

## Jawne założenia demonstratora

FORMA i COSMA są fikcyjnymi firmami. Fabryka opakowań pod Łodzią ma w scenariuszu 120 pracowników i zamówienie na 2 mln butelek. Początek symulacji to dzień 0, nie rzeczywisty zegar.

- 210 t zapasu / 10 t zużycia dziennie = 21 dni pokrycia.
- Główna dostawa: 200 t, planowane przyjęcie w dniu 12.
- Zmiana trasy +10 dni i port +3 dni są kolejnymi opóźnieniami tej samej dostawy.
- Wariant obu zakłóceń: przyjęcie dzień 25, luka 4 dni, niedobór 40 t.
- Dostawa pomostowa: 30% × 200 t = 60 t, przyjęcie dzień 18, pokrycie do dnia 27. Wynik wymaga potwierdzenia jakości, dostępności, ceny i transportu.
- Termin zamówienia klienta: dzień 35 (5 tygodni). Demo nie prognozuje terminu jego wykonania, ponieważ nie zna harmonogramu i przydziału mocy produkcyjnych.
- Zapas maleje przy pracy fabryki i przestaje być zużywany po wyczerpaniu. Dostawy w dniu przyjęcia zwiększają stan. Suwak uwzględnia obie dostawy w kolejności chronologicznej.

Zapis propozycji nie usuwa ryzyka i nie wysyła zamówienia. Zachowuje stan obliczeń z chwili zapisu. Bieżące KPI pokazują bazowe ryzyko bez działania; wynik wariantu jest oznaczony jako warunkowy.

## Prywatność, integracje i treść

Brak monitoringu na żywo, API AI, integracji ERP/WMS/TMS i automatycznej komunikacji. Szkic wiadomości jest deterministycznym przykładem, można go edytować i skopiować. Decyzja i szkic pozostają w pamięci karty, giną po odświeżeniu; język jest zapamiętywany lokalnie. Zmiana języka zachowuje stan demo i własne poprawki szkicu. Odświeżenie szkicu jawnie zastępuje tekst aktualnym przykładem.

Kontakt: bezpośredni `mailto:kontakt@orbitops.eu`, bez formularza i wysyłki przez stronę. Statystyki Polska–UE z transkryptu pominięto ze względu na brak pełnych źródeł i lat w materiale. Nie dodano roadmapy, finansowania, wywiadów, cen ani obietnic produkcyjnych integracji.

## Materiały

Zachowano logo OrbitOps i lokalne fonty Manrope (licencja `assets/Manrope-OFL.txt`). Tekstura Ziemi pochodzi z wcześniejszej wersji: Three.js `examples/textures/planets/earth_atmos_2048.jpg`. W obecnym widoku jest pomocniczym obrazem CSS. Ikony bieżącej wersji są prostymi autorskimi SVG. Biblioteki 3D nie są ładowane ani publikowane w nowej paczce.

Starsze moduły `app.js`, `demo.js`, `product.js`, pliki tłumaczeń i style pozostają w repozytorium jako poprzednia implementacja. Bieżący HTML ich nie ładuje; generator FTP ich nie kopiuje. Archiwalne informacje i wcześniejszy audyt dotyczą scenariusza FibreFlow, nie obecnego modelu.

## Publikacja

Hosting statyczny pod `https://orbitops.eu/`, zgodnie z `../JAK_WGRAC_NA_SERWER.txt`. Wersje językowe przez `?lang=pl|en|de` współdzielą canonical. Nie deklarujemy hreflang dla dynamicznych tłumaczeń. Generator sprawdza pliki lokalne i importy; GitHub Pages uruchamia test modelu, generuje HTML i publikuje tę samą paczkę.
