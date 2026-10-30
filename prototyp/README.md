# OrbitOps — Earthward / Daylight

Lokalny prototyp wizualny landing page’a, przygotowany do oceny desktopu, telefonu i scen 3D.

## Uruchomienie

```sh
npm install
npm start
```

Podgląd: http://127.0.0.1:4173/ . Wymagane Node.js, npm i Python 3.

## Zakres

- jasna identyfikacja, dzienna Ziemia i pełny układ strony;
- ciągły obrót dziennej Ziemi w hero (WebGL), z pauzą i ograniczeniem ruchu;
- oddzielny model Three.js z trzema stanami, kontrolą obrotu i tekstowym odpowiednikiem;
- widok desktopowy i mobilny, pauza oraz obsługa ograniczenia ruchu;
- lokalne fonty i tekstury, bez zależności od zewnętrznej usługi przy oglądaniu.

Kontakt pozostaje oznaczoną makietą: strona nie wysyła zgłoszeń. Scenariusz dostawy i lokalizacje modelu są fikcyjne. Prototyp nie jest połączony z produkcyjnymi danymi satelitarnymi ani firmowymi.

## Materiał recenzencki

Katalog `review/` zawiera PNG makiet oraz nagranie faktycznego renderu WebGL. Krytyk wizualny Sol 6.1 ocenia wyłącznie te obrazy i klatki animacji; nie otrzymuje kodu ani koncepcji tekstowej. Historia i ograniczenia oceny znajdują się w `review/recenzja-wizualna.md`.

Tryby pomocnicze do reprodukcji kadrów: `?still=1`, `?still=2`, `?still=3`. `?capture=hero` zapisuje 18,5-sekundowe nagranie płótna WebGL do lokalnego katalogu review. Serwer przyjmuje nagranie wyłącznie pod `/__capture` i działa na interfejsie loopback.

## Materiały

- Tekstura Ziemi: plik `earth_atmos_2048.jpg` z repozytorium Three.js, `examples/textures/planets/`.
- Region Rotterdamu: Copernicus Sentinel-2, pozyskanie 19 maja 2025; obraz `20250925_Rotterdam.png`, https://www.copernicus.eu/system/files/2025-09/image_day/20250925_Rotterdam.png . Zawiera zmodyfikowane dane Copernicus Sentinel (2025). Kadr został przycięty i zmniejszony.
- Fonty Manrope i IBM Plex Sans: Google Fonts; licencje SIL Open Font License w `assets/`.
- Geometria modeli regionalnych, kod i układ: opracowane na potrzeby tego prototypu. Nie wykorzystano generowanych obrazów udających obserwację satelitarną.

## Aktualizacja stylistyki na podstawie makiet użytkownika

Wersja z plikiem `reference-style.css` wykorzystuje chłodną biel, granat, turkus, kapsułkowe przyciski i ciemne panele. Hero przedstawia stale obracającą się dzienną Ziemię. Dodano warstwowy diagram źródeł oraz rozwinięto sekcję „Co to oznacza dla Twojej dostawy?”. Obrazy w `review/reference-*` dokumentują tę wersję; poprzednia recenzja 8,2/10 dotyczy wcześniejszego wyglądu.

## Grafiki, podgląd platformy i kontakt

Aktualna wersja dodaje dzienne zdjęcia ilustracyjne (źródła w `assets/photos/CREDITS.md`), autorską makietę platformy, mapę Europy na podstawie Natural Earth, trzy scenariusze ryzyka, listę dostawców i lokalną listę działań. Widoki podglądu są jawnie oznaczone jako demonstracyjne; nie są połączone z rzeczywistymi danymi firmy.

Kadr dziennej Ziemi dopasowuje odległość kamery do proporcji obszaru renderowania, zachowując margines wokół lewego obrysu także na telefonie.

Formularz ma wymagane pola, walidację e-mail, limit 500 znaków wiadomości oraz wybór obszarów zainteresowania. Przycisk przygotowuje wiadomość `mailto:` do adresu podanego w makiecie użytkownika. Wysyłkę potwierdza użytkownik w swoim programie pocztowym. Nie podłączono automatycznej wysyłki, serwera pocztowego ani zapisu danych do bazy. Treść można również skopiować na życzenie. Walidację i przygotowanie wiadomości sprawdzono na fikcyjnych danych, bez wysyłania e-maila.

