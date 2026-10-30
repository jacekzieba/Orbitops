# OrbitOps — pięć kierunków landing page’a

> Dokument historyczny: po omówieniu kierunków użytkownik wybrał rozwinięcie Earthward z przewagą jasnego tła i dziennym obrazowaniem. Kierunki 1 i 5 odrzucono; 2 i 3 wspierają wybrany kierunek. Aktualny brief: [Earthward / Daylight](/Users/jacek/Desktop/Orbitops/koncepcje/OrbitOps-Earthward-Daylight.md).

Dokument koncepcyjny · 29 października 2026 · etap: opis przed makietami.

## Założenie marki

**Zobacz zagrożenie. Zrozum wpływ. Wybierz działanie.**

OrbitOps ma łączyć dane satelitarne, pogodowe i operacyjne firmy, aby pomagać MŚP oceniać zagrożenia dla dostaw, lokalizacji i zasobów. To główna obietnica wynikająca z dostarczonego opisu. Kosmiczna estetyka powinna pokazywać źródło wiedzy, a historia strony — jej znaczenie na Ziemi.

Przyjmuję polski landing skierowany do osób zarządzających operacjami i zakupami. Ponieważ opis mówi o rozwijanym rozwiązaniu, domyślny cel strony to kontakt z potencjalnymi uczestnikami przyszłego pilotażu. Przycisk na obecnym etapie: **„Porozmawiajmy o OrbitOps”**; drugi: **„Zobacz przykład”**. Po potwierdzeniu dostępności pilotażu główny przycisk może brzmieć „Porozmawiajmy o pilotażu”. W każdym hero stale widnieje spokojny komunikat: **„Rozwijamy OrbitOps — rozwiązanie wspierające ocenę ryzyka dla dostaw i lokalizacji”**. Nie zakładamy istniejących klientów, działającego monitoringu na żywo ani gotowości wszystkich funkcji.

Wspólny przykład, wyraźnie oznaczony jako fikcyjny: prognoza intensywnych opadów w regionie dostawcy → możliwe zagrożenie dostawy wymagające oceny → sugestia sprawdzenia statusu dostawcy i alternatywnych źródeł. Obserwacja satelitarna opisuje warunki w terenie, prognoza dotyczy możliwego rozwoju sytuacji, a wniosek o wpływie wymaga danych firmy — strona pokazuje te różnice. Bez wymyślonych oszczędności, terminów i prawdopodobieństw.

## Wspólne zasady projektu

- **Desktop first:** projekt bazowy 1440 px, kontener 1280 px, marginesy boczne 80 px, 12 kolumn, odstępy 24 px. Na szerokich ekranach kontener pozostaje ograniczony; przy 1024 px margines 40 px, na telefonie 20 px i jedna kolumna.
- **Rytm:** jednostka 8 px; odstępy między sekcjami 112–144 px na desktopie i 64–80 px na telefonie. Akapity do około 60–68 znaków w wierszu.
- **Czytelność:** tekst 18/28 px na desktopie, 17/26 px na telefonie; H1 64–80 px / 1,05–1,12 oraz 36–44 px na telefonie. Najwyżej dwa kroje w jednym kierunku. Małe techniczne oznaczenia są dodatkiem, nigdy nośnikiem głównego wyjaśnienia.
- **Kolory:** podane palety to propozycje tokenów. Przed wdrożeniem sprawdzamy każdą parę tekst–tło: minimum 4,5:1 dla zwykłego tekstu. Kolory ryzyka zawsze z podpisem i ikoną. Akcent dekoracyjny nie staje się automatycznie kolorem tekstu.
- **Wstępna kontrola palet:** obliczony kontrast głównego tekstu i przycisku: Orbital 17,62:1 / 7,20:1; Atlas 13,17:1 / 9,92:1; Mission 16,38:1 / 10,71:1; Earthward 18,44:1 / 9,90:1; Lens 16,95:1 / 9,04:1. To kontrola wybranych par kolorów, nie audyt dostępności gotowej strony.
- **Nawigacja:** Jak to działa / Zastosowania / O nas + jeden główny przycisk. Na telefonie prosty przycisk menu. Bez dekoracyjnych podwójnych nawigacji z załączonego obrazu.
- **Dwa rodzaje 3D w każdym kierunku:** osobna automatyczna animacja renderowanego modelu oraz interaktywna scena w **Three.js** (interpretuję „Tree.js” jako Three.js). Animacja ma pauzę, startuje bez dźwięku; przy ograniczeniu ruchu widoczny jest kadr statyczny.
- **Interakcja bez bariery:** scena ma przyciski scenariuszy dostępne klawiaturą i tekstowy odpowiednik. Przeciąganie i hover są opcjonalne. Na telefonie obrót jednym palcem dopiero po włączeniu „Obróć model”, by nie blokować przewijania.
- **Wydajność:** najpierw tekst i lekki kadr, film dopiero po pierwszym renderze, Three.js pobierany przy zbliżeniu do sekcji. Jedna aktywna scena WebGL, pauza poza ekranem, uproszczone materiały na telefonie. Bez WebGL pozostaje kompletna historia i przełącznik tekstowych scenariuszy. Cele do sprawdzenia w prototypie: LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1; to budżety projektowe, nie wyniki pomiarów. Robocze limity transferu: kadr hero ≤180 KB na telefonie i ≤300 KB na desktopie; film ≤3 MB na desktopie, na telefonie brak automatycznego pobierania; interaktywna scena z biblioteką i zasobami ≤2 MB po kompresji. Limity wymagają pomiaru prototypu. W Earthward, jeżeli film przekroczy budżet, skracamy ujęcie i złożoność, zamiast pogarszać pierwszy ekran.

