# OrbitOps — Earthward / Daylight

Rozwinięcie wybranego kierunku · 29 października 2026 · konspekt przed makietą.

## Decyzja projektowa

Rozwijamy **Earthward**: filmową zmianę skali od Ziemi do konkretnej decyzji operacyjnej. Około **85% powierzchni strony ma jasne tło**. Z Mission Brief bierzemy czytelny raport, a z Signal Atlas — rozkładówki i jasne rozróżnienie źródeł informacji. Orbital Clarity i Decision Lens są odrzucone. Atlas jest wsparciem Earthward, nie równoległym wariantem.

Główna myśl: **„Z orbity do decyzji o Twoich dostawach.”**

To marka obserwacji Ziemi i praktycznej wiedzy: dzienne wybrzeża, delty rzek, infrastruktura i krajobraz. Rozpoznawalność buduje zmiana skali **orbita → region → firma → decyzja**, powtarzana w kadrach i układzie strony.

Dzienny język obrazu odpowiada obserwacji optycznej. Nie rozszerzamy tego na twierdzenie, że wszystkie zobrazowania satelitarne wymagają dnia: radar może działać również nocą. Źródło: [EMSA — rodzaje sensorów](https://www.emsa.europa.eu/faq/375-faq-cms-satellites/3629-what-kind-of-sensors-are-on-board-the-satellites-that-emsa-uses-for-cms.html). To rozróżnienie służy poprawności briefu, nie musi być tematem landing page’a.

## Wrażenie i charakter

Strona powinna przypominać starannie wyreżyserowaną publikację o obserwacji Ziemi, która przechodzi w zrozumiałe objaśnienie produktu. Filmowy charakter wynika z kadru, światła i zmiany perspektywy; jasne tło pozwala odetchnąć między obrazami.

Satelitarny charakter utrzymują krzywizna planety, widok z góry i rzeczywiste struktury terenu. Biznesowy charakter zapewniają podpisy dostawcy, magazynu i możliwej konsekwencji. Realizm natury zestawiamy z prostymi, precyzyjnymi schematami.

Motyw identyfikacji: **punkt lokalizacji i zmieniające się pole widzenia**. W szerokim kadrze jest miejscem w regionie, w zbliżeniu — konkretnym dostawcą, w raporcie — odniesieniem do decyzji. Ten sam punkt przechodzi przez kolejne skale i kończy historię przy jednym wniosku dla firmy; nie mnożymy dekoracyjnych pinezek. Nie stosujemy soczewki ani otwartego łuku z odrzuconych kierunków. Roboczy wordmark „OrbitOps” ma prostą typografię; jego finalny rysunek wymaga osobnej próby graficznej.

## Kolorystyka

| Rola | Kolor | Zastosowanie |
|---|---|---|
| Główne tło | `#F5F3ED` | Ciepła, prawie biała powierzchnia większości strony |
| Czysta biel | `#FFFFFF` | Raport, formularz, wybrane sekcje |
| Główny tekst | `#172B32` | Nagłówki i akapity |
| Tekst pomocniczy | `#53656B` | Podpisy i źródła, także na jasnym tle |
| Głęboka zieleń | `#20594E` | Główny przycisk z białym tekstem; wybrane lokalizacje |
| Niebieski | `#2F667D` | Oznaczenia źródeł, woda i drobne akcenty |
| Terakota | `#A44832` | Sygnał wymagający uwagi, zawsze z opisem |
| Obramowania | `#D7DEDA` | Delikatne podziały, bez funkcji jedynego wskaźnika stanu |

Kolory terenu pozostają naturalne: piaskowe brzegi, zgaszona zieleń, błękit i szarości infrastruktury. Zieleń marki nie pokrywa całej strony; jej rola jest precyzyjna. Pomaga to uniknąć skojarzenia z ogólną marką ekologiczną.

## Typografia i kompozycja

- **Manrope 500/600**: nagłówki, około 72/78 px dla H1 na desktopie i 40/44 px na telefonie. Krótkie zdania, normalna wielkość liter.
- **IBM Plex Sans 400/500**: tekst 18/28 px, na telefonie 17/26 px. Podpisy minimum 14/20 px; komunikaty istotne dla decyzji pełnym rozmiarem tekstu.
- Bazowy ekran 1440 px: kontener 1280 px, marginesy 80 px, 12 kolumn i odstępy 24 px. Telefon 390 px: marginesy 20 px, jedna kolumna. Szerokość tekstu około 60–68 znaków.
- Odstępy między sekcjami 112–144 px na desktopie i 64–80 px na telefonie. Wyraźnie rozdzielamy duży obraz, interpretację i następny wątek.
- Prostokątne kadry, narożniki 8–12 px, cienkie linie. Karty stosujemy dla informacji, które naprawdę tworzą osobny obiekt.
- Rytm: **duży kadr → krótki wniosek → przykład → spokojna sekcja tekstowa**. Raport trójkolumnowy pojawia się raz, nie w każdej sekcji.

## Pierwszy ekran

Jasna nawigacja: Jak to działa / Zastosowania / O nas oraz „Porozmawiajmy”. Poniżej układ 5 kolumn tekstu i 7 kolumn obrazu. Obraz jest wysoki i ma wagę wizualną, ale nie staje się tłem akapitu.

Niewielka etykieta etapu: **„OrbitOps w rozwoju”**.

**H1: „Z orbity do decyzji o Twoich dostawach.”**

**Podtytuł:** „Tworzymy rozwiązanie, które ma łączyć dane satelitarne, pogodowe i informacje o Twojej firmie, by pomagać oceniać ryzyko i wybierać dalsze działania.”

Główny przycisk: **„Porozmawiajmy o OrbitOps”**. Drugi: **„Zobacz przykład”**, prowadzący do interaktywnej sekcji.

**Kadr:** bliska, oświetlona dziennym światłem krzywizna Ziemi. Ląd, ujście rzeki i wybrzeże wypełniają większość obrazu. Kosmos może pozostać w cienkim pasie ponad horyzontem, zgodnie z fizyką sceny. Nie rozjaśniamy próżni do bieli; jasność całego layoutu zapewniają powierzchnie strony i oświetlony teren. Unikamy dominującej nocnej półkuli i świateł miast.

Na telefonie kolejność: tekst → przyciski → statyczny dzienny kadr z opcją odtworzenia. Obietnica i cel strony są dostępne przed animacją.

## Animacja 3D — spokojne przejście skali

Osobny render modelu, około **12–16 sekund**, traktowany jako ilustracja. Pełne wyjaśnienie jest zapisane na stronie, więc użytkownik nie musi oglądać całej sekwencji.

1. **Orbita, 0–4 s:** oświetlona Ziemia, spokojny ruch, subtelny punkt wybranego regionu.
2. **Region, 4–9 s:** dopasowane przejście do dziennego obrazu wybrzeża lub doliny rzecznej. Czytelny kształt lądu utrzymuje ciągłość kadru.
3. **Firma, 9–16 s:** jawne przejście do uproszczonego modelu dostawcy i magazynu. Powiązanie lokalizacji prowadzi wzrok do stojącego obok, statycznego wyjaśnienia wartości produktu.

Przejście od realnego obrazu do schematu jest celowe i oznaczone. Nie symulujemy nieograniczonego zoomu, który obiecywałby odczytywanie detali magazynu z dowolnej rozdzielczości danych. Model schematyczny utrzymuje kierunek kamery, punkt odniesienia, paletę i światło. Ponowny start sekwencji przez łagodne przenikanie do dziennego kadru otwierającego, bez wygaszania strony do czerni.

Poza ekranem animacja zatrzymuje się. Widoczny przycisk pauzy, brak dźwięku. Przy preferencji ograniczonego ruchu pozostaje statyczny kadr i pełny tekst.

## Interaktywne Three.js — sprawdź, co oznacza sygnał

Niżej na stronie znajduje się **jasna scena regionalna**: dzienny, uproszczony teren, rzeka, dostawca i magazyn. Obok raport z trzema wybieranymi częściami. Model nie przypomina kolejnej obracającej się planety.

Stała etykieta: **„Przykład ilustracyjny — fikcyjne dane i lokalizacje”**. Scenariusz: prognozowane opady w regionie dostawcy. Nie nakładamy fikcyjnego zagrożenia na nazwę prawdziwej firmy.

| Wybór | Co zmienia się w scenie | Wyjaśnienie tekstowe |
|---|---|---|
| **1. Sygnał** | Pojawia się jeden obszar prognozowanych opadów | Prognoza wskazuje warunki wymagające uwagi. Obraz satelitarny jest osobnym źródłem informacji o terenie |
| **2. Wpływ na firmę** | Podświetlenie dostawcy i jego powiązania z magazynem | Ta dostawa może wymagać sprawdzenia ze względu na lokalizację dostawcy; nie potwierdzamy wystąpienia opóźnienia |
| **3. Co sprawdzić** | Podkreślenie wybranych lokalizacji, bez wyznaczania nowej trasy | Skontaktuj się z dostawcą, sprawdź zapas i dostępne alternatywy |

Na początku widoczne są dwie lokalizacje i jedna relacja. Dopiero wybór „Sygnał” dodaje nakładkę, aby nie obciążać widoku. Kamera ma trzy przygotowane kadry. Opcjonalny obrót służy oglądaniu modelu; przyciski zapewniają całą funkcjonalność. Brak systemu filtrów, menu warstw i wymaganych gestów znanych z narzędzi GIS.

Na telefonie krótki wniosek aktywnego stanu pozostaje przy przyciskach, nad sceną; rozwinięcie znajduje się pod sceną. Zmiana stanu nie uruchamia automatycznego przewijania. Przy ograniczeniu ruchu kamera przełącza przygotowane kadry bez animowanego przelotu. Przyciski działają klawiaturą, a aktywny stan i fokus są widoczne. Bez WebGL użytkownik otrzymuje odpowiadające stanom ilustracje i identyczny tekst.

## Sekwencja całej strony

1. **Zobacz szerzej:** dzienny kadr orbitalny, prosta obietnica, status rozwoju i kontakt.
2. **Przybliż problem:** duża dzienna ilustracja regionu i krótki wniosek: „Zdarzenie w regionie dostawcy może mieć znaczenie dla Twojej firmy”. Jasny podpis objaśnia, czy oglądamy obserwację, prognozę czy model.
3. **Zrozum wpływ:** interaktywny przykład Three.js z raportem. To główny moment demonstracji produktu.
4. **Skąd bierze się ocena:** rozkładówka inspirowana atlasem, trzy czytelne źródła: obserwacje Ziemi / pogoda i środowisko / dane firmy. Bez kolejnego rozbudowanego modelu 3D.
5. **Gdzie może pomóc OrbitOps:** zakupy, operacje i logistyka. Trzy krótkie scenariusze z małymi dziennymi kadrami, konkretnym pytaniem i możliwą wartością.
6. **Kto za tym stoi:** prawdziwe osoby, kompetencje i etap produktu. Doświadczenie w ESA nie jest przedstawiane jako partnerstwo instytucjonalne.
7. **Porozmawiajmy o Twojej firmie:** jasne, spokojne zakończenie; e-mail służbowy, firma i opcjonalny opis problemu. Dalszy krok zgodny z rzeczywistym procesem, bez niepotwierdzonych obietnic pilotażu.

## Obrazy, stock, AI i shadery

**Podstawa:** autorski render dziennej Ziemi oraz osobny model regionu w Three.js. Można kontrolować zgodność światła, terenu i przejść. Na etapie makiety wybieramy jeden region inspirujący obrazy, zachowując rozdział rzeczywistego materiału i fikcyjnego scenariusza.

**Realne obrazy:** [galeria Copernicus Data Space](https://dataspace.copernicus.eu/gallery) jako źródło poszukiwań dziennych delt, portów i infrastruktury; [Copernicus Browser](https://dataspace.copernicus.eu/explore-data) do wyboru obszaru. Dla konkretnego zasobu sprawdzamy warunki użycia i opisujemy pochodzenie. Obraz do ilustracji marketingowej nie oznacza, że dane z tego źródła są już zintegrowane z OrbitOps.

**Stock:** opcjonalnie 2–3 dzienne fotografie magazynu, portu lub zakładu w sekcji zastosowań. Jednolita temperatura światła i naturalne kolory. Zdjęcia nie dokumentują przykładowego zdarzenia.

**AI:** poszukiwanie kierunku światła, kadrowania i wstępnych kompozycji. Przykładowe zadanie dla generatora: „Dzienna obserwacja Ziemi, bliska krzywizna planety, delta rzeki, naturalne piaskowe brzegi, zgaszona zieleń, czysty błękit, editorial art direction, bez tekstu i interfejsu”. Wynik to ilustracja koncepcyjna, nie pomiar. Wideo generowane pozostaje opcją do testów stylistycznych; kontrolowany render 3D jest bazą produkcyjną.

**Shadery:** subtelna atmosfera na krawędzi planety, matowa woda, delikatne przejście widoczności nakładki zagrożenia. Materiał nigdy nie obniża czytelności podpisów; nie stosujemy ciągłego pulsowania alarmów.

## Weryfikacja przed wdrożeniem

Następny etap to makieta desktop 1440 px i mobile 390 px, trzy nieruchome kadry animacji oraz trzy stany sceny interaktywnej. Sprawdzamy przede wszystkim, czy odbiorca rozumie: czym zajmuje się OrbitOps, co jest źródłem danych, co jest wnioskiem i co może zrobić dalej.

Wydajność: najpierw tekst i lekki kadr, potem animacja, a scena Three.js dopiero w pobliżu sekcji. Cele robocze: kadr ≤180 KB mobile / ≤300 KB desktop; film ≤3 MB desktop; na telefonie pobieranie filmu po uruchomieniu; scena z biblioteką i zasobami ≤2 MB po kompresji. Jeśli ruch nie mieści się w budżecie, upraszczamy sekwencję lub używamy jej statycznej wersji. Limity i płynność wymagają pomiarów prototypu.

## Ocena agenta Sol 6.1

**8,4/10 — próg jakości osiągnięty w pierwszej rundzie recenzji rozwinięcia.** Krytyk nie zalecił kolejnej rundy. Ocena dotyczy opisu koncepcji i jego dyscypliny względem ambicji najlepszych studiów, nie gotowej jakości wizualnej.

**Plusy:** dzienny obraz i jasny layout tworzą spójny świat; render i interakcja pełnią odmienne role; jawne przejście od zdjęcia do modelu jest wiarygodne; jeden prosty przykład pomaga odbiorcy nietechnicznemu.

**Konkretne słabości:** sam punkt lokalizacji nie zapewnia oryginalności; na telefonie wniosek mógł zostać odsunięty pod scenę; ograniczenie ruchu wymagało objęcia także kamery Three.js. Wprowadzono trzy doprecyzowania recenzenta: jeden punkt przechodzi przez całą narrację, krótki wniosek pozostaje przy przyciskach, a ograniczenie ruchu wyłącza animowane przejazdy kamery.

**Do sprawdzenia w makietach:** rozpoznawalność obrazów, proporcje tekstu i scen, czytelność krzywizny Ziemi, tempo animacji, jakość przejścia do schematu i wydajność mobilna. Około 85% jasnego tła oznacza dominację, a nie sztywny limit powierzchni ilustracji.

**Kontrola wybranych par kolorów:** główny tekst na głównym tle 13,25:1; tekst pomocniczy 5,50:1; biały tekst głównego przycisku 8,08:1; terakota na głównym tle 5,33:1. To obliczenie kontrastu tokenów, nie audyt dostępności gotowej strony.