Aktualne kadry są zapisane jako `review/product-*.png`. Recenzja niezależnego krytyka wizualnego: `review/recenzja-product.md`.

## Ciepłe akcenty

`warm-style.css` dodaje kremowe tło kontaktu (#FFF8EF), morelowe detale (#F2B58D), szampańskie obramowania (#D8BA7D), subtelną poświatę za globem i delikatnie cieplejszą prezentację zdjęć ilustracyjnych. Turkus pozostaje kolorem głównych akcji, a kolory scenariuszy ryzyka nie zostały zmienione. Zmiana ma charakter wizualny.

## Szczegółowy model regionu

Model w `region-model.js` ma płaskie drogi z oznakowaniem, skrzyżowania i most, pola i nasadzenia. Dostawca jest magazynem z rampami, panelami dachowymi i wózkiem widłowym. Fabryka ma halę z dachem pilastym, kominy, silosy i wentylatory. Po drogach poruszają się ciężarówki i samochody; animowane są również wentylatory, opady i fale na rzece.

OrbitControls umożliwia obrót przez przeciąganie myszą. Dostępne są też przyciski obrotu, resetu i pauzy ruchu. Na urządzeniach dotykowych obrót wymaga włączenia, aby zachować pionowe przewijanie strony. Preferencja ograniczenia ruchu zatrzymuje animację początkowo. Kamera dopasowuje kadr podczas obrotu.

Sprawdzono w lokalnej przeglądarce: przeciąganie, pauzę i wznowienie, reset, scenariusze, sterowanie mobilne oraz brak poziomego przewijania przy 390 px. Konsola bez błędów. Recenzja wizualna na podstawie dwóch kadrów: 8,5/10; nie jest oceną płynności animacji. Po recenzji przesunięto etykietę fabryki i wzmocniono trasę. Kadry: `review/region-detail-*.png`.

## Ujednolicenie typografii, ikony i interakcje

Cała strona korzysta z rodziny Manrope (również formularze i przyciski). Usunięto deklaracje ładowania IBM Plex Sans. Piktogramy zastąpiono lokalnie osadzonymi SVG Lucide; licencja: `assets/LUCIDE-LICENSE.txt`, źródło: https://lucide.dev/license.

Całe kafelki w sekcji „Świat się zmienia” powiększają się o 5,5%, razem ze zdjęciem i podpisem. Warstwy danych rozsuwają się po najechaniu i przy fokusie klawiatury. Efekty respektują prefers-reduced-motion.

Trzeci krok regionu udostępnia trzy działania: dostawca, zapas i transport. Wybór zmienia opis, zaznaczenie lokalizacji, pulsujący znacznik 3D i sygnał na trasie transportu. Są to ilustracyjne sugestie, nie operacje na rzeczywistych danych.

Weryfikacja: jedna obliczona rodzina fontów w nagłówkach, akapitach, przyciskach i formularzach; działający hover zdjęć i różne transformacje trzech warstw; przełączenie wszystkich działań; mobilny widok 390 px bez przepełnienia poziomego; brak błędów konsoli. Kadry w `review/refinement-*.png`. Niezależna recenzja tej aktualizacji nie została ukończona: model krytyka Sol dwukrotnie zgłosił brak dostępnej pojemności. Poprzednie oceny nie dotyczą tej aktualizacji.

## Wersje językowe i stabilna scena 3D

Przełącznik w nagłówku udostępnia polski, angielski i niemiecki z flagami. `translations.js` zawiera tłumaczenia tekstów strony, opisów obrazów, etykiet dostępności, scenariuszy interaktywnych i wiadomości kontaktowej. `i18n.js` ustawia język dokumentu, zapamiętuje wybór lokalnie i obsługuje linki `?lang=pl`, `?lang=en` i `?lang=de`. Zmiana języka zachowuje wybrany scenariusz, krok, działanie i wpisane dane formularza.

Scena regionu ma stałą wysokość niezależną od rozwijanego panelu działań. Przełączenie na trzeci krok nie zmienia rozmiaru płótna ani kadru kamery. Opady łagodnie wygasają przy zmianie kroku. Kafelki wyzwania skalują się w całości, zamiast przybliżać samo zdjęcie.

## Dashboard Demo — FibreFlow

`demo.html`, `demo-style.css` i `demo.js` udostępniają samodzielny, interaktywny demonstrator w stylistyce strony. Scenariusz: NordTimber / Kotka → Gdańsk → papiernia FibreFlow w Toruniu → PackPro / Poznań. Dashboard jest po polsku; przełącznik języka zachowuje dotychczasową obsługę wspólnego nagłówka.

Działają: cztery widoki, wybór i filtrowanie trzech sygnałów, porównanie dwóch wariantów dla każdego zdarzenia, koszt działania i potencjalna strata, rozwijane założenia, zapis i aktualizacja decyzji z właścicielem oraz reset. Decyzje są przechowywane tylko w pamięci otwartej karty i znikają po odświeżeniu. Nie są wysyłane żadne zlecenia ani wiadomości.

Wszystkie dane są fikcyjne, także komunikaty pogodowe i regulacyjne. Stan zapasu: 800 t na 30.10.2026, 10:00 CET, zużycie 200 t/dobę. Przyjęcie 1 200 t surowca w zakładzie zaplanowano na 02.11, 10:00; brak zapasu wypada 03.11, 10:00. Symulowane 48 h opóźnienia daje 24 h luki. Partia 28 t gotowego papieru jest niezależna od tej dostawy drewna. Brak integracji API, AIS, GIS lub produkcyjnego modelu AI.

Po audycie doprecyzowano model zakładu: zintegrowana celulozownia i papiernia pracująca 24/7, brak bufora masy celulozowej, jednakowa założona wilgotność drewna. Zapisanie propozycji decyzji nie usuwa ryzyka. Dla strat równych zero warunki skuteczności są zawsze widoczne. 18 000 zł oznacza dopłatę do zakupu pomostowego, nie pełne zapotrzebowanie na gotówkę; koszt przerwy netto zakłada 2 500 zł/h utraconej marży i kosztów postoju.

### Rozbudowa interakcji i mapy

`demo-refinement.css` porządkuje typografię Manrope. `demo-icons.js` osadza lokalny zestaw SVG Lucide, na tej samej licencji co ikony strony. `demo-map.js` i `demo-map.css` pokazują rzeczywiste granice Natural Earth oraz miasta we wspólnej projekcji Mercatora; lokalny plik mapy ma42KB. Pochodzenie: `assets/baltic-map-credits.md`. Trasy są orientacyjne, a animacja wiatru ilustracyjna, z pauzą, przełącznikiem warstwy i obsługą reduced-motion.

SugestiaAI jest przykładową wiadomością opartą na regule zapasu; nie korzysta z API modelu. Interaktywne grafiki pokazują okna dostaw, warianty24/48/72h i stan dowodów nawigacyjnych. Kalkulator wrażliwości nie zmienia zapisanej analizy48h. Bieżące audyty i ich ograniczenia opisuje `review/recenzja-demo-dashboard.md`.

### Animacje i archiwalne decyzje

`demo-insights.js/css` dodaje odtwarzanie zużycia zapasu: pierścień, odliczanie i suwak czasu0–96h, pauzę oraz reset. Przyspieszenie1s=15min dotyczy tylko odtwarzania bez nowych dostaw, nie głównej analizy. Odtwarzanie respektuje reduced-motion.

WidokDecyzje zawiera stałą fikcyjną decyzjęDEC-2026-014 z20–24.10.2026 (CEST): trasę głównej dostawy, odczyty sygnałów, uzasadnienie, koszty i historię zamknięcia. Nie przedstawia zakupu jako rzeczywistej transakcji ani różnicy wariantów jako potwierdzonej oszczędności. Licznik nawigacji obejmuje1 przypadek archiwalny i bieżące propozycje.

Mapa ma ciągłe gradientowe wstęgi i cząstki z ogonami poruszające się po krzywych, zamiast krótkich kresek. Pauza zamraża ruch; reduced-motion oraz brak wsparcia offset-path pozostawiają statyczną warstwę.

### Bieżący zapas w jednym panelu

Przyspieszone odtwarzanie zastąpiono panelem „Stan na teraz” bez suwaka i przycisków odtwarzania. Masa drewna, odliczanie dni/godzin/minut/sekund, pierścień, znacznik „Teraz” na osi i KPI pokrycia wynikają z rzeczywistego zegara oraz bazowego fikcyjnego stanu800t na30.10.2026,10:00CET i zużycia200t/dobę. Dane nie pochodzą zWMS. Model pomija nowe dostawy; po03.11,10:00 zatrzymuje masę i czas na zerze. Odliczanie jest częścią tego samego panelu co planowane przyjęcie i bufor24h.
