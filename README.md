# testcafe-cucumber suitsutestid IMDB.com jaoks
# testcafe-cucumber testid SMITi karjäärilehe jaoks

Testcafe ja Cucumberjs raamistikuga loodud kasutajaliidese testid harjutamiseks.\
\
\
Otsi siitsamalt github lehelt veel näiteid kasutades otsingusõna "testcafe examples" ja proovi neid käima panna \
Otsi Testcafe dokumentatsiooni ja uuri kuidas Testcafe toimib\
Kui hätta jääd, kindlasti küsi 

### Kuidas jooksutada - käsurealt käivita järgmised käsud
Sul peab arvutis olema node https://nodejs.org/en/download/ (versioon 14.x.x) ja Git https://git-scm.com/downloads
1. Typescripti laadimiseks  `npm i -g typescript`
1. Klooni repo
3. Juhul, kui sa seal juba ei viibi, siis liigu kausta /testcafe-cucumber-reports
4. Lae alla sõltuvused `npm i`
5. Käivita Chromes testimiseks: `npm run prio1` või `npm run prio2` 
6. Käivita IE's testimiseks: `npm run test:ie`
7. SMIT'i kajäärilehe testimiseks: `npm run smit` 
   (lingile klikkimine ebaõnnestub, kuna Testcafe ei ole võimeline elemendini kerima. Testi jooksmise ajal käsitsi elemendini kerides test pass'ib.)

### Ülesanded


Nüüd kui sa oled näinud kuidas testid jooksevad, koosta testlood meie karjäärilehe jaoks https://www.smit.ee/et/karjaar \
Seejärel automatiseeri testlood muutes olemasolevates testides väärtusi: testsammud on /steps kaustas ja leheobjektid ehk HTML elemendid on /pages kaustas ja testlood ise saad kirjutada features/ kaustas olevasse faili \
Eriti tubli oled kui oskad öelda mille jaoks on package.json ja readme.md failid \
\
\
Veelkord, küsi julgelt nõu ja abi
