# 📚 AlgoApp Flashcard Exporter

Chrome/Brave böngésző bővítmény, amely lehetővé teszi a flashcard-ok exportálását az [AlgoApp](https://web.algoapp.ai/) webalkalmazásból CSV formátumban.

## ✨ Funkciók

- **Egyetlen kattintás** - A bővítmény ikonjára kattintva automatikusan elindul az export
- **Teljes lista** - Automatikusan végig görgeti az oldalt és összegyűjti az összes kártyát
- **Vágólapra másolás** - Az eredmény azonnal a vágólapra kerül, csak Ctrl+V
- **CSV formátum** - `front,back` formátumban exportál, könnyen importálható más alkalmazásokba

## 📸 Támogatott nézet

A bővítmény az alábbi lista nézetből tudja kinyerni az adatokat:

![AlgoApp Cards lista nézet](Képernyőkép%202026-02-02%20175139.png)

## 🔧 Telepítés

1. **Töltsd le** a repót (Code → Download ZIP) vagy klónozd:
   ```bash
   git clone https://github.com/FELHASZNALONEV/algoapp-flashcard-exporter.git
   ```

2. Nyisd meg a böngészőben:
   - Chrome: `chrome://extensions`
   - Brave: `brave://extensions`

3. Kapcsold be a **"Fejlesztői mód"** / **"Developer mode"** kapcsolót (jobb felső sarok)

4. Kattints a **"Kicsomagolt bővítmény betöltése"** / **"Load unpacked"** gombra

5. Válaszd ki a letöltött **flashcard-exporter** mappát

## 📖 Használat

1. Nyisd meg a https://web.algoapp.ai/ oldalt és jelentkezz be

2. A **Decks** szekcióban válaszd ki a kívánt deck-et

3. A deck adatlapján kattints a **Cards** szekcióra

4. Az oldal alján válaszd ki a **lista nézetet** (≡ ikon)

5. Kattints a böngésző jobb felső sarkában található **Flashcard Exporter** bővítmény ikonra (zöld "F" betű)

6. A bővítmény automatikusan:
   - Felugrik a lista tetejére
   - Végig görgeti az összes kártyát
   - Összegyűjti a Front és Back oszlopok tartalmát
   - **Vágólapra másolja** az eredményt

7. Illeszd be (Ctrl+V) bárhová az exportált adatokat!

## 📋 Kimeneti formátum

```csv
proud,büszke
tooth,fog
sort,fajta; válogat
tough,kemény; nehéz
```

## 🌐 Kompatibilitás

- ✅ Google Chrome
- ✅ Brave Browser
- ✅ Chromium-alapú böngészők

## 📄 Licenc

MIT License - szabadon használható és módosítható.

---

# 📚 AlgoApp Flashcard Exporter

A Chrome/Brave browser extension that allows you to export flashcards from [AlgoApp](https://web.algoapp.ai/) web application in CSV format.

## ✨ Features

- **One click export** - Click the extension icon and export starts automatically
- **Full list support** - Automatically scrolls through the page and collects all cards
- **Clipboard copy** - Results are instantly copied to clipboard, just Ctrl+V
- **CSV format** - Exports in `front,back` format, easily importable to other applications

## 📸 Supported View

The extension extracts data from the following list view:

![AlgoApp Cards list view](Képernyőkép%202026-02-02%20175139.png)

## 🔧 Installation

1. **Download** the repo (Code → Download ZIP) or clone it:
   ```bash
   git clone https://github.com/USERNAME/algoapp-flashcard-exporter.git
   ```

2. Open in your browser:
   - Chrome: `chrome://extensions`
   - Brave: `brave://extensions`

3. Enable **"Developer mode"** toggle (top right corner)

4. Click **"Load unpacked"** button

5. Select the downloaded **flashcard-exporter** folder

## 📖 Usage

1. Open https://web.algoapp.ai/ and log in

2. In the **Decks** section, select the desired deck

3. On the deck page, click on the **Cards** section

4. At the bottom of the page, select **list view** (≡ icon)

5. Click the **Flashcard Exporter** extension icon in the top right corner of your browser (green "F" letter)

6. The extension will automatically:
   - Scroll to the top of the list
   - Scroll through all cards
   - Collect the content of Front and Back columns
   - **Copy the results to clipboard**

7. Paste (Ctrl+V) the exported data anywhere you need!

## 📋 Output Format

```csv
proud,büszke
tooth,fog
sort,fajta; válogat
tough,kemény; nehéz
```

## 🌐 Compatibility

- ✅ Google Chrome
- ✅ Brave Browser
- ✅ Chromium-based browsers

## 📄 License

MIT License - free to use and modify.
