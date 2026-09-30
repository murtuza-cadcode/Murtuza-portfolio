import type { Dict } from "./en";

/** German strings; the type forces the same keys as en.ts. */
export const de: Dict = {
  meta: {
    description: "Syed Murtuza Quadri — Maschinenbauingenieur mit Schwerpunkt auf Automobil- und Robotikanwendungen.",
    titles: { home: "SYED", work: "Berufserfahrung", extra: "Außerschulisches Engagement", projects: "Projekte", hobbies: "Hobbys" },
  },
  common: {
    nav: { work: "Berufserfahrung", extra: "Engagement", projects: "Projekte", hobbies: "Hobbys" },
    resume: "LEBENSLAUF",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    contact: "Kontakt",
    details: "Details",
    projectSlides: "Projektfolien",
    productLink: "Link zur Produktwebsite",
    language: "Sprache",
  },
  home: {
    name: "Syed Murtuza Quadri",
    hero1: "Maschinenbauingenieur",
    hero2: "Spezialisiert auf Automobil- und Robotikanwendungen",
    aboutTitle: "Über mich",
    about: [
      "   Ich bin ein analytischer und praxisorientierter Ingenieur und davon überzeugt, dass man ein System am besten versteht, indem man es von Grund auf selbst baut. Angetrieben von der Herausforderung, die nächste Fahrzeuggeneration zu schaffen, liegt meine Leidenschaft darin, ein digitales Konzept in eine physische, funktionierende Realität zu verwandeln. Das heißt: Ich detailliere eine komplexe CAD-Baugruppe genauso gern, wie ich einen Schaltschrank verdrahte oder die Logik programmiere, die ihn in Bewegung setzt.",
      "   Ich liebe es, Probleme an der Schnittstelle von Mechanik, Elektrik und Softwaresystemen zu lösen. Meine Erfahrung hat mich einfallsreich und anpassungsfähig gemacht – ob ich nun ein Prototypenteil selbst fertige oder den Code für einen sensorgesteuerten Prozess schreibe. Jede Herausforderung gehe ich mit einer Systemperspektive an und ziele auf robuste, elegante Lösungen, die in der realen Welt bestehen.",
    ],
    eduTitle: "Ausbildung",
    msc: { title: "M.Sc. Fahrzeugtechnik", date: "2024 – heute", school: "RPTU Kaiserslautern, Deutschland", courses: [
      "Regelungstechnik",
      "Sensorsignalverarbeitung",
      "Dynamische Systeme und Neuronale Netze",
      "Autonome mobile Roboter",
      "Fahrzeugschwingungen",
      "Antriebe und Getriebe",
      "Automobilproduktion",
      "Sicherheit & Zuverlässigkeit eingebetteter Systeme",
      "Automotive Software und Systems Engineering",
    ] },
    be: { title: "B.E. Maschinenbau", date: "2016–2020", school: "Osmania University, Indien", courses: [
      "Maschinenkonstruktion",
      "Finite-Elemente-Analyse (FEA)",
      "Angewandte Thermodynamik",
      "Strömungsmechanik",
      "Wärmeübertragung",
      "CAD/CAM",
      "Fertigungsverfahren",
    ] },
    toolsTitle: "Werkzeuge",
    tools: [
      "**CAD:** Siemens NX, SolidWorks, CATIA V5, Creo, AutoCAD",
      "**CAE:** ANSYS Workbench, NX Nastran, MATLAB/Simulink",
      "**Fertigung:** CAM & CNC-Bearbeitung, FDM/SLA-3D-Druck, GD&T, DFA/DFM, Fehlerbaumanalyse, DFMEA",
      "**Programmierung:** Python, C++, G-Code.",
    ],
  },
  projects: {
    p1Title: "Sensorsignalverarbeitung: Vom Rohaudio zum maschinellen Lernen für die Befehlsklassifikation",
    p1Text: "   Eine durchgängige Audiosignalverarbeitungs-Pipeline für sprachgesteuertes Gaming mit **Python**. Das Projekt erfasst gesprochene Befehle („hoch“, „runter“, „links“ usw.) und verarbeitet sie in einem eigens entwickelten Feature-Engineering-Workflow auf Basis der schnellen Fourier-Transformation (FFT). Mit der Linearen Diskriminanzanalyse (LDA) wird ein 2D-Merkmalsraum für die Klassifikation erzeugt. Die Leistung von k-NN-, SVM- und Entscheidungsbaum-Modellen wurde verglichen; das beste Modell wurde in eine finale Live-Demo integriert, die ein Pac-Man-Spiel in Echtzeit steuert.",
    github: "GitHub: Code",
    p2Title: "Bachelorarbeit: Veränderung der Biegeeigenschaften von E-Glas-Laminatverbundwerkstoffen",
    p2Text: [
      "  Diese Arbeit liefert eine experimentelle Analyse der Delamination, einer kritischen Versagensart faserverstärkter Kunststoffe. Um ihren Einfluss auf die strukturelle Integrität zu untersuchen, wurden E-Glas/Epoxid-Laminate mit eingebetteten künstlichen Fehlstellen unterschiedlicher Form, Größe und Zwischenschichtlage hergestellt. ",
      "  Die mechanischen Eigenschaften dieser Proben wurden anschließend im Dreipunkt-Biegeversuch bewertet. Die Ergebnisse zeigen eine klare, quantifizierbare Abnahme der Biegesteifigkeit: Größere Fehlstellen und solche nahe der Mitte des Verbunds führen zur stärksten Leistungsminderung.",
    ],
  },
  hobbies: {
    artTitle: "Kunst & Zeichnen",
    art: "In der Kunst finde ich eine andere Art von Fokus und Präzision, vor allem beim Porträtzeichnen und der Acrylmalerei. Kunst zu schaffen ist für mich eine Übung in intensiver Beobachtung.",
    footballTitle: "Fußball",
    football: "Mehrere Jahre lang hatte ich das Privileg, für den Hyderabad Sporting Football Club zu spielen. Mehr als nur ein Spiel: Die Zugehörigkeit zu einem Verein hat mich gelehrt, was Disziplin, Strategie und gemeinsamer Einsatz wirklich bedeuten.",
    musicTitle: "Musik",
    music: "  Seit Kurzem spiele ich Gitarre und genieße den strukturierten Prozess, wieder Anfänger zu sein. Akkorde lernen, Muskelgedächtnis aufbauen und die Theorie hinter der Musik verstehen ist eine demütigende und zugleich lohnende Herausforderung",
  },
  work: {
    intro: "Eine fundierte **4-jährige** Industrieerfahrung in der Entwicklung kompletter elektromechanischer Systeme für Automobil- und Automatisierungsanwendungen.",
    stihl: {
      duration: "6 Monate (aktuell)",
      p: [
        "   Als **NVH-Ingenieur (Praktikant)** bei der Andreas STIHL AG & Co. KG befasste ich mich mit der akustischen und strukturdynamischen Charakterisierung professioneller Elektro- und Motorwerkzeuge. ",
        "  Meine Arbeit umfasste die gesamte Prüfkette: Prototypen von Motorsägen und Motorgeräten mit dynamischen Sensoren instrumentieren, Schall- und Schwingungsmessungen durchführen sowie fundierte EMA- und ODS-Analysen zur Bewertung und Verbesserung des strukturellen Verhaltens durchführen.",
        "Derzeit setze ich meine Arbeit mit meiner **Masterarbeit** fort, in der ich die NVH-Kennwerte von Motorsägen mithilfe von MKS-Simulationen weiter optimiere.",
      ],
    },
    maruti: {
      name: "Maruti Suzuki",
      duration: "2 Jahre 4 Monate",
      p: [
        "   Beim größten Pkw-Hersteller Indiens arbeitete ich als **Konstrukteur für Türsysteme** in der Karosserieentwicklung und war durchgängig für das vordere Seitentürsystem eines neuen SUV-Programms verantwortlich. ",
        "   Meine Rolle vereinte Konstruktion, Einhaltung gesetzlicher Vorgaben, Fertigbarkeitsprüfungen und Lieferantenabstimmung, um ein robustes, sicheres und serienreifes Türsystem zu liefern.",
      ],
    },
    emflux: {
      name: "Emflux Motors",
      duration: "1 Jahr 2 Monate",
      p: "   Als **Konstrukteur (Maschinenbau)** war ich bei diesem Start-up für Elektromotorräder für Konstruktion und Programmierung automatisierter Produktionsmaschinen verantwortlich. Ich entwickelte komplette mechatronische Systeme vom Konzept bis zur Produktion und verwaltete SOLIDWORKS-Baugruppen mit über 1.300 Bauteilen.",
    },
    possi: {
      name: "Possibillion",
      duration: "3 Monate",
      p: "Als **Praktikant in der Konstruktion**: Konstruktion eines 5-Achsen-SCARA-Roboters für eine Roboterküche. Konstruiert in SOLIDWORKS, Schrittmotoren anhand berechneter Drehmomente ausgewählt. Ein zuverlässiges Funktionsmodell entstand durch Prototyping der Teile im FDM-3D-Drucker.",
    },
    msil: {
      title: "Konstrukteur für Türsysteme – Die OEM-Perspektive",
      sections: [
        { h: "Verantwortung auf Systemebene", items: [
          "Ich begann mit den vom Designteam gelieferten Class-A-Flächen und führte detaillierte Schnittstudien durch, um die Türfugenverläufe festzulegen. ",
          "Dabei galt es, Ästhetik, ergonomische Greifräume sowie die Machbarkeit für Presswerkzeuge und Bördelprozesse auszubalancieren. ",
          "Die Konstruktion wurde mit Presswerk, Rohbau, Lackiererei und Montage abgestimmt, um eine reibungslose Fertigbarkeit sicherzustellen.",
        ] },
        { h: "Struktur- & Sicherheitsentwicklung", items: [
          "Ich konstruierte das Türinnenblech so, dass es Mechanismen, Dichtflächen, Bördelflansche und Verkleidungsaufnahmen integriert. Berücksichtigt wurden DFA/DFM-Prinzipien, Crash-Lastpfade und Steifigkeitsoptimierung.",
          "Ich arbeitete an Verstärkungslayouts und Rohrelementen; Crash-Simulationen lieferten CAE-gestützte Konstruktionsänderungen für Intrusionswiderstand und Energieabsorption.",
          "Ich optimierte Gleichteile gegenüber Neuteilen, um Kosten zu senken und dabei Festigkeits-, Gewichts- und Sicherheitsziele zu erfüllen.",
        ] },
        { h: "Subsystem-Konstruktion & Packaging", items: [
          "**Schloss und Mechanismen:** Layouts für Scharniere, Türfeststeller und Schlosssysteme entwickelt und dabei die ECE-R11-Vorgaben für Schloss/Rückhaltung eingehalten. Die Mechanismuskinematik wurde hinsichtlich Haltbarkeit und Bedienkomfort optimiert.",
          "**Glas- & Fensterhebersystem:** Rahmen und Verstärkungsstrukturen für eine leichtgängige Glasbewegung konstruiert – mit sauberer Führung, Klapperschutz und Dichtungsaspekten.",
          "**Dichtflächen:** Umlaufdichtungen und Glasführungsschienen ausgelegt, um die geforderte NVH-Performance und Wasserdichtheit zu erreichen und Dichtwirkung mit geringer Türschließkraft in Einklang zu bringen.",
          "**Elektrische Integration:** Layouts für Kabelbaumführung, Steckverbinder, Schalter und Sensoren in der Tür abgestimmt – mit Blick auf einfache Montage und Wartbarkeit.",
        ] },
        { h: "Zusammenarbeit & bereichsübergreifende Arbeit", items: [
          "Enge Zusammenarbeit mit Presswerk, Rohbau und Lackiererei, um die Fertigbarkeit zu validieren und Rückmeldungen aus der Fertigung früh in die Konstruktion einfließen zu lassen.",
          "Wettbewerbertürsysteme verglichen und interne Datenbanken mit Konstruktionslösungen aufgebaut, die schnellere Entscheidungen und Innovationen ermöglichten.",
          "Teile von Tier-1- und Tier-2-Lieferanten auf Machbarkeit, Passung und Konformität geprüft und dabei erfahrene Ingenieure bei Dokumentation und technischen Bewertungen unterstützt.",
        ] },
        { h: "Validierung & Freigabe", items: [
          "CAD-Modelle und Zeichnungen unter engen Terminvorgaben freigegeben, im Einklang mit Suzukis Konstruktionsmethodik und internen Qualitätsstandards.",
          "Fahrzeugtests der Tür auf dem Testgelände des Unternehmens begleitet und dabei Einblick in DVP-Aktivitäten wie Dauerlauf, Wasserdichtheitsprüfungen und Missbrauchstests gewonnen.",
          "Wöchentliche Reviews des Türsystems geleitet, Probleme zur Lösung gebracht, Wissen in der Abteilung geteilt und Erkenntnisse aus Lieferantenbesuchen und Fachmessen vorgestellt.",
        ] },
      ],
    },
    emfluxDetail: {
      title: "Die E-Mobilitäts-Revolution vorantreiben: Automatisierte Produktionsmaschinen von Grund auf konstruieren und programmieren.",
      windingTitle: "**1. Wickelmaschine für E-Motoren **",
      winding: [
        "Ich begann mit der Konstruktion einer automatischen 2-Stationen-Statorwickelmaschine für BLDC-Smart-Fans, die in Serie ging. Das System wickelte zwei Statoren in 24 Minuten und erforderte einen **vollständigen elektromechanischen Entwicklungszyklus.** ",
        "Mechanisch wählte ich Motoren, Getriebe und einen Synchronriemenantrieb aus und erstellte GD&T-konforme Zeichnungen für Lüfterteile und Maschinenkomponenten. Um mein Verständnis für Toleranzen und Passungen zu vertiefen, fertigte ich viele Teile selbst auf **manuellen Fräs-** und **Drehmaschinen**.",
        "Auf der Elektro- und Steuerungsseite übernahm ich die komplette Verdrahtung und schrieb das G-Code-Programm zum Betrieb der Maschine. In diesem Projekt verband ich **Konstruktion, Fertigung und Systemintegration** und lernte, wie sich theoretische Berechnungen in Produktionsdurchsatz übersetzen.",
      ],
      weldTitle: "**2. Automatische Punktschweißmaschine**",
      weldIntro: "Aufbauend auf den Erfahrungen mit der Wickelmaschine übernahm ich ein deutlich größeres und komplexeres Projekt: die Konstruktion einer CNC-gesteuerten Punktschweißanlage mit pneumatischer Kopfbetätigung für die Montage von EV-Batteriepaketen.",
      weld: [
        "Ich erstellte eine CAD-Baugruppe mit ca. 1.300 Bauteilen, bestehend aus Schweißrahmen, CNC-gefertigten Teilen und Blechgehäusen. Detaillierte Berechnungen zu Geschwindigkeit, Last und Genauigkeit bestimmten die Auswahl von Kugelgewindetrieben und Linearführungen.",
        "Außerdem verantwortete ich die komplette **elektrische und steuerungstechnische Integration**. Dazu gehörten der vollständige Schaltplan und der Schaltschrank mit CNC-Steuerung, Endlagen-/Referenzschaltern, Not-Halt, Magnetventilen für die Pneumatik, Hallsensoren, Kraftmessdosen und Drucksensoren. ",
        "Ein kritischer Aspekt war die Verlegung abgeschirmter Signalleitungen, Leistungskabel und Pneumatikschläuche in Energieketten sowie eine saubere Erdung zur Minimierung von EMV-Störungen.",
        "Im Vergleich zur Wickelmaschine erforderte dieses Projekt ein tieferes Verständnis von **fertigungsgerechter Konstruktion, Messtechnik und disziplinübergreifender Systemintegration** und schlug damit die Brücke zwischen CAD, Zerspanung, Elektronik und Automatisierung.",
      ],
    },
    possiDetail: {
      title: "SCARA-Roboter für eine Roboterküche",
      v1Label: "**Version 1:**",
      v1: [
        "Die Basis nutzte einen NEMA-17-Schrittmotor mit 2:1-Riemenscheibe und 280-mm-Riemen, doch die Drehung auf einer PTFE-Scheibe lief rau, der Motor lag frei, die Befestigungspunkte wirkten klobig und eine Sonderschraube saß zu straff. Die Linearbewegung nutzte eine Trapezspindel (8 mm, 2 mm Steigung) mit NEMA 17 und zunächst nur 2 Stangen, was zum Klemmen führte; erst 3 Stangen mit versetzten Lagern behoben die Ausrichtung. ",
        "Dennoch hatte der Motor keine Abdeckung, und der Ellenbogenmotor saß vor der Spindel, was eine Kragarmlast erzeugte und die Tragfähigkeit verringerte. Der Ellenbogen (Achse 3) lief auf einem NEMA 17 mit 2:1-Riemenscheibe, litt aber unter Gelenkverbiegung durch Spiel zwischen Schraube und Lagern, hatte keinen Endschalter und keine Kabelführung. Der Greifer nutzte 2 MG996-Servos für Handgelenk und Backen, die Montage war jedoch zeitaufwendig und mechanisch komplex.",
      ],
      v2Label: "**Version 2:**",
      v2: "Die Basis wurde mit Rillenkugellagern für eine gleichmäßige Drehung, einem Drehgeber und Hallsensor für Positionserfassung und Referenzfahrt, einer höheren Übersetzung für mehr Drehmoment und einem gekapselten Motor im Sockel verbessert. Die Linearbewegung erhielt eine überarbeitete Plattform mit integrierter Verkabelung, Vorbereitung für eine Energiekette und einen abgedeckten oberen Motor. Der Ellenbogen wurde komplett neu konstruiert – mit Drehgeber, Hallsensor, Riemenspannhalterungen, Schutzabdeckung und sauberen Kabelwegen. Der Greifer blieb gegenüber Version 1 unverändert, da seine Leistung ausreichte.",
    },
  },
  extra: {
    fsae: {
      title: "Formula SAE ",
      duration: "4 Monate",
      team: "Kaiserslautern Racing Team (KaRaT)",
      sections: [
        { h: "Ziel", p: "Als Mitglied eines neu gegründeten Formula-Student-Teams bestand mein erstes Ziel darin, die Kerngruppe bei der ersten großen Hürde zu unterstützen: dem Bestehen der hart umkämpften **technischen Qualifikationstests**, die für die Teilnahme an europäischen Wettbewerben wie der Formula Student Germany (FSG) erforderlich sind." },
        { h: "Mein Beitrag", p: "Im ersten Semester integrierte ich mich ins Team und nutzte meine bisherige SAE-Wettbewerbserfahrung, um die technische Vorbereitung zu beschleunigen. Ich analysierte systematisch das umfangreiche Formula-Student-Regelwerk und brach komplexe technische Vorschriften in verständliche Abschnitte für das Team herunter. Gemeinsam mit den Subsystemleitern entwickelte ich gezielte Lernmaterialien und führte Probetests zu Fahrdynamik, Antriebsstrang und Elektrik durch." },
        { h: "Ergebnis", p: "Dieser konzentrierte Einsatz trug entscheidend zur erfolgreichen Qualifikation des Teams für die Formula Student Spain bei. Auch wenn wir die Hürde für die FSG verfehlten, war ein Startplatz im spanischen Wettbewerb ein bedeutender Erfolg, der das technische Grundwissen des Teams bestätigte." },
      ],
    },
    baja: {
      title: "BAJA SAE ",
      duration: "1 Jahr ",
      team: "Team Mudbrothers Racing",
      sections: [
        { h: "Chefingenieur: Lenksystem für das Geländefahrzeug", p: "Für den SAE-Baja-Wettbewerb 2020 übernahm ich die Leitung für eines der kritischsten Systeme des Fahrzeugs: die Lenkung. Meine Aufgabe war es, ein robustes, zuverlässiges und reaktionsschnelles System zu liefern, das den Strapazen des Offroad-Rennsports standhält." },
        { h: "Konstruktion & Simulation ", p: "Grundlage des Projekts war eine individuelle Zahnstangenlenkung. Mit Fahrdynamiksoftware führte ich eine detaillierte kinematische Analyse durch, um die Lenkgeometrie auf maximale Wendigkeit und minimales Bump Steer zu optimieren. Ziel war es, unserem Fahrer präzise Kontrolle zu geben – egal wie rau die Strecke wurde." },
        { h: "Virtuelle Tests & Validierung", p: "Um sicherzustellen, dass die Konstruktion wettbewerbstauglich ist, führte ich umfangreiche Finite-Elemente-Analysen (FEA) in ANSYS durch. Durch die Simulation realer Rennbedingungen konnte ich die strukturelle Integrität jeder Komponente validieren – von den Spurstangen bis zur Lenksäule – und so ein sicheres, langlebiges System gewährleisten." },
        { h: "Vom CAD zum Wettbewerb ", p: "Mit einer bewährten Konstruktion leitete ich die Fertigungsphase. Nach den Prinzipien der fertigungsgerechten Konstruktion (DFM) nutzten wir CNC-Bearbeitung für die Kernkomponenten und 3D-Druck für komplexe Teile wie die ergonomischen Lenkradgriffe. Dieser praktische Ansatz stellte sicher, dass jedes Teil perfekt passte und einwandfrei funktionierte." },
        { h: "Das Ergebnis? ", p: "Ein Lenksystem, das unter Belastung hervorragend standhielt und Team Mudbrothers Racing zu einem starken **7. Platz im nationalen Ausdauerrennen** verhalf." },
      ],
      report: "Link zum Konstruktionsbericht",
    },
    sae: {
      title: "SAE India Collegiate Club",
      duration: "1 Jahr ",
      intro: "Zu meinen erfüllendsten Erfolgen als Vizepräsident zählt der Entwurf und die Leitung eines zweitägigen, praxisnahen Workshops zum **Motorzusammenbau** für 60 Studierende.",
      sections: [
        { h: "Die Herausforderung ", p: "Ingenieurtheorie ist unverzichtbar, aber erst die praktische Anwendung begeistert wirklich. Mein Ziel war es, den Verbrennungsmotor zu entmystifizieren und den Studierenden ein unvergessliches, praxisnahes Lernerlebnis zu bieten." },
        { h: "Die Vorbereitung ", p: "Die Initiative war von Anfang an ein Alleingang. Ich besorgte einen 3-Zylinder-Maruti-800cc-Motor und reinigte, zerlegte und bereitete ihn persönlich für den Workshop vor. Für eine flüssige und informative Präsentation übte ich den kompletten Wiederzusammenbau zweimal und perfektionierte eine zweistündige Demonstration, die mechanische Arbeit mit einer detaillierten technischen Erklärung verband." },
        { h: "Das Ergebnis", p: "Die zweitägige Veranstaltung war ein großer Erfolg. Ich führte die Studierenden durch den gesamten Aufbau und erklärte die Funktion jeder Komponente **live beim Einbau.** Dieses interaktive Format schlug die Brücke zwischen Diagrammen auf Papier und der Realität einer funktionierenden Maschine und schuf eine lebendige, fesselnde Lernumgebung für alle Beteiligten." },
      ],
    },
  },
};
