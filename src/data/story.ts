export interface MediaItem {
  src: string;
  alt?: string;
  type?: 'image' | 'video';
}

export interface Trip {
  id: string;
  name: string;
  date: string;
  description: string;
  photos: MediaItem[];
}

export interface FirstTime {
  id: string;
  title: string;
  date: string;
  memory: string;
  photo: MediaItem;
}

export interface ThingILove {
  id: string;
  title: string;
  description: string;
}

export interface FunnyFact {
  id: string;
  stat: string;
  description: string;
}

export const storyData = {
  settings: {
    startDate: "2023-09-24T00:00:00",
    musicFile: "/music/song.mp3",
  },
  
  hero: {
    date: "24.09.2026",
    title: "Hoy es tu día.",
    subtitle: "Y preparé algo para vos.",
    buttonText: "ABRIR MI REGALO",
    primaryImage: {
      src: "/media/IMG_20240720_140358071_HDR.jpg",
      alt: "Cumpleañera",
      type: "image"
    } as MediaItem,
  },

  introTransition: {
    line1: "Feliz cumpleaños, mi amor.",
    line2: "Pero antes de llegar al final...",
    line3: "Quiero mostrarte algunas cosas."
  },

  beginning: {
    title: "Antes de seguir, hay algo que me gusta recordar.",
    paragraphs: [
      "Yo estaba con mis amigos cuando vi que vos y tu amiga miraban hacia nuestro grupo.",
      "Ese día me animé.",
      "Fui a hablarte.",
      "Nos fuimos afuera.",
      "Nos comimos la boca.",
      "Y después me dijiste:",
      '"más despacio"',
      "Y recién ahí me preguntaste mi nombre."
    ],
    outro: "Y desde ese día pasaron muchísimas cosas.",
    photos: [
      { src: "/media/IMG_20230916_183453000.jpg", alt: "Recuerdo 1", type: "image" },
      { src: "/media/IMG_20231014_182546797.jpg", alt: "Recuerdo 2", type: "image" },
      { src: "/media/IMG_20231021_182616564.jpg", alt: "Recuerdo 3", type: "image" },
      { src: "/media/IMG_20231119_165948143.jpg", alt: "Recuerdo 4", type: "image" }
    ] as MediaItem[]
  },

  firstTimes: {
    title: "Algunas de mis partes favoritas de nosotros.",
    subtitle: "Y en el camino fuimos juntando un montón de momentos que hoy quería regalarte de otra forma.",
    cards: [
      {
        id: "conocimos",
        title: "Nuestros primeros momentos",
        date: "Fines de 2023",
        memory: "Cuando todo recién empezaba.",
        photo: { src: "/media/IMG_20231202_194058624.jpg", type: "image" }
      },
      {
        id: "salidas",
        title: "Las primeras salidas",
        date: "Fines de 2023",
        memory: "Un montón de nervios, pero mucha más emoción.",
        photo: { src: "/media/IMG_20231228_152639678.jpg", type: "image" }
      },
      {
        id: "casas",
        title: "Veranos y compartir tiempo",
        date: "Verano 2024",
        memory: "Momentos en tu casa y en la mía, conociéndonos cada vez más.",
        photo: { src: "/media/IMG_20240103_193614348.jpg", type: "image" }
      },
      {
        id: "cotidianos",
        title: "Tardes juntos",
        date: "2024",
        memory: "Las mates, las charlas y todo lo que hicimos nuestro.",
        photo: { src: "/media/IMG_20240205_225741081.jpg", type: "image" }
      },
      {
        id: "momentos",
        title: "Nuestras primeras anécdotas",
        date: "Mediados 2024",
        memory: "Las pequeñas historias que siempre nos van a hacer reír.",
        photo: { src: "/media/IMG_20240525_191110579.jpg", type: "image" }
      }
    ] as FirstTime[]
  },

  timePassing: {
    title: "Mirá lo que pasa con el tiempo.",
    outro: "Y lo que nos queda por delante.",
    years: [
      {
        id: "2023",
        name: "El principio",
        date: "2023",
        description: "Cuando recién empezábamos a descubrir todo lo que íbamos a ser.",
        photos: [
          { src: "/media/IMG_20231014_182546797.jpg", type: "image" },
          { src: "/media/IMG_20231119_165948143.jpg", type: "image" }
        ]
      },
      {
        id: "2024",
        name: "Conociéndonos más",
        date: "2024",
        description: "Viajes, tardes compartidas y muchísimos momentos nuestros.",
        photos: [
          { src: "/media/IMG_20240720_142722033_HDR.jpg", type: "image" },
          { src: "/media/IMG_0003.MP4", type: "video" }
        ]
      },
      {
        id: "2025",
        name: "Creciendo juntos",
        date: "2025",
        description: "Cada vez más unidos, compartiendo familias y armando nuestro camino.",
        photos: [
          { src: "/media/IMG_5589.HEIC", type: "image" },
          { src: "/media/IMG_5589.MP4", type: "video" }
        ]
      },
      {
        id: "2026",
        name: "Hoy",
        date: "2026",
        description: "Y hoy, mientras festejamos tu día, miro todo lo que vivimos y pienso en todo lo que todavía nos queda.",
        photos: [
          { src: "/media/IMG_6001.HEIC", type: "image" },
          { src: "/media/IMG_6001.MP4", type: "video" }
        ]
      }
    ] as Trip[]
  },

  thingsILove: {
    title: "Hoy quiero recordarte algunas de las cosas que amo de vos.",
    items: [
      {
        id: "forma-de-ser",
        title: "Tu forma de ser.",
        description: "Esa mezcla perfecta entre ternura, locura y todo lo que te hace única."
      },
      {
        id: "risa",
        title: "Tu risa.",
        description: "La forma en la que te reís de cosas sin sentido y contagiás a todos."
      },
      {
        id: "como-me-haces-sentir",
        title: "Cómo me hacés sentir.",
        description: "Me das una paz y una felicidad que es imposible de explicar."
      },
      {
        id: "pequenos-detalles",
        title: "Los pequeños detalles.",
        description: "Todas las atenciones y el cariño que le ponés a las cosas que te importan."
      },
      {
        id: "nuestro-mundo",
        title: "Las cosas que solamente nosotros entendemos.",
        description: "Nuestros chistes, nuestras miradas, nuestro propio lenguaje."
      }
    ] as ThingILove[]
  },

  funnyFacts: {
    title: "Datos científicamente comprobados sobre la cumpleañera.",
    facts: [
      { id: "1", stat: "Peligrosamente alto", description: "Nivel de ternura" },
      { id: "2", stat: "97%", description: "Probabilidad de que diga 'no pasa nada' y sí pase algo" },
      { id: "3", stat: "Incontables", description: "Veces que me hizo reír" },
      { id: "4", stat: "Fuera de escala", description: "Paciencia conmigo" },
      { id: "5", stat: "Preocupante", description: "Capacidad para hacerme cambiar de opinión" },
      { id: "6", stat: "Sin unidad de medida", description: "Nivel de belleza" }
    ] as FunnyFact[]
  },

  photoAlbum: {
    title: "Algunos de mis recuerdos favoritos.",
    photos: [
      { src: "/media/IMG_0098.HEIC", type: "image" },
      { src: "/media/IMG_0098.MP4", type: "video" },
      { src: "/media/IMG_0295.HEIC", type: "image" },
      { src: "/media/IMG_0295.MP4", type: "video" },
      { src: "/media/IMG_20240324_183511213.jpg", type: "image" },
      { src: "/media/IMG_20240402_174623224.jpg", type: "image" },
      { src: "/media/IMG_0582.HEIC", type: "image" },
      { src: "/media/IMG_0582.MP4", type: "video" },
      { src: "/media/IMG_20240413_213652433.jpg", type: "image" },
      { src: "/media/IMG_0864.HEIC", type: "image" },
      { src: "/media/IMG_0986.HEIC", type: "image" },
      { src: "/media/IMG_0986.MP4", type: "video" },
      { src: "/media/IMG_20240428_100752427_HDR.jpg", type: "image" },
      { src: "/media/IMG_0998.HEIC", type: "image" },
      { src: "/media/IMG_0998.MP4", type: "video" },
      { src: "/media/IMG_20240518_205214990.jpg", type: "image" },
      { src: "/media/IMG_1259.HEIC", type: "image" },
      { src: "/media/IMG_2427.HEIC", type: "image" },
      { src: "/media/IMG_2427.MP4", type: "video" },
      { src: "/media/IMG_1729.HEIC", type: "image" },
      { src: "/media/IMG_1729.MP4", type: "video" },
      { src: "/media/IMG_7987.HEIC", type: "image" },
      { src: "/media/IMG_7987.MP4", type: "video" },
      { src: "/media/IMG_3965.HEIC", type: "image" },
      { src: "/media/IMG_3965.MP4", type: "video" }
    ] as MediaItem[]
  },

  letter: {
    preTitle: "Y ahora sí...",
    postTitle: "Algo que quería decirte hoy.",
    paragraphs: [
      "Mi amor,",
      "Hoy es un día especial porque celebramos un año más de tu vida. Quería prepararte algo distinto, un espacio nuestro donde recordarte lo increíble que sos.",
      "Admiro tu fuerza, tu alegría y esa forma tan tuya de ver la vida. Me encanta verte crecer, cumplir años y saber que puedo compartir todo eso al lado tuyo.",
      "Estos años juntos me demostraron que sos mi lugar favorito. Gracias por tu paciencia, tus abrazos y por hacerme tan feliz. Hoy todo se trata de vos.",
      "Espero que este año te traiga todo lo que soñás."
    ],
    signature: "Te amo."
  },

  surprise: {
    preTitle: "Y todavía me falta darte una cosa.",
    buttonText: "ABRIR",
    postTitle: "",
    type: "video", 
    content: {
      src: "/media/IMG_1892.MP4",
      text: ""
    }
  },

  outro: {
    date: "24 de septiembre de 2026",
    birthday: "Feliz cumpleaños, mi amor.",
    message: "",
    finalWords: "",
    image: {
      src: "/media/IMG_7776.JPG",
      type: "image"
    } as MediaItem
  }
};