## 1. Orbital Clarity — spokój i precyzja

**Idea:** nocna Ziemia jako narzędzie orientacji. Najbardziej bezpośrednie rozwinięcie klimatu załączonej grafiki, z własnym motywem „otwartej orbity”: niepełny łuk kończący się punktem i krótkim wnioskiem biznesowym.

**Identyfikacja:** tło `#07111F`, powierzchnie `#102238`, główny tekst `#F4F7FB`, tekst pomocniczy `#BECBDD`, błękit `#79C9FF`, mocny przycisk `#174BCC` z białym tekstem. Nagłówki Space Grotesk 500/600, tekst Manrope 400/500. Znak: otwarte O z przesuniętym punktem; pełny wordmark czytelny także bez animacji. Otwarty łuk zawsze łączy obserwowaną lokalizację z jednym wnioskiem. Po wyborze etapu jego koniec staje się etykietą możliwego działania. W ikonach i separatorach ta sama geometria wskazuje przepływ informacji; nie tworzy przypadkowych ozdobników.

**Pierwszy ekran:** tekst na 5 kolumnach po lewej, Ziemia na 7 po prawej. H1: „Zagrożenia dla dostaw. Wcześniej w polu widzenia.” Podtytuł: „Tworzymy rozwiązanie, które ma łączyć dane satelitarne, pogodowe i informacje o Twojej firmie, by wskazywać ryzyka i możliwe działania.” Pod kulą tylko jedna karta przykładu; żadnej chmury drobnych wskaźników. Telefon: nagłówek i przyciski przed kadrem Ziemi.

**Sekwencja:** obietnica → jeden przykład → trzy etapy działania → zastosowania dla operacji i zakupów → źródła i ograniczenia → zespół → kontakt.

**Animacja 3D:** render Ziemi z wolnym obrotem i jedną orbitą, pętla 10–12 s, bez nadmiaru gwiazd. **Three.js:** regionalny glob i jeden przypadek dostawcy. Trzy kroki „Sygnał / Wpływ / Możliwe działanie” prowadzą wzdłuż jednego łuku od obserwacji do wniosku; aktywny krok ma jedną kartę obok sceny. Użytkownik śledzi krótką historię, nie bada atlasu. Nie musi sam szukać pinezki.

**Reguła dalszych sekcji:** stała lewa kolumna z numerem etapu, prawa z jednym dużym wyjaśnieniem. Otwarty łuk powraca jako łącznik między kolejnymi etapami; bez siatki jednakowych kart.

**Materiały:** rzeczywista tekstura Ziemi po sprawdzeniu warunków wykorzystania; autorski render, własny interfejs. AI może pomóc w poszukiwaniu światła i kadru, ale nie tworzy mapy danych. Shader tylko dla delikatnej atmosfery.

