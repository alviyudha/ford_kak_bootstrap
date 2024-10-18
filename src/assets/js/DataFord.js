import { bgDtlBase, bgDtlEverestTitanium1, bgDtlEverestXlt, bgDtlRangersWildtrak, bgDtlRangersXlt, bgDtlraptor1, bgSlideHome2, bgSlideHome3, brochNextEvrTitanium, brochNextEvrXlt, brochNextRangBase, brochNextRangWild, brochNextRangXlt, brochNextRaptor, colorEverestTitaniumBlack, colorEverestTitaniumBronze, colorEverestTitaniumGrey, colorEverestTitaniumMetalic, colorEverestTitaniumOrange, colorEverestTitaniumWhite, colorEverestXltBlack, colorEverestXltBronze, colorEverestXltGrey, colorEverestXltMetalic, colorEverestXltOrange, colorEverestXltwhite, colorRangerBase, colorRangerWildtrakBlack, colorRangerWildtrakGrey, colorRangerWildtrakORange, colorRangerWildtrakWhite, colorRangerWildtrakYellow, colorRangerXLTBlack, colorRangerXltBlue, colorRangerXltGrey, colorRangerXltMetalic, colorRangerXltWhite, colorRaptorBlack, colorRaptorBlue, colorRaptorGrey, colorRaptorOrange, colorRaptorWhite, designEvTitanium1, designEvTitanium2, designEvTitanium3, designEvTitanium4, designEvTitanium5, designEvTitanium6, designEvXlt1, designEvXlt2, designEvXlt3, designRangBase1, designRangBase2, designRangBase3, designRangBase4, designRangwXlt1, designRangwXlt2,designRangwild1, designRangwild2, designRangwild3, designRangwild4, designRangwild6, designRaptor1, designRaptor2, designRaptor3, performEveTitan1, performEveTitan3, performEveXlt1, performEveXlt3, performRangWild1, performRangWild2, performRangXlt1, performRangXlt2, performRangerBase1, performRangerBase2, performRaptor1, performRaptor2, safetyEvXlt1, safetyEvXlt2, safetyEvXlt3, safetyEvXlt4, safetyEvXlt5, safetyEvXlt6, safetyEvXlt7, techEvTitan1,  techEvTitan11, techEvXLT1, techEvXLT2, techRangBase1, techRangBase2, techRangWild2, techRangXLT1, techRangXLT2, techRangwild1, techraptor1, techraptor2} from "../images/importImage";


