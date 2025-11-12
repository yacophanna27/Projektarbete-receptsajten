export function fetchRecipes() {
  return [
    {
      id:1,
      title: 'Hummersoppa',
      cooking_time: '60 minuter',
      servings: 8,
      ingredients: Array(19),
      category: 'main course',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_250503/cf_259/hummersoppa.jpg'
    },
    {
      id:2,
      title: 'Toast skagen',
      cooking_time: '30 minuter',
      servings: 10,
      ingredients: Array(9),
      category: 'starter',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_229530/cf_259/toast_skagen.jpg'
    },
    {
      id:3,
      title: 'Pannacotta',
      cooking_time: '20 minuter',
      servings: 12,
      ingredients: Array(5),
      category: 'dessert',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_243738/cf_259/pannacotta.jpg'
    },
    {
      id:4,
      title: 'Tiramisu',
      cooking_time: '45 minuter',
      servings: 8,
      ingredients: Array(7),
      category: 'dessert',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_218797/cf_259/tiramisu.jpg'
    },
    {
      id:5,
      title: 'Ryggbiff med rotselleripuré',
      cooking_time: '70 minuter',
      servings: 10,
      ingredients: Array(18),
      category: 'main course',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_209578/cf_259/ryggbiff_med_rotselleripur%C3%A9_och_vitlokssky.jpg'
    },
    {
      id:6,
      title: 'Toast med fikon och ricotta',
      cooking_time: '15 minuter',
      servings: 8,
      ingredients: Array(7),
      category: 'starter',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_233778/cf_259/toast_med_fikon__ricotta_och_pinjenotter.jpg'
    },
    {
      id:7,
      title: 'Rentartar med brynt sojasmör',
      cooking_time: '45 minuter',
      servings: 12,
      ingredients: Array(11),
      category: 'starter',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_126070/cf_259/rentartar_med_riven_svamp_och_brynt_sojasmor_.jpg'
    },
    {
      id:8,
      title: 'Torskrygg med räkor och dillsmör',
      cooking_time: '50 minuter',
      servings: 8,
      ingredients: Array(15),
      category: 'main course',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191313/cf_259/torskrygg_i_ugn_med_rakor_och_dillsmor.jpg'
    },
    {
      id:9,
      title: 'Chokladpavlova med körsbär',
      cooking_time: '60 minuter',
      servings: 8,
      ingredients: Array(12),
      category: 'dessert',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152531/cf_259/chokladpavlova_med_mandelgradde_och_korsbar.jpg'
    },
    {
      id:10,
      title: 'Krämig hallonmimosa',
      cooking_time: '10 minuter',
      servings: 12,
      ingredients: Array(4),
      category: 'drink',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_210439/cf_259/kramig_hallonmimosa.jpg'
    },
    {
      id:11,
      title: 'Thai Basil med kokosskum',
      cooking_time: '25 minuter',
      servings: 8,
      ingredients: Array(10),
      category: 'drink',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bupdodddnw8fa0tdpxwx.jpg'
    },
    {
      id:12,
      title: 'Negroni med sötsyrlig twist',
      cooking_time: '35 minuter',
      servings: 8,
      ingredients: Array(6),
      category: 'drink',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/bgkpspbuaz5bxdxesasi.jpg'
    },

    {
      id:13,
      title: 'Getostbollar med krispigt baconsmul',
      cooking_time: '30 minuter',
      servings: 10,
      ingredients: Array(5),
      category: 'starter',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_208890/cf_259/getostbollar_med_krispigt_baconsmul.jpg'
    },
    {
      id:14,
      title: 'Clementinbubbel med rosmarin',
      cooking_time: '35 minuter',
      servings: 12,
      ingredients: Array(6),
      category: 'drink',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_189804/cf_259/clementinbubbel_med_rosmarin%C2%A0.jpg'
    },
    {
      id:15,
      title: 'Räkcrostini med koriandermajo',
      cooking_time: '20 minuter',
      servings: 12,
      ingredients: Array(10),
      category: 'starter',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_173649/cf_259/rakcrostini_med_koriandermajo.jpg'
    },
    {
      id:16,
      title: 'Frozen key-lime pie',
      cooking_time: '45 minuter',
      servings: 10,
      ingredients: Array(10),
      category: 'dessert',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/fftbatklk0l2oz4tw9sa.jpg'
    },
    {
      id:17,
      title: 'Salt kolapannacotta med citrus',
      cooking_time: '50 minuter',
      servings: 8,
      ingredients: Array(9),
      category: 'dessert',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/c7faae66jthqzcl5nxx8.jpg'
    },
    {
      id:18,
      title: 'Oxfilé och svampduxelle',
      cooking_time: '80 minuter',
      servings: 12,
      ingredients: Array(23),
      category: 'main course',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_152633/cf_259/oxfil%C3%A9_med_duxelle_och_rotselleripur%C3%A9.jpg'
    },
    {
      id:19,
      title: 'Gnocchi med ricotta och svamp',
      cooking_time: '65 minuter',
      servings: 10,
      ingredients: Array(17),
      category: 'main course',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_245454/cf_259/gnocchi_pa_rotselleri_med_ricotta_och_svamp.jpg'
    },
    {
      id:20,
      title: 'Limoncello spritz',
      cooking_time: '15 minuter',
      servings: 10,
      ingredients: Array(5),
      category: 'drink',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/x6f5rz9z2lccucapsgkr.jpg'
    },
    {
      id:21,
      title: 'Hummer, forellrom och citronsmetana',
      cooking_time: '25 minuter',
      servings: 8,
      ingredients: Array(8),
      category: 'starter',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_191807/cf_259/hummer_med_citronsmetana__forellrom_och_krasse.jpg'
    },
    {
      id:22,
      title: 'Bouillabaisse',
      cooking_time: '90 minuter',
      servings: 12,
      ingredients: Array(28),
      category: 'main course',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251713/cf_259/bouillabaisse%C2%A0.jpg'
    },
    {
      id:23,
      title: 'Baked alaska med svarta vinbär',
      cooking_time: '70 minuter',
      servings: 10,
      ingredients: Array(17),
      category: 'dessert',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/r7cqqryx2qudvsdmynxd.jpg'
    },
    {
      id:24,
      title: 'Lingon spritz med grapefrukt',
      cooking_time: '50 minuter',
      servings: 12,
      ingredients: Array(8),
      category: 'drink',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244803/cf_259/lingon_spritz_med_grapefrukt.jpg'
    },
    {
      id:25,
      title: 'Apelsinsallad med lufttorkad skinka',
      cooking_time: '15 minuter',
      servings: 12,
      ingredients: Array(9),
      category: 'starter',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244901/cf_259/apelsinsallad_med_lingon_och_lufttorkad_skinka.jpg'
    },
    {
      id:26,
      title: 'Rimmad torsk med champagnesås',
      cooking_time: '55 minuter',
      servings: 10,
      ingredients: Array(18),
      category: 'main course',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_235254/cf_259/lattrimmad_torsk_med_blamusslor_och_champagnesas.jpg'
    },
    {
      id:27,
      title: 'Inkokta klementiner med pistageglass',
      cooking_time: '40 minuter',
      servings: 8,
      ingredients: Array(10),
      category: 'dessert',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_251097/cf_259/inkokta_klementiner_med_dadlar_och_pistageglass.jpg'
    },
    {
      id:28,
      title: 'Cosmopolitan',
      cooking_time: '20 minuter',
      servings: 12,
      ingredients: Array(6),
      category: 'drink',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/syvfko5ulht1n9rnllzu.jpg'
    },
    {
      id:29,
      title: 'Gratinerade havskräftor',
      cooking_time: '25 minuter',
      servings: 8,
      ingredients: Array(12),
      category: 'starter',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_241052/cf_259/gratinerade_havskraftor.jpg'
    },
    {
      id:30,
      title: 'Renytterfilé med chili och chevrekräm',
      cooking_time: '75 minuter',
      servings: 10,
      ingredients: Array(12),
      category: 'main course',
      rating: '★★★☆☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_160279/cf_259/renytterfil%C3%A9_med_chili__chevrekram_och_betor.jpg'
    },
    {
      id:31,
      title: 'Kladdkaka med italiensk maräng',
      cooking_time: '40 minuter',
      servings: 12,
      ingredients: Array(18),
      category: 'dessert',
      rating: '★★★★★',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221608/cf_259/julkladdkaka_med_italiensk_marang.jpg'
    },
    {
      id:32,
      title: 'Aperitivo',
      cooking_time: '15 minuter',
      servings: 12,
      ingredients: Array(6),
      category: 'drink',
      rating: '★★★★☆',
      image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_179512/cf_259/aperitivo.jpg'
    }
  ];
}
