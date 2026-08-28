export const sibiryakovRoomsData = () => {
  return useState("sibiryakovRoomsData", () => [
    {
      title: "Стандарт",
      slug: "standart",
      params: { s: "24", rooms: "1", guests: "2" },
      images: ["/images/occupation/standart-1.jpg"],
      tl: { room: 329453, hotel: 53273 },
      info: {
        price: 10800,
        link: "/hotel/standart",
        bookLink: "/",
        type: "veresk",
        description: `Номер Стандарт — уют для двоих.  
Уютный номер для пары или сольного путешествия. Первый этаж — это про удобство: быстрое заселение, шаг до базовой инфраструктуры отеля (бассейн, ресторан для завтраков) и никакой суеты с лестницами.`,
      },
      slideShow: [
        { src: "/images/occupation/standart/standart-1.jpeg" },
        { src: "/images/occupation/standart/standart-2.jpeg" },
        { src: "/images/occupation/standart/standart-3.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Джуниор сьют с видом на озеро",
      slug: "suit-junior-lake-view",
      params: { s: "28-40", rooms: "1", guests: "3" },
      images: ["/images/occupation/veresk/suit-lake-view/suit-lake-view.jpg"],
      tl: { room: 329454, hotel: 53273 },
      info: {
        price: 13950,
        link: "/hotel/junior-suit-lake-view",
        bookLink: "/",
        type: "veresk",
        description: `Джуниор Сьют с видом на озеро. Просторный номер от 28 м² с гостиной и спальной зонами. Располагается на первом и втором этажах. В каждом номере — балкон с открытым видом на озеро: утренний кофе, тишина и свежий воздух — как отдельный ритуал.`,
      },
      slideShow: [
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-1.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-2.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-3.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-4.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-5.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-6.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-7.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/suit-lake-view-8.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Джуниор Сьют",
      slug: "suit-junior",
      params: { s: "35-45", rooms: "2", guests: "4" },
      images: ["/images/occupation/apart-1.jpg"],
      info: {
        price: 13950,
        link: "/hotel/veresk-apart-with-sauna",
        bookLink: "/",
        type: "veresk",
        description: `Джуниор-сьют. Просторный двухкомнатный номер от 37 м²: отдельная спальня и гостиная — для личного пространства и спокойствия. Номера расположены на 1‑м и 2‑м этажах; в каждом — балкон для утреннего кофе на свежем воздухе и тихих вечеров. Полноценная ванная комната — для комфортных сборов и расслабления.`,
      },
      slideShow: [
        { src: "/images/occupation/standart/standart-1.jpeg" },
        { src: "/images/occupation/standart/standart-2.jpeg" },
        { src: "/images/occupation/standart/standart-3.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Сьют",
      slug: "suit",
      params: { s: "60", rooms: "2", guests: "4" },
      images: ["/images/occupation/apart-1.jpg"],
      info: {
        price: 18000,
        link: "/hotel/veresk-apart-with-sauna",
        bookLink: "/",
        type: "veresk",
        description: `Сьют — двухуровневое пространство для особых моментов.  
Уникальный двухуровневый сьют площадью 78 м² на 2‑м этаже. Нежные пастельные тона и продуманный декор создают романтичную атмосферу. Большие окна наполняют номер естественным светом и усиливают ощущение уединения. Идеально для молодожёнов, годовщин и камерных праздников вдвоём.`,
      },
      slideShow: [
        { src: "/images/occupation/standart/standart-1.jpeg" },
        { src: "/images/occupation/standart/standart-2.jpeg" },
        { src: "/images/occupation/standart/standart-3.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Семейный Сьют",
      slug: "suit-family",
      params: { s: "70-80", rooms: "4", guests: "6" },
      images: ["/images/occupation/apart-1.jpg"],
      info: {
        price: 30400,
        link: "/hotel/veresk-apart-with-sauna",
        bookLink: "/",
        type: "veresk",
        description: `Сьют — двухуровневое пространство для особых моментов.  
Уникальный двухуровневый сьют площадью 78 м² на 2‑м этаже. Нежные пастельные тона и продуманный декор создают романтичную атмосферу. Большие окна наполняют номер естественным светом и усиливают ощущение уединения. Идеально для молодожёнов, годовщин и камерных праздников вдвоём.`,
      },
      slideShow: [
        { src: "/images/occupation/standart/standart-1.jpeg" },
        { src: "/images/occupation/standart/standart-2.jpeg" },
        { src: "/images/occupation/standart/standart-3.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
  ]);
};
