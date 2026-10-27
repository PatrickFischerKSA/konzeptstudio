# Konzeptstudio – Der rote Faden

Deutschsprachiges Browsertool zur Entwicklung eines Konzepts für eine Maturarbeit oder selbständige Arbeit. Ohne Build-Schritt, API-Schlüssel oder Backend. Die Word-Bibliothek wird lokal mitgeliefert; es gibt keine CDN-Abhängigkeit.

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

## Konzeptlayout

Vorschau, Druck/PDF und Markdown folgen der bereitgestellten Word-Vorlage: Arbeitstitel, Ausgangslage und Motivation, Fragestellung und Ziel, Themeneingrenzung, Vorgehensweise und Methoden, vorläufige Gliederung und vorläufiger Zeitplan. Allgemeine Angaben, Literatur/Recherche sowie Arbeitsorganisation ergänzen den Aufbau. Die Druckansicht nutzt A4, einen blauen Haupttitel, graue Abschnittstitel und Serifenschrift. Es werden nur Gliederung und Layout übernommen; persönliche Inhalte der Vorlage sind nicht Teil des Repositorys. Bestehende Eingaben bleiben kompatibel.

## Word-Download und Konsistenzcheck

Unter **Konzept ansehen → Word (.docx)** wird eine echte, bearbeitbare DOCX-Datei mit allen Konzeptfeldern und dem aktuellen Zeitplan direkt im Browser erzeugt. Die lokal enthaltene Bibliothek `docx` 9.6.1 liegt unter `dist/vendor/` (MIT, Lizenzdatei beigefügt); zur Laufzeit sind weder Installation noch externe Aufrufe nötig. Cambria/Georgia mit A4, blauem Titel und grauen Abschnittsüberschriften orientieren sich an der Word-Vorlage.

**Konsistenz prüfen** ist über den Kopfbereich, den Fragencheck und die Konzeptansicht erreichbar. Die Kriterien orientieren sich am [Argumentationsprüfer](https://patrickfischerksa.github.io/argumentationspruefer/) ([Quellcode](https://github.com/PatrickFischerKSA/argumentationspruefer)) und sind für Forschungskonzepte neu umgesetzt:

- Annahme bzw. exploratives Ziel, Belege/Gegenbefunde und Schlussregel.
- Passung von Forschungsfrage, Methode, Material und Auswertung; Zuordnung jeder Teilfrage.
- Gegenargumente, Alternativerklärungen und Geltungsbereich.
- Vorschnelle Kausalbehauptungen, Verallgemeinerungen und mögliche Konflikte zwischen Eingrenzung und Methode.
- Quellenfunktion, bibliografische Lücken, Diskussionsabschnitt und sprachliche Präzision.

Jeder automatische Hinweis nennt die auslösende Regel, wo vorhanden eine Textstelle, einen nächsten Schritt und einen Link zum betroffenen Feld. Fehlende Angaben sind von erkannten Mustern getrennt. Sechs fachliche Prüffragen ergänzen den Bericht; eigene Überlegungen werden im Feld **Reflexion der Konsistenz** gespeichert und mit exportiert. Prioritäten sind Arbeitshinweise, keine Qualitätsnote. Der Check prüft keine Quellen im Internet und kann keine semantischen Widersprüche zuverlässig erkennen oder logische Gültigkeit beweisen. Vorhandene Angaben gelten nicht automatisch als korrekt. Auch das Ausbleiben von Hinweisen ist keine Freigabe.

Die serverseitigen KI- und LanguageTool-Funktionen des Argumentationsprüfers werden nicht eingebunden. Die Anwendung nutzt ausschliesslich lokale Regeln und benötigt kein Backend, keine API-Keys und keine Datenübertragung. Offline nutzbar, wenn die Projektdateien bereits lokal vorliegen; kein Service-Worker-Cache für besuchte Websites zugesichert.

## Regressionstests

`node tests/checks.cjs`

Prüft gezielte Konsistenzregeln und Gegenfälle, Terminplanung, HTML-Escaping, lokale Speicherung und die vollständige Feldübernahme in Markdown und Word-Modell. GitHub Actions führt die Tests vor jeder Pages-Veröffentlichung aus. Der Word-Export wurde zusätzlich als DOCX erzeugt und visuell gerendert geprüft.

## Feedback zu fehlenden Angaben

Der Feedback-Button und die Schritt-Navigation zeigen die Zahl offener Basisangaben. Jedes Feld hat einen aktuellen Status; eine Zusammenfassung pro Schritt nennt die offenen Angaben und führt direkt zur Eingabe. Der Bericht unterscheidet leere Felder, Platzhalter, knappe Einträge, ungültige Datums-/Stundenangaben und nicht erkennbare Planungselemente. Eine vollständige Checkliste und Filter erleichtern die Überarbeitung. Das Feedback ist als Textdatei herunterladbar.

Die Basis-Checkliste deckt alle Formularfelder und die Arbeitsphasen ab. Hypothese, Konsistenzreflexion und weitere Verpflichtungen sind optional und zählen bei leerem Inhalt nicht als fehlend. Platzhalter gelten nicht als ausgearbeiteter Inhalt. Sehr kurze Einträge lösen nur einen transparenten Wortzahlhinweis aus. Methodenbezogene Regeln prüfen beispielsweise Stichprobenumfang, Auswahlkriterien, Befragungsinstrumente, Gegenbefunde, Zuordnungszeilen zu Teilfragen und Abschnitte der Gliederung. Begriffe können anders formuliert sein; solche Hinweise sind keine Feststellung, dass ein Element fachlich zwingend fehlt. Schulische Vorgaben haben Vorrang. Der Fortschritt zählt Basisangaben mit Inhalt, keine Qualitätsmerkmale.
