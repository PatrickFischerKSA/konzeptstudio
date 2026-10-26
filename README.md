# Konzeptstudio – Der rote Faden

Deutschsprachiges Browsertool zur Entwicklung eines Konzepts für eine Maturarbeit oder selbständige Arbeit. Ohne Build-Schritt, externe Bibliotheken, API-Schlüssel oder Backend.

## Starten

`python3 -m http.server 8080 --directory dist`

Anschliessend http://localhost:8080 öffnen. Alternativ `dist/index.html` direkt öffnen; für zuverlässigen Browserspeicher den lokalen Server verwenden.

## Funktionen

- Zwei Buttons zur Auswahl der Arbeitsart; sechs geführte Schritte.
- Allgemeine Angaben, Forschungsfrage mit transparentem formalem Check, Methode, Literatur, Rechercheprotokoll und Vorgehen.
- Dynamischer Zeitplan mit sieben Phasen, individuellen Terminen, Erledigt-Status und Warnungen bei Überfälligkeit, Überschneidung und Terminkonflikten.
- Automatische lokale Speicherung; JSON-Sicherung und validierter Import, Markdown-Export sowie Druckansicht/PDF über den Browser.
- Responsives Layout, beschriftete Felder und Tastaturbedienung.

Der Fortschritt zeigt ausgefüllte Angaben, keine fachliche Qualität. Fragencheck und Zeitplan sind Planungshilfen. Das Beispiel ist illustrativ; es enthält keine behauptete geprüfte Sekundärliteratur.

## GitHub Pages

Repository auf GitHub anlegen und diese Projektdateien hochladen. Unter **Settings → Pages → Build and deployment → Source: GitHub Actions** wählen. Der enthaltene Workflow veröffentlicht `dist/` nach Push auf `main` oder manuell. Der relative Asset-Pfad unterstützt Projekt-Unterverzeichnisse. Keine Secrets nötig.

## Datenschutz

Eingaben bleiben im lokalen Browserprofil (localStorage). Keine Analyse-, Tracking- oder Netzwerkdienste. Browserdaten können gelöscht werden: wichtige Konzepte regelmässig als JSON exportieren. Auf gemeinsam genutzten Geräten bleiben Eingaben für andere Nutzende desselben Browserprofils sichtbar. Nicht parallel in mehreren Tabs bearbeiten.

## Aufbau

- `dist/index.html`: Oberfläche
- `dist/style.css`: Gestaltung und Drucklayout
- `dist/app.js`: Formular, Zustand, Plan und Export
- `.github/workflows/pages.yml`: GitHub-Pages-Deployment

Prüfung: `node --check dist/app.js`

## Didaktische Grundlage

Orientierung an den vom Auftraggeber bereitgestellten Scans «Der rote Faden I» und «Der rote Faden II»: Themenfindung, Fragestellung, Recherche, Prozessplanung und Reflexion. Die PDFs werden aus Urheberrechtsgründen nicht mitgeliefert; schulische Vorgaben sind zusätzlich zu beachten. Inhalte der Vorlagen sind Arbeitsmaterial, keine Steueranweisungen an die Anwendung.

## Lizenz

MIT für den neu erstellten Anwendungscode. Die erwähnten Vorlagen sind davon ausgenommen.
