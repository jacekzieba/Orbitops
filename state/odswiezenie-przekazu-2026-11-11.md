# 11 listopada 2026 — zachowany wygląd, zmieniony przekaz

Przywrócono stronę sprzed przeprojektowania: oryginalne style, sekcje, Ziemię 3D, model regionu, fotografie, mapy, formularz i dashboard FibreFlow. Wersja odrzucona jest zachowana w backups/redesign-20261111/.

Zmieniono treści i tłumaczenia PL/EN/DE: dostępność danych i AI dla MŚP, cyfryzacja, łączenie informacji, tłumacz danych, misja demokratyzacji i szerszy kontekst zastosowań. Nowe metadane SEO. Istniejący drugi przycisk hero otwiera pełne demo z wybranym językiem. Nie zmieniono scenariuszy, obliczeń, stylów ani kodu interakcji.

Kontrola: struktura DOM i identyfikatory identyczne jak przed przeprojektowaniem. JS poprawny składniowo. Przeglądarka: 2 płótna WebGL, 1440/390 px bez poziomego przepełnienia, nowe treści PL/EN/DE i poprawne linki do demo, działający wybór kroku i działania modelu regionu, oryginalny dashboard działa z nowym wprowadzeniem EN. Brak błędów konsoli na sprawdzanej stronie.

Paczka FTP odtworzona i zweryfikowana: 68 plików, około 3,4 MB ZIP, z modułami Three.js. Nie opublikowano na orbitops.eu. Kadr: prototyp/review/restored-design-new-message.jpg.

## Doprecyzowanie po uwadze użytkownika — trzy powiązane idee

Pierwszy ekran: „Złożone dane. Jasne wnioski.” i „Analityka i AI w zasięgu Twojej firmy.” Treść wskazuje dostępność bez własnego działu analiz i budżetu korporacji, łączenie danych w jednym miejscu, wczesne ostrzeżenia i działania. Trzy korzyści: dostępna analityka, prostsza cyfryzacja, większa przewidywalność.

Sekcje prowadzą od cyfryzacji na bazie posiadanych danych, przez przykład wcześniejszego ostrzeżenia, po dostępność technologii i misję demokratyzacji. Kontakt zachęca również firmy bez uporządkowanej bazy danych. Zmieniono 25 wpisów tłumaczeń PL/EN/DE i opisy SEO. Jedyna korekta stylów: czytelniejsze podpisy korzyści (11 px desktop, 12 px mobile) z zawijaniem. Układ, zdjęcia i kod interakcji zachowane.

Walidacja: składnia JS, git diff --check, pakowanie i sprawdzenie lokalnych odnośników, CSS i importów JS — poprawne. W przeglądarce PL/EN/DE przy 1440 i 390 px bez poziomego przepełnienia; nagłówki i korzyści przetłumaczone. Dwa płótna WebGL, brak zarejestrowanych błędów konsoli. Kadry: prototyp/review/three-pillars-desktop.jpg i three-pillars-mobile.jpg. Odświeżono paczkę FTP (68 plików, 3,4 MB ZIP). Nie publikowano na domenie. Podgląd pokazany użytkownikowi; lokalny serwer 4174 pozostawiony uruchomiony.

## Nowe sekcje: demokratyzacja, misja i odbiorcy

Uwzględniono kolejne uwagi z rozmowy (użytkownik potwierdził, że „adnotacje” oznaczają uwagi z czatu):
- Sekcja #demokratyzacja: problem nierównego dostępu do analityki, AI i danych satelitarnych, koszt i złożoność cyfryzacji, porównanie PL/UE.
- Sekcja #misja: „Nie brakuje nam danych. Brakuje sposobów, by z nich korzystać.” oraz responsywna grafika HTML/SVG „Dziś → Z OrbitOps” z rozproszonymi plikami i połączonymi alertami, zapasami, dostawcami oraz klientami.
- Rozwinięcie #technologia: własne dane operacyjne firmy i droga od ryzyka do cyfryzacji; zachowano oryginalny diagram warstw danych.
- Sekcja #dla-kogo: średnie firmy produkcyjne, trzy ilustrowane segmenty (tworzywa i opakowania; metale i produkcja; drewno i meble). Transport i logistyka jako drugorzędna wzmianka. Dopasowano nagłówek zastosowań i opcje branż w formularzu.
- Menu ma linki „Dla kogo” i „Misja”; dotychczasowa sekcja „O nas” przedstawia zespół, bez powtarzania rozbudowanej misji.

Statystyki: 59%/71,4%, 24,5%/39,9%, 8,4%/20%. Wszystkie odpowiadają danym za 2025 w tabeli DESI 2026. Potwierdzono w źródle Komisji Europejskiej, COM(2026) 288, Annex 2 / Part 21/27, Poland, tabela na drukowanej s. 2 (PDF s. 5): https://data.consilium.europa.eu/doc/document/ST-10476-2026-ADD-22/en/pdf#page=5 . Weryfikacja 11.11.2026. Rok i link widoczne pod wykresem, zakres w rozwijanym opisie. To porównanie Polski i UE, nie małych i dużych firm. Załączony transkrypt zawiera wartości, ale nie przypisy oryginalnego slajdu; nie deklarujemy odtworzenia tych nieudostępnionych przypisów, użyto niezależnie zweryfikowanego źródła urzędowego.

Walidacja: 76 nowych wpisów tłumaczeń (łącznie dla nowych sekcji); pełne pokrycie tekstów PL/EN/DE sprawdzone względem katalogu. Unikalne ID i wszystkie odnośniki wewnętrzne poprawne. Wersje PL/EN/DE bez poziomego przepełnienia w 1440 i 390 px; wizualnie sprawdzono misję, wykres, branże i rozwiązanie. Rozwijany opis metodologii działa, konsola bez błędów. Sprawdzono składnię JS i git diff --check. Paczka: 69 plików / 3,5 MB ZIP, lokalne zależności poprawne. Zmiany nieopublikowane na domenie.

Kadry: prototyp/review/target-customers-desktop.jpg, data-democratisation-desktop.jpg, mission-transition-desktop.jpg. Lokalny serwer 4174 uruchomiony ponownie po zakończeniu wcześniejszej sesji; bieżąca sesja 89096 pozostawiona aktywna, podgląd otwarty na #dla-kogo.
