# Audyt liczb i faktów OrbitOps — 4 listopada 2026

Ocena: spójne w sprawdzonym zakresie, z zastrzeżeniami dotyczącymi pochodzenia danych. Zakres częściowy: lokalny projekt strony i dashboardu oraz paczka FTP. Wprowadzono trzy korekty i sprawdzono je w przeglądarce w PL/EN/DE. Brak potwierdzenia zawartości wdrożonej domeny: odczyt HTTPS przez narzędzie WWW zakończył się błędem dostępu. To nie dowodzi awarii strony.

## Poprawki

1. Zapas korzystał z rzeczywistego zegara, mimo że reszta analizy opisywała 30.10.2026, 10:00 CET. Dnia 04.11 wyświetlał 0 t i 0 dni obok historycznego planu. Panel i KPI odnoszą się teraz do daty scenariusza: 800 t, 4 dni. Stały czas jest jawnie opisany; nie jest bieżącym pomiarem.
2. „Surowiec w drodze” zmieniono na „Planowana dostawa surowca”: stan analizy pochodzi z 30.10, a załadunek zaplanowano na 31.10.
3. Przy 48 h opóźnienia 200 t zapasu pomostowego zostaje zużyte w całości. Zastąpiono obietnicę dodatkowego zapasu po dostawie informacją, że pozostałość pomostowa powstaje tylko przy wcześniejszym przyjęciu dostawy głównej.

Zmiany obejmują odpowiedniki EN/DE, dokumentację i wersjonowanie zasobów w celu odświeżenia pamięci przeglądarki. Odtworzono DO_WGRANIA i OrbitOps-na-serwer.zip; nie opublikowano zmian na serwerze.

## Niezależne przeliczenie

Wejścia: 800 t na 30.10.2026, 10:00 CET; zużycie 200 t/dobę; planowane przyjęcie 02.11, 10:00. Bez nowych dostaw: 800/200 = 4 dni = 96 h, wyczerpanie 03.11, 10:00. Od stanu bazowego do planowanej dostawy mija 72 h, więc bufor wynosi 24 h.

| Opóźnienie | Luka | Surowiec pomostowy | Modelowany koszt przerwy |
| --- | --- | --- | --- |
| 24 h | 0 h | 0 t | 0 zł |
| 48 h | 24 h | 200 t | 60 000 zł |
| 72 h | 48 h | 400 t | 120 000 zł |

Formuły: luka = max(0, opóźnienie − 24 h); surowiec = luka × 200/24 t; koszt = luka × 2 500 zł/h. Dopłata: 200 × 90 = 18 000 zł. To koszt dodatkowy, nie pełna cena materiału ani gwarantowana oszczędność.

Archiwum: 600 t / 200 = 72 h. Od 20.10, 08:00 do 24.10, 04:00 mija 92 h. 600 + 200 − 92 × 200/24 = 33,33 t przed przyjęciem dostawy głównej; opis ok. 33 t jest poprawny. CET dla aktualnego scenariusza i CEST dla archiwum są spójne ze zmianą czasu.

Transport: 2 × 14 t = 28 t. Gotowy papier jest już wyprodukowany i nie zależy od listopadowej dostawy drewna. Zestawienie dwóch sygnałów dotyczących PO-1200 nie sumuje ich strat. Nawigacja pozostaje bez wyceny, wobec braku potwierdzonej trasy i pozycji.

## Pokrycie kontroli

Liczby w kolumnie „Pozostałe błędy” oznaczają jednostki z wykrytym, nienaprawionym błędem / jednostki objęte zakresem, także częściowo sprawdzone. Nie są odsetkiem dokładności ani liczbą pełnych testów. Nie badano wszystkich kombinacji interakcji i rozmiarów ekranu.

### Użyteczność i prezentacja

| Kategoria | Pozostałe błędy | Ocena |
| --- | --- | --- |
| Użyteczność i kompletność | 0 / 5 | Strona oraz 4 widoki dashboardu mają określone zadania; sprawdzono treści w kodzie, bez pełnego testu wszystkich ścieżek. |
| Jasność analityczna | 0 / 5 | Czas i status dostawy ujednolicono. Pozostaje drobna sugestia doprecyzowania języka rozwoju produktu w hero. |
| Spójność wizualna i interakcje | 0 / 5 | Zakres: 3 grafiki sygnałów, panel zapasu i mapa. W przeglądarce potwierdzono poprawki panelu, warianty wiatru i tłumaczenia; pozostałe części oceniano także z kodu. Brak pełnej kontroli mobilnej. |