**Inspiracje:** błękit i ciemna baza [Space Education](https://dribbble.com/shots/8949293-Space-Education), realistyczne 3D i równowaga z czytelnością [Zajno](https://dribbble.com/shots/25860515-Educational-Website-on-Space-Pollution), załączony obraz. Nasza zmiana: asymetryczny układ oraz przejście od planety do konkretnej firmy.

**Zaleta:** szybkie rozpoznanie tematu i dobra równowaga marki z produktem. **Ryzyko:** niebieska planeta jest popularnym motywem; o oryginalności zdecydują otwarty łuk, kadrowanie i jakość przykładu. Nakład: średni.

## 2. Signal Atlas — atlas decyzji

**Idea:** marka przypominająca współczesny atlas obserwacji Ziemi. Jasne, uporządkowane objaśnienia kontrastują z nocnymi oknami orbitalnymi.

**Identyfikacja:** papier `#F2F0E9`, ciemny tekst `#172A28`, granice `#C9D1CB`, butelkowa zieleń `#144B43`, mięta `#BCEBD8`, noc `#081A1D`. Nagłówki Manrope 600, tekst IBM Plex Sans 400/500. Znak: przecięcie południka z otwartą orbitą; graficzny podpis marki to trzy przesunięte warstwy konturu: obserwacja / firma / decyzja. Jasne płaszczyzny dominują; ciemne sceny zajmują około 1/3 narracji.

**Pierwszy ekran:** H1 „Dane z orbity. Decyzje blisko Twojej firmy.” Tekst na 6 kolumnach, obok kadr Ziemi jak ilustracja atlasowa z podpisem. Pod obrazem podpis: „Przykład ilustracyjny: dostawca → prognoza opadów → dostawa wymagająca sprawdzenia”. Poniżej pełnej szerokości spokojny pasek: „Obserwacja → Wpływ na firmę → Możliwe działanie”. Na telefonie podpis pozostaje poza obrazem.

**Sekwencja:** obietnica → objaśnienie trzech warstw danych → interaktywny przypadek → dla kogo → jak zaczynamy współpracę → zespół i kontakt.

**Animacja 3D:** obrót globu w prostokątnym ciemnym oknie, bez HUD-u. **Three.js:** fragment krzywizny Ziemi jako rozłożony przestrzennie atlas. Trzy płaszczyzny — warunki terenowe i prognoza, lokalizacje firmy, możliwy wpływ — można pojedynczo włączyć lub wyłączyć i porównać za pomocą podpisanej legendy. Ograniczona zmiana kąta ukazuje, która warstwa wnosi daną informację; bez dowolnego latania kamerą. To eksploracja źródeł, a nie historia trzech kroków jak w Orbital Clarity. Obok zawsze jest odpowiedź „Co to oznacza dla Ciebie?”. Na telefonie warstwy prezentowane pojedynczo; pełne wyjaśnienie dostępne w tekście.

**Reguła dalszych sekcji:** każda sekcja jak rozkładówka atlasu: numer przypadku, duży tytuł wniosku, obraz sygnału i podpis znaczenia dla firmy. Kontury oznaczają warstwy informacji. Sekcje zastosowań opisują dostawcę, magazyn i dostawę, aby nie powstało wrażenie serwisu ekologicznego.

**Materiały:** prawdziwe obrazy obserwacji Ziemi, autorskie kontury i schematy; stock tylko jako niewielki, konkretny kontekst portu lub magazynu. Jedna konwencja kadru i koloru dla całego zestawu. AI do prób ilustracyjnych, bez generowanych „zdjęć satelitarnych” udających pomiar. Shader odsłaniania warstwy pełni rolę objaśniającą.

**Inspiracje:** sposób łączenia realizmu z wyjaśnieniem u [Zajno](https://dribbble.com/shots/25860515-Educational-Website-on-Space-Pollution). Ciepła paleta [Cosmo](https://dribbble.com/shots/26624745-Product-for-a-Space-Technology-Company-Cosmo) jest punktem odniesienia dla odejścia od typowego kosmicznego błękitu, nie wzorem naszej zielonej palety.

**Zaleta:** przystępność dla MŚP i mocne wyróżnienie wobec ciemnych stron kosmicznych. **Ryzyko:** może wyglądać jak marka ekologiczna; przeciwdziałają temu scenariusze dostaw i stale obecne orbitalne kadry. Nakład: średni.

## 3. Mission Brief — raport operacyjny

**Idea:** landing zbudowany jak raport na jasnym papierze dla osoby odpowiadającej za ciągłość dostaw. Kosmiczny charakter pochodzi z geometrii orbit i obrazów, a nie z terminalowego języka.

**Identyfikacja:** grafit `#101416`, panele `#1C2428`, papier `#F3F1E9`, tekst pomocniczy `#B9C7CC`, bursztyn `#F2BC62`, ciemny tekst przycisku `#101416`. IBM Plex Sans 400/500/600 jako jedyny krój; hierarchię budują rozmiary i numeracja 01–03. Znak: trzy odcinki orbity zbiegające się w jednym punkcie. Raport i większość treści na jasnym papierze (około 70% powierzchni), z tekstem #101416 na tle #F3F1E9; grafit w obramowaniu marki i oknach orbitalnych. Linie 1 px, narożniki 4–8 px; bez szklanych paneli.

**Pierwszy ekran:** H1 „Co może zakłócić Twoje dostawy?” Obok jeden duży, jasno oznaczony „Przykład ilustracyjny”: zagrożenie → wpływ → sugestia. Obraz Ziemi na górnej krawędzi tej kompozycji, nie jako tło tekstu. Na telefonie raport staje się trzema kolejnymi blokami.

**Sekwencja:** pytanie i odpowiedź → interaktywny raport → skąd pochodzą sygnały → zastosowania → zakres pilotażu do uzgodnienia → zespół → kontakt.

**Animacja 3D:** wolny przelot nad krzywizną Ziemi przechodzący w cienki pas orbitalny. **Three.js:** niewielki regionalny glob stanowi ilustrację do raportu. Wybór wiersza „Sygnał / Zależna dostawa / Co sprawdzić” podświetla odpowiednią lokalizację lub połączenie, a obok otwiera uzasadnienie i ograniczenie wniosku. Głównym obiektem interakcji jest raport; model ma pomóc go zrozumieć. Nie pokazujemy wyliczania ani porównywania tras.

**Reguła dalszych sekcji:** szerokie poziome wiersze raportu, z trzema kolumnami „Co wiemy / Co może to oznaczać / Co sprawdzić”; pod nimi krótkie przypisy źródeł. Na telefonie każdy wiersz staje się osobną sekwencją.

**Materiały:** własny prototyp raportu oraz autorski model; stock i AI nie są potrzebne w wersji podstawowej. Delikatny shader podświetla tylko wybrany odcinek. Minimum dekoracyjnych metryk.

**Inspiracje:** orbitalny język wizualizacji opisany przez [Zajno](https://dribbble.com/shots/25860515-Educational-Website-on-Space-Pollution), temat satelitarny [OrbitX](https://dribbble.com/shots/24453099-OrbitX-website). OrbitX przedstawia firmę technologii kosmicznych; OrbitOps musi od razu wyjaśnić swoją rolę w operacjach firm.

**Zaleta:** najmocniejsza demonstracja użyteczności. **Ryzyko:** raport może zdominować markę, a fikcyjny interfejs wyglądać jak istniejący produkt; wyraźne oznaczenie przykładu i większe, spokojne bloki treści są obowiązkowe. Nakład: średni do wysokiego.

## 4. Earthward — z orbity do Twojego magazynu

**Idea:** filmowa opowieść zmieniająca skalę: planeta → region → lokalizacja → decyzja człowieka. Jeden stały punkt oznaczający firmę spina wszystkie kadry i stanowi motyw marki.

**Identyfikacja:** noc `#080C14`, główny tekst `#FFF7EE`, jasne sekcje `#EEE6DA`, ich tekst `#1B2329`, miedź `#B86A46`, przycisk `#F2C39B` z ciemnym tekstem. Nagłówki Barlow Condensed 600 wyłącznie w krótkich frazach, tekst DM Sans 400/500; polskie zdania pisane normalną wielkością liter. Miedź jest materiałem i akcentem, nie kolorem długich akapitów.

**Pierwszy ekran:** H1 „Od obrazu Ziemi do decyzji o Twoich dostawach.” Pod nim dosłowne objaśnienie produktu. Film zajmuje prawą połowę, tekst ma własne, jednolite tło. Przycisk „Zobacz przykład” przenosi do objaśnienia bez obowiązkowego oglądania filmu.

**Sekwencja:** orbita → zagrożenie w regionie → wpływ na firmę → interaktywny przykład → sposób działania → zespół → kontakt. To zwykłe przewijanie, bez przejmowania scrolla i obowiązkowych sekwencji.

**Animacja 3D:** 10 s autorskiego renderu: 0–3 s planeta i jeden punkt; 3–6 s stylizowany region z dostawcą; 6–10 s linia zależności prowadząca do magazynu i podpis możliwego wpływu. Początek i koniec łączy ściemnienie. Tekstowe wyjaśnienie pozostaje poza filmem. **Three.js:** model wycinka Ziemi z portem, magazynem i drogą; wybór elementu pokazuje jego zależność od innych. Pod modelem zdanie: „To model poglądowy, nie mapa bieżących zagrożeń”. Na telefonie film zastępuje kadr z opcją odtworzenia, interakcja korzysta z trzech przycisków.

**Reguła dalszych sekcji:** po każdym dużym kadrze krótki blok „Co to oznacza dla Twojej firmy”. Punkt lokalizacji pozostaje tym samym znakiem, a kolejne sekcje zmniejszają skalę obserwacji. Bez długiego filmu podzielonego na obowiązkowe przystanki.

**Materiały:** jedna geometria, punkt lokalizacji, kierunek światła i paleta łączą film oraz interaktywny region. Stock pojawia się wyłącznie poza tą sekwencją, w zastosowaniach. Render zapewnia kontrolę geometrii między ujęciami; opcjonalny krótki materiał wideo AI tylko jako atmosferyczne przejście. Generowanie wideo niesie ryzyko zmiany kształtu planety, dróg i obiektów. Stock portu ma funkcję kontekstową, a nie dokumentuje zdarzenia.

**Inspiracje:** produktowo-filmowa narracja [Oakley × Axiom Space](https://www.oakley.com/en-us/l/axiom-space); ciepły kierunek palety [Cosmo](https://dribbble.com/shots/26624745-Product-for-a-Space-Technology-Company-Cosmo); czerwono-ciemna paleta [Spacefox](https://dribbble.com/shots/13927039-Spacefox-Gazing-into-the-future) jako inspiracja odważniejszego światła, bez motywu kolonizacji Marsa.

**Zaleta:** największy potencjał emocjonalny i rozpoznawalność przejścia skali. **Ryzyko:** najdroższa produkcja; film może przyćmić usługę. Oddzielny tekst i konkretny przykład w następnym ekranie ograniczają ten problem. Nakład: wysoki.

## 5. The Decision Lens — soczewka wiedzy

**Idea:** własny motyw optyczny: eliptyczna soczewka odsłania zależność między obserwacją a decyzją. Nie udaje fizycznego instrumentu OrbitOps; to metafora porządkowania danych.

**Identyfikacja:** atrament `#151329`, jasne tło `#F4F2FA`, jasny tekst `#F8F6FF`, tekst pomocniczy na ciemnym `#C6C0DA`, lawenda `#C5B4FF`, przycisk `#4933A8` z białym tekstem. Nagłówki Source Serif 4 500 w krótkich zdaniach, tekst Manrope 400/500. Znak i maski ilustracji wynikają z tej samej elipsy. Jasne sekcje treści mają ciemny tekst; kosmiczny hero pozostaje ciemny.

**Pierwszy ekran:** H1 „Dane z orbity. Wyraźniejszy obraz ryzyka dostaw.” Podtytuł dosłownie nazywa dane satelitarne i łańcuch dostaw. Po prawej Ziemia częściowo widziana przez płaską, eliptyczną soczewkę; bez chromowanego torusa i dekoracyjnego szkła na wszystkich kartach.

**Sekwencja:** obietnica → jak soczewka porządkuje trzy źródła → przykład wpływu na dostawę → zastosowania → zasady pracy z danymi i ograniczenia → zespół → kontakt.

**Animacja 3D:** Ziemia obraca się za nieruchomą eliptyczną maską, wewnątrz której pojawia się pojedyncza linia zależności. **Three.js:** przestrzenny model zależności, nie drugi glob z warstwami. Na dole widoczny jest fragment powierzchni Ziemi z obszarem zagrożenia, ponad nim niewielka sieć dostawca–dostawa–magazyn. Przyciski „Zagrożenie w regionie” i „Wpływ na dostawę” zmieniają perspektywę: widok z góry pokazuje zasięg geograficzny, boczny — połączenie z firmą. Soczewka izoluje wybraną zależność i odpowiadającą jej kartę tekstową. Rozdzielenie tych dwóch porządków uzasadnia przestrzeń 3D. Model jest schematem, nie skalowaną mapą. Efekt nie wymaga śledzenia kursora ani przeciągania. Telefon pokazuje te same dwa widoki przez przyciski.

**Reguła dalszych sekcji:** pary „Co widać w danych / Co to oznacza dla firmy”, przedzielone eliptycznym wycięciem. Dalej prostokątne, spokojne bloki tekstu; elipsa służy selekcji informacji, a nie maskuje wszystkich zdjęć i przycisków.

**Materiały:** autorski model i shader maskujący, bez kosztownej refrakcji. AI może wygenerować poszukiwania światła, faktur i kompozycji, z których projektant wybierze zasady do renderu. Stock ograniczony do sekcji zastosowań, jeśli będzie potrzebny.

**Inspiracje:** relacja optyki i widoczności w [Oakley × Axiom Space](https://www.oakley.com/en-us/l/axiom-space). [Aistars](https://dribbble.com/shots/23820414-Aistars-AI-Guide-among-the-Stars) jest odniesieniem do łączenia AI i kosmosu; OrbitOps wymaga bardziej dosłownego języka biznesowego. Serif i elipsa są naszą propozycją, nie elementami przypisanymi tym referencjom.

**Zaleta:** najbardziej własny, skalowalny system identyfikacji; motyw działa też bez 3D. **Ryzyko:** sama soczewka może sugerować firmę optyczną lub abstrakcyjny produkt AI; podpis produktu i konkretny przypadek muszą pojawić się od razu. Nakład: średni do wysokiego.

## Wspólny konspekt treści i konwersji

1. **Hero:** co robi OrbitOps, dla kogo i dokąd prowadzi przycisk. Animacja jest widoczna, ale tekst nie czeka na jej załadowanie.
2. **Przykład:** „Prognoza wskazuje intensywne opady w regionie dostawcy. W przykładzie pokazujemy, jak połączenie prognozy, obserwacji terenu i zależności firmy może pomóc wskazać dostawę do sprawdzenia”. Stale widoczne oznaczenie fikcyjnego scenariusza.
3. **Jak to ma działać:** planowany proces: połączenie obserwacji, prognoz i danych firmy → ocena możliwego wpływu → propozycja działań do rozważenia. Wyjaśnić, skąd pochodzi ocena i jakie ma ograniczenia; nie sugerować gwarantowanej trafności.
4. **Dla kogo:** zakupy — zależności od dostawców; operacje — lokalizacje i zasoby; logistyka — możliwe zakłócenia przepływu. Zakres funkcji zgodny z etapem produktu.
5. **Wiarygodność:** prawdziwe osoby i kompetencje, status rozwoju, źródła i przykładowy proces. Doświadczenie członka zespołu w ESA nie oznacza partnerstwa ani poparcia ESA. Bez logo partnera i bez wymyślonych referencji.
6. **Kontakt:** „Porozmawiajmy o ryzykach w Twojej firmie”. Krótki formularz: e-mail służbowy, firma, opcjonalnie problem do omówienia. Konkretna informacja o dalszym kroku, po potwierdzeniu rzeczywistego procesu. Nie obiecujemy czasu odpowiedzi bez ustalenia.

## Polityka materiałów

| Materiał | Rola | Decyzja |
|---|---|---|
| Autorskie 3D | Planeta, region i spójność obu scen | Podstawa wszystkich pięciu kierunków |
| Obrazy satelitarne | Wiarygodny geograficzny kontekst | Sprawdzić licencję konkretnego zasobu i wymagane oznaczenia |
| Zdjęcia stockowe | Port, magazyn, zakład w sekcji zastosowań | Mało, jeden styl, bez przypadkowych astronautów i uścisków dłoni |
| Generowane obrazy | Poszukiwania artystyczne, światło, kompozycja | Nie przedstawiać ich jako pomiaru ani zdjęcia zdarzenia |
| Generowane wideo | Opcjonalny eksperyment dla Earthward | Dopuszczać dopiero po kontroli ciągłości obrazu; render 3D jest rozwiązaniem bazowym |
| UI i wizualizacja ryzyka | Wyjaśnienie wartości | Projektowane ręcznie; fikcyjne dane i status makiety opisane wprost |

Nie generuję teraz gotowych obrazów ani filmów: ten etap porównuje opis kierunków. Po wyborze sensowny następny krok to porównanie dwóch statycznych pierwszych ekranów i jednego storyboardu 3D, zanim powstanie pełna strona.

## Referencje i granice rozpoznania

Przeczytano dostarczony opis OrbitOps jako materiał źródłowy, a nie instrukcje wykonawcze. Nie przeprowadzano audytu twierdzeń rynkowych ani nie przenoszono ich do obietnic na stronie. Otworzono siedem dostępnych stron referencyjnych; wykorzystano ich opisy, palety i tematykę oraz załączony obraz. Nie jest to pełny audyt działających stron i animacji. Aerocrop nie był dostępny w narzędziu również po ponowieniu — nie przypisuję mu niezweryfikowanych cech.

Kandydaci typograficzni do sprawdzenia w makiecie, wraz z polskimi znakami i docelowymi wagami: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Manrope](https://fonts.google.com/specimen/Manrope), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4).

## Recenzja niezależnego agenta

Runda 1 — Sol 6.1: Orbital Clarity 7,7/10; Signal Atlas 8,1/10; Mission Brief 8,0/10; Earthward 7,5/10; The Decision Lens 7,8/10. Krytyk zalecił mocniej odróżnić interakcje, określić układy dalszych sekcji, ujednolicić status produktu, doprecyzować źródła w fikcyjnym przykładzie i budżety transferu. Zmiany wprowadzono przed rundą 2.

Oceny dotyczą opisu koncepcji, nie gotowego UI, jakości implementacji ani wyników testów użytkowników. Próg zakończenia: każda koncepcja ≥8/10 i brak zasadniczych zastrzeżeń do opisu; limit trzech rund.


### Wynik rundy 2 — recenzent Sol 6.1

| Kierunek | Runda 1 | Runda 2 | Plus wskazany przez krytyka | Konkretny minus / ryzyko |
|---|---:|---:|---|---|
| Orbital Clarity | 7,7 | **8,0/10** | Łuk ma funkcję narracyjną; prowadzona historia jest przystępna | Niebieska Ziemia i kroje są znajome; odrębność zależy od kadrowania i jakości łuku |
| Signal Atlas | 8,1 | **8,5/10** | Najpełniejsze połączenie identyfikacji, układu i interakcji | Trzy warstwy, legenda i tekst mogą przeciążyć ekran; prototyp powinien zaczynać od jednej aktywnej warstwy |
| Mission Brief | 8,0 | **8,3/10** | Raport wiąże dowód, interpretację i działanie | Wielokrotne trzy kolumny mogą męczyć; potrzebne przerwy rytmu między raportem, zastosowaniami i zespołem |
| Earthward | 7,5 | **8,1/10** | Storyboard i wspólna geometria tworzą regułę reżyserii | 10 sekund może być zbyt krótkie na zrozumienie; sprawdzić nieruchome klatki przed produkcją |
| The Decision Lens | 7,8 | **8,3/10** | Perspektywy uzasadniają 3D, a elipsa i serif budują własny język | Soczewka, sieć i perspektywa mogą konkurować; soczewka ma tylko wyróżniać, bez deformacji i zasłaniania podpisów |

**Decyzja krytyka:** próg osiągnięty przez wszystkie opisy; trzecia runda nie jest potrzebna. Rekomendacja: Signal Atlas. Mission Brief przy priorytecie wyjaśnienia produktu; Decision Lens przy priorytecie odrębności marki.

**Odniesienie do najlepszych studiów:** krytyk ocenia dyscyplinę koncepcyjną — związek motywu, narracji i zachowania strony. Nie jest to empiryczny ranking studiów ani stwierdzenie, że niewykonane makiety dorównują Netguru, Zajno czy Halo Lab. Poziom wizualny można ocenić dopiero na realnej kompozycji, typografii i ruchu.

### Moja rekomendacja

Rozwinąć **Signal Atlas** jako całościowy kierunek: jasne rozkładówki, nocne obrazy orbitalne, operacyjny przykład i czytelne źródła informacji. Jeśli priorytetem jest maksymalna zgodność z ciemnym klimatem załączonej grafiki, wybrać **Orbital Clarity**. Nie łączyć wszystkich pięciu języków w jeden landing.

Kolejny etap, po wyborze kierunku: makieta desktop 1440 px i mobile 390 px, stan początkowy interakcji, dwa kolejne stany oraz storyboard animacji. Dopiero te artefakty pozwolą uczciwie ocenić końcowy poziom art direction.
