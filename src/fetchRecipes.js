// Global recipe-array som delas mellan alla komponenter
const recipes = [
    {
      title: 'Hummersoppa',
      description: 'Hummersoppa är en soppa som passar utmärk vid festliga tillfällen med lyxiga humrar i huvudrollen. Den krämiga soppan med saffran, konjak, fond och grädde som några smaksättare lyfter humrarna till en högklassig nivå.',
      cooking_time: '60 minuter',
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
      categories: 'mains',
      ratings: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg'
    },
    {
      title: 'Toast skagen',
      cooking_time: '30 minuter',
      ingredients: Array(9),
      category: 'starter',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_229530/cf_259/toast_skagen.jpg'
    },
    {
      title: 'Pannacotta',
      cooking_time: '20 minuter',
      ingredients: Array(5),
      category: 'dessert',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_243738/cf_259/pannacotta.jpg'
    },
    {
      title: 'Tiramisu',
      cooking_time: '45 minuter',
      ingredients: Array(7),
      category: 'dessert',
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
      categories: 'mains',
      ratings: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_209578/cf_259/ryggbiff_med_rotselleripur%C3%A9_och_vitlokssky.jpg'
    },
    {
      title: 'Toast med fikon och ricotta',
      cooking_time: '15 minuter',
      ingredients: Array(7),
      category: 'starter',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_233778/cf_259/toast_med_fikon__ricotta_och_pinjenotter.jpg'
    },
    {
      title: 'Rentartar med brynt sojasmör',
      cooking_time: '45 minuter',
      ingredients: Array(11),
      category: 'starter',
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
      categories: 'mains',
      ratings: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191313/cf_259/torskrygg_i_ugn_med_rakor_och_dillsmor.jpg'
    },
    {
      title: 'Chokladpavlova med körsbär',
      cooking_time: '60 minuter',
      ingredients: Array(12),
      category: 'dessert',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152531/cf_259/chokladpavlova_med_mandelgradde_och_korsbar.jpg'
    },
    {
      title: 'Krämig hallonmimosa',
      cooking_time: '10 minuter',
      ingredients: Array(4),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_210439/cf_259/kramig_hallonmimosa.jpg'
    },
    {
      title: 'Thai Basil med kokosskum',
      cooking_time: '25 minuter',
      ingredients: Array(10),
      category: 'drink',
      rating: 4,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bupdodddnw8fa0tdpxwx.jpg'
    },
    {
      title: 'Negroni med sötsyrlig twist',
      cooking_time: '35 minuter',
      ingredients: Array(6),
      category: 'drink',
      rating: 5,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bgkpspbuaz5bxdxesasi.jpg'
    },

    {
      title: 'Getostbollar med krispigt baconsmul',
      cooking_time: '30 minuter',
      ingredients: Array(5),
      category: 'starter',
      rating: 3,
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_208890/cf_259/getostbollar_med_krispigt_baconsmul.jpg'
    },
    {
      title: 'Clementinbubbel med rosmarin',
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
      categories: 'mains',
      ratings: 4,
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
      categories: 'mains',
      ratings: 3,
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
      categories: 'mains',
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
      categories: 'mains',
      ratings: 5,
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
      categories: 'mains',
      ratings: 3,
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
