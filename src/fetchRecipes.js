// Global recipe-array som delas mellan alla komponenter
const recipes = [
  {
    title: 'Hummersoppa',
    description: 'Hummersoppa är en soppa som passar utmärk vid festliga tillfällen med lyxiga humrar i huvudrollen. Den krämiga soppan med saffran, konjak, fond och grädde som några smaksättare lyfter humrarna till en högklassig nivå.',
    cooking_time: '60 minuter',
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
    cooking_time: '70 minuter',
    ingredients: Array(18),
    category: 'main course',
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
    cooking_time: '50 minuter',
    ingredients: Array(15),
    category: 'main course',
    rating: 3,
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
      "Strimla baconet och stek knaprigt. Låt rinna av på hushållspapper.",
    "Smula getosten och blanda med färskosten till en slät smet. Rulla smeten till bollar. Ställ bollarna i kylen.",
    "Smula baconet och finhacka timjan och blanda ihop med nötterna.",
    "Rulla bollarna i smulet.",
    category: 'starter',
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