export const linkTo = {
  raptor:'/model/details/ranger-raptor',
  rangerWildtrak:'/model/details/ranger-wildtrak',
  rangerXlt:'/model/details/ranger-xlt',
  rangerBase:'/model/details/ranger-base',
  evrXlt:'/model/details/everest-xlt',
  evrTitanium:'/model/details/everest-titanium',
}
export const carouselHome = [
    // {
    //   src: bgSlidehome,
    //   alt: 'Ford Ranger',
    //   caption: {
    //     title: '',
    //     text: '',
    //   },
    // },
    {
      src: bgSlideHome2,
      alt: '',
      caption: {
        title: '',
        text: '',
      },
    },
    {
      src: bgSlideHome3,
      alt: 'Third slide',
      caption: {
        title: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      },
    },
  ];


  export const slideDataCarsRanger = [
    {
      typeCar:"Ranger Raptor",
      image:colorRaptorOrange,
      otrPrice:"1.210.000.000",
      otr:"Jakarta",
      itemSpec:["Cruise Control", "Rear View Camera", "FOX 2.5 Shock absorbers"],
      link:"/model/details/ranger-raptor",
      brochure:brochNextRaptor
    },
    {
      typeCar:"Ranger Wildtrak",
      image:colorRangerWildtrakYellow,
      otrPrice:"782.500.000",
      otr:"Jakarta",
      itemSpec:["Cruise Control", "Diesel (I4) with Bi-Turbo", "Heavy Duty Off-Road"],
      link:"/model/details/ranger-wildtrak",
      brochure:brochNextRangWild
    },
    {
      typeCar:"Ranger XLT",
      image:colorRangerXltBlue,
      otrPrice:"652.000.000",
      otr:"Jakarta",
      itemSpec:["Cruise Control", "Heavy Duty Off-Road"],
      link:"/model/details/ranger-xlt",
      brochure:brochNextRangXlt
    },
    {
      typeCar:"Ranger Base",
      image:colorRangerBase,
      otrPrice:"520.000.000",
      otr:"Jakarta",
      itemSpec:["6-Gear","Head unit 10 inch full digital /TFT","MID full digital"],
      link:"/model/details/ranger-base",
      brochure:brochNextRangBase
    },
    
    

  ]
  export const slideDataCarsEverest = [
    {
      typeCar:"Everest Titanium",
      image:colorEverestTitaniumOrange,
      otrPrice:"933.000.000",
      otr:"Jakarta",
      itemSpec:["Adaptive Cruise Control","Panoramic Moonroof","Park Assist"],
      link:"/model/details/everest-titanium",
      brochure:brochNextEvrTitanium
    },
    {
      typeCar:"Everest XLT",
      image:colorEverestXltMetalic,
      otrPrice:"827.000.000",
      otr:"Jakarta",
      itemSpec:["Cruise Control","Park Sensor","Wireless Charging"],
      link:"/model/details/everest-xlt",
      brochure:brochNextEvrXlt
    },
    

  ]
  export const slideDataCarsRaptor = [
    {
      typeCar:"Raptor",
      image:colorRaptorOrange,
      otrPrice:"XXX.000.000",
      otr:"Jakarta",
      itemSpec:["Cruise Control", "Cruise Control", "Cruise Control"],
      promo:["*harga Berlaku 1-31 Oktober","*Varian Long Range hemat Rp 26 Jutaan"],
      link:"/model/details/ranger-raptor"
    },
    

  ]



 export const vehicleData = [
    {
      type: "All",
      models: [
        {
          name: "Ranger Raptor",
          link: "ranger-raptor",
          image: colorRaptorBlack,
        },
        {
          name: "Ranger Base",
          link: "ranger-base",
          image: colorRangerBase,
        },
        {
          name: "Ranger Wildtrak",
          link: "ranger-wildtrak",
          image: colorRangerWildtrakBlack,
        },
        {
          name: "Ranger Xlt",
          link: "ranger-xlt",
          image: colorRangerXltBlue,
        },
        
        {
          name: "Everest XLT",
          link: "everest-xlt",
          image: colorEverestXltMetalic,
        },
        {
          name: "Everest Titanium",
          link: "everest-titanium",
          image: colorEverestTitaniumBlack,
        },
      ],
    },
    {
      type: "Ranger",
      models: [
        {
          name: "Ranger Raptor",
          link: "ranger-raptor",
          image: colorRaptorBlack,
        },
        {
          name: "Ranger Base",
          link: "ranger-base",
          image: colorRangerBase,
        },
        {
          name: "Ranger Wildtrak",
          link: "ranger-wildtrak",
          image: colorRangerWildtrakBlack,
        },
        {
          name: "Ranger Xlt",
          link: "ranger-xlt",
          image: colorRangerXltBlue,
        },
       
      ],
    },
    {
      type: "Everest",
      models: [
        {
          name: "Everest XLT",
          link: "everest-xlt",
          image: colorEverestXltMetalic,
        },
        {
          name: "Everest Titanium",
          link: "everest-titanium",
          image: colorEverestTitaniumBlack,
        },
      ],
    },
  ];



  export const carData = {
    "ranger-raptor": {
      srcImg: bgDtlraptor1,
      
       
    },
    "ranger-base": {
      srcImg: bgDtlBase,
      
       
    },
    "ranger-wildtrak": {
      srcImg: bgDtlRangersWildtrak,
      
       
    },
    "ranger-xlt": {
      srcImg: bgDtlRangersXlt,
      
       
    },
    "everest-xlt": {
      srcImg: bgDtlEverestXlt,
      
       
    },
    "everest-titanium": {
      srcImg: bgDtlEverestTitanium1,
      
       
    },
  
  };

  export const colorData = {
    'ranger-raptor': {
      initialImage: colorRaptorOrange,
      title:'Designed To Outclass, Outperform And Outlast',
      text:'Take on every terrain in comfort. Spirited corners with ease. High speeds with confidence. Whatever your desire, the Next-Generation Ford Ranger Raptor never ceases to delight.',
      backgroundColor: 'rgba(219,58,41, 1)',
      colors: [
        { image: colorRaptorOrange, background: 'rgba(219,58,41, 1)',descColor:'Code Orange' },
        { image: colorRaptorWhite, background: 'rgba(245, 245, 244, 1)',descColor:'Arctic White' },
        { image: colorRaptorBlue, background: 'rgba(2,119,190, 1)',descColor:'Blue Lightning' },
        { image: colorRaptorGrey, background: 'rgba(105, 109, 112, 1)',descColor:'Meteor Grey' },
        { image: colorRaptorBlack, background: 'rgba(0,0,0, 1)',descColor:'Absolute Black' },
      ]
    },
    'ranger-base': {
      initialImage: colorRangerBase,
      title:'Built To Do More',
      text:'The Next-Generation Ranger Base is capable of doing so much more with added functional and practical features.',
      backgroundColor: 'rgba(245, 245, 244, 0.96)',
      colors: [
        { image: colorRangerBase, background: 'rgba(245, 245, 244, 1)',descColor:'Arctic White' },
      ]
    },
    'ranger-wildtrak': {
      initialImage: colorRangerWildtrakYellow,
      title:'Design for Your Ranger Life',
      text:'The Next-Generation Ranger is bold and confident with an athletic exterior that shares Ford’s global truck design DNA and premium interior.',
      backgroundColor: 'rgba(221, 153, 51, 0.96)',
      colors: [
        { image: colorRangerWildtrakYellow, background: 'rgba(221, 153, 51, 1)',descColor:'Luxe Yellow' },
        { image: colorRangerWildtrakGrey, background: 'rgba(102, 103, 101, 1)',descColor:'Meteor Grey' },
        { image: colorRangerWildtrakWhite, background: 'rgba(244, 244, 246, 1)',descColor:'Artic White' },
        { image: colorRangerWildtrakORange, background: 'rgba(127, 28, 1, 1)',descColor:'Sedona Orange' },
        { image: colorRangerWildtrakBlack, background: 'rgba(0, 0, 0, 1)',descColor:'Absolute Black' },
      ]
    },
    'ranger-xlt': {
      initialImage: colorRangerXltBlue,
      title:'For Both Work and Play',
      text:'The Next-Generation Ranger XLT is both a workspace and a haven, providing smart technology and practicality features.',
      backgroundColor: 'rgba(1, 79, 171, 0.96)',
      colors: [
        { image: colorRangerXltBlue, background: 'rgba(1, 79, 171, 1)',descColor:'Lightning Blue' },
        { image: colorRangerXLTBlack, background: 'rgba(0, 0, 0, 1)',descColor:'Absolute Black' },
        { image: colorRangerXltGrey, background: 'rgba(102, 103, 101, 1)',descColor:'Meteor Grey' },
        { image: colorRangerXltWhite, background: 'rgba(244, 244, 246, 1)',descColor:'Artic White' },
        { image: colorRangerXltMetalic, background: 'rgba(218, 220, 221, 1)',descColor:'Aluminium Metalic' },
      ]
    },
    'everest-xlt': {
      initialImage: colorEverestXltwhite,
      title:'Uncompromising capability, safety and comfort',
      text:'The Next-Gen Everest isn’t only built only for the straight road. It’s ready to handle any type of terrains that you consider favorable or unfavorable to pass through by keeping you and the family comfortable .',
      backgroundColor: 'rgba(244, 244, 246, 0.96)',
      colors: [
        { image: colorEverestXltwhite, background: 'rgba(244, 244, 246, 1)',descColor:'Artic White' },
        { image: colorEverestXltBlack, background: 'rgba(0, 0, 0, 1)',descColor:'Absolute Black' },
        { image: colorEverestXltMetalic, background: 'rgba(218, 220, 221, 1)',descColor:'Aluminium Metalic' },
        { image: colorEverestXltBronze, background: 'rgba(85, 82, 82, 1)',descColor:'Equinox Bronze' },
        { image: colorEverestXltGrey, background: 'rgba(102, 103, 101, 1)',descColor:'Meteor Grey' },
        { image: colorEverestXltOrange, background: 'rgba(127, 28, 1, 1)',descColor:'Sedona Orange' },
      ]
    },
    'everest-titanium': {
      initialImage: colorEverestTitaniumMetalic,
      title:'Uncompromising capability, safety and comfort',
      text:'The Next-Gen Everest isn’t only built only for the straight road. It’s ready to handle any type of terrains that you consider favorable or unfavorable to pass through by keeping you and the family comfortable .',
      backgroundColor: 'rgba(218, 220, 221, 0.96)',
      colors: [
        { image: colorEverestTitaniumMetalic, background: 'rgba(218, 220, 221, 1)',descColor:'Aluminium Metallic'},
        { image: colorEverestTitaniumBronze, background: 'rgba(85, 82, 82, 1)',descColor:'Equinox Bronze'},
        { image: colorEverestTitaniumBlack, background: 'rgba(0, 0, 0, 1)',descColor:'Absolute Black'},
        { image: colorEverestTitaniumGrey, background: 'rgba(102, 103, 101, 1)',descColor:'Meteor Grey'},
        { image: colorEverestTitaniumWhite, background: 'rgba(244, 244, 246, 1)',descColor:'Artic White'},
        { image: colorEverestTitaniumOrange, background: 'rgba(127, 28, 1, 1)',descColor:'Sedona Orange'},
      ]
    },
    
  };


  export const designData = {
    'everest-titanium': {
      images: [
        {
          imgSrc: designEvTitanium1,
          title: 'Matrix LED',
          text: 'Get improved visibility with an adaptive lighting system that interacts with vehicle speed, steering wheel angle and the driving environment. Glare-free capabilities keep your line of sight brightly illuminated without blinding pedestrians and oncoming vehicles. For some serious style, C-Clamp LED Daytime Running Lights project unmistakable Ford DNA on the road, all the time.',
        },
        {
          imgSrc: designEvTitanium2,
          title: '360 Degree Camera',
          text: 'Get a 360-degree bird’s-eye view of your vehicle, or a 180-degree view from front to back. A vertical touchscreen with split screen display makes parking in tight spaces and maintaining visibility in off-road conditions easier.',
        },
        {
          imgSrc: designEvTitanium3,
          title: 'Electronic Shift-on-the-Fly2',
          text: 'Ford Everest comes with a 4x4 system that allows the driver to shift between 2WD to 4WD while driving. Electronic Shift-On-The-Fly is a smart and convenient way to keep the adventure going without any interruption',
        },
        {
          imgSrc: designEvTitanium4,
          title: 'Electronic Shifter (E-Shifter)2',
          text: 'The Electronic Shifter puts next-generation control in the palm of your hand. Featuring advanced technology such as Intelligent Park Assist, you can ease into tight spaces safely at the touch of a button. The system also makes perpendicular parking a breeze, helping you steer while you control the accelerator and brake pedals.',
        },
        {
          imgSrc: designEvTitanium5,
          title: 'Panoramic Moonroof',
          text: 'Enjoy more scenic adventures and a luxurious drive with the electrically adjustable Panoramic Moonroof',
        },
        {
          imgSrc: designEvTitanium6,
          title: 'SYNC®4A',
          text: 'Stay entertained and in touch with the latest infotainment system offering a host of new features. There’s a 12” Multi-Touch display, cloud-based connectivity, a wizard that remembers 5 recently used functions, an easy-to-use menu, Wireless Apple CarPlay® and Android Auto™, and wireless connection to your smartphone',
        },
      ],
    },
    'everest-xlt': {
      images: [
        {
          imgSrc: designEvXlt1,
          title: 'LED REFLECTOR',
          text: 'Get improved visibility with an adaptive lighting system that interacts with vehicle speed, steering wheel angle and the driving environment. Glare-free capabilities keep your line of sight brightly illuminated without blinding pedestrians and oncoming vehicles. For some serious style, C-Clamp LED Daytime Running Lights project unmistakable Ford DNA on the road, all the time.',
        },
        {
          imgSrc: designEvXlt2,
          title: 'Wireless Charging',
          text: '',
        },
        {
          imgSrc: designEvXlt3,
          title: 'Electric Parking Brake',
          text: 'The Electric Parking Brake is an elegant solution that isnt just easy to use, it also provides more room in the cabin.',
        },
        {
          imgSrc: designEvTitanium3,
          title: 'Electronic Shift-on-the-Fly2',
          text: 'Ford Everest comes with a 4x4 system that allows the driver to shift between 2WD to 4WD while driving. Electronic Shift-On-The-Fly is a smart and convenient way to keep the adventure going without any interruption',
        },
       
        
      ],
    },
    'ranger-raptor': {
      images: [
        {
          imgSrc: designRaptor1,
          title: 'Front LED',
          text: 'Matrix LED with Adaptive Front Lighting System and Adaptive Glare-Free',
        },
        {
          imgSrc: designRaptor2,
          title: 'Code Orange Accents',
          text: 'lorem',
        },
        {
          imgSrc: designRaptor3,
          title: 'FOX 2.5" Shock absorbers',
          text: 'State-of-the-art internal bypass dampers adjust electronically up to 500 times a second, reacting to the unfolding terrain and your driving style. Get ready for the off-road ride of your life',
        },
        
      ],
    },
    'ranger-xlt': {
      images: [
        {
          imgSrc: designRangwXlt1,
          title: 'C-Clamp LED Daytime Running Lights',
          text: 'See and be seen with Ford’s new styling DNA, seamlessly integrated into Ford Everest’s C-Clamp LED Daytime Running Lights.',
        },
        {
          imgSrc: designRangwXlt2,
          title: 'FOG Lamps',
          text: 'with aksen chrome',
        },
       
        
      ],
    },
    'ranger-wildtrak': {
      images: [
        {
          imgSrc: designRangwild1,
          title: 'Matrix LED Headlamps',
          text: 'With Matrix LED head lamps with glare-free high beam, Everest Wildtrak detects the lights from other road users and blocks the light that could otherwise temporarily blind other road users. It also features static and dynamic bending lights.',
        },
        {
          imgSrc: designRangwild2,
          title: 'Roof Rail',
          text: 'Roof Rail can support up to 100 kg while driving. Lead you to be ready for all adventures.',
        },
        {
          imgSrc: designRangwild3,
          title: '12-inch Centre Touchscreen with SYNC® 4',
          text: 'Everest Wildtrak features a portrait-oriented 12-inch touchscreen that controls Ford’s powerful SYNC® 4A infotainment system. There’s a customisable split-screen setup with an information-on-demand panel always available at the bottom of the screen. This displays key information, like native or connected navigation, the user’s connected smartphone and more.',
        },
        {
          imgSrc: designRangwild4,
          title: 'LED Tail Lights',
          text: 'LED tail lights clamped onto the new tailgate.',
        },
      
        {
          imgSrc: designRangwild6,
          title: 'Powerful Performance',
          text: 'Everest Wildtrak’s proven and powerful 210PS (155kW/500Nm) 2.0L Bi-Turbo engine has been tested to the extreme to ensure premium performance and reliability.',
        },
       
        
      ],
    },
    'ranger-base': {
      images: [
        {
          imgSrc: designRangBase1,
          title: 'C-Clamp Design Head Lights',
          text: 'Built with a new front grille and the signatureC-Clamp design head lights.',
        },
        {
          imgSrc: designRangBase2,
          title: 'All suspension front',
          text: 'coil spring with double whisbone',
        },
        {
          imgSrc: designRangBase3,
          title: 'Tyres & Wheels',
          text: '255/70R16, 16" steel wheel.',
        },
        {
          imgSrc: designRangBase4,
          title: 'Wider Width',
          text: 'Widening the pickup by 50mm allows for more space to load fundamental items such as plywood or even a full-size euro pallet.',
        },
        
      ],
    },
  };
  export const performanceData = {
    'everest-titanium': {
      images: [
        {
          imgSrc: performEveTitan1,
          title: 'Electric Shifter (E-Shifter)',
          text: 'E-shifter transmission which compliments Everests elevated sophistication while also boosting its ability to offer enhanced active safety systems.Active Park Assist system take care of parallel and perpendicular parking. The autonomous system can scan for the right sized spot and park your Everest at the press of a button.',
        },
        {
          imgSrc: performEveTitan3,
          title: 'Powerfull Performance',
          text: 'Theres an engine to suit everyones needs. 2.0L Bi-Turbo - A premium          powertrain for the fuel economy-conscious driver.',
        },
       
      ],
    },
    'everest-xlt': {
      images: [
        {
          imgSrc: performEveXlt1,
          title: '10-Speed Selectshift Automatic',
          text: '',
        },
        {
          imgSrc: performEveXlt3,
          title: 'Powerful Performance',
          text: 'Diesel (I4) with Bi-Turbo',
        },
        
        
      ],
    },
    'ranger-raptor': {
      images: [
        {
          imgSrc: performRaptor1,
          title: 'eShifter & electronic park brake',
          text: 'Comfortable and central, with advanced automated parking features at hand for next-gen control.',
        },
        {
          imgSrc: performRaptor2,
          title: 'Powerful Performance',
          text: '2 Engine which is 3.0L V6 Twin-Turbo EcoBoost Engine and 2.0L Bi-Turbo engine.',
        },
      
        
      ],
    },
    'ranger-xlt': {
      images: [
        {
          imgSrc: performRangXlt1,
          title: 'Engine and Transmission',
          text: '10-Speed transmission.',
        },
        {
          imgSrc: performRangXlt2,
          title: 'Powerfull Performance',
          text: '2.0L Bi-Turbo Diesel Engine',
        },
       
        
      ],
    },
    'ranger-wildtrak': {
      images: [
        {
          imgSrc: performRangWild1,
          title: '10-Speed Automatic',
          text: '',
        },
        {
          imgSrc: performRangWild2,
          title: 'Powerfull Performance',
          text: '2.0L Turbo, 2.0L Bi-Turbo',
        },
        
      ],
    },
    'ranger-base': {
      images: [
        {
          imgSrc: performRangerBase1,
          title: 'Engine and Transmission',
          text: '6-Speed Manual.',
        },
        {
          imgSrc: performRangerBase2,
          title: 'Powerful Performance',
          text: '2.0L Single Turbo Diesel engine',
        },
      ],
    },
  };
  export const SafetyData = {
    'everest-titanium': {
      images: [
       safetyEvXlt1,
       safetyEvXlt2,
       safetyEvXlt3,
       safetyEvXlt4,
       safetyEvXlt5,
       safetyEvXlt6,       
       safetyEvXlt7,
       
      ],
    },
    'everest-xlt': {
      images: [
        safetyEvXlt1,
        safetyEvXlt2,
        safetyEvXlt3,
        safetyEvXlt4,
        safetyEvXlt5,
        safetyEvXlt6,       
        safetyEvXlt7,
        
       ],
    },
    'ranger-raptor': {
      images: [
          safetyEvXlt1,
          safetyEvXlt2,
          safetyEvXlt3,
          safetyEvXlt4,
          safetyEvXlt5,
          safetyEvXlt6,       
          safetyEvXlt7,
          
         ],
    },
    'ranger-xlt': {
      images: [
        safetyEvXlt1,
        safetyEvXlt2,
        safetyEvXlt3,
        safetyEvXlt4,
        safetyEvXlt5,
        safetyEvXlt6,       
        safetyEvXlt7,
        
       ],
    },
    'ranger-wildtrak': {
      images: [
        safetyEvXlt1,
        safetyEvXlt2,
        safetyEvXlt3,
        safetyEvXlt4,
        safetyEvXlt5,
        safetyEvXlt6,       
        safetyEvXlt7,
        
       ],
    },
    'ranger-base': {
      images: [
        safetyEvXlt1,
        safetyEvXlt2,
        safetyEvXlt3,
        safetyEvXlt4,
        safetyEvXlt5,
        safetyEvXlt6,       
        safetyEvXlt7,
        
       ],
    },
  };
  export const techData = {
    'everest-titanium': {
      images: [
        {
          imgSrc: techEvTitan1,
          title: '360 Degree Camera',
          text: 'Get a 360-degree bird’s-eye view of your vehicle, or a 180-degree view from front to back. A vertical touchscreen with split screen display makes parking in tight spaces and maintaining visibility in off-road conditions easier.',
        },
        {
          imgSrc: techEvTitan11,
          title: 'SYNC®4A',
          text: 'Stay entertained and in touch with the latest infotainment system offering a host of new features. There’s a 12” Multi-Touch display, cloud-based connectivity, a wizard that remembers 5 recently used functions, an easy-to-use menu, Wireless Apple CarPlay® and Android Auto™, and wireless connection to your smartphone.',
        },
      ]
    },
    'everest-xlt': {
      images: [
        {
          imgSrc: techEvXLT1,
          title: 'Wireless Apple CarPlay® & Android AutoTM',
          text: 'Connect to Apple CarPlay® and Android AutoTM without a chord in sight. Say goodbye to tangled cables and hello to the sleek interior you’ve always wanted.',
        },
        {
          imgSrc: techEvXLT2,
          title: 'SYNC®4A',
          text: 'Stay entertained and in touch with the latest infotainment system offering a host of new features. There’s a 12” Multi-Touch display, cloud-based connectivity, a wizard that remembers 5 recently used functions, an easy-to-use menu, Wireless Apple CarPlay® and Android Auto™, and wireless connection to your smartphone.',
        },
      ]
    },
    'ranger-raptor': {
      images: [
        {
          imgSrc: techraptor1,
          title: '7 Selectable Drive Modes',
          text: '',
        },
        {
          imgSrc: techraptor2,
          title: '360 Degree Camera',
          text: 'Get a 360-degree bird’s-eye view of your vehicle, or a 180-degree view from front to back. A vertical touchscreen with split screen display makes parking in tight spaces and maintaining visibility in off-road conditions easier.',
        },
        
      ]
    },
    'ranger-xlt': {
      images: [
        {
          imgSrc: techRangXLT1,
          title: 'Rear View Camera',
          text: 'Reversing your Ranger XLS into a tight parking space just got a whole lot easier thanks to a rear-view camera which projects its picture onto the 10.1-inch infotainment screen.',
        },
        {
          imgSrc: techRangXLT2,
          title: '10.1-inch Touchscreen with SYNC® 4',
          text: 'Ranger XLS features a full-colour 10.1-inch portrait style infotainment screen that gives you fingertip access to Ford’s SYNC® 4A infotainment system.',
        },
      ]
    },
    'ranger-wildtrak': {
      images: [
        {
          imgSrc: techRangwild1,
          title: '360 Degree Camera',
          text: 'Get a 360-degree bird’s-eye view of your vehicle, or a 180-degree view from front to back. A vertical touchscreen with split screen display makes parking in tight spaces and maintaining visibility in off-road conditions easier.',
        },
        {
          imgSrc: techRangWild2,
          title: 'Selectable Drive Modes',
          text: 'Ford Ranger is ready to take on any adventure. With a total of 6 driving modes for both everyday and off-road* driving (Normal, Eco, Tow, Slippery, Mud/Ruts and Sand), performance, fuel economy and grip is optimized for different road conditions and terrain.',
        },
      ]
    },
    'ranger-base': {
      images: [
        {
          imgSrc: techRangBase1,
          title: 'Electric Power Assist Steering Wheel (EPAS)',
          text: 'Drive comfortably with the power assist steering wheel together with the 8” Digital Instrument Cluster.',
        },
        {
          imgSrc: techRangBase2,
          title: 'Coast-to-coast Dashboard',
          text: 'New coast-to-coast dash increases the sense of space and width in the cabin. The integrated 10” Colored Portrait Touchscreen is hi-tech with a tough truck inspired look.',
        },
        
      ]
    },
  };




