export const dachiData = () => {
  return useState("dachiData", () => [
    {
      title: "Дачи первая линия",
      slug: "dachi-first-line",
      params: { s: "54", rooms: "2", guests: "4" },
      images: ["/images/occupation/dachi/first-line/dachi-first-line.jpg"],
      tl: { room: 329447, hotel: 53273 },
      vr: dachiVR(),
      info: {
        price: 20000,
        link: "/hotel/dachi-first-line",
        bookLink: "/",
        type: "dachi",
        description: `Дачи — панорамные дома у озера.  
Три современных панорамных дома на первой береговой линии живописного озера. Продуманное пространство, уединение и максимум комфорта для спокойного отдыха на природе.`,
      },
      slideShow: [
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-hall-2.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-hall-1.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-tv.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-bed.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-terrasa.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-bath.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-sauna.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-1.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-2.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-3.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Дачи 2-3 линия",
      slug: "dachi-second-line",
      params: { s: "54", rooms: "2", guests: "4" },
      images: ["/images/occupation/dachi/second-line/dachi-second-line.jpg"],
      tl: { room: 329448, hotel: 53273 },
      vr: dachiVR(),
      info: {
        price: 14400,
        link: "/hotel/dachi-second-line",
        bookLink: "/",
        type: "dachi",
        description: `Дачи — панорамные дома у озера.
Десять современных панорамных домов на 2-ой береговой линии живописного озера. Продуманное пространство, уединение и максимум комфорта для спокойного отдыха на природе.`,
      },
      slideShow: [
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-8.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-13.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-15.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-16.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-1.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-14.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-10.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-6.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-3.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-9.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
  ]);
};
