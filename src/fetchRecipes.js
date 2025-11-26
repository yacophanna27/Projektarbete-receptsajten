// Global recipe-array som delas mellan alla komponenter
const recipes = [
    {
      title: 'Hummersoppa',
      description: 'Hummersoppa är en soppa som passar utmärk vid festliga tillfällen med lyxiga humrar i huvudrollen. Den krämiga soppan med saffran, konjak, fond och grädde som några smaksättare lyfter humrarna till en högklassig nivå.',
      cooking_time: '60',
      ingredients: [
        {
          "name": "humrar",
          "amount": 2,
          "unit": "stycken"
        },
        {
          "name": "gul lök",
          "amount": 1,
          "unit": "styck"
        },
        {
          "name": "string",
          "amount": 0,
          "unit": "string"
        },
        {
          "name": "morötter",
          "amount": 2,
          "unit": "stycken"
        },
        {
          "name": "grädde",
          "amount": 3,
          "unit": "dl"
        },
        {
          "name": "vatten",
          "amount": 1,
          "unit": "liter"
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
          "name": "peppar",
          "amount": 0,
          "unit": "string"
        }
      ],
      instructions: [
        "Koka upp en stor kastrull med lättsaltat vatten. Lägg försiktigt ner humrarna och låt dem koka enligt anvisningarna, vanligtvis cirka 8-10 minuter beroende på storlek.",
        "Ta upp humrarna och låt dem svalna något. Plocka sedan ut allt hummerkött: klor, stjärt och eventuellt kött i kroppen. Ställ åt sidan och spara även skalen, de ger fantastisk smak till soppan.",
        "Skala och hacka den gula löken grovt. Skala morötterna och skär dem i mindre bitar.",
        "Smält en klick smör i en stor kastrull. Fräs lök och morötter på medelvärme i några minuter tills de blir mjuka och får lite färg.",
        "Lägg i hummerskalen i kastrullen och rör runt så att de blandas med grönsakerna. Det här steget hjälper till att få fram ännu mer smak i buljongen.",
        "Häll över vattnet och lägg i fiskbuljongtärningen. Låt soppan sjuda under lock i cirka 20 minuter så att smakerna utvecklas.",
        "Ta bort hummerskalen ur soppan. Använd en stavmixer eller blender och mixa soppan helt slät tills konsistensen blir krämig och utan bitar.",
        "Häll i grädden och rör om. Låt soppan värmas upp igen på låg värme. Smaka av med salt och peppar och justera kryddningen efter eget tycke.",
        "Fördela det plockade hummerköttet i skålarna. Häll den varma soppan över och toppa gärna med en liten klick grädde eller färska örter om du vill.",
        "Servera direkt medan soppan är rykande varm."
      ],
      category: 'main course',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg'
    },
    {
      title: 'Toast skagen',
      cooking_time: '30',
      ingredients: Array(9),
      category: 'starter',
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
      cooking_time: '70',
      ingredients: Array(18),
      category: 'main course',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_209578/cf_259/ryggbiff_med_rotselleripur%C3%A9_och_vitlokssky.jpg'
    },
    {
      title: 'Toast med fikon och ricotta',
      cooking_time: '15',
      ingredients: Array(7),
      category: 'starter',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_233778/cf_259/toast_med_fikon__ricotta_och_pinjenotter.jpg'
    },
    {
      title: 'Rentartar med brynt sojasmör',
      cooking_time: '45',
      ingredients: Array(11),
      category: 'starter',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_126070/cf_259/rentartar_med_riven_svamp_och_brynt_sojasmor_.jpg'
    },
    {
      title: 'Torskrygg med räkor och dillsmör',
      cooking_time: '50',
      ingredients: Array(15),
      category: 'main course',
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
      cooking_time: '80',
      ingredients: Array(23),
      category: 'main course',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152633/cf_259/oxfil%C3%A9_med_duxelle_och_rotselleripur%C3%A9.jpg'
    },
    {
      title: 'Gnocchi med ricotta och svamp',
      cooking_time: '65',
      ingredients: Array(17),
      category: 'main course',
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
      cooking_time: '90',
      ingredients: Array(28),
      category: 'main course',
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
      cooking_time: '55',
      ingredients: Array(18),
      category: 'main course',
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
      cooking_time: '75',
      ingredients: Array(12),
      category: 'main course',
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
