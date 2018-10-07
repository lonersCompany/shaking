const textArray = [
  {
    message: '<div class="message-inner-text"><h1>František Fekete<br>/ Fluid Identity Club</h1></div>'
  },
  {
    message: '<div class="message-inner-image-small"><img src="fluidentity.png"></div>'
  },
  {
    message: '<div class="message-inner-text">Před tebou je něco děsivě blízkého, ale&nbsp;bez reálných obrysů.</div>'
  },
  {
    message: '<div class="message-inner-text">Pořád ta samá rozpolcenost a&nbsp;úzkost, jen v&nbsp;jiných kulisách. Unavuje mě to tekoucí plynutí času. Teče jako med po lžičce a&nbsp;mě přepadá vnitřní temnota. Vnitřní démoni představ o&nbsp;chybění a&nbsp;mizení. Chybím. Mizím.</div>'
  },
  {
    message: '<div class="message-inner-text">Nitro svírá úzkostný pocit, který nejde definovat. Plíživě se&nbsp;zakrádající, uniká pojmenování.</div>'
  },
  {
    message: '<div class="message-inner-text">Žijeme v&nbsp;domnění, že&nbsp;mezi námi a&nbsp;světem je vztah. Přestává mě však zajímat, co řekne svět. Chtěl bych se&nbsp;osvobodit od svého myšlení, být zvířetem nebo přírodní silou. Plout v&nbsp;bezčasí. Člověk je zvíře, které si vytváří mýty. To je bolestné, neboť mýty už zde jsou a&nbsp;naší povinností a&nbsp;předurčeností je nacházet k&nbsp;nim vztahy. Ale co když nechceme? Cítím náklonnost k&nbsp;životu a&nbsp;zároveň mám silnou potřebu ho opustit. Chtěl bych ho jen sledovat. Nechci opustit tenhle svět, chci opustit jen lidskou perspektivu. Perspektivu neustále přítomného imperativu rozvětvených tužeb. Jak se&nbsp;stát kamenem? Jak se&nbsp;stát mořem?</div>'
  },
  {
    message: '<div class="message-inner-text">Fluidní identita vzniká tam, kde je prostředí příliš uzavřené do sebe a&nbsp;příliš samo sebe obhajující a&nbsp;přesvědčující. Potom se&nbsp;však otevře sám svět a&nbsp;my přicházíme k&nbsp;poznání. Jsme někdo jiný. Jsme pokaždé někdo jiný. Ale kdo? Můžeme být kýmkoliv, naše identita pluje. Fluid Identity. Být sám sobě Tricksterem.</div>'
  },
  {
    message: '<div class="message-inner-text">Jsem vpitý do sebe. Problém je tento: potřeba oprostit se&nbsp;z tíživosti přítomného okamžiku, ve kterém se&nbsp;ale zároveň snažím pojmout více perspektiv, více časů. Spojovat okamžité s&nbsp;věčným je bolestné. Přítomný okamžik je úzký. Je to skulina ve skalní stěně, jíž proniká jen pár paprsků, ty však intenzivně oslepují oko. Do této skuliny se&nbsp;nemůže vejít věčnost, nemůže se&nbsp;do ní vejít minulost ani budoucnost. Jako bych chtěl být z&nbsp;jednoho místa všude, mentální pokrývání vytoužených prostor. A&nbsp;zároveň vše v&nbsp;jednom okamžiku pochopit. Touha spojit svou přítomnost s&nbsp;celou myriádou jiných přítomností. Imaginace plná zraňujících domněnek, které nikam nespějí. Probouzející se&nbsp;pocit viny. Viním svět, že&nbsp;mě vtáhl do sebe?</div>'
  },
  {
    message: '<div class="message-inner-text">Jenže já nemám ani odvahu utéct, tak jen přežívám, jako nějaký hmyz ve sklenici, chycený tímhle světem, na němž miluji jen ty věci, které se&nbsp;nedají popsat slovy a&nbsp;sdílet je je tak těžké.</div>'
  },
  {
    message: '<div class="message-inner-text">Já je ve skutečnosti někde hluboko, Já není všudypřítomné.</div>'
  },
  {
    message: '<div class="message-inner-text">(Ne)vím kdo jsem. Vím, kým se&nbsp;stát mohu (všemi) a&nbsp;kým nemohu (všemi). Tendence stát se&nbsp;všemi, stát se&nbsp;kýmkoliv a&nbsp;zároveň nikým. Cítil jsem tolik energie, že&nbsp;jsem měl pocit, že&nbsp;ji (se) musím rozdělit. A&nbsp;to je moment, kdy jsem se&nbsp;stal rozpolceným. To je moment, který přináší tolik úzkosti. Tuhle energii nesmím nosit v&nbsp;sobě, nýbrž vedle sebe. Musím být zásobníkem identity, platformou fluidní identity. Be your own battlefield. Platforma o&nbsp;sobě sbírá informace, aby je potom použila na sebe či proti sobě. Je to systém, který sám vzniká, ničí se&nbsp;a&nbsp;přetváří. Opustit ono lidské ve světě.</div>'
  },
  {
    message: '<div class="message-inner-text">K tomu, aby byl dnes člověk celý, musí se&nbsp;rozpoltit. Ale rozpolcené části nenechat v&nbsp;sobě, nýbrž je ukrýt. Jeden ze způsobů jak věci ukrýt je nechat je samovolně plout.</div>'
  },
  {
    message: '<div class="message-inner-text">Každý má v&nbsp;sobě ukrytý převrácený/převrácené svět/světy. Tyto světy lze obnažit ve světle dne a&nbsp;temnotě noci. Nechme je poletovat kolem nás, aby nám byly kdykoliv k&nbsp;dispozici a&nbsp;zároveň nás neničily svou přítomností, neboť svět nelze uchopit vnitřní rukou, lze jedině pohlížet na jeho věčně se&nbsp;měnící fazety. Některé jsou zrcadla a&nbsp;některé jsou vchody. Vchody do dalších vchodů. Bludiště nelze nosit v&nbsp;sobě.</div>'
  },
  {
    message: '<div class="message-inner-text">Cítím se&nbsp;neúplně. Tato neúplnost paradoxně tkví ve faktu fluidní identity, tedy protichůdných nálad a&nbsp;celých myšlenkových paradigmat. Jako bych je skutečně chápal a&nbsp;nechal je skrze sebe procházet jako nomády. Usadí se, zanechají nepatrné kořeny a&nbsp;jsou vystřídaný jinými. Velké duševní stěhování. Neustálé, každý den. Tedy nikoliv nedostatek, nýbrž přebytek. Mé myšlenky přetékají mé tělo. Zbavit se&nbsp;myšlenek lze jejich uložením. A&nbsp;tak jsem se&nbsp;tedy snažil projektovat sám sebe do jiných lidí, udělat z&nbsp;nich viteály, aby mi pomohli zbavit se&nbsp;(podržet, neboť mně rozpolcenost vyhovuje, nabízí poznání v&nbsp;jeho pluralitě) těchto pravd. A&nbsp;samozřejmě je zde citové pouto, které je drásavé. Neboť oni jsou mnou – když tito lidé odejdou, odchází také část mně.</div>'
  },
  {
    message: '<div class="message-inner-text">Být součástí světa jako zásobník světů. Kapky mi dopadají na tvář, zamračenou od poryvů studeného větru. Soustředím se&nbsp;na každou z&nbsp;nich, vnímám jejich mokrý otisk, jsou ztělesněním přítomného okamžiku, nenápadně přehlížejí moji tvář, moji mysl, která by chtěla z tváře udělat něco víc, než je. Každý den ráno začíná nový svět. Jeden ze způsobů ukrytí věci je nechat ji splynout s&nbsp;okolím. Dnes ráno se&nbsp;ukrývám v&nbsp;kapkách. Stávám se&nbsp;šedým a&nbsp;studeným, stávám se&nbsp;součástí celku a&nbsp;moje věčnost se&nbsp;stává okamžikem deště. Splývám s&nbsp;okamžikem událostí, předmětů, sítě vztahů hmoty a&nbsp;emocí, času a&nbsp;prostoru. Stávám se&nbsp;okamžikem, stávám se&nbsp;součástí nového světa, který trvá jedno nedělní dopoledne.</div>'
  },
  {
    message: '<div class="message-inner-text">Role se&nbsp;proměnily. Není teď už Já jako věčnost a&nbsp;věci jako okamžik, ale&nbsp;naopak. Já jsem okamžikem a&nbsp;věci jsou věčné. A&nbsp;jejich věčnost se&nbsp;prolíná a&nbsp;mísí s&nbsp;jejich krásou a&nbsp;já se&nbsp;jí mohu kochat, každý den znovu objevovat svět, každý den být jiný, protože i&nbsp;svět je každý den jiný.</div>'
  },
  {
    message: '<div class="message-inner-text">A pak vše pohltila sladká přítomnost. Můj celý předešlý život je najednou bezvýznamný. Spěl jen do jediného okamžiku téhle noci, která nesmí nikdy skončit. Žádná lítost, žádné naděje, bez minulosti a&nbsp;budoucnosti. Žádná touha, jen totální a&nbsp;intenzivní okamžik. Zhuštění, dynamika. Všechno dávalo najednou smysl a&nbsp;zároveň na ničem nezáleželo. Můj celý život se&nbsp;dal interpretovat ve světle záblesku těch vteřin. Směr byla pouze přítomnost, neznámo kam. Tak hluboké nitro těla, až&nbsp;se najednou objevila skulina, vchod nebo východ z&nbsp;mé mysli. Východ se&nbsp;nachází hluboko v&nbsp;cévách, které pumpují krev do mozku.</div>'
  },
  {
    message: '<div class="message-inner-text">Apatie, apatie, bez pohybu. Fáze nula. Fáze bolestná, ale&nbsp;snad jen pár dní a&nbsp;zase přijde fáze věčnosti věcí a&nbsp;okamžiku člověka. Čas znovu stéká po lžičce. Kéž by stékal život po zápěstí. Svléct se&nbsp;ze života jako had z&nbsp;kůže. Apatie. Mrazivé slunce inside of me.</div>'
  },
  {
    message: '<div class="message-inner-text">Všechny myšlenky ve všech možných světech se&nbsp;spojují v&nbsp;jedno, v&nbsp;jeden spletenec neuvěřitelné energie, je to jako big bang theory uvnitř mě, která se&nbsp;snaží prodrat ven skrze má ústa. Ta křičí, ale&nbsp;hrdlo ten křik nepouští. Jde dovnitř, je dušen v&nbsp;útrobách. Křeče srdce. Zima proměňuje moje slzy v&nbsp;kousky ledu a&nbsp;ty dopadají na kožich ledních medvědů. Přál bych si, aby se&nbsp;moje nitro proměnilo v&nbsp;led. Potom by stačilo dostat se&nbsp;do blízkosti žáru a&nbsp;všechny vzpomínky a&nbsp;naděje by roztály na vodu. Vodu, kterou by lední medvědi odnesli na krách na otevřené moře, kamkoliv, na jih a&nbsp;na sever. Splynout se&nbsp;světem bez emocí. Touha stát se&nbsp;mořem, zatímco život je kůže, kterou nosím. Člověk je emocionální anarchií.</div>'
  },
  {
    message: '<div class="message-inner-text">Sněží. Venku sněží. Sníh pokrývá špičaté střechy kostela. Až andělé spadnou z&nbsp;nebe, napíchnout se&nbsp;na jejich hroty a&nbsp;potoky jejich krve budou téct ulicemi a&nbsp;odtékat okapy. Mají andělé modrou krev? Androgynní krása andělů. Tajemná kůže andělů. Moje kůže je pokryta průměrným inkarnátem, červená protéká mým nitrem a&nbsp;já jsem odsouzen k&nbsp;tomu, abych byl se&nbsp;zezdola díval na vrcholky věží. Jak se&nbsp;stát planetou? Úzkost naplňuje prázdnotu. O to víc je tato úzkost úzkostná. Cyklí se&nbsp;ve svých vlastních odrazech. Úzká, úzkostná. Musím se&nbsp;jen přenést do jiných končin. Končiny, příznačné slovo. Tam, kde věci končí. Zdá se, že&nbsp;v&nbsp;takových končinách se&nbsp;ocitám často. A&nbsp;jsem nucen z&nbsp;nich utíkat, uzavírat se&nbsp;před nimi, abych hledal nové. Já nežiju své emoce, ony žijí mě. Emocionální nomádství, emocionální totalita.</div>'
  },
  {
    message: '<div class="message-inner-text">Je neuvěřitelné uvědomit si, jak je intenzivní prožívání přítomnosti odsouzeno k&nbsp;tomu, aby se&nbsp;stalo jen pouhou vzpomínkou, odrazem někdejší bolesti nebo radosti, nejčastěji však nesnesitelnou kombinací obou, postupně uvadající, šednoucí až k&nbsp;vyprahnutí. Přítomnost je vyprahlou pouští.</div>'
  },
  {
    message: '<div class="message-inner-text">Vlčí etapa pomáhá v&nbsp;konečném sebepřijetí. Přijetí sebe, přijetí času, přijetí svého místa v&nbsp;něm. Výt s&nbsp;vlky v&nbsp;čiré přítomnosti.</div>'
  },
  {
    message: '<div class="message-inner-text">Problém fluidní identity je v&nbsp;profilaci do neustále ubíhajících linií, rozštěpených a&nbsp;rozvětvených, neznajících svůj cíl a&nbsp;nemajících hranice. Problém je v&nbsp;decentralizaci. Hmota je ostrov, jehož střed lze analyzovat, a&nbsp;pokud hledané hranice zmizí v&nbsp;oparu ranní mlhy nebo ve vrtkavých mracích, lze se&nbsp;vrátit k&nbsp;výchozímu bodu středu a&nbsp;učinit další pokusy. Nejenže je myšlení založené na hmotě centralizované, ono je i&nbsp;ukotvené v&nbsp;jednom čase, respektive působí v&nbsp;něm pouze jeden ubíhající čas, od začátku do konce. V rámci paralelních vektorových cest každý nastavuje vlastní rychlost plynutí času a&nbsp;ony se&nbsp;kříží a&nbsp;tím mísí minulé, přítomné, budoucí. A&nbsp;nastává chaos. Ledaže je přijata myšlenka neohraničení? Bezcílnost však vyžaduje absenci nadějí i&nbsp;vzpomínek, neboť vzpomínky jsou kořeny nadějí. Absence nadějí a&nbsp;vzpomínek znamená žít v&nbsp;latentní přítomnosti, v&nbsp;čirém bezčasí. Je tento stav něčím, co někteří označují jako posthumanismus? Decentralizace identity a&nbsp;prožitek bezčasí jako základ posthumanismu?</div>'
  },
  {
    message: '<div class="message-inner-text">Jak skloubit emocionální a&nbsp;politickou emancipaci? Kolonizované tělo, kolonizované myšlenky. Emoce raší skrze tělo, tělo bují skrze politiku. Nejde o&nbsp;nic jiného než o&nbsp;emoce a&nbsp;politiku.</div>'
  },
  {
    message: '<div class="message-inner-text">Je třeba se&nbsp;narodit každý den jako nový člověk, jehož charakter se&nbsp;odvíjí právě od toho, co ten den prožívá a&nbsp;jak přemýšlí. Neustálé překreslování myšlenkových vzorců teprve vytvoří nevystopovatelnou strukturu, která se&nbsp;nebude moci komodifikovat a&nbsp;objektivizovat. Proto ona touha po bezčasí. V bezčasí neexistuje struktura a&nbsp;neexistuje tam tedy pocit viny. Když neexistuje pocit viny, neexistuje ani touha po moci, neboť právě pocit viny, ten neznámý a&nbsp;neviditelný hyperobjekt, jehož přítomnost neustále silně pociťujeme, je naším řídícím orgánem. Bojíme se&nbsp;ho a&nbsp;sloužíme mu.</div>'
  },
  {
    message: '<div class="message-inner-text">Lidé jsou médiem, lidé konají a&nbsp;lidé přemýšlejí v&nbsp;okovech neustále se&nbsp;točícího světa, který se&nbsp;nemůže zastavit. Jak toho dosáhnout? Pocit viny hluboce v&nbsp;nás zakořeněný může za to, že&nbsp;svět se&nbsp;nezastaví. Tento pocit byl v&nbsp;průběhu staletí naplánován institucemi, které v&nbsp;proklamovaném zájmu o&nbsp;kolektivní emancipaci emancipovaly samotný nelidský mechanismus, s jehož pomocí se&nbsp;odvíjí dialektika historie. Tělo je archiv.</div>'
  },
  {
    message: '<div class="message-inner-text">Nepřekonatelnost (ne)smyslu. Vnitřní temnota. Možná, že&nbsp;není způsobena úzkostí vnitřku, ale&nbsp;naopak jeho otevřeností, širokostí, jeho charakteristikou objektu. Pole buněk, jedniček a&nbsp;nul, vesmírných dálek a&nbsp;já nevím jakých ještě dálek, nebo snad spíš blízkostí, neboť se&nbsp;zdá, že&nbsp;vše důležité je skryto tak blízko, že&nbsp;je nám znemožněno to vidět, neboť jsme otupováni touhou po dálkách. A&nbsp;tyto daleké blízkosti jsou zatím neprozkoumány, tonou v&nbsp;šeru, mohou však být viděny, a&nbsp;to způsobuje úzkostný rozpor. Bázeň z&nbsp;dálek, bázeň z&nbsp;neprozkoumaného, jehož latentní přítomnost je nám neustále nablízku. Jsem částečně osvětlená síť. Nelze vyloučit, ba je dokonce velice pravděpodobné, že&nbsp;za mého života nebude osvětlena jako celek. Je to vlastně nemožné. Protože jednotlivá lidská mysl a&nbsp;tělo nejsou celek, je to nahraditelná součást systému, významná ve své bezvýznamnosti. A&nbsp;také proto, že&nbsp;světlo putuje, je to fluidum, a&nbsp;tak je náš vnitřek také fluidem. Nikdy nebude celkem, protože pravda neexistuje. Neexistuje na jednom místě, je pohyblivá a&nbsp;mrštná. Tekutost, vazkost pravdy. Hovět si v&nbsp;této fluidní lepkavosti, fluktuaci energií.</div>'
  },
  {
    message: '<div class="message-inner-text">Vzdát se&nbsp;moci, vzdát se&nbsp;sebe ve prospěch širší sítě duchovní skutečnosti. Propojit se&nbsp;se světem, což už se&nbsp;stalo, je naivní myslet si, že&nbsp;ne, je třeba to přijmout a&nbsp;pochopit. Technologie a&nbsp;spiritualita, alternativní průběh času, minulost je současnost je budoucnost.</div>'
  },
  {
    message: '<div class="message-inner-text">To Já jsem ve skutečnosti neúplný, Já chybím, Já mizím, Já chybí, Já mizí. Já jsem děravý. Já je děravé. Děravá identita má potřebu se&nbsp;zaplnit nomádským a&nbsp;kradmým pohybem. Neúplné (hierarchizované) Já se&nbsp;stává emancipovaným (nehierarchizovaným) skrze proudění, transgresi sebe sama. Identita Já je autofrustrací. Nemusím se&nbsp;cítit neúplně, neúplní jsme. Dějinné jizvy jsou manifestací chybění v&nbsp;člověku. Člověk je archiv jizev. Jizvy se&nbsp;otevírají světu, aby skrze ně mohla uniknout identita. Jizvy vzniklé za chodu dějin využít jako privilegium, jako východ z&nbsp;danosti hierarchizované identity a&nbsp;jako vchod do prostoru fluidních identit.</div>'
  },
  {
    message: '<div class="message-inner-text">Skrze jizvu binarity, moci, vlastnictví uniknout. Unikat na střípcích krásy, které zbyly. Proudění jako jediná možnost, dočasnost jako jediná podmínka.</div>'
  },
  {
    message: '<div class="message-inner-text">Vytvářet křehké a&nbsp;pomíjivé souostroví odsouzené k&nbsp;vznikání a&nbsp;zanikání (chybění a&nbsp;ztrácení jako jediná podmínka a&nbsp;jediná binarita).</div>'
  },
  {
    message: '<div class="message-inner-text">Fluidní identity tančí ve Fluid Identity klubu. Průhledná těla odkrývají archiv zranění. Jizvy jsou východy z&nbsp;neměnnosti Identit, která manifestuje odsouzení člověka k&nbsp;moci. Jizvy jsou portály emancipace, stezka Nomádského mizení. Já překračuje sama sebe, je ztělesněným vychýlením Emocionální Anarchie za DJ pultem, udává rytmus neustálému ztrácení a&nbsp;nacházení, jediné možnosti úniku z&nbsp;hierarchie. Identita trouchniví a&nbsp;topí se&nbsp;v&nbsp;odsouzení k&nbsp;vlastnictví. Mizení a&nbsp;chybění je jedinou možností, dočasnost jedinou podmínkou. Jsme neúplní svou touhou po moci, je třeba vychýlit se. Identita je archivem zranění. Uvěznění identity je formou moci, protože identita se&nbsp;uskutečňuje skrze mocenské vztahy. Nechat identitu plout neznamená její smrt, nýbrž její narození ve formě neustálého vynalézání. Naše privilegium je opustit identitu a&nbsp;stát se&nbsp;médiem, fluidní identitou, hrobníkem hierarchie. Identita se&nbsp;musí rozpoltit a&nbsp;stát se&nbsp;identitou fluidní, hrobníkem hierarchie.</div>'
  },
];
