/* Portfolio content: translations and projects.
   To add a project, add an object to PROJECTS (feat = show as a big card on top). */

const GH = 'https://github.com/melon3000/';

/* ---------- texts ---------- */
const T = {
  en: {
    'nav.work':'Work','nav.projects':'Projects','nav.ai':'AI','nav.stack':'Stack','nav.contact':'Contact','nav.cta':'Get in touch',
    'hero.status':'Open to an internship · Dec 2026 – Jun 2027',
    'hero.title':'I build software that ships.',
    'hero.sub':"I'm <b>Milan Petrovski</b>, a software development student at Techno TLN. I work with C# / .NET, web APIs and databases — from database design to a working app.",
    'hero.cta1':'See my work','hero.caption':'Interactive previews of my projects — click the tabs.',
    'p0.title':'Full function analysis from any formula','p0.f1':'Derivative','p0.f2':'Zeros','p0.f3':'Maximum','p0.f4':'Minimum','p0.f5':'Inflection','p0.f6':'Symmetry','p0.f6v':'odd',
    'p1.title':'Layered language school app, covered by tests','p1.web':'Web app: controllers, views, ASP.NET Identity for user accounts','p1.app':'Business logic: courses, lecturers, file uploads, email','p1.core':'Domain models, DTOs and service interfaces','p1.data':'DbContext and EF Core migrations','p1.unit':'Service unit tests with mocks','p1.ui':'UI tests in a real browser','p1.mig':'5 migrations, schema in version control',
    'p2.all':'All','p2.team':'team project','p2.title':'Events app with role-based access','p2.r1':'Guest','p2.r1d':'Browses and filters events, opens details','p2.r2':'User','p2.r2d':'Registers for events, manages own registrations and profile','p2.r3':'Admin','p2.r3d':'Dashboard, creates and edits events and categories',
    'p3.title':'JWT auth API with roles','p3.forb':'— valid token, but not an admin','p3.exp':'(token older than 5 min)','p3.expd':'— token expired',
    'work.eyebrow':'Selected work','work.title':"Projects I'm proud of",'work.sub':'Real code with architecture, databases and tests — not just exercises.',
    'ai.eyebrow':'How I work','ai.title':'Building with AI, the right way','ai.sub':"I develop with AI tools every day. AI writes a lot of code fast — my job is to give it the right direction, notice what's wrong and get the result to something that actually works.",'ai.toolsTitle':'Tools I use','ai.q1':'the save button adds the same favourite twice','ai.q2':'→ found: no duplicate check before insert','ai.q3':'✓ check added, tested, committed','ai.interest':"I'm genuinely interested in AI and how it changes software development — and I want to keep growing in that direction.",'ai.s1':'Plan the product','ai.s1d':'Decide what to build, how it should look and work, and break it into small tasks.','ai.s2':'Direct the AI','ai.s2d':'Give clear tasks with context and constraints instead of "make me an app".','ai.s3':'Review and catch problems','ai.s3d':"Run it, click through it, spot what's broken or looks off and send it back with specifics.",'ai.s4':'Test and ship','ai.s4d':'Check the result, commit it to Git and make sure it really works.',
    'stack.eyebrow':'Stack','stack.title':'Tools I work with','stack.c1':'Backend','stack.c2':'Databases','stack.c3':'Apps & frontend','stack.c4':'Testing','stack.c5':'Workflow','stack.c6':'Languages','stack.sql':'triggers · transactions','stack.norm':'normalization','stack.ru':'Russian','stack.et':'Estonian','stack.en':'English',
    'cat.eyebrow':'Catalog','cat.title':'All projects','cat.sub':'Everything public on my GitHub, with links to the code.','cat.school':'Smaller school tasks — SQL, JavaScript, REST, bcrypt and more — are on my school portfolio.','cat.schoolBtn':'Open school portfolio ↗',
    'contact.eyebrow':'Contact','contact.title':"Let's build something together",'contact.sub':'Looking for an internship from December 2026 to June 2027. Write to me.','contact.copy':'Copy email','contact.copied':'Copied ✓',
    'foot.top':'Back to top ↑','code':'Code','all':'All','best':'Best project','team':'Team project'
  },
  et: {
    'nav.work':'Tööd','nav.projects':'Projektid','nav.ai':'AI','nav.stack':'Oskused','nav.contact':'Kontakt','nav.cta':'Võta ühendust',
    'hero.status':'Otsin praktikakohta · dets 2026 – juuni 2027',
    'hero.title':'Loon tarkvara, mis jõuab kasutajani.',
    'hero.sub':'Olen <b>Milan Petrovski</b>, Techno TLN-i tarkvaraarenduse õpilane. Töötan C# / .NET-i, veebi-API-de ja andmebaasidega — andmebaasi kavandamisest kuni töötava rakenduseni.',
    'hero.cta1':'Vaata töid','hero.caption':'Minu projektide interaktiivsed eelvaated — kliki vahekaartidel.',
    'p0.title':'Funktsiooni täielik uurimine suvalisest valemist','p0.f1':'Tuletis','p0.f2':'Nullkohad','p0.f3':'Maksimum','p0.f4':'Miinimum','p0.f5':'Käänupunkt','p0.f6':'Paarsus','p0.f6v':'paaritu',
    'p1.title':'Kihiline keelekooli rakendus koos testidega','p1.web':'Veebirakendus: kontrollerid, vaated, ASP.NET Identity kasutajakontodeks','p1.app':'Äriloogika: kursused, lektorid, failide üleslaadimine, e-post','p1.core':'Domeenimudelid, DTO-d ja teenuste liidesed','p1.data':'DbContext ja EF Core migratsioonid','p1.unit':'Teenuste ühiktestid mock-objektidega','p1.ui':'Kasutajaliidese testid päris brauseris','p1.mig':'5 migratsiooni, skeem versioonihalduses',
    'p2.all':'Kõik','p2.team':'meeskonnaprojekt','p2.title':'Ürituste rakendus rollipõhise ligipääsuga','p2.r1':'Külaline','p2.r1d':'Sirvib ja filtreerib üritusi, avab detailvaate','p2.r2':'Kasutaja','p2.r2d':'Registreerub üritustele, haldab oma registreeringuid ja profiili','p2.r3':'Administraator','p2.r3d':'Töölaud, ürituste ja kategooriate loomine ning muutmine',
    'p3.title':'JWT autentimise API rollidega','p3.forb':'— token kehtib, aga kasutaja pole admin','p3.exp':'(token vanem kui 5 min)','p3.expd':'— token on aegunud',
    'work.eyebrow':'Valitud tööd','work.title':'Projektid, mille üle olen uhke','work.sub':'Päris kood arhitektuuri, andmebaaside ja testidega — mitte ainult harjutused.',
    'ai.eyebrow':'Kuidas ma töötan','ai.title':'Arendan koos AI-ga — läbimõeldult','ai.sub':'Kasutan AI-tööriistu iga päev. AI kirjutab kiiresti palju koodi — minu ülesanne on anda õige suund, märgata vigu ja viia tulemus töötava lahenduseni.','ai.toolsTitle':'Tööriistad','ai.q1':'salvesta-nupp lisab sama lemmiku kaks korda','ai.q2':'→ leitud: enne lisamist puudub duplikaadi kontroll','ai.q3':'✓ kontroll lisatud, testitud, commit tehtud','ai.interest':'Mind huvitab AI ja see, kuidas see tarkvaraarendust muudab — ja tahan selles suunas edasi areneda.','ai.s1':'Planeerin toote','ai.s1d':'Otsustan, mida ehitada, kuidas see peab välja nägema ja töötama, ning jagan selle väikesteks ülesanneteks.','ai.s2':'Juhendan AI-d','ai.s2d':'Annan selged ülesanded koos konteksti ja piirangutega, mitte lihtsalt „tee mulle äpp“.','ai.s3':'Kontrollin ja leian vead','ai.s3d':'Käivitan, klõpsin läbi, märkan, mis on katki või näeb halb välja, ning saadan täpse tagasiside.','ai.s4':'Testin ja avaldan','ai.s4d':'Kontrollin tulemust, teen commit\'i Gitis ja veendun, et kõik päriselt töötab.',
    'stack.eyebrow':'Oskused','stack.title':'Tööriistad, millega töötan','stack.c1':'Backend','stack.c2':'Andmebaasid','stack.c3':'Rakendused ja frontend','stack.c4':'Testimine','stack.c5':'Töövoog','stack.c6':'Keeled','stack.sql':'trigerid · transaktsioonid','stack.norm':'normaliseerimine','stack.ru':'vene','stack.et':'eesti','stack.en':'inglise',
    'cat.eyebrow':'Kataloog','cat.title':'Kõik projektid','cat.sub':'Kõik avalikud projektid minu GitHubis koos koodilinkidega.','cat.school':'Väiksemad kooliülesanded — SQL, JavaScript, REST, bcrypt ja muu — on minu kooli portfoolios.','cat.schoolBtn':'Ava kooli portfoolio ↗',
    'contact.eyebrow':'Kontakt','contact.title':'Loome midagi koos','contact.sub':'Otsin praktikakohta detsembrist 2026 kuni juunini 2027. Kirjuta mulle.','contact.copy':'Kopeeri e-post','contact.copied':'Kopeeritud ✓',
    'foot.top':'Tagasi üles ↑','code':'Kood','all':'Kõik','best':'Parim projekt','team':'Meeskonnaprojekt'
  }
};