### Poprawność analityczna

| Kategoria | Pozostałe błędy | Ocena |
| --- | --- | --- |
| Autorytet źródeł | 0 / 4 | Grupy: dane demo, EO, reguła drogowa, biogram. Dane demo są fikcyjne. Doświadczenie założycielki pozostaje niezależnie niepotwierdzone. |
| Wartości i obliczenia | 0 / 7 | Grupy: pokrycie, bufor, wrażliwość, dopłata, bilans pomostowy, archiwum, ładunki. Przeliczono niezależnie w Pythonie. |
| Zgodność wykresów i opisów | 0 / 5 | Zakres jak wyżej: 3 grafiki, zapas, mapa. Sprawdzono formuły, oś czasu i opis warunków; oględziny interakcji były wybiórcze. |
| Kompletność informacji o źródłach | 0 / 4 | Trzy sygnały i model EO opisują dane symulowane i braki; brak produkcyjnych rekordów do uzgodnienia. |
| Spójność między powierzchniami | 0 / 3 | Czas zapasu, status dostawy oraz bilans pomostowy: poprawiono kod i przekłady, potwierdzono render. Paczkę wygenerowano z poprawionych źródeł. |
| Kontrole jakości danych | 0 / 3 | Modele drogowy, zapasowy i nawigacyjny jawnie określają założenia; dane nie pochodzą z ERP/WMS/TMS. |
| Poparcie wniosków | 0 / 5 | Strona, trzy scenariusze i archiwum: wiatr nie dowodzi ETA, historyczny przypadek nie jest statystyką; koszty są warunkowe. |

## Fakty zewnętrzne i ograniczenia

- Godziny ograniczeń ruchu dla pojazdów o DMC powyżej 12 t są zgodne z [komunikatem GDDKiA z 29.10.2026](https://www.gov.pl/web/gddkia/w-drodze-na-wszystkich-swietych-uwazaj-na-zmienna-pogode): 31.10, 18:00–22:00 oraz 01.11, 08:00–22:00. Demo słusznie zastrzega konieczność sprawdzenia wyjątków dla konkretnego przewozu.
- Ogólny zakres obserwacji Sentinel i zastosowań EO odpowiada materiałom [ESA o misjach Copernicus](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Space_Component) i [ESA o pożarach](https://knowledge-hub-gda.esa.int/eo_capability/fires-and-plumes/). Nie jest to dowód, że demonstrator wykonuje te analizy.
- Dla obrazu Rotterdamu data pozyskania 19.05.2025 różni się od daty publikacji 25.09.2025. [Metadane dokładnego obrazu](https://commons.wikimedia.org/wiki/File:Rotterdam,_home_to_Europe%E2%80%99s_largest_maritime_port_(Copernicus_2025-09-25).png) wspierają datę pozyskania; bezpośrednia strona Copernicus zwracała 403, więc weryfikacja pierwotna daty jest ograniczona.
- 6 lokalizacji i 3 scenariusze na stronie zgadzają się z mapą i danymi; „1 relacja” oznacza aktualnie wybraną relację. Cyfry w tłumaczeniach strony zachowują wartości polskich tekstów.
- Hero opisuje funkcje w czasie teraźniejszym, mimo że sekcja „O nas” mówi o rozwijanym demonstratorze. Propozycja redakcyjna: „Rozwijamy OrbitOps, aby łączyć…”. Nie zmieniano tej treści w ramach korekt liczbowych.
- Do potwierdzenia przez właściciela pozostają informacje o doświadczeniu założycielki. Brak materiału źródłowego nie jest dowodem nieprawdziwości.

Walidacja techniczna: składnia zmienionych skryptów JS poprawna; generator paczki potwierdził zasoby HTML/CSS/JS. W przeglądarce sprawdzono stan 800 t i 4 dni, etykietę planowanej dostawy, poprawiony bilans oraz warianty 24/48/72 h i przekłady zmian PL/EN/DE. Oględziny dotyczyły wersji lokalnej.
