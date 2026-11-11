> SUPERSEDED: Użytkownik odrzucił przeprojektowanie. Przywrócono oryginalny wygląd i FibreFlow; aktualny zakres opisuje state/odswiezenie-przekazu-2026-11-11.md.

# OrbitOps — wdrożenie lokalne, 11 listopada 2026

Zrealizowano końcowy zakres transkryptu: jeden landing page skupiony na demokratyzacji danych, cyfryzacji MŚP i produkcie. Podgląd dashboardu w hero, sekcja tłumacza danych, pełne demo na stronie, cztery obszary możliwości, trzy branże produkcyjne, dane i technologia oraz bezpośredni kontakt e-mail. PL/EN/DE i aktualne SEO, w tym nowy obraz Open Graph 1200×630.

Demo FORMA / COSMA używa jawnie fikcyjnych danych. Zakład pod Łodzią: 120 pracowników, granulat z Arabii Saudyjskiej, zamówienie 2 mln butelek z terminem w dniu 35. Zapas 210 t, zużycie 10 t/dobę; planowana dostawa 200 t w dniu 12. Aktywne zakłócenia dodają 10 i 3 dni. Wariant pomostowy 60 t w dniu 18. Szczegóły modelu w prototyp/README.md.

## Weryfikacja

- Node test runner: cztery testy przeszły. Cztery kombinacje zakłóceń, wszystkie osiem kombinacji zakłóceń/zakupu pomostowego, niezależny bilans dzienny dla dni 0–35, wartości graniczne i kompletność trzech słowników.
- W przeglądarce: wszystkie pięć widoków w PL/EN/DE bez brakujących tekstów i przepełnienia przy 768 px.
- Dodatkowe oględziny: desktop 1440 px, telefon 390 px, wąski telefon 320 px (DE: klienci i sygnały). Brak wykrytego przepełnienia poziomego w sprawdzonych stanach.
- Cztery kombinacje sygnałów: ETA 12/22/15/25, luki 0/1/0/4; poprawne wyniki w UI.
- Wariant pomostowy: pokrycie do dnia 27, luka warunkowo 0, stan 220 t w dniu 25. Zapis propozycji zachowuje bazową lukę 4 dni i pozostawia stan ryzyka widoczny.
- Zapis decyzji oraz własny szkic zachowują się po zmianie języka; reset czyści stan. Kopiowanie szkicu działa. Nie wysyłano wiadomości ani zleceń.
- Menu mobilne: otwieranie i zamykanie Escape. Poprawne linki mailto. Załadowana ilustracja Ziemi. W logach przeglądarki brak błędów i ostrzeżeń.
- Sprawdzono składnię nowych modułów JS, unikalność ID, pojedynczy h1 i lokalne kotwice HTML.
- Generator paczki zweryfikował zasoby HTML/CSS i importy JS. Integralność ZIP poprawna: 26 plików, ok. 0,8 MB. Paczka nie zawiera starszego kodu ani biblioteki Three.js.
- Kadry: prototyp/review/product-landing-desktop.jpg, product-demo-desktop.jpg i product-landing-mobile.jpg.

## Zakres i ograniczenia

Brak integracji produkcyjnych, modelu AI, automatycznej wysyłki i potwierdzonych cen. Szkic to deterministyczny przykład. Nie prognozujemy realizacji zamówienia klienta bez harmonogramu produkcji. Statystyk Polska–UE nie opublikowano: w transkrypcie brakuje pełnych źródeł i lat. Brak roadmapy, finansowania, wywiadów i pozostałych wykluczonych elementów korporacyjnych.

To lokalna implementacja i gotowa paczka do wgrania. Nie wykonano publikacji na orbitops.eu ani push do GitHuba. Nie przeprowadzono pełnego audytu WCAG ani testów każdej kombinacji przeglądarki i rozmiaru; reduced-motion uwzględniono w CSS.
