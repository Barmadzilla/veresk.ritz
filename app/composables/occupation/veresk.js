export const vereskRoomsData = () => {
  return useState("vereskRoomsData", () => [
    {
      title: "Стандарт",
      slug: "standart",
      params: { s: "24", rooms: "1", guests: "2" },
      images: ["/images/occupation/veresk/standart/standart-1.jpg"],
      tl: { room: 329453, hotel: 53273 },
      vr: vereskStandartVR(),
      info: {
        price: 10800,
        link: "/hotel/standart",
        bookLink: "/",
        type: "veresk",
        description: `Номер Стандарт — уют для двоих.  
Уютный номер для пары или сольного путешествия. Первый этаж — это про удобство: быстрое заселение, шаг до базовой инфраструктуры отеля (бассейн, ресторан для завтраков) и никакой суеты с лестницами.`,
      },
      slideShow: [
        { src: "/images/occupation/veresk/standart/slides/standart-1.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-2.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-3.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-4.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Джуниор сьют с видом на озеро",
      slug: "junior-suit-lake-view",
      params: { s: "28-40", rooms: "1", guests: "3" },
      images: ["/images/occupation/veresk/suit-lake-view/suit-lake-view.jpg"],
      tl: { room: 329454, hotel: 53273 },
      vr: vereskSuitVR(),
      info: {
        price: 13950,
        link: "/hotel/junior-suit-lake-view",
        bookLink: "/",
        type: "veresk",
        description: `Джуниор Сьют с видом на озеро.  
Просторный номер от 28 м² с гостиной и спальной зонами. Располагается на первом и втором этажах. В каждом номере — балкон с открытым видом на озеро: утренний кофе, тишина и свежий воздух — как отдельный ритуал.`,
      },
      slideShow: [
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-1.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-2.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-3.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-4.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-5.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-6.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-7.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-lake-view/slides/suit-lake-view-8.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Джуниор Сьют",
      slug: "junior-suit",
      params: { s: "35-45", rooms: "2", guests: "4" },
      images: ["/images/occupation/veresk/suit-junior/suit-junior.jpg"],
      tl: { room: 329455, hotel: 53273 },
      vr: vereskSuitJuniorVR(),
      info: {
        price: 13950,
        link: "/hotel/junior-suit",
        bookLink: "/",
        type: "veresk",
        description: `Джуниор-сьют. Просторный двухкомнатный номер от 37 м²: отдельная спальня и гостиная — для личного пространства и спокойствия. Номера расположены на 1‑м и 2‑м этажах; в каждом — балкон для утреннего кофе на свежем воздухе и тихих вечеров. Полноценная ванная комната — для комфортных сборов и расслабления.`,
      },
      slideShow: [
        {
          src: "/images/occupation/veresk/suit-junior/slides/suit-junior-1.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-junior/slides/suit-junior-2.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-junior/slides/suit-junior-3.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-junior/slides/suit-junior-4.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-junior/slides/suit-junior-5.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Сьют",
      slug: "suit",
      params: { s: "60", rooms: "2", guests: "4" },
      images: ["/images/occupation/veresk/suit/suit.jpeg"],
      tl: { room: 333762, hotel: 53273 },
      info: {
        price: 18000,
        link: "/hotel/suit",
        bookLink: "/",
        type: "veresk",
        description: `Сьют — двухуровневое пространство для особых моментов.  
Уникальный двухуровневый сьют площадью 78 м² на 2‑м этаже. Нежные пастельные тона и продуманный декор создают романтичную атмосферу. Большие окна наполняют номер естественным светом и усиливают ощущение уединения. Идеально для молодожёнов, годовщин и камерных праздников вдвоём.`,
      },
      slideShow: [
        { src: "/images/occupation/veresk/suit/suit-1.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-2.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-3.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-4.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-5.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-6.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-7.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-8.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-9.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-10.jpeg" },
        { src: "/images/occupation/veresk/suit/suit-11.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Семейный Сьют",
      slug: "family-suit",
      params: { s: "70-80", rooms: "4", guests: "6" },
      images: ["/images/occupation/veresk/suit-family/suit-family.jpeg"],
      tl: { room: 358210, hotel: 53273 },
      info: {
        price: 30400,
        link: "/hotel/family-suit",
        bookLink: "/",
        type: "veresk",
        description: `Семейный сьют — гибкое пространство для большой семьи   
Уют, комфорт и свобода выбора формата отдыха. Семейный сьют — это два полноценных номера, объединённых собственным холлом и соединяющей дверью (коннект). Проводите вечера вместе, а когда нужна приватность — трансформируйте сьют в два автономных номера. В зависимости от расположения доступны виды на лес или озеро.`,
      },
      slideShow: [
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-8.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-2.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-1.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-4.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-5.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-6.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-7.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-3.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-9.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-10.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-11.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-12.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-13.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-14.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-15.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-16.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-17.jpeg",
        },
        {
          src: "/images/occupation/veresk/suit-family/slides/suit-family-18.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
  ]);
};
