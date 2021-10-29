Tech Assessment

FOCUS FRONTEND

1. Web applicatie moet in de huisstijl van Team Rockstars iT zijn en uiteraard goed op een mobiel apparaat werken.
   12:00
2. Een IT Rockstar kan een overzicht van alle artiesten inzien. Met een zoekbalk kan de IT Rockstar snel zijn favoriete artiest vinden.

12:45 3. Een IT Rockstar kan een artiest detail pagina met alle nummers van de artiest opvragen.

4. Een IT Rockstar kan playlists aanmaken en verwijderen.
5. Een IT Rockstar kan nummers aan een playlist toevoegen.
6. Een IT Rockstar kan een playlist inzien met alle toegevoegde nummers. Hier heeft de Rockstar ook de optie om een nummer uit de playlist te verwijderen.

db.json => JSON server eigen api bouwen, uitzoeken hoe je dit gebruikt.
Fetch van spotify testen => foto’s van artiesten?

BACKEND

De backend bestaat uit een JSON bestand dat eenvoudig uitgelezen kan worden. In dit JSON bestand zijn artiesten en nummers terug te vinden.

> Met JSON Server is het zeer eenvoudig om binnen 30 seconden een lokale API op te zetten. De data uit zowel artists.json als songs.json kan vervolgens lokaal opgehaald worden met een GET request.  Zie: https://github.com/typicode/json-server.

> het opslaan van de playlist mag met JSON Server, maar het mag ook in de browser door middel van Local Storage.

Voorbeelden van get requests zodra JSON Server is opgestart:   https://localhost:3000/songs
https://localhost:3000/artists
https://localhost:3000/songs?genre=Rock
https://localhost:3000/songs?artist=Spinal%20Tap

FOCUS  >>> Functionaliteit

- Vooraf graag toelichting over bepaalde shortcuts die genomen zijn en een aanpak/architectuur/keuze/strategie die je gebruikt hebt.

Verder wordt alle code beoordeeld op de volgende aspecten:

> Duidelijke documentatie in de vorm van een README van hoe de app werkt en gestart kan worden.
> Wordt er op een juiste wijze gebruik gemaakt van een framework of library zoals ReactJS of een ander framework naar keuze.  > code style.
> performance
> huisstijl en opbouw (S)CSS.
> geen code coverage van 100% - 80-10 uni tests.
> genereren van file bundles door middel van een build tool.
> Gebruik een UI-kit om jouw spaarzame tijd goed te besteden.

EXTRA Requirements

#1.

> Responsive applicatie Zorg dat de applicatie er op mobiel, tablet en desktop er netjes uitziet. Je mag fluid design gebruiken of breakpoints.

#2.

> Gebruik een grid systeem.
> Zoals flex box, CSS grid.

#3.

> Voeg een button animatie toe.
> Op click, hover, of focus: laat de button iets doen. Geanimeerd met CSS. MAAK PLAYER

wel of geen styled components gebruiken? Misschien wel.

> Gebruik een CSS preprocessor.
> Implementeer een preprocessor, zoals SASS/LESS en schrijf je styling in deze taal.

#4. (Wat of welke design patterns?)

> Implementeer design patterns
> Zorg dat je mappenstructuur en bestanden design patterns reflecteren.
> De indeling en architectuur van je bestanden, styling, componenten etc.

13:00 -14:00
#4.

> Bouw een inlogpagina
> Maak een inlogpagina op basis van Facebook, Google of email/wachtwoord.

14:00-15:00
#5.

> Koppel de nummers met Spotify
> Zorg dat er een soort van koppeling is tussen de nummers en Spotify.
> In de aangeleverde database staat een Spotify TrackID die je kunt gebruiken.
> Link naar de Spotify WEB API: https://developer.spotify.com/documentation/web-api .
> Maak een developer account aan met een Spotify free account.