/* ---------- projects ---------- */
const ICON = {
  fx:'<path d="M3 20c4 0 5-16 9-16s5 16 9 16"/><path d="M3 12h18"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  map:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>'
};
const PROJECTS = [
  {repo:'FunktsiooniUurimine', name:'FunktsiooniUurimine', year:2026, cats:['dotnet','web','testing'], feat:{icon:'fx',wide:true,best:true},
   tech:['ASP.NET Core MVC','.NET 8','EF Core','SQLite','xUnit','Docker','Chart.js'],
   en:{d:'Web app that fully analyses a mathematical function typed in by the user.', pts:['Own expression parser and symbolic derivative','Zeros, extrema, inflection points, asymptotes','Step-by-step learning mode and Chart.js graph','CRUD with EF Core + SQLite, xUnit tests, Dockerfile']},
   et:{d:'Veebirakendus, mis uurib kasutaja sisestatud funktsiooni täielikult.', pts:['Oma valemiparser ja sümboolne tuletis','Nullkohad, ekstreemumid, käänupunktid, asümptoodid','Samm-sammuline õpperežiim ja Chart.js graafik','CRUD EF Core + SQLite abil, xUnit testid, Dockerfile']}},
  {repo:'KelteKool-V2-Testing', name:'KeelteKool V2', year:2026, cats:['dotnet','web','testing'], feat:{icon:'layers',wide:true},
   tech:['ASP.NET Core','Identity','EF Core','SQL Server','xUnit','Selenium'],
   en:{d:'Language school management app in a layered .NET solution.', pts:['Core / Data / ApplicationServices layers with DTOs and interfaces','User accounts with ASP.NET Identity, email via MailKit, file uploads','Unit tests with mocks (xUnit) and UI tests (Selenium)']},
   et:{d:'Keelekooli haldusrakendus kihilise .NET lahendusena.', pts:['Core / Data / ApplicationServices kihid, DTO-d ja liidesed','Kasutajakontod ASP.NET Identityga, e-post MailKitiga, failide üleslaadimine','Ühiktestid mock-objektidega (xUnit) ja UI testid (Selenium)']}},
  {repo:'EventHubMaui', name:'EventHub', year:2026, cats:['dotnet','mobile'], feat:{icon:'phone',team:true},
   tech:['.NET MAUI','C#','SQLite','sqlite-net-pcl'],
   en:{d:'Events app with guest, user and admin roles — built in a team of two.', pts:['Browse, filter and register for events','Admin dashboard for events and categories','Service layer and local SQLite database']},
   et:{d:'Ürituste rakendus külalise, kasutaja ja admini rollidega — tehtud kahekesi.', pts:['Ürituste sirvimine, filtreerimine ja registreerumine','Admini töölaud ürituste ja kategooriate jaoks','Teenuste kiht ja lokaalne SQLite andmebaas']}},
  {repo:'JSON-Web-Token', name:'JSON-Web-Token', year:2026, cats:['api'], feat:{icon:'lock'},
   tech:['Python','Flask','PyJWT','Postman'],
   en:{d:'REST API with JWT authentication and role-based access.', pts:['/login, /profiil and /admin endpoints','Correct 401 vs 403 handling, 5-minute tokens','Secret from environment variables']},
   et:{d:'REST API JWT autentimise ja rollipõhise ligipääsuga.', pts:['Lõpp-punktid /login, /profiil ja /admin','Korrektne 401 ja 403 eristus, 5-minutilised tokenid','Võti keskkonnamuutujast']}},
  {repo:'CityExplore2', name:'CityExplorer', year:2026, cats:['dotnet','mobile'], feat:{icon:'map'},
   tech:['.NET MAUI','MVVM','SQLite','.resx'],
   en:{d:'Smart Tallinn guide for discovering sights.', pts:['MVVM with commands and ObservableCollection','Favourites saved in SQLite','Interface in Estonian, English and Russian']},
   et:{d:'Nutikas Tallinna giid vaatamisväärsuste avastamiseks.', pts:['MVVM käskude ja ObservableCollectioniga','Lemmikud salvestatakse SQLite andmebaasi','Kasutajaliides eesti, inglise ja vene keeles']}},
  {repo:'KalendarProjekt', name:'MS Project guide', year:2026, cats:['web'], feat:{icon:'cal'},
   tech:['HTML','CSS','JavaScript'],
   en:{d:'Learning website that teaches Microsoft Project through practical examples.', pts:['Calendars, calculated fields and diagrams','Step-by-step screenshots','41 commits of iterative work']},
   et:{d:'Õppeveeb, mis õpetab Microsoft Projecti kasutamist praktiliste näidete abil.', pts:['Kalendrid, arvutusväljad ja diagrammid','Samm-sammult ekraanipildid','41 commit\'i järjepidevat tööd']}},
  {repo:'cars-api', name:'cars-api', year:2026, cats:['api','web'],
   tech:['Node.js','Express','Swagger'],
   en:{d:'REST API for cars with validation, 400/404 handling and Swagger docs, built through pull requests.'},
   et:{d:'Autode REST API valideerimise, 400/404 käsitluse ja Swaggeri dokumentatsiooniga, arendatud pull request\'idega.'}},
  {repo:'Bcrypt-showcase', name:'Bcrypt showcase', year:2026, cats:['web','api'],
   tech:['Node.js','bcryptjs'],
   en:{d:'Demo of password salting, hashing and verification with bcrypt on a Node.js server.'},
   et:{d:'Paroolide soolamise, räsimise ja kontrollimise demo bcryptiga Node.js serveris.'}},
  {repo:'AT_6.1', name:'Aerofold 2.0', year:2026, cats:['web'],
   tech:['JavaScript','localStorage','Scrum'],
   en:{d:'Sprint project: EE/EN language switch, dark/light theme and a scope-management analysis for the Product Owner.'},
   et:{d:'Sprindi projekt: EE/EN keelevalik, tume/hele teema ja ulatuse halduse analüüs Product Ownerile.'}},
  {repo:'github-actions', name:'github-actions', year:2026, cats:['devops'],
   tech:['GitHub Actions','YAML','Secrets'],
   en:{d:'CI workflow that emails a summary of every push, with credentials kept in repository secrets.'},
   et:{d:'CI töövoog, mis saadab iga push\'i kohta e-kirja; paroolid on hoitud repo secretites.'}},
  {repo:'MauiMinesBalance', name:'Mines', year:2026, cats:['dotnet','mobile'],
   tech:['.NET MAUI','C#','OOP'],
   en:{d:'Minesweeper-style game with player balance, themes and an OOP game model.'},
   et:{d:'Miinijahi-stiilis mäng mängija saldo, teemade ja OOP mängumudeliga.'}},
  {repo:'EuroRiigidApp', name:'EuroRiigid', year:2026, cats:['dotnet','mobile'],
   tech:['.NET MAUI','C#'],
   en:{d:'Mobile app about European countries with flags and country details.'},
   et:{d:'Mobiilirakendus Euroopa riikidest koos lippude ja riikide andmetega.'}},
  {repo:'Autod-db', name:'Autod-db', year:2025, cats:['dotnet','desktop'],
   tech:['WinForms','EF Core','C#'],
   en:{d:'Desktop car service app: cars, owners and services stored through Entity Framework.'},
   et:{d:'Autoteeninduse töölauarakendus: autod, omanikud ja teenused Entity Frameworki kaudu.'}}
];
const CATS = [
  {id:'all', en:'All', et:'Kõik'},
  {id:'dotnet', en:'.NET', et:'.NET'},
  {id:'web', en:'Web', et:'Veeb'},
  {id:'api', en:'API', et:'API'},
  {id:'mobile', en:'Mobile', et:'Mobiil'},
  {id:'testing', en:'Testing', et:'Testimine'},
  {id:'devops', en:'DevOps', et:'DevOps'},
  {id:'desktop', en:'Desktop', et:'Töölaud'}
];
const STACK = ['C#','.NET','ASP.NET Core','EF Core','.NET MAUI','SQL','PostgreSQL','SQLite','JavaScript','Node.js','Express','Python','Flask','xUnit','Selenium','Docker','Git','GitHub Actions','Claude','ChatGPT','Codex'];

