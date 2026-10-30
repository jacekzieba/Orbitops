# Audyt wizualny: proporcje, kolor, typografia i rytm

Data: 30.10.2026. Niezależny subagent `design_spacing_audit`.

## Zakres i metoda

Faktycznie obejrzano bieżący dashboard w działającej przeglądarce na desktopie1280px i mobile390×844px, w tym pulpit, mapę, panel zapasu, alert, listę sygnałów, analizę i archiwum. Obejrzano również stronę główną index.html w celu porównania identyfikacji. Odczytano rzeczywiste computed styles oraz wymiary elementów. Nie oceniano płynności animacji na podstawie samych kadrów. Subagent nie zmieniał implementacji; poprawki wdrażał agent główny.

## Znalezione i poprawione

1. **Skala zasłaniała Poznań.** Wcześniejsza poprawka mieściła skalę w mapie, lecz jej ciemne tło nakładało się na podpis miasta. Przeniesiono ją do wolnego lewego górnego narożnika. Potwierdzono na desktopie i telefonie; Poznań jest czytelny.
2. **Przypis o modelu zapasu był za duży.** Reguła bazowa `.orbit-app .continuity-panel p` nadpisywała mniejszy styl. Rzeczywisty tekst miał13px/23,4px i94px wysokości. Po poprawce ma11px/18,7px i56px wysokości na desktopie. Odliczanie i stan zapasu odzyskały właściwą przewagę w hierarchii.
3. **CTA AI łamało się na dwa wiersze.** Przycisk miał około164px szerokości i zajmował nieproporcjonalną wysokość. Po poprawce180×44px na desktopie, jeden wiersz; na mniejszych ekranach oddzielny wiersz.
4. **Padding dużych paneli miał przypadkowe wartości18/21/26/28px.** Ujednolicono go do24px, z16px dla wnętrz kart i świadomymi odstępami16/24px. Mobile zachowuje mniejsze wartości. Potwierdzone computed padding24px dla app-view, panelu zapasu, analizy, AI i alertu.
5. **KPI miały różne rozmiary i dolne wyrównanie.** Pokrycie zapasu miało26px, pozostałe liczby30px. Dekoracyjne kreski zależały od długości podpisów. Po poprawce wszystkie liczby mają30px i42px wysokości pola. Cztery kreski kończą się na dokładnie tej samej współrzędnej Y.
6. **Monitoruj wyglądało jak podwyższony priorytet.** Otrzymało neutralny szaroniebieski kolor#58717e; bursztyn pozostaje dla podwyższonego, rdzawy dla wysokiego.

## Wnioski dotyczące systemu wizualnego

- Jedna obliczona rodzina fontów w reprezentatywnych nagłówkach, tekstach, przyciskach i selectach: Manrope, sans-serif. Różnica wielkości między marketingowym landingiem i gęstszym dashboardem jest uzasadniona.
- Granat, mięta, kremowe akcenty, cienkie obramowania i kapsułkowe działania zachowują spójność ze stroną główną. Kolor alertu wyraźnie różni się od spokojniejszego tła sugestiiAI.
- Ikony Lucide są spójne w kresce. Rozmiary14/19/21/23/25px odpowiadają resetowi, nawigacji, sygnałom, AI i identyfikacji firmy; nie wyglądają na przypadkowo pomieszane biblioteki.
- Desktopowa mapa około490px szerokości i panel zapasu około363px są dobrze zrównoważone. Wspólna wysokość około659px nie wymusza sztucznego ścisku w prawym panelu.
- Lista sygnałów260px i analiza około608px zapewniają czytelną relację nawigacji do treści. Wysokość analizy wynika z pełnego uzasadnienia i interaktywnych elementów; nie stwierdzono kolizji.
- Mobile zachowuje hierarchię, mieści cztery jednostki odliczania i archiwalne KPI. Sprawdzono brak poziomego overflow. Po kontroli viewport przywrócono.

## Ocena po iteracji

**9,1/10.** Nie ma problemów blokujących prezentację. To ocena aktualnego renderu i odczytów CSS, a nie powtórzenie wcześniejszej punktacji.

Dalsze, nieblokujące usprawnienia: na długich analizach można rozważyć utrzymanie listy sygnałów w polu widzenia, aby ograniczyć pustą dolną część lewego pasa. Pomocnicze opisy skali i kraju pozostają małe przy miniaturze mapy; kluczowe lokalizacje mają większe podpisy i tekstowy odpowiednik. Pełny audyt dostępności, daltonizmu i screen readerów nie był częścią tej oceny.