export const modelSpecData = {
  'everest-titanium': {
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Bi-Turbo',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '155 kW (210 PS) @3750 rpm',
      },
      {
       
        title: 'Torque',
        text: '500 Nm @ 1750 – 2000 rpm',
      },
      {
       
        title: 'Fuel System',
        text: '80 Liters Diesel',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '10-Speed E-Shifter Automatic',
      },
      {
       
        title: '4WD Terrain System',
        text: 'Standard',
      },
      {
       
        title: 'Front Suspension',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Coil Spring with Watt’s Link and Anti-Roll Bar',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Disc',
      },
      {
       
        title: 'Differential Type',
        text: 'Locking rear Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power assisted Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '255/55 R20, Alloy',
      },
    ],
    brakeControl: [
      {
        title: 'Emergency Brake Assist (EBA)',
        text: 'Standard',
      },
      {
        title: 'Hill Descent Control (HDC)',
        text: 'Standard',
      },
      {
        title: 'Hill Launch Assist (HLA)',
        text: 'Standard',
      },
      {
        title: 'Rollover Mitigation (ROM)',
        text: 'Standard',
      },
      {
        title: 'Trailer Sway Control (TSC)',
        text: 'Standard',
      },
      {
        title: 'Adaptive Load Control (ALC)',
        text: 'Standard',
      },
    ],
    exteriorFeature: [
      {
       
        title: 'Radiator Grille',
        text: 'Chrome',
      },
      {
       
        title: 'Bumpers',
        text: 'Body Coloured',
      },
      {
       
        title: 'Door Handle',
        text: 'Chrome',
      },
      {
       
        title: 'Head Lamps',
        text: 'LED Projector',
      },
      {
       
        title: 'Mud Flap rear',
        text: 'Standard',
      },
      {
       
        title: 'LED Daytime running lights',
        text: 'Standard',
      },
      {
       
        title: 'Fog Lamps front and rear',
        text: 'Standard',
      },
      {
       
        title: 'Wiper System',
        text: 'Rain Sensing',
      },
      {
       
        title: 'Wing Mirror',
        text: 'Power adjustable & Foldable puddle lamp with Turning Indicators',
      },
      {
       
        title: 'Side Steps',
        text: 'Standard with bright finish',
      },
      {
       
        title: 'Roof Rack',
        text: 'Chrome',
      },
      {
       
        title: 'Underbody protection',
        text: 'Standard',
      },
      {
       
        title: 'Mud flaps - front and rear',
        text: 'Standard',
      },
      {
       
        title: 'Hands free power life gate',
        text: 'Standard',
      },
      {
       
        title: 'Panoramic moonroof',
        text: 'Standard',
      },
    ],
    interiorFeature: [
      {
       
        title: 'Cruise Control',
        text: 'Adaptive',
      },
      {
       
        title: 'Steering Wheel',
        text: 'Leather with control switches',
      },
      {
       
        title: 'Door trim leather',
        text: 'Standard',
      },
      {
       
        title: 'Audio System',
        text: '12" Multi Touchscreen display headunit with wireless apple carplay,Android auto,bluetooth and voice recognition',
      },
      {
       
        title: 'SYNC®',
        text: 'SYNC® 4',
      },
      {
       
        title: 'Rear View Mirror',
        text: 'Auto Dimming',
      },
      {
       
        title: 'Air conditioning',
        text: 'Dual Zone',
      },
      {
       
        title: 'Rear vents',
        text: 'Standard',
      },
      {
       
        title: '12V Socket Front',
        text: 'Standard',
      },
      {
       
        title: '230V AC outlet',
        text: 'Standard',
      },
      {
       
        title: 'Power Windows',
        text: 'Standard with Driver 1-touch down',
      },
      {
       
        title: 'Driver Seat',
        text: '8-way Power Adjustable Seat',
      },
      {
       
        title: 'Passenger Seat',
        text: '8-way ManualAdjustable Seat',
      },
      {
       
        title: '2nd row & slide Fold Flat & 3rd row seat',
        text: 'standard, 3rd row power fold',
      },
      {
       
        title: 'Seat Material',
        text: 'Leather',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Electric Parking Brake',
        text: 'Standard',
      },
      {
       
        title: 'Beltminder front row',
        text: 'Standard',
      },
      {
       
        title: 'Rear View Camera',
        text: 'Standard',
      },
      {
       
        title: 'Parking Sensor',
        text: 'Front and rear',
      },
      {
       
        title: 'Volumetric Burglar Alarm System',
        text: 'Standard',
      },
      {
       
        title: 'Keyless and push start',
        text: 'Standard',
      },
      {
       
        title: 'ISOFIX',
        text: 'Standard',
      },
      {
       
        title: 'Hill Descent Control',
        text: 'Standard',
      },
      {
       
        title: 'Blind Spot Monitoring',
        text: 'Standard',
      },
      {
       
        title: 'MyKey',
        text: 'Standard',
      },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '4914 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2207 mm',
      },
      {
       
        title: 'Overall Height',
        text: '1841 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '2900 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '246 mm',
      },
      
    ]
  },
  'everest-xlt': {
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Bi-Turbo',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '155 kW (210 PS) @3750 rpm',
      },
      {
       
        title: 'Torque',
        text: '500 Nm @ 1750 – 2000 rpm',
      },
      {
       
        title: 'Fuel System',
        text: '80 Liters Diesel',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '10-Speed Selectshift Automatic',
      },
      {
       
        title: '4WD Terrain System',
        text: 'Standard',
      },
      {
       
        title: 'Front Suspension',
        text: 'Double Wishbone with Coil Spring and Anti Roll Bar',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Coil Spring with Watt’s Link and Anti-Roll Bar',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Disc',
      },
      {
       
        title: 'Differential Type',
        text: 'Locking rear Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power assisted Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '255/55 R20, Alloy',
      },
    ],
    brakeControl: [
    ],
    exteriorFeature: [
      {
       
        title: 'Radiator Grille',
        text: 'Chrome',
      },
      {
       
        title: 'Bumpers',
        text: 'Body Coloured',
      },
      {
       
        title: 'Door Handle',
        text: 'Chrome',
      },
      {
       
        title: 'Headlamps',
        text: 'LED Projector',
      },
      {
       
        title: 'Mud Flap rear',
        text: 'Standard',
      },
      {
       
        title: 'LED Daytime running lights',
        text: 'Standard',
      },
      {
       
        title: 'Side Steps',
        text: 'Standard with bright finish',
      },
      {
       
        title: 'Roof Rack',
        text: 'Chrome',
      },
      {
       
        title: 'Underbody protection',
        text: 'Standard',
      },
      {
       
        title: 'Mud flaps - front and rear',
        text: 'Standard',
      },
      {
       
        title: 'power lift gate',
        text: 'Power',
      },
    ],
    interiorFeature: [
      {
       
        title: 'Cruise Control',
        text: 'Adaptive',
      },
      {
       
        title: 'Steering Wheel and gear knob leather',
        text: 'Standard',
      },
      {
       
        title: 'Door trim leather',
        text: 'standard',
      },
      {
       
        title: 'SYNC®',
        text: 'SYNC® 4',
      },
      {
       
        title: 'Audio System',
        text: '10" Touchscreen display Headunit with Bluetooth, Voice Recognition, 1x USB & 8        Speakers',
      },
      {
       
        title: '12V Socket Front',
        text: 'Standard',
      },
      {
       
        title: 'Rear View Mirror',
        text: 'Auto Dimming',
      },
      {
       
        title: 'Ambient lighting',
        text: 'standard',
      },
      {
       
        title: 'Air conditioning',
        text: 'Standard',
      },
      {
       
        title: 'Rear vents',
        text: 'Standard',
      },
      {
       
        title: '230V AC outlet',
        text: 'Standard',
      },
      {
       
        title: 'Power Windows',
        text: '4-Door One Touch with Anti-pinch & Global',
      },
      {
       
        title: 'Driver Seat',
        text: '6-way Power Adjustable Seat',
      },
      {
       
        title: 'Passenger seat',
        text: '6-way Power Adjustable Seat',
      },
      {
       
        title: '2nd row & slide Fold Flat & 3rd row seat',
        text: 'standard, 3rd row power fold',
      },
      {
       
        title: 'Seat Material',
        text: 'Leather',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Airbags (Driver inflatable knee bolsters)',
        text: 'Standard',
      },
      {
       
        title: 'Electric Parking Brake',
        text: 'Standard',
      },
      {
       
        title: 'Beltminder front row',
        text: 'Standard',
      },
      {
       
        title: 'Rear View Camera',
        text: 'Standard',
      },
      {
       
        title: 'Parking Sensor',
        text: 'Standard',
      },
      {
       
        title: 'Volumetric Burglar Alarm System',
        text: 'Standard',
      },
      {
       
        title: 'Keyless and push start',
        text: 'Standard',
      },
      {
       
        title: 'ISOFIX',
        text: 'Standard',
      },
      {
       
        title: 'Electronic Stability Control',
        text: 'Standard',
      },
      {
       
        title: 'Hill Descent Control',
        text: 'Standard',
      },
      {
       
        title: 'Blind Spot Monitoring',
        text: 'Standard',
      },
      {
       
        title: 'MyKey',
        text: 'Standard',
      },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '4914 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2207 mm',
      },
      {
       
        title: 'Overall Height',
        text: '1881 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '2900 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '246 mm',
      },
    ]
  },
  'ranger-raptor': {
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Bi-Turbo',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '154.5 kW (210 PS) @ 3750 rpm',
      },
      {
       
        title: 'Torque',
        text: '500 Nm @ 1750 – 2000 rpm',
      },
      {
       
        title: 'Fuel System',
        text: 'Commonrail Direct Injection',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '10-Speed Automatic',
      },
      {
       
        title: 'Electronic Shift on the fly (ESOF)',
        text: '4WD terrain management system with Baja mode',
      },
      {
       
        title: 'Front Suspension',
        text: 'Alumunium Double Wishbone with internal bypass Fox Racing Shox dampers',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Coilover Shocls with watts linkage and internal bypass Fox Racing Shox dampers',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Differential Type',
        text: 'e- Locking rear Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '285/70R17, Alloy with all terrain BF-Goodrich',
      },
    ],
    brakeControl: [
      {
        title: 'Emergency Brake Assist (EBA)',
        text: 'Standard',
      },
      {
        title: 'Hill Descent Control (HDC)',
        text: 'Standard',
      },
      {
        title: 'Hill Launch Assist (HLA)',
        text: 'Standard',
      },
      {
        title: 'Rollover Mitigation (ROM)',
        text: 'Standard',
      },
      {
        title: 'Trailer Sway Control (TSC)',
        text: 'Standard',
      },
      {
        title: 'Adaptive Load Control (ALC)',
        text: 'Standard',
      },
    ],
    exteriorFeature: [
      {
       
        title: 'Front Grille',
        text: 'Block Ford',
      },
      {
       
        title: 'Bumpers',
        text: 'High Speed off durability performance',
      },
      {
       
        title: 'Fog Lamps Front',
        text: 'Front LED',
      },
      {
       
        title: 'Headlamps with manual leveling',
        text: 'Automatic LED Projector',
      },
      {
       
        title: 'Wiper System',
        text: 'Rain Sensing',
      },
      {
       
        title: 'Wing Mirror',
        text: 'Power adjustable & Foldable puddle lamp with Turning Indicators',
      },
      {
       
        title: 'Side Steps',
        text: 'Standard',
      },
      {
       
        title: 'Bedliner',
        text: 'Standard',
      },
      {
       
        title: 'Rear Parking Sensor',
        text: 'Standard',
      },
    ],
    interiorFeature: [
      {
       
        title: 'Cruise Control',
        text: 'Adaptive',
      },
      {
       
        title: 'Steering Wheel',
        text: 'Special Raptor Design with Magnesium Paddle Shifter',
      },
      {
       
        title: 'Audio System',
        text: '12.1" Touchscreen display Headunit with Bluetooth, Voice Recognition, USB & 7 Speakers',
      },
      {
       
        title: 'SYNC®',
        text: 'SYNC® 4 Ford Performance',
      },
      {
       
        title: 'Rear View Mirror',
        text: 'Auto Dimming',
      },
      {
       
        title: '12V Socket Front',
        text: 'Standard',
      },
      {
       
        title: 'Power Windows',
        text: 'Standard with Driver 1-touch down',
      },
      {
       
        title: 'Driver Seat',
        text: '10-way Power Adjustable Seat',
      },
      {
       
        title: 'Passenger Seat',
        text: '10-way Power Adjustable Seat',
      },
      {
       
        title: 'Seat Material',
        text: 'Alcantara Leather seats with large bolsters',
      },
      {
       
        title: 'Remote Central',
        text: 'Standard',
      },
      {
       
        title: 'Power Assisted Steering',
        text: 'Electric (EPAS)',
      },
      {
       
        title: 'Climate control',
        text: 'Automatic Dual Zone',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      // {
       
      //   title: 'Knee Airbag',
      //   text: 'Standard',
      // },
      {
       
        title: 'Rear View Camera',
        text: 'Standard',
      },
      {
       
        title: 'Volumetric Burglar Alarm System',
        text: 'Standard',
      },
      {
       
        title: 'ISOFIX',
        text: 'Standard',
      },
      {
       
        title: 'Antilock Braking System (ABS)',
        text: 'Standard',
      },
      {
       
        title: 'Immobilizer',
        text: 'Standard',
      },
      {
       
        title: 'Electronic Brake Force (EBD)',
        text: 'Standard',
      },
      // {
       
      //   title: 'Distribution (EBD)',
      //   text: 'Standard',
      // },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '5381 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2208 mm (Exclude Side Mirror)',
      },
      {
       
        title: 'Overall Height',
        text: '1922 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '3270 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '266 mm',
      },
      {
       
        title: 'Cargo Bed Length',
        text: '1564 mm',
      },
      {
       
        title: 'Cargo Bed Width',
        text: '1584 mm',
      },
      {
       
        title: 'Cargo Bed Depth',
        text: '530 mm',
      },
      {
       
        title: 'Kerb Weight',
        text: '2423 kg',
      },
      {
       
        title: 'Gross Weight',
        text: '3140 kg',
      },
      {
       
        title: 'Fuel Tank Capacity',
        text: '80 Liters',
      },
    ]
  },
  'ranger-xlt': {
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Bi-Turbo',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '154.5 kW (210 PS) @ 3750 rpm',
      },
      {
       
        title: 'Torque',
        text: '500 Nm @ 1750 – 2000 rpm',
      },
      {
       
        title: 'Fuel System',
        text: 'Commonrail Direct Injection',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '10-Speed Automatic',
      },
      {
       
        title: 'Electronic Shift on the fly (ESOF)',
        text: 'Standard',
      },
      {
       
        title: 'Front Suspension',
        text: 'Double Wishbone with Coil Spring',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Leaf Spring',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Drum',
      },
      {
       
        title: 'Differential Type',
        text: 'e- Locking rear Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '255/70 R17, Alloy',
      },
    ],
    brakeControl: [
      {
        title: 'Emergency Brake Assist (EBA)',
        text: 'Standard',
      },
      {
        title: 'Hill Descent Control (HDC)',
        text: 'Standard',
      },
      {
        title: 'Hill Launch Assist (HLA)',
        text: 'Standard',
      },
      {
        title: 'Rollover Mitigation (ROM)',
        text: 'Standard',
      },
      {
        title: 'Trailer Sway Control (TSC)',
        text: 'Standard',
      },
      {
        title: 'Adaptive Load Control (ALC)',
        text: 'Standard',
      },
    ],
    exteriorFeature: [
      {
       
        title: 'Front Grille',
        text: 'Chrome',
      },
      {
       
        title: 'Bumpers',
        text: 'Body Coloured',
      },
      {
       
        title: 'Headlamps with Manual Leveling',
        text: 'Automatic LED Projector',
      },
      {
       
        title: 'Fog Lamps',
        text: 'Front LED',
      },
      {
       
        title: 'Wiper System',
        text: 'Rain Sensing',
      },
      {
       
        title: 'Wing Mirror',
        text: 'Power adjustable & Foldable with Turning Indicators',
      },
      {
       
        title: 'Side Steps',
        text: 'Standard',
      },
      {
       
        title: 'Bedliner',
        text: 'Standard',
      },
      {
       
        title: 'Rear Parking Sensor',
        text: 'Standard',
      },
    ],
    interiorFeature: [
      {
       
        title: 'Cruise Control',
        text: 'Standard',
      },
      {
       
        title: 'Steering Wheel',
        text: 'Leather with control switches',
      },
      {
       
        title: 'Audio System',
        text: '10.1" Touchscreen display Headunit with Bluetooth, Voice Recognition, USB & 6 Speakers',
      },
      {
       
        title: 'SYNC®',
        text: 'SYNC® 4',
      },
      {
       
        title: 'Climate Control',
        text: 'Automatic Dual Zone',
      },
      {
       
        title: '12V Socket Front',
        text: 'Standard',
      },
      {
       
        title: 'Power Windows',
        text: 'Standard with Driver 1-touch down',
      },
      {
       
        title: 'Driver Seat',
        text: '6-way Manual Adjustable Seat',
      },
      {
       
        title: 'Passenger Seat',
        text: '4-way Manual Adjustable Seat',
      },
      {
       
        title: 'Seat Material',
        text: 'Leather',
      },
      {
       
        title: 'Remote Central',
        text: 'Standard',
      },
      {
       
        title: 'Power Assisted Steering',
        text: 'Electric (EPAS)',
      },
      {
       
        title: 'Wireless Charging',
        text: 'Automatic Dual Zone',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Rear View Camera',
        text: 'Standard',
      },
      
      {
       
        title: 'ISOFIX',
        text: 'Standard',
      },
      {
       
        title: 'Antilock Braking System (ABS)',
        text: 'Standard',
      },
      {
       
        title: 'Immobilizer',
        text: 'Standard',
      },
      {
       
        title: 'Electronic Brake Force Distribution (EBD)',
        text: 'Standard',
      },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '5370 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2208 mm (Exclude Side Mirror)',
      },
      {
       
        title: 'Overall Height',
        text: '1884 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '3270 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '229 mm',
      },
      {
       
        title: 'Cargo Bed Length',
        text: '1564 mm',
      },
      {
       
        title: 'Cargo Bed Width',
        text: '1584 mm',
      },
      {
       
        title: 'Cargo Bed Depth',
        text: '530 mm',
      },
      {
       
        title: 'Kerb Weight',
        text: '2166 kg',
      },
      {
       
        title: 'Gross Weight',
        text: '3230 kg',
      },
      {
       
        title: 'Fuel Tank Capacity',
        text: '80 Liters',
      },
    ]
  },
  'ranger-wildtrak': {
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Bi-Turbo',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '154.5 kW (210 PS) @ 3750 rpm',
      },
      {
       
        title: 'Torque',
        text: '500 Nm @ 1750 – 2000 rpm',
      },
      {
       
        title: 'Fuel System',
        text: 'Commonrail Direct Injection',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '10-Speed Automatic',
      },
      {
       
        title: 'Electronic Shift on the fly (ESOF)',
        text: 'Standard',
      },
      {
       
        title: 'Front Suspension',
        text: 'Double Wishbone with Coil Spring',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Leaf Spring',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Differential Type',
        text: 'e- Locking rear Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '255/55 R20, Alloy',
      },
    ],
    brakeControl: [
      {
        title: 'Emergency Brake Assist (EBA)',
        text: 'Standard',
      },
      {
        title: 'Hill Descent Control (HDC)',
        text: 'Standard',
      },
      {
        title: 'Hill Launch Assist (HLA)',
        text: 'Standard',
      },
      {
        title: 'Rollover Mitigation (ROM)',
        text: 'Standard',
      },
      {
        title: 'Trailer Sway Control (TSC)',
        text: 'Standard',
      },
      {
        title: 'Adaptive Load Control (ALC)',
        text: 'Standard',
      },
    ],
    exteriorFeature: [
      {
       
        title: 'Front Grille',
        text: 'Wildtrak Scheme',
      },
      {
       
        title: 'Bumpers',
        text: 'Body Coloured',
      },
      {
       
        title: 'Fog Lamps Front',
        text: 'Front LED',
      },
      {
       
        title: 'Headlamps with Auto Leveling',
        text: 'Automatic LED Projector',
      },
      {
       
        title: 'Wiper System',
        text: 'Rain Sensing',
      },
      {
       
        title: 'Wing Mirror',
        text: 'Puddle lamp with Turning Indicators',
      },
      {
       
        title: 'Side Steps',
        text: 'Standard',
      },
      {
       
        title: 'Bedliner',
        text: 'Standard',
      },
      {
       
        title: 'Rear Parking Sensor',
        text: 'Standard',
      },
      {
       
        title: 'Sport Bar',
        text: 'Standard',
      },
    ],
    interiorFeature: [
      {
       
        title: 'Cruise Control',
        text: 'Adaptive',
      },
      {
       
        title: 'Steering Wheel',
        text: 'Leather with control switches',
      },
      {
       
        title: 'Audio System',
        text: '12.1" Touchscreen display Headunit with Bluetooth, Voice Recognition, USB & 6 Speakers',
      },
      {
       
        title: 'SYNC®',
        text: 'SYNC® 4',
      },
      {
       
        title: 'Rear View Mirror',
        text: 'Auto Dimming',
      },
      {
       
        title: '12V Socket Front',
        text: 'Standard',
      },
      {
       
        title: 'Power Windows',
        text: 'Standard with Driver 1-touch down',
      },
      {
       
        title: 'Driver Seat',
        text: '8-way Power Adjustable Seat',
      },
      {
       
        title: 'Passenger Seat',
        text: '8-way ManualAdjustable Seat',
      },
      {
       
        title: 'Seat Material',
        text: 'Wildtrak Premium Leather',
      },
      {
       
        title: 'Remote Central',
        text: 'Standard',
      },
      {
       
        title: 'Power Assisted Steering',
        text: 'Electric (EPAS)',
      },
      {
       
        title: 'Climate control',
        text: 'Automatic Dual Zone',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Knee Airbag',
        text: 'Standard',
      },
      {
       
        title: 'Rear View Camera',
        text: 'Standard',
      },
      {
       
        title: 'Volumetric Burglar Alarm System',
        text: 'Standard',
      },
      {
       
        title: 'ISOFIX',
        text: 'Standard',
      },
      {
       
        title: 'Antilock Braking System (ABS)',
        text: 'Standard',
      },
      {
       
        title: 'Immobilizer',
        text: 'Standard',
      },
      {
       
        title: 'Electronic Brake Force',
        text: 'Standard',
      },
      {
       
        title: 'Distribution (EBD)',
        text: 'Standard',
      },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '5370 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2208 mm (Exclude Side Mirror)',
      },
      {
       
        title: 'Overall Height',
        text: '1884 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '3270 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '229 mm',
      },
      {
       
        title: 'Cargo Bed Length',
        text: '1564 mm',
      },
      {
       
        title: 'Cargo Bed Width',
        text: '1584 mm',
      },
      {
       
        title: 'Cargo Bed Depth',
        text: '530 mm',
      },
      {
       
        title: 'Kerb Weight',
        text: '2166 kg',
      },
      {
       
        title: 'Gross Weight',
        text: '3230 kg',
      },
      {
       
        title: 'Fuel Tank Capacity',
        text: '80 Liters',
      },
    ]
  },
  'ranger-base': {
    
    engine: [
      {
       
        title: 'Type',
        text: 'Diesel (I4) with Turbo Charge',
      },
      {
       
        title: 'Displacement',
        text: '1996 cc',
      },
      {
       
        title: 'Power',
        text: '170 PS / 125 KW @3500 rpm',
      },
      {
       
        title: 'Torque',
        text: '450 Nm @ 1750 – 2500 rpm',
      },
      {
       
        title: 'Fuel System',
        text: 'Commonrail Direct Injection',
      },
    ],
    transmission: [
      {
       
        title: 'Transmission Type',
        text: '6-Speed Manual',
      },
      {
       
        title: 'Gear Ratio 1',
        text: '4,28',
      },
      {
       
        title: 'Gear Ratio 2',
        text: '2,36',
      },
      {
       
        title: 'Gear Ratio 3',
        text: '1,45',
      },
      {
       
        title: 'Gear Ratio 4',
        text: '1,00',
      },
      {
       
        title: 'Gear Ratio 5',
        text: '0,77',
      },
      {
       
        title: 'Gear Ratio 6',
        text: '0,54',
      },
      {
       
        title: 'Reverse Ratio',
        text: '4,53',
      },
      {
       
        title: 'Electronic Shift the fly (ESOF)',
        text: 'Standard',
      },
      {
       
        title: 'Front Suspension',
        text: 'Double Wishbone with Coil Spring',
      },
      {
       
        title: 'Rear Suspension',
        text: 'Leaf Spring',
      },
      {
       
        title: 'Front Brake',
        text: 'Ventilated Disc',
      },
      {
       
        title: 'Rear Brake',
        text: 'Drum',
      },
      {
       
        title: 'Differential Type',
        text: 'Limited Slip Differential',
      },
      {
       
        title: 'Steering System',
        text: 'Electric Power Steering',
      },
      {
       
        title: 'Tyres & Wheels',
        text: '255/70R16, 16" steel wheel',
      },
    ],
    brakeControl: [
     
    ],
    exteriorFeature: [
      {
       
        title: 'Front Grille',
        text: 'Black',
      },
      {
       
        title: 'Bumpers',
        text: 'Front - Black',
      },
      {
       
        title: 'Reflactor Headlamp',
        text: 'Standard',
      },
      
      {
       
        title: 'Side Mirror',
        text: 'Manual Foldable',
      },
      {
       
        title: 'Mud Flap rear',
        text: 'Standard',
      },
      {
       
        title: 'Tie Downs',
        text: 'Inside & Outer Load Box',
      },
    ],
    interiorFeature: [
     
      {
       
        title: 'Audio System',
        text: '10.1" Multi Touchscreen display headunit with wireless apple carplay,Android auto,bluetooth and voice recognition 4 speaker',
      },
      {
       
        title: 'Air Conditioner',
        text: 'Manual Single Zone',
      },
      {
       
        title: 'Power Windows',
        text: 'Standard with Driver 1-touch down - Front',
      },
      {
       
        title: 'Driver Seat',
        text: '4-way Manual Adjustable Seat',
      },
      {
       
        title: 'Passenger Seat',
        text: '4-way Manual Adjustable Seat',
      },
      {
       
        title: 'Seat Material',
        text: 'Vinyl',
      },
      {
       
        title: 'Remote Central',
        text: 'Standard',
      },
    ],
    safetySecurity: [
      {
       
        title: 'Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Side Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Curtain Airbag (Driver & Front Passenger)',
        text: 'Standard',
      },
      {
       
        title: 'Beltminder Driver and Passenger',
        text: 'Standard',
      },
      {
       
        title: 'Front Brake System - Disc',
        text: 'Standard',
      },
      {
       
        title: 'Rear Brake System - Drum',
        text: 'Standard',
      },
      {
       
        title: 'Volumetric Burglar Alarm System',
        text: 'Standard',
      },
      {
       
        title: 'ISOFIX Hardpoint attachment',
        text: 'Standard',
      },
      {
       
        title: 'Rear Seat Centre Head Restraint',
        text: 'Standard',
      },
      {
       
        title: 'Antilock Braking System (ABS)',
        text: 'Standard',
      },
      {
       
        title: 'Limited Slip Differential',
        text: 'Standard',
      },
      {
       
        title: 'Cab Protection - Load Rest/Cab protector',
        text: 'Standard',
      },
      {
       
        title: 'Remote Keyless Entry ',
        text: 'Standard',
      },
      {
       
        title: 'Rear window Defroster',
        text: 'Standard',
      },
    ],
    dimension: [
      {
       
        title: 'Overall Length',
        text: '5370 mm',
      },
      {
       
        title: 'Overall Width',
        text: '2208 mm (Exclude Side Mirror)',
      },
      {
       
        title: 'Overall Height',
        text: '1884 mm',
      },
      {
       
        title: 'Wheelbase',
        text: '3270 mm',
      },
      {
       
        title: 'Ground Clearance',
        text: '229 mm',
      },
      {
       
        title: 'Cargo Bed Length',
        text: '1564 mm',
      },
      {
       
        title: 'Cargo Bed Width',
        text: '1584 mm',
      },
      {
       
        title: 'Cargo Bed Depth',
        text: '540 mm',
      },
      {
       
        title: 'Kerb Weight',
        text: '2277 kg',
      },
      {
       
        title: 'Gross Weight',
        text: '3230 kg',
      },
      {
       
        title: 'Fuel Tank Capacity',
        text: '80 Liters',
      },
    ]
  
  },
};

