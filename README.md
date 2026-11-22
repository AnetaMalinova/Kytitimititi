# Kytitimiti 🪴

Jednoduchá a hravá apka na připomínání zalévání pokojových kytek.

- kytky s fotkou, popiskem, nárokem na světlo (stín / polostín / slunce) a intervalem zalévání
- jedním ťuknutím „Zalito!“ → připomene se znovu za nastavený počet dní
- funguje offline, data zůstávají jen v zařízení (IndexedDB), záloha do souboru
- čeština + angličtina, světlý i tmavý vzhled

## Použití na iPhonu
1. Otevři stránku apky v Safari.
2. Sdílet → **Přidat na plochu**.
3. Občas si udělej zálohu (Nastavení → Záloha). Data žijí jen v tomhle zařízení.

## Vývoj
Celá apka je statická: `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`.
Při každém vydání zvyš `APP_VERSION` v `index.html` a `CACHE_VERSION` v `sw.js` (stejné číslo).

## Licence zdrojů
- Ikony a ilustrace: vlastní tvorba pro tento projekt.
- Písmo: systémové písmo zařízení, nic se nestahuje.
- Žádné externí knihovny.

© Aneta Malinová. Všechna práva vyhrazena.
