// Global recipe-array som delas mellan alla komponenter
const recipes = [
    {
      title: 'Hummersoppa',
      description: 'Hummersoppa är en soppa som passar utmärk vid festliga tillfällen med lyxiga humrar i huvudrollen. Den krämiga soppan med saffran, konjak, fond och grädde som några smaksättare lyfter humrarna till en högklassig nivå.',
      cooking_time: '60',
      ingredients: [
        {
          "name": "humrar",
          "amount": 3,
          "unit": "stycken"
        },
        {
          "name": "gul lök",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "vitlöksklyftor",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "liten morot",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "grädde",
          "amount": 3,
          "unit": "dl"
        },
        {
          "name": "rotselleri",
          "amount": 100,
          "unit": "g"
        },
        {
          "name": "fiskbuljongtärning",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "salt",
          "amount": 0,
          "unit": "string"
        },
        {
          "name": "tomatpuré",
          "amount": 2,
          "unit": "msk"
        }
      ],
      instructions: [
    "Dagen före festen: Dela och plocka köttet ur humrarna. Krossa skalen grovt. Skala och grovhacka morot, lök, vitlök och selleri.",
    "Hetta upp olja i en kastrull och bryn skal- och grönsakshacket.",
    "Tillsätt saffran och tomatpuré. Fräs i ytterligare någon minut.",
    "Häll i konjak och vin. Låt koka tills hälften av vätskan kokat bort.",
    "Tillsätt fond och vatten. Låt småkoka i ca 45 minuter. Sila av buljongkoket.",
    "Koka ihop buljongen med grädden i ca 5 minuter. Red soppan med majsstärkelsen utrört i lite kallt vatten. Smaka av med salt och nymalen vitpeppar. Låt svalna i kastrullen. Sätt på ett lock och ställ in i kylen.",
    "Skala och strimla schalottenlöken. Fräs några minuter i olivolja, utan att det tar färg. Låt svalna. Spola hastigt av sockerärtorna i hett vatten och strimla dem fint.",
    "Skär hummerköttet i grova bitar, behåll klorna hela och blanda med löken och de strimlade sockerärterna. Förvara i en täckt skål i kylen.",
    "Nyårsafton/festtillfället: Fördela hummer, lök och sockerärter i varma djupa tallrikar. Värm soppan under omrörning och häll över hummerköttet.",
    "Servera direkt medan soppan är rykande varm."
      ],
      category: 'mains',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg'
    },
    {
    title: 'Toast skagen',
    description: "Klassisk, magiskt god och snabblagad toast Skagen som serveras på smörstekt toast. Skagenröran gör du enkelt med räkor, majonnäs och dill.Servera med en klick löjrom och citronklyftor.",
    cooking_time: '30 minuter',
    ingredients: [
      {
        "name": "räkor i lake",
        "amount": 1,
        "unit": "förpackning"
      },
      {
        "name": "dill",
        "amount": 1,
        "unit": "kruka"
      },
      {
        "name": "citron",
        "amount": 1,
        "unit": "st"
      },
      {
        "name": "salt",
        "amount": 1,
        "unit": "krm"
      },
      {
        "name": "peppar",
        "amount": 1,
        "unit": "krm"
      },
      {
        "name": "formfranska",
        "amount": 3,
        "unit": "skivor"
      },
      {
        "name": "smör",
        "amount": 2,
        "unit": "msk"
      },
      {
        "name": "löjrom",
        "amount": 80,
        "unit": "gram"
      },
     ],

    instructions: [
      "Låt räkorna rinna av i en sil.",
      "Hacka dillen (spar några vippor till serveringen). Blanda dillen med majonnäsen.",
      "Smaka av med citronsaft från halva citronen (för 4 port) samt salt och peppar. Skär resten av citronen i klyftor till serveringen.",
      "Pressa ur ytterligare lag ur räkorna och blanda dem med majonnäsen.",
      "Dela brödskivorna på snedden och stek bröden gyllenbruna i smöret i en stekpanna.",
      "Servera skagenröran på bröden med löjrommen, citronklyftor och toppa med lite extra dill och nymalen svartpeppar.",
    ],
    category: 'starters',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_229530/cf_259/toast_skagen.jpg'
  },


    {
      title: 'Pannacotta',
      description: "Klassiskt grundrecept på pannacotta, som är en underbart god efterrätt med lyxig känsla. Pannacottan, italienarnas klassiska efterrätt, får här en fin vaniljsmak från vaniljstången som kokas med grädden och den serveras allra helst med färska bär.",
      cooking_time: '20',
      ingredients: [
      {
          "name": "gelatinblad",
          "amount": "2",
          "unit": "st",
        },
        {
          "name": "grädde",
          "amount": "5",
          "unit": "dl",
        },
        {
          "name": "vaniljstång",
          "amount": "1",
          "unit": "st",
        },
        {
          "name": "socker",
          "amount": "1/2",
          "unit": "dl",
        },
        {
          "name": "färska bär",
          "amount": "valfri mängd",
          "unit": "",
        }
      ],
      instructions: [
        "Lägg gelatinbladen i kallt vatten.",
        "Häll grädden i en kastrull. Dela vaniljstången på längden och skrapa ur fröna. Lägg fröna och stången i grädden tillsammans med sockret.",
        "Koka upp grädden och koka den sakta i ca 2 minuter. Vispa så att vaniljfröna blandar sig med grädden. Ta upp vaniljstången.",
        "Ta upp gelatinbladen och lägg ner dem i den varma grädden. Rör försiktigt så att gelatinbladen löser sig.",
        "Fördela grädden i portionsglas eller formar.",
        "Sätt formarna i kylen, minst 5 timmar.",
        "Till servering: Dekorera med färska bär och servera."
      ],
      category: 'desserts',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_243738/cf_259/pannacotta.jpg'
    },
    {
      title: 'Tiramisu',
      description: 'Gör din egen lyxiga tiramisu med detta härliga recept! Häll ner len mascarpone- och äggsmet i en form där botten är täckt av smakliga, espressodoppade och spetsade savoiardikex. Ställ in i kylen över natten och servera tiramisun pudrad med kakao och färska hallon.',
      cooking_time: '45',
      ingredients: [
        {
          "name": "äggulor",
          "amount": "5",
          "unit": "st"
        },
        {
          "name": "mascarpone",
          "amount": "2",
          "unit": "burkar"
        },
        {
          "name": "äggvitor",
          "amount": "5",
          "unit": "st"
        },
        {
          "name": "socker",
          "amount": "1 1/2",
          "unit": "dl"
        },
        {
          "name": "kallt kaffe",
          "amount": "1 3/4",
          "unit": "dl"
        },
        {
          "name": "amaretto eller konjak",
          "amount": "1/2",
          "unit": "dl"
        },
        {
          "name": "savoiardikex",
          "amount": "1",
          "unit": "förp"
        },
        {
          "name": "kakao",
          "amount": "1",
          "unit": "msk"
        },
        {
          "name": "färska hallon",
          "amount": "valfri mängd",
          "unit": ""
        }
      ],
      instructions: [
        "Vispa ihop äggulor och mascarpone till en slät smet.",
        "Vispa äggvitorna fluffiga med elvisp. Tillsätt sockret lite i taget och fortsätt vispa tills smeten är fast och blank.",
        "Vänd ner äggvitevispet i äggsmeten med hjälp av en slickepott.",
        "Blanda spriten med kaffet och doppa hälften av kexen hastigt i kaffet. Lägg kexen i en form (ca 20 x 25 cm, för 8 port). Häll på hälften av äggsmeten och pudra på lite kakao. Doppa sedan resten av kexen och lägg dem på äggsmeten och häll på resten av äggsmeten.",
        "Häll äggsmeten över kexen och ställ i kylen minst 5 timmar, gärna över natten.",
        "Pudra över kakao vid servering och servera gärna med hallon.",
      ],  
      category: 'desserts',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_218797/cf_259/tiramisu.jpg'
    },
    {
      title: 'Ryggbiff med rotselleripuré',
      description: 'En klassisk festmåltid när den är som bäst: stekt ryggbiff som serveras med len rotselleripuré. Stek ryggbiffen till perfektion genom att hålla koll på innertemperaturen. Svartkålschips blir ett enkelt men elegant tillbehör.',
      cooking_time: '70 minuter',
      ingredients: [
        {
          "name": "ryggbiff gärna med fettkappa",
          "amount": 8,
          "unit": "skivor"
        },
        {
          "name": "salt",
          "amount": 3,
          "unit": "tsk"
        },
        {
          "name": "rotselleri",
          "amount": 2,
          "unit": "kg"
        },
        {
          "name": "vitvinsvinäger",
          "amount": 4,
          "unit": "msk"
        },
        {
          "name": "svartkål",
          "amount": 8,
          "unit": "blad"
        },
        {
          "name": "olja",
          "amount": 1,
          "unit": "msk"
        },
        {
          "name": "schalottenlökar",
          "amount": 3,
          "unit": "styck"
        },
        {
          "name": "smör",
          "amount": 75,
          "unit": "g"
        },
        {
          "name": "konc kalvfond",
          "amount": 2,
          "unit": "msk"
        }
    ],
      instructions: [
        "Sätt ugnen på 175°C.",
        "Rotselleripuré: Skala och skär rotsellerin i mindre bitar och lägg i en ugnsform. Lägg vitlöksklyftorna (med skal) till vitlöksskyn i en ugnsform. Rosta rotsellerin och vitlöken i ugnen ca 30 minuter tills rotsellerin är mjuk.",
        "Mixa rotsellerin i en blender med vinäger och olivolja. Späd med vatten till lagom konsistens. Smaka av med salt.",
        "Sätt ugnen på 150°C.",
        "Svartkål: Blanda svartkålsbladen med olja och salt. Sprid ut på en bakpappersklädd plåt och ställ in i mitten av ugnen 15–25 minuter.",
        "Vitlökssky: Skala och skiva löken. Skala de rostade vitlöksklyftorna. Fräs schalottenlöken i 2 msk av smöret (för 8 port) i en kastrull ca 5 minuter. Tillsätt vinäger och den rostade vitlöken. Låt koka upp och tillsätt fond och vatten, låt koka 2–3 minuter. Tillsätt resten av smöret lite i taget och mixa till en slät sås vid servering. Sila genom en finmaskig sil och smaka av med salt och peppar.",
        "Sätt ugnen på 100°C.",
        "Ryggbiff: Krydda köttet med salt och peppar. Stek i omgångar i het panna i olja och smör, 1–2 minuter per sida. Lägg köttet på ett ugnsgaller med plåt under. Sätt in i ugnen, se Innertemperatur för blodigt, medium och välstekt. Låt köttet vila ca 2 minuter innan servering.",
        "Skiva köttet och servera med rotselleripurén, vitlöksskyn och toppa med svartkålen."
      ],
      category: 'mains',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_209578/cf_259/ryggbiff_med_rotselleripur%C3%A9_och_vitlokssky.jpg'
    },

      {
    title: 'Toast med fikon och ricotta',
    description: "Festliga snittar! Rostad surdegsbaguette med krämig ricottaost toppas med klyftor av fikon och pinjenötter. Ringla över honung innan servering och bjudningen kan börja.",
    cooking_time: '15 minuter',
    ingredients: [
      {
        "name": "surdegsbaugette",
        "amount": 0.5,
        "unit": "st"
      },
      {
        "name": "fikon",
        "amount": 4,
        "unit": "st"
      },
      {
        "name": "ricottaost",
        "amount": 1,
        "unit": "förpackning"
      },
      {
        "name": "pinjenötter",
        "amount": 0.5,
        "unit": "dl"
      },
      {
        "name": "flytande honung",
        "amount": 2,
        "unit": "msk"
      },
      {
        "name": "flingsalt",
        "amount": 1,
        "unit": "nypa"
      },
      {
        "name": "svartpeppar",
        "amount": 1,
        "unit": "tsk"
      },
    ],
    instructions: [
      "Skiva baguetten i tunna skivor. Rosta i en torr stekpanna. Skär fikonen i klyftor.",
      "Bred ricotta på brödskivorna. Toppa med fikon och pinjenötter. Ringla över honung och strö över salt och peppar.",
    ],
    category: 'starters',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_233778/cf_259/toast_med_fikon__ricotta_och_pinjenotter.jpg'
  },


    {
    title: 'Rentartar med brynt sojasmör',
    description: "Viltkött gillar svamp lite extra mycket. Här i en lyxig tartar på ytterfilé av ren. Pepparrot och brynt sojasmör förhöjer smaken. Avsluta med att råriva champinjoner och strö över – ett enkelt sätt att få fram doften av en höstig skogspromenad. Ljuvligt som förrätt!",
    cooking_time: '45 minuter',
    ingredients: [
      {
        "name": "renytterfilé",
        "amount": 200,
        "unit": "gram"
      },
      {
        "name": "ljust surdegsbröd",
        "amount": 2,
        "unit": "skivor"
      },
      {
        "name": "rapsolja",
        "amount": 1,
        "unit": "msk"
      },
      {
        "name": "japansk soja",
        "amount": 2,
        "unit": "msk"
      },
      {
        "name": "gula steklökar",
        "amount": 5,
        "unit": "st"
      },
      {
        "name": "skogschampinjoner",
        "amount": 100,
        "unit": "gram"
      },
      {
        "name": "små äggulor",
        "amount": 8,
        "unit": "st"
      },
      {
        "name": "riven pepparrot",
        "amount": 1,
        "unit": "dl"
      },
      {
        "name": "krasse",
        "amount": 1,
        "unit": ""
      },
    ],
    instructions: [
      "Putsa renköttet fritt från senor och hinnor. Skär det i små tärningar. Förvara övertäckt i kyl.",
      "Skär brödet i tärningar. Stek runt om i oljan och 1 msk av smöret (för 8 port) i en stekpanna tills de är gyllene. Ta upp och låt rinna av på hushållspapper.",
      "Hetta upp resterande smör i en liten kastrull. Ta från värmen när det börjar bli lätt brynt och doftar nötigt.",
      "Sila smöret genom en finmaskig sil och blanda med sojan.",
      "Skala och skiva löken tunt, gärna med mandolin. Ansa och riv champinjonerna grovt.",
      "Forma renfiléhacket till 8 lika stora bollar (för 8 port). Lägg på ett fat. Gör en liten urgröpning i varje boll och häll försiktigt i en äggula",
      "Fördela den skivade löken, brödtärningarna, svamp och pepparrot över. Klipp krassen och strö över.",
      "Avsluta med att värma sojasmöret och ringla över tartaren. Strö över lite flingsalt."
    ],
    category: 'starters',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_126070/cf_259/rentartar_med_riven_svamp_och_brynt_sojasmor_.jpg'
  },

    {
      title: 'Torskrygg med räkor och dillsmör',
      description: 'Torskrygg i ugn med len potatiscréme och räkor, perfekt till nyår och andra festliga tillfällen. Här kombinerar du rimmad torskrygg med en créme gjord på mandelpotatis. Toppa med lätt smörstekta räkor smaksatta med citron och dill.',
      cooking_time: '50 minuter',
      ingredients: [
        {
          "name": "torskryggfilé",
          "amount": 4,
          "unit": "port"
        },
        {
          "name": "socker",
          "amount": 2,
          "unit": "tsk"
        },
        {
          "name": "mandelpotatis",
          "amount": 600,
          "unit": "g"
        },
        {
          "name": "smetana",
          "amount": 2,
          "unit": "dl"
        },
        {
          "name": "citron",
          "amount": 1/2,
          "unit": "styck"
        },
        {
          "name": "avrunna skalade räkor i lake",
          "amount": 2,
          "unit": "dl"
        },
        {
          "name": "färsk dill",
          "amount": 2,
          "unit": "kruka"
        },
        {
          "name": "smör",
          "amount": 100,
          "unit": "g"
        },
        {
          "name": "färskpressad citronsaft",
          "amount": 3,
          "unit": "droppar"
        }
    ],
      instructions: [
        "Tina torskryggen om fryst används.",
        "Rimmad torsk: Blanda salt och socker med vattnet och rör om så att det löser sig. Lägg fisken i saltlagen, låt den ligga i lagen 2-3 timmar.",
        "Sätt ugnen på 125°C.",
        "Potatiscrème: Skala och koka potatisen mycket försiktigt tills den är mjuk. Häll av vattnet, ställ tillbaka kastrullen på plattan och ånga potatisen torr.",
        "Riv skalet av en halv citron. Smaksätt potatiscrèmen med salt och peppar och skalet av citronen. Lägg tillbaka i kastrullen och håll potatiscrémen varm på svag värme på spisen.",
        "Rimmad torsk: Lägg torsken i en ugnssäker form. Sätt in formen mitt i ugnen 25-30 minuter eller tills innertemperaturen på fisken är 56°C.",
        "Dillsmör: Häll av räkorna i en sil. Ansa, skölj och strimla purjolöken i tunna och små strimlor. Skär dillen fint.",
        "Smält smöret i en kastrull och koka purjolöken mjuk i smöret.",
        "Värm räkorna försiktigt i smöret de ska inte koka, då blir de sega. Smaksätt med salt, peppar och några droppar citronsaft. Rör ner dillen i smöret.",
        "Servera torsken på potatiscrémen, slå över dillsmöret med räkor. Garnera med krasse."
      ],
      category: 'mains',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191313/cf_259/torskrygg_i_ugn_med_rakor_och_dillsmor.jpg'
    },
    {
      title: 'Chokladpavlova med körsbär',
      description: 'Det är något barnsligt gott över marängtårta. Det där frasiga yttre och sega inre i kombination med len grädde. Den här chokladpavlovan går inte av för hackor, i sällskap av amarettogrädde och körsbär kommer ingen vid bordet bli ledsen.',
      cooking_time: '60',
      ingredients: [
        {
          "name": "äggvitor",
          "amount": "4",
          "unit": "st"
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "krm"
        },
        {
          "name": "socker",
          "amount": "3 1/2",
          "unit": "dl"
        },
        {
          "name": "vitvinsvinäger",
          "amount": "1",
          "unit": "tsk"
        },
        {
          "name": "kakao",
          "amount": "2",
          "unit": "tsk"
        },
        {
          "name": "majsstärkelse",
          "amount": "1",
          "unit": "msk"
        },
        {
          "name": "smält mörk choklad (70%)",
          "amount": "50",
          "unit": "g"
        },
        {
          "name": "urkärnade körsbär",
          "amount": "500",
          "unit": "g"
        },
        {
          "name": "färskpressad citronjuice",
          "amount": "2",
          "unit": "msk"
        },
        {
          "name": "vispgrädde",
          "amount": "3",
          "unit": "dl"
        },
        {
          "name": "vaniljsocker",
          "amount": "1",
          "unit": "msk"
        },
        {
          "name": "amaretto",
          "amount": "2",
          "unit": "msk"
        },
        {
          "name": "hyvlad mörk choklad",
          "amount": "valfri mängd",
          "unit": ""
        }
      ],
      instructions: [
        "Sätt ugnen på 225°C.",
        "Vispa äggvitor och salt till ett vitt skum. Tillsätt sockret, lite i taget, och fortsätt vispa till en fast maräng. Vispa ner vinägern.",
        "Blanda kakao och majsstärkelse. Rör ner i marängen. Rör försiktigt, men ändå snabbt, ner den smälta chokladen (rör du för länge riskerar smeten att spricka).",
        "Bred ut marängsmeten till en rund botten, ca 20 cm i diameter, på en bakpappersklädd plåt. Ställ in i mitten av ugnen och sänk värmen till 125°C. Grädda ca 11/2 timme, tills marängen är hård på ytan men fortfarande lite seg i mitten. Stäng av ugnen och låt stå kvar tills ugnen svalnat.",
        "Körsbär: Blanda körsbär, socker och citronjuice i en kastrull. Låt koka på svag värme ca 10-15 minuter, till en fast kompott. Låt svalna.",
        "Mandelgrädde: Vispa grädden. Rör ner vaniljsocker och mandellikör.",
        "Vid servering: Toppa pavlovan med mandelgrädden och körsbären. Garnera med hyvlad mörk choklad."
      ],
      category: 'desserts',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152531/cf_259/chokladpavlova_med_mandelgradde_och_korsbar.jpg'
    },
    {
      title: 'Krämig hallonmimosa',
      cooking_time: '10',
      ingredients: Array(4),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_210439/cf_259/kramig_hallonmimosa.jpg'
    },
    {
      title: 'Thai Basil med kokosskum',
      cooking_time: '25',
      ingredients: Array(10),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bupdodddnw8fa0tdpxwx.jpg'
    },
    {
      title: 'Negroni med sötsyrlig twist',
      cooking_time: '35',
      ingredients: Array(6),
      category: 'drink',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bgkpspbuaz5bxdxesasi.jpg'
    },

    {
      title: 'Getostbollar med krispigt baconsmul',
      cooking_time: '30',
      ingredients: Array(5),
      category: 'starter',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_208890/cf_259/getostbollar_med_krispigt_baconsmul.jpg'
    },
    {
      title: 'Clementinbubbel med rosmarin',
      cooking_time: '35',
      ingredients: Array(6),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_189804/cf_259/clementinbubbel_med_rosmarin%C2%A0.jpg'
    },
    {
      title: 'Räkcrostini med koriandermajo',
      cooking_time: '20',
      ingredients: Array(10),
      category: 'starter',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_173649/cf_259/rakcrostini_med_koriandermajo.jpg'
    },
    {
      title: 'Frozen key-lime pie',
      description: 'Frisk, krämig och oemotståndligt god! Frozen key lime pie är en härligt syrlig dessert med len limefyllning och knaprig digestivebotten som är perfekt att förbereda i förväg. Toppad med vispad grädde och limeskivor är den dessutom en fröjd för ögat!',
      cooking_time: '45',
      ingredients: [
        {
          "name": "smör",
          "amount": "100",
          "unit": "g"
        },
        {
          "name": "digestivekex",
          "amount": "200",
          "unit": "g"
        },
        {
          "name": "socker",
          "amount": "4",
          "unit": "msk"
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "krm"
        },
        {
          "name": "lime",
          "amount": "6",
          "unit": "st"
        },
        {
          "name": "kondenserad mjölk",
          "amount": "400",
          "unit": "g"
        },
        {
          "name": "vaniljsocker",
          "amount": "1",
          "unit": "msk"
        },
        {
          "name": "vispgrädde",
          "amount": "5",
          "unit": "dl"
        }
      ],
      instructions: [
        "Sätt ugnen på 175°C.",
        "Botten: Smält smöret. Mixa kexen till ett fint smul i matberedare eller för hand i en mortel.",
        "Blanda smul med smält smör, socker och salt. Tryck ut i botten och upp på sidorna i en pajform ca 24 cm i diameter (för 8 port). Grädda pajbotten i mitten av ugnen ca 15 minuter och låt svalna helt i rumstemperatur.",
        "Fyllning: Riv skalet fint på limen och pressa ut juicen. Blanda kondenserad mjölk med limeskal, limejuice och vaniljsocker i en bunke.",
        "Vispa grädden fluffig och vänd ner i bunken med fyllning och häll i pajskalet, frys minst 4 timmar.",
        "Topping: Ta ut pajen 20 till 30 minuter innan servering.",
        "Vispa grädden fluffig. Toppa pajen med grädde, limeskal och limeskivor."
      ],
      category: 'desserts',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/fftbatklk0l2oz4tw9sa.jpg'
    },
    {
      title: 'Salt kolapannacotta med citrus',
      description: 'Denna ljuvligt lyxiga dessert har allt och lite till. Söt och salt kolapannacotta, len chokladmousse med en bitter touch och syrliga clementiner. Smula över några chokladcookies på toppen för gott crunch.',
      cooking_time: '50',
      ingredients: [
        {
          "name": "gelatinblad",
          "amount": "2",
          "unit": "st"
        },
        {
          "name": "vispgrädde",
          "amount": "7",
          "unit": "dl"
        },
        {
          "name": "dulce de leche",
          "amount": "1",
          "unit": "burk"
        },
        {
          "name": "flingsalt",
          "amount": "1/2",
          "unit": "tsk"
        },
        {
          "name": "hackad mörk bakchoklad (55%)",
          "amount": "100",
          "unit": "g"
        },
        {
          "name": "clementiner",
          "amount": "valfri mängd",
          "unit": ""
        },
        {
          "name": "färska hallon",
          "amount": "valfri mängd",
          "unit": ""
        },
        {
          "name": "krossade chokladkakor",
          "amount": "valfri mängd",
          "unit": ""
        }
      ],
      instructions: [
        "Lägg gelatinblad i kallt vatten enligt anvisningen på förpackningen.",
        "Pannacotta: Koka upp vispgrädde i en kastrull, ta från värmen. Vispa genast ner dulce de leche. Krama ur gelatinbladen och tillsätt dem under fortsatt vispning. Rör ner flingsalt.",
        "Häll smeten i 8 glas (för 8 port). Ställ i kylen minst 4 timmar.",
        "Chokladmousse: Värm vispgrädde (koka ej). Ta från värmen och rör ner hackad choklad, eller chokladknappar. Låt svalna helt i kylen.",
        "Vid servering: Vispa chokladmoussen fluffig. Toppa pannacottan med moussen, clementiner, skurna i hinnfria klyftor, hallon och krossade chokladcookies."
      ],
      category: 'desserts',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/c7faae66jthqzcl5nxx8.jpg'
    },
    {
      title: 'Oxfilé och svampduxelle',
      description: 'Ingen nyårsmiddag eller nyårsmeny är komplett utan oxfilé. Få en smakstark fullträff till huvudrätt med detta oxfilérecept där du enkelt förbereder alla moment. Den krämiga svampduxellen får en lyxig touch av madeira, och en pigg spenatolja fulländar det möra köttet.',
      cooking_time: '80 minuter',
      ingredients: [
        {
          "name": "oxfilé",
          "amount": 1,
          "unit": "kg"
        },
        {
          "name": "rapsolja",
          "amount": 2,
          "unit": "msk"
        },
        {
          "name": "smör",
          "amount": 1,
          "unit": "msk"
        },
        {
          "name": "rotselleri",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "vispgrädde",
          "amount": 2.5,
          "unit": "dl"
        },
        {
          "name": "färskpressad citronjuice",
          "amount": 1-2,
          "unit": "tsk"
        },
        {
          "name": "champinjoner",
          "amount": 250,
          "unit": "g"
        },
        {
          "name": "schalottenlökar",
          "amount": 3,
          "unit": "styck"
        },
        {
          "name": "bladspenat",
          "amount": 65,
          "unit": "g"
        }
    ],
      instructions: [
        "Putsa köttet. Salta och peppra runt om.",
        "Hetta upp en stor stekpanna och bryn köttet runt om i olja och smör tills det får färg. Ta upp köttet och kyl snabbt. Förvara övertäckt i kylen.",
        "Rotselleripuré: Skala och skär rotsellerin i små tärningar. Lägg sellerin i en kastrull. Tillsätt grädden. Koka upp och låt koka under lock på svag värme tills rotsellerin är helt mjuk, ca 15 minuter.",
        "Lyft upp sellerin och lägg i en mixer. Tillsätt först lite av grädden och mixa purén slät. Späd därefter med resten av grädden till lagom konsistens. Smaka av med citronjuice, salt och peppar. Låt svalna, täck över och ställ in i kylen.",
        "Duxelle: Ansa och finhacka champinjonerna. Skala, dela och finhacka vitlök och schalottenlök. Fräs svamp- och lökhacket i olivolja och smör tills det får lite färg. Tillsätt madeiran och låt koka in. Salta och peppra. Låt svalna, täck över och ställ in i kylen.",
        "Spenatolja: Mixa rapsolja med bladspenat, skivad purjolök och salt i en blender till en grön olja. Sila genom en finmaskig sil.",
        "Romanesco & sprouts: Skär romanesco i små buketter. Lägg romanesco och flower sprouts i en kastrull med kokande lättsaltat vatten. Låt koka ca 1 minut. Häll av i ett durkslag och spola med kallt vatten. Låt rinna av. Förvara övertäckt i kylen.",
        "Gör gärna Rostad vitlökssky med konjak och förvara övertäckt i kylen.",
        "2 timmar före servering: Ta fram köttet. Lägg det i en ugnsform och stick in en köttermometer i tjockaste delen.",
        "1 timme före servering: Sätt ugnen på 125°C. Tillaga köttet i mitten av ugnen tills innertemperaturen är 56–65°C (rosa–genomstekt, det tar 30–45 minuter). Linda in köttet i smörpapper. Låt vila fram till servering.",
        "Sänk ugnsvärmen till 100°C. Ställ in tallrikarna i ugnen så att de blir varma.",
        "Vid servering: Ta ut tallrikarna. Skär köttet i skivor. Lägg på grönsaker, selleripuré, kött och duxelle. Skeda över lite av såsen och droppa över spenatoljan. Bjud resten av skyn vid sidan av."
      ],
      category: 'mains',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152633/cf_259/oxfil%C3%A9_med_duxelle_och_rotselleripur%C3%A9.jpg'
    },
    {
      title: 'Gnocchi med ricotta och svamp',
      description: 'Hemmagjord gnocchi är enkelt, om än lite pilligt, men framförallt väldigt gott! Här har gnocchis huvudingrediens potatis även fått sällskap av rotselleri och serveras med krämig ricotta, stekt svamp och brynt smör med salvia.',
      cooking_time: '65 minuter',
      ingredients: [
        {
          "name": "fast potatis",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "rotselleri",
          "amount": 400,
          "unit": "g"
        },
        {
          "name": "egg",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "riven parmesan",
          "amount": 1,
          "unit": "dl"
        },
        {
          "name": "smör",
          "amount": 50,
          "unit": "g"
        },
        {
          "name": "vetemjöl",
          "amount": 5,
          "unit": "dl"
        },
        {
          "name": "svamp",
          "amount": 250,
          "unit": "g"
        },
        {
          "name": "ricottaost",
          "amount": 250,
          "unit": "g"
        },
        {
          "name": "hackade hasselnötter",
          "amount": 1,
          "unit": "dl"
        }
    ],
      instructions: [
        "Rotsellerignocchi: Skala potatis och rotselleri och skär i bitar. Koka mjuka i saltat vatten. Häll av och låt svalna lite. Pressa genom potatispress i en bunke. Blanda med ägg, salt och parmesan till ett mos. Arbeta in mjölet, lite i taget, till en smidig deg. Rulla degen till 2 cm tjocka rullar på mjölad bänk. Skär i ca 2–3 cm stora bitar. Tryck till lätt med gaffel och lägg på mjölat underlag.",
        "Koka upp rikligt med saltat vatten i en stor kastrull. Koka gnocchin i omgångar ca 5 minuter, de är klara när de flyter upp till ytan. Ta upp med hålslev och låt rinna av på en ren kökshandduk. Blanda med olja så de inte klibbar ihop.",
        "Bryn smöret. Rör ner salvian och låt fräsa 1 minut. Ta från värmen och rör ner nötterna.",
        "Ansa och skär svampen i bitar. Stek i smör tills svampen är gyllene. Krydda med salt och peppar och lägg svampen på en tallrik.",
        "Stek gnocchin i smör och olja i samma panna tills de får lite färg. Blanda ner svampen och krydda med salt och peppar.",
        "Till servering: Fördela ricottan på tallrikar. Toppa med gnocchifräset och det brynta smöret. Strö över parmesan.",
      ],
      category: 'mains',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_245454/cf_259/gnocchi_pa_rotselleri_med_ricotta_och_svamp.jpg'
    },
    {
      title: 'Limoncello spritz',
      cooking_time: '15',
      ingredients: Array(5),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/x6f5rz9z2lccucapsgkr.jpg'
    },
    {
      title: 'Hummer, forellrom och citronsmetana',
      cooking_time: '25',
      ingredients: Array(8),
      category: 'starter',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191807/cf_259/hummer_med_citronsmetana__forellrom_och_krasse.jpg'
    },
    {
      title: 'Bouillabaisse',
      description: 'Sydfransk klassisk bouillabaisse, en fisk- och skaldjursgryta som vi här lagar på egen skaldjursfond så blir den extra mustig och god. Räkor, blåmusslor och gärna både vit fisk och lax ger fiskgrytan gott innehåll. Den smakrika grytan serveras gärna med aioli och ett gott bröd.',
      cooking_time: '90 minuter',
      ingredients: [
        {
          "name": "gula lökar",
          "amount": 2,
          "unit": "styck"
        },
        {
          "name": "morötter",
          "amount": 2,
          "unit": "styck"
        },
        {
          "name": "olivolja",
          "amount": 3,
          "unit": "msk"
        },
        {
          "name": "tomatpuré",
          "amount": 3,
          "unit": "msk"
        },
        {
          "name": "hummer- kräft och/eller räkskal",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "färska blåmusslor",
          "amount": 1,
          "unit": "kg"
        },
        {
          "name": "vit benfri fiskfilé (gärna torskfilè)",
          "amount": 300,
          "unit": "g"
        },
        {
          "name": "laxfilé utan skinn",
          "amount": 300,
          "unit": "g"
        },
        {
          "name": "persilja",
          "amount": 1,
          "unit": "kruka"
        }
    ],
      instructions: [
        "Fisk och skaldjur till bouillabaissen: Tina räkorna (om frysta används). Lägg dem på hushållspapper för att torka.",
        "Skaldjursfond: Skala lök och morötter. Skär dem fint. Skala och krossa vitlöksklyftorna. Fräs grönsakerna i olivoljan i en gryta tillsammans med kryddorna.",
        "Tillsätt tomatpuré och låt den fräsa med i någon minut.",
        "Lägg i skaldjursskalen, fyll på med vattnet och smula i buljongtärningarna.",
        "Koka upp fonden och låt den koka sakta ca 25 minuter utan lock. Skumma då och då. Sila fonden genom en finmaskig sil.",
        "Bouillabaisse: Dela kärna ur och skär paprikan i bitar. Ansa fänkålen, skär den i ca 1x1 cm stora bitar. Skala moroten och potatisen och skär dem i ca 1x1 cm stora bitar. Dela och krama ur kärnorna ur tomaten.",
        "Fräs paprika, fänkål, morot och potatis i olivoljan i en stor gryta. Tillsätt saffran och tomatköttet (ej kärnorna). Häll på skaldjursfonden och koka upp.",
        "Koka sakta 25-30 minuter utan lock. Mixa soppan slät.",
        "Sätt ugnen på 100°C (till varmhållning av musslorna).",
        "Fisk och skaldjur till bouillabaissen: Skölj musslorna, borsta dem och ta bort skägget. Knacka lätt på de musslor som är öppna och släng de som inte sluter sig, släng även trasiga musslor. Sjud blåmusslorna i soppan några minuter, under lock, tills de öppnat sig. Ta upp musslorna ur buljongen, med en hålslev, sortera bort och kasta de som inte öppnat sig. Smaksätt soppan med salt och peppar.",
        "Håll musslorna varma i ugnen på ett serveringsfat under folie.",
        "Skär fisken i ca 2 x 2 cm stora tärningar. Lägg ner fisken och vannameiräkorna i bouillabaissen (vanliga räkor ska inte koka, strö dem på grytan innan servering) . Koka upp och koka sakta i 2-3 minuter.",
        "Hacka persiljan grovt. Strö persiljan över musslorna.",
        "Till servering: Servera bouillabaissen i varma djupa tallrikar med musslorna, aioli och krutonger eller surdegsbröd."
      ],
      category: 'mains',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251713/cf_259/bouillabaisse%C2%A0.jpg'
    },
    {
      title: 'Baked alaska med svarta vinbär',
      description: 'Festligare än så här blir det ej! Baked alaska är det engelska namnet för den franska desserten glace au four. I denna variant görs en ljuvlig svartvinbärsglass som täcks av ett rejält lager maräng. Dina gäster kommer få dåndimpen på grund av något så gott och tjusigt.',
      cooking_time: '70 minuter',
      ingredients: [
        {
          "name": "vispgrädde",
          "amount": "5",
          "unit": "dl"
        },
        {
          "name": "frysta svarta vinbär",
          "amount": "375",
          "unit": "g"
        },
        {
          "name": "kondencerad mjölk",
          "amount": "400",
          "unit": "g"
        },
        {
          "name": "smör",
          "amount": "50",
          "unit": "g"
        },
        {
          "name": "2",
          "amount": "ägg",
          "unit": "st"
        },
        {
          "name": "socker",
          "amount": "5",
          "unit": "dl"
        },
        {
          "name": "vetemjöl",
          "amount": "1/2",
          "unit": "dl"
        },
        {
          "name": "bakpulver",
          "amount": "1",
          "unit": "tsk"
        },
        {
          "name": "mandelmjöl",
          "amount": "1",
          "unit": "dl"
        },
        {
          "name": "äggvitor",
          "amount": "4",
          "unit": "st"
        },
        {
          "name": "vatten",
          "amount": "5 1/4",
          "unit": "dl"
        },
        {
          "name": "mörk sprit",
          "amount": "1/2",
          "unit": "dl"
        }
      ],
      instructions: [
        "Tina svarta vinbären till glassen.",
        "Svartvinbärsglass: Lättvispa grädden.",
        "Mixa svarta vinbären med kondenserad mjölk till så slätt som möjligt gärna i en kannmixer. Vänd ner grädden och rör till en jämn smet. Häll smeten i en skål klädd med plastfilm, som rymmer 1,5 l och är max 22 cm i diameter i överkant. Ställ in i frysen minst 6 timmar. ",
        "Sätt ugnen på 175°C.",
        "Sockerkaksbotten: Lägg ett bakplåtspapper i botten på en form med löstagbar kant, ca 24 cm i diameter (för 10 -12 port). Smörj kanterna med smör.",
        "Vispa ägg och socker pösigt i en bunke. Blanda vetemjöl och bakpulver.",
        "Sikta ner mjölblandningen i äggsmeten och tillsätt mandelmjölet. Blanda försiktigt med en slickepott till en jämn smet.",
        "Häll smeten i formen. Grädda i nedre delen av ugnen ca 15 minuter. Kontrollera med provsticka att kakan är helt torr. Låt svalna helt i formen.",
        "Italiensk maräng: Lägg vitorna i en rostfri bunke, gärna en som hör till en köksmaskin.",
        "Koka upp socker och vatten i en kastrull. Låt koka till 121°C, använd en digital termometer. Ta från värmen.",
        "Vispa äggvitorna till ett fast skum. Tillsätt den heta sockerlagen i en tunn stråle i äggviteskummet under fortsatt vispning.",
        "Fortsätt vispa på medelhastighet tills marängen svalnat helt (känn på bunken), det tar 10-15 minuter. Ställ i kylen medan resten görs.",
        "Fyllning: Koka ihop vinbär och socker till en sylt på medelvärme ca 10 minuter under omrörning. Låt svalna helt.",
        "Sockerlag: Koka ihop sprit, socker och vatten under omrörning tills sockret löst sig. Låt svalna helt.",
        "Montering: Pensla sockerlagen på sockerkakan. Bred ut sylten på glassens botten när den fortfarande ligger kvar i skålen. Lägg på sockerkakan, den kan behöva anpassas genom att skära av lite av kanten. Stjälp upp glassen på ett tårtfat. Bred på marängen och bränn av med brännare."
      ],
      category: 'desserts',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/r7cqqryx2qudvsdmynxd.jpg'
    },
    {
      title: 'Lingon spritz med grapefrukt',
      cooking_time: '50',
      ingredients: Array(8),
      category: 'drink',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244803/cf_259/lingon_spritz_med_grapefrukt.jpg'
    },
    {
      title: 'Apelsinsallad med lufttorkad skinka',
      cooking_time: '15',
      ingredients: Array(9),
      category: 'starter',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244901/cf_259/apelsinsallad_med_lingon_och_lufttorkad_skinka.jpg'
    },
    {
      title: 'Rimmad torsk med champagnesås',
      description: 'Ugnsbakad, rimmad torsk som serveras tillsammans med blåmusslor, smörstekt spenat och en len champagnesås är en festrätt av rang som passar utmärkt på nyårsfirandet eller middagsbjudningen.',
      cooking_time: '55 minuter',
      ingredients: [
        {
          "name": "schalottenlökar",
          "amount": 3,
          "unit": "styck"
        },
        {
          "name": "smör",
          "amount": 50,
          "unit": "g"
        },
        {
          "name": "champagne eller torrt vitt vin",
          "amount": 3,
          "unit": "dl"
        },
        {
          "name": "vispgrädde",
          "amount": 4,
          "unit": "dl"
        },
        {
          "name": "färskpressad citronjuice",
          "amount": 2,
          "unit": "msk"
        },
        {
          "name": "finskuren gräslök",
          "amount": 1/2,
          "unit": "dl"
        },
        {
          "name": "torskrygg",
          "amount": 900,
          "unit": "g"
        },
        {
          "name": "blåmusslor",
          "amount": 1,
          "unit": "kg"
        },
        {
          "name": "vitt vin",
          "amount": 2,
          "unit": "dl"
        }
    ],
      instructions: [
        "Champagnesås: Skala och finhacka löken. Bryn smöret i en kastrull, ta från värmen och tillsätt löken. Ställ tillbaka på låg värme och låt löken fräsa lite. Tillsätt timjan, lagerblad och champagne och koka tills hälften återstår. Tillsätt grädde och koka ihop några minuter. Rör ner citronjuice och smaka av med salt. Lyft upp timjan och lagerblad. Mixa såsen med stavmixer och sila.",
        "Sätt ugnen på 150°C.",
        "Torsk: Skär torsken i 6 bitar (för 6 port). Krydda runtom med salt och låt stå i rumstemperatur 30 minuter.",
        "Musslor: Skölj och rensa musslorna. Släng de som är trasiga. Om någon har öppnat sig så knacka den försiktigt mot köksbänken. Stänger den sig inte så släng den. Skala och finhacka löken.",
        "Torsk: Lägg torsken i en ugnsform och ställ in i mitten av ugnen tills innertemperaturen är 56°C, ca 15–20 minuter. Låt fisken vila några minuter innan servering.",
        "Musslor: Fräs löken till musslorna i oljan i en stor gryta eller kastrull. Höj värmen och häll i musslorna. Rör runt och häll i vinet och salt, lägg på lock och låt koka 3–4 minuter eller tills musslorna öppnar upp sig. Släng de musslor som inte har öppnat sig.",
        "Spenat: Fräs spenaten i smör i en stor stekpanna tills den mjuknar. Smaka av med salt.",
        "Plocka ur musslorna ur skalen. Värm såsen och tillsätt gräslök. Servera torsken med såsen, spenaten och musslorna.",
      ],
      category: 'mains',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_235254/cf_259/lattrimmad_torsk_med_blamusslor_och_champagnesas.jpg'
    },
    {
      title: 'Inkokta klementiner med pistageglass',
      description: 'Inkokta klementiner i lag som smaksätts av kardemumma det blir supergott. Att göra egen glass är också både kul och gott. Här smaksätts glassen av pistagenötter, dadlar och lite citron. Börja dock i tid, klementinerna smakar bäst efter 12 timmar i lagen och glassen bör vara i frysen minst 6 timmar.',
      cooking_time: '40',
      ingredients: [
        {
          "name": "clementiner",
          "amount": "12",
          "unit": "st"
        },
        {
          "name": "råsocker",
          "amount": "2",
          "unit": "dl"
        },
        {
          "name": "vatten",
          "amount": "6",
          "unit": "dl"
        },
        {
          "name": "kardemummakärnor",
          "amount": "1",
          "unit": "tsk"
        },
        {
          "name": "pistagenötter",
          "amount": "1",
          "unit": "dl"
        },
        {
          "name": "färska dadlar",
          "amount": "10",
          "unit": "st"
        },
        {
          "name": "citron",
          "amount": "1",
          "unit": "st"
        },
        {
          "name": "vispgrädde",
          "amount": "5",
          "unit": "dl"
        },
        {
          "name": "kondenserad mjölk",
          "amount": "400",
          "unit": "g"
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "krm"
        }
      ],
      instructions: [
        "Skala klementinerna och ta bort så mycket av de vita hinnorna som det går. Dela klementinerna i klyftor och picka klyftorna med en gaffel, så att det går hål på skinnet.",
        "Koka upp socker, vatten och kardemumma i en kastrull.",
        "Lägg klementinklyftorna i den varma lagen och låt det svalna. Låt klementinerna marinera i ca 12 timmar i kylen.",
        "Glass: Hacka pistagenötterna fint. Skär dadlarna i små tärningar. Tvätta citronen. Riv det yttersta av skalet från halva citronen och pressa ur ca 1/2 dl saft (för 8 port). Blanda citronsaft, citronskal, nötter och dadlar.",
        "Vispa grädden, lite hårdare än lösvispad.",
        "Vänd ner kondenserad mjölk, salt och nötblandningen i grädden, rör till en jämn smet. Häll smeten i en brödform, som rymmer ca 1 liter (för 8 port).",
        "Ställ in formen i frysen i minst 6 timmar.",
        "Ta ut glassen från frysen ca 10 minuter före servering.",
        "Lägg upp klementinklyftorna och servera dem med glassen."
      ],
      category: 'desserts',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251097/cf_259/inkokta_klementiner_med_dadlar_och_pistageglass.jpg'
    },
    {
      title: 'Cosmopolitan',
      cooking_time: '20',
      ingredients: Array(6),
      category: 'drink',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/syvfko5ulht1n9rnllzu.jpg'
    },
    {
      title: 'Gratinerade havskräftor',
      cooking_time: '25',
      ingredients: Array(12),
      category: 'starter',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_241052/cf_259/gratinerade_havskraftor.jpg'
    },
    {
      title: 'Renytterfilé med chili och chevrekräm',
      description: 'Renytterfilé kryddad med chili är överraskande gott. Servera filén med ugnsrostade rödbetor och en krämig röra på chevre. Toppa med en sötsyrlig balsamico gjord på blåbär.',
      cooking_time: '75 minuter',
      ingredients: [
        {
          "name": "renytterfilé eller hjortytterfilé",
          "amount": 500,
          "unit": "g"
        },
        {
          "name": "olivolja",
          "amount": 2,
          "unit": "msk"
        },
        {
          "name": "anchochilipulver",
          "amount": 1,
          "unit": "tsk"
        },
        {
          "name": "balsamvinäger",
          "amount": 1.5,
          "unit": "dl"
        },
        {
          "name": "strösocker",
          "amount": 1.5,
          "unit": "dl"
        },
        {
          "name": "blåbärssylt",
          "amount": 3.4,
          "unit": "dl"
        },
        {
          "name": "getost",
          "amount": 250,
          "unit": "g"
        },
        {
          "name": "mjölk",
          "amount": 3.4,
          "unit": "dl"
        },
        {
          "name": "kokta skalade rödbetor",
          "amount": 500,
          "unit": "g"
        }
    ],
      instructions: [
        "Putsa köttet noggrant. Skär i fyra lika stora bitar (för 4 portioner). Lägg i en ugnsfast form och pensla med hälften av oljan.",
        "Blanda chilipeppar med hälften av saltet och svartpeppar i en skål. Gnid in köttet runt om med kryddorna. Låt vila ca 20 minuter i rumstemperatur.",
        "Sätt ugnen på 125°C.",
        "Blåbärsbalsamico: Koka upp balsamvinäger och strösocker. Låt koka på svag värme 20-25 minuter tills hälften av vätskan återstår. Rör då och då. Låt svalna. Blanda med blåbärssylten.",
        "Chevrekräm: Mixa ost och mjölk krämigt med en stavmixer.",
        "Bryn köttet runt om. Lägg i en ugnsform och sätt in i ugnen ca 25 minuter (innertemperatur 58°C). Låt köttet vila ca 10 minuter före servering.",
        "Höj ugnstemperaturen till 225°C. Skär rödbetorna i klyftor och lägg i en ugnsform. Blanda med resten av oljan och hälften av saltet.",
        "Sätt in i mitten av ugnen 15-20 minuter.",
        "Skär köttet i skivor. Servera med rödbetor, chevrekräm och blåbärsbalsamico. Garnera gärna med färska örter."
      ],
      category: 'mains',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_160279/cf_259/renytterfil%C3%A9_med_chili__chevrekram_och_betor.jpg'
    },
    {
      title: 'Kladdkaka med italiensk maräng',
      description: 'Håll i dig nu för säsongens godaste julkladdkaka kommer här! Klassiskt kladdig med vit choklad i såväl smet som ganache och med ljuvlig italiensk maräng på toppen. Godare är så här blir det knappast.',
      cooking_time: '40',
      ingredients: [
        {
          "name": "vit choklad",
          "amount": "125",
          "unit": "g"
        },
        {
          "name": "vispgrädde",
          "amount": "1",
          "unit": "dl"
        },
        {
          "name": "rumstempererat smör",
          "amount": "5",
          "unit": "msk"
        },
        {
          "name": "ströbröd",
          "amount": "5",
          "unit": "msk"
        },
        {
          "name": "vetemjöl",
          "amount": "2",
          "unit": "dl"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsk"
        },
        {
          "name": "bakpulver",
          "amount": "1/2",
          "unit": "tsk"
        },
        {
          "name": "socker",
          "amount": "3",
          "unit": "dl"
        },
        {
          "name": "vaniljsocker",
          "amount": "1",
          "unit": "tsk"
        },
        {
          "name": "grovhackad vit choklad",
          "amount": "150",
          "unit": "g"
        },
        {
          "name": "smör",
          "amount": "100",
          "unit": "g"
        },
        {
          "name": "ägg",
          "amount": "2",
          "unit": "st"
        },
        {
          "name": "äggvitor",
          "amount": "2",
          "unit": "st"
        },
        {
          "name": "vatten",
          "amount": "2",
          "unit": "msk"
        },
        {
          "name": "lingon",
          "amount": "valfri mängd",
          "unit": ""
        },
        {
          "name": "färska fikon",
          "amount": "valfri mängd",
          "unit": ""
        }
      ],
      instructions: [
        "Ganache: Grovhacka chokladen och lägg den i en skål. Koka upp grädden, häll den över chokladen och rör till en slät smet. Rör i smöret. Låt svalna helt.",
        "Sätt ugnen på 175°C.",
        "Kaka: Klipp ut en bit bakplåtspapper och lägg i botten en springform (ca 22 cm i diameter), så blir det lättare att flytta över kakan till ett tårtfat. Smörj och bröda formen.",
        "Blanda alla torra ingredienser i en skål.",
        "Grovhacka chokladen. Smält smöret. Ta av kastrullen från plattan och rör i 100 g av chokladen (för 10 bitar), rör tills all choklad smält. Låt svalna ett par minuter. Häll ner blandningen i de torra ingredienserna och tillsätt äggen. Rör ihop allt till en jämn smet. Vänd i resten av den hackade vita chokladen.",
        "Häll smeten i formen och grädda i ca 20 till 22 minuter. Låt svalna helt, så att kakan stelnar lite.",
        "Lossa kakan från kanten och lägg upp på ett tårtfat. Häll ganachen på kakan.",
        "Italiensk maräng: Lägg äggvitan i en skål. Koka upp vatten och socker i en liten kastrull till 110°C. När sockret kokar börja vispa äggvitan med en elvisp till ett mjukt fast skum, under tiden låter du sockret koka upp till 121°C (obs ej högre än 121°C).",
        "Häll sedan det varma sockret i en fin stråle ner i äggvitan och vispa kraftigt under tiden. Fortsätt vispa till marängen är hård och kall. Fyll en eller flera spritspåsar med marängen och använd gärna olika tyllar (spritsmunstycken). Spritsa toppar på kakan och bränn gärna marängen med en gasolbrännare.",
        "Till garnering: Toppa kladdkakan med lingon och fikon."
      ],
      category: 'desserts',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221608/cf_259/julkladdkaka_med_italiensk_marang.jpg'
    },
    {
      title: 'Aperitivo',
      cooking_time: '15',
      ingredients: Array(6),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_179512/cf_259/aperitivo.jpg'
    },
  {
    title: 'Getostbollar med krispigt baconsmul',
    description: "Ett aptitretande och festligt tilltugg som är enkelt att göra: ostbollar med getost och färskost som rullas i ett smul av krispigt stekt bacon och hackade nötter. Perfekt till glöggfest eller adventsmingel!",
    cooking_time: '30 minuter',
    ingredients: [
      {
        "name": "skivat bacon",
        "amount": 1,
        "unit": "förpackning",
      },
      {
        "name": "getost",
        "amount": 200,
        "unit": "gram",
      },
      {
        "name": "hackad färsk timjan",
        "amount": 1,
        "unit": "msk",
      },
      {
        "name": "finhackade rostade hasselnötter",
        "amount": 1,
        "unit": "dl",
      },
    ],
    
    instructions:
      [
        "Strimla baconet och stek knaprigt. Låt rinna av på hushållspapper.",
        "Smula getosten och blanda med färskosten till en slät smet. Rulla smeten till bollar. Ställ bollarna i kylen.",
        "Smula baconet och finhacka timjan och blanda ihop med nötterna.",
        "Rulla bollarna i smulet."
      ],

    category: 'starters',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_208890/cf_259/getostbollar_med_krispigt_baconsmul.jpg'
  },

  {
    title: 'Clementinbubbel med rosmarin',
    description: "",
    cooking_time: '35 minuter',
    ingredients: Array(6),
    category: 'drink',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_189804/cf_259/clementinbubbel_med_rosmarin%C2%A0.jpg'
  },
  {
    title: 'Räkcrostini med koriandermajo',
    cooking_time: '20 minuter',
    ingredients: Array(10),
    category: 'starter',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_173649/cf_259/rakcrostini_med_koriandermajo.jpg'
  },
  {
    title: 'Frozen key-lime pie',
    cooking_time: '45 minuter',
    ingredients: Array(10),
    category: 'dessert',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/fftbatklk0l2oz4tw9sa.jpg'
  },
  {
    title: 'Salt kolapannacotta med citrus',
    cooking_time: '50 minuter',
    ingredients: Array(9),
    category: 'dessert',
    rating: 5,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/c7faae66jthqzcl5nxx8.jpg'
  },
  {
    title: 'Oxfilé och svampduxelle',
    cooking_time: '80 minuter',
    ingredients: Array(23),
    category: 'main course',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152633/cf_259/oxfil%C3%A9_med_duxelle_och_rotselleripur%C3%A9.jpg'
  },
  {
    title: 'Gnocchi med ricotta och svamp',
    cooking_time: '65 minuter',
    ingredients: Array(17),
    category: 'main course',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_245454/cf_259/gnocchi_pa_rotselleri_med_ricotta_och_svamp.jpg'
  },
  {
    title: 'Limoncello spritz',
    cooking_time: '15 minuter',
    ingredients: Array(5),
    category: 'drink',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/x6f5rz9z2lccucapsgkr.jpg'
  },
  {
    title: 'Hummer, forellrom och citronsmetana',
    cooking_time: '25 minuter',
    ingredients: Array(8),
    category: 'starter',
    rating: 5,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191807/cf_259/hummer_med_citronsmetana__forellrom_och_krasse.jpg'
  },
  {
    title: 'Bouillabaisse',
    cooking_time: '90 minuter',
    ingredients: Array(28),
    category: 'main course',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251713/cf_259/bouillabaisse%C2%A0.jpg'
  },
  {
    title: 'Baked alaska med svarta vinbär',
    cooking_time: '70 minuter',
    ingredients: Array(17),
    category: 'dessert',
    rating: 5,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/r7cqqryx2qudvsdmynxd.jpg'
  },
  {
    title: 'Lingon spritz med grapefrukt',
    cooking_time: '50 minuter',
    ingredients: Array(8),
    category: 'drink',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244803/cf_259/lingon_spritz_med_grapefrukt.jpg'
  },
  {
    title: 'Apelsinsallad med lufttorkad skinka',
    cooking_time: '15 minuter',
    ingredients: Array(9),
    category: 'starter',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244901/cf_259/apelsinsallad_med_lingon_och_lufttorkad_skinka.jpg'
  },
  {
    title: 'Rimmad torsk med champagnesås',
    cooking_time: '55 minuter',
    ingredients: Array(18),
    category: 'main course',
    rating: 5,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_235254/cf_259/lattrimmad_torsk_med_blamusslor_och_champagnesas.jpg'
  },
  {
    title: 'Inkokta klementiner med pistageglass',
    cooking_time: '40 minuter',
    ingredients: Array(10),
    category: 'dessert',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251097/cf_259/inkokta_klementiner_med_dadlar_och_pistageglass.jpg'
  },
  {
    title: 'Cosmopolitan',
    cooking_time: '20 minuter',
    ingredients: Array(6),
    category: 'drink',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/syvfko5ulht1n9rnllzu.jpg'
  },
  {
    title: 'Gratinerade havskräftor',
    cooking_time: '25 minuter',
    ingredients: Array(12),
    category: 'starter',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_241052/cf_259/gratinerade_havskraftor.jpg'
  },
  {
    title: 'Renytterfilé med chili och chevrekräm',
    cooking_time: '75 minuter',
    ingredients: Array(12),
    category: 'main course',
    rating: 3,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_160279/cf_259/renytterfil%C3%A9_med_chili__chevrekram_och_betor.jpg'
  },
  {
    title: 'Kladdkaka med italiensk maräng',
    cooking_time: '40 minuter',
    ingredients: Array(18),
    category: 'dessert',
    rating: 5,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221608/cf_259/julkladdkaka_med_italiensk_marang.jpg'
  },
  {
    title: 'Aperitivo',
    cooking_time: '15 minuter',
    ingredients: Array(6),
    category: 'drink',
    rating: 4,
    image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_179512/cf_259/aperitivo.jpg'
  }
];

export function fetchRecipes() {
  return recipes;
}

// Funktion för att uppdatera betyg i den delade arrayen
export function updateRecipeRating(recipeIndex, newRating) {
  if (recipes[recipeIndex]) {
    recipes[recipeIndex].rating = newRating;
    console.log(`Uppdaterade betyg för recept ${recipeIndex} till:`, newRating);
  }
}