export const BrochureData = {
  'everest-titanium': brochNextEvrTitanium,
  'everest-xlt':brochNextEvrXlt,
  'ranger-raptor':brochNextRaptor,
  'ranger-xlt': brochNextRangXlt,
  'ranger-wildtrak': brochNextRangWild,
  'ranger-base': brochNextRangBase,
};
export const linkYoutube = {
  'everest-titanium': {
    link: ["https://www.youtube.com/embed/sbuyQ5LgW8s?si=Jh5XLMTGwhcnj-VR"],
  },
  'everest-xlt': {
    link: ["https://www.youtube.com/embed/Zj1r3rMS7XM?si=RgPnW3mtLav-wF2m"],
  },
  'ranger-raptor': {
    link: ["https://www.youtube.com/embed/AObpiTXqAKM?si=9sZTr0s5M0Nr4Bz5"],
  },
  'ranger-xlt': {
    link: ["https://www.youtube.com/embed/KnLpwdADRY8?si=lRklFNIXW4ecTp3H"],
  },
  'ranger-wildtrak': {
    link: ["https://www.youtube.com/embed/KnLpwdADRY8?si=lRklFNIXW4ecTp3H"],
  },
  'ranger-base': {
    link: [""],
  },
};

export const bgSlide= [
  bgSlideHome2,
  bgSlideHome3,
]