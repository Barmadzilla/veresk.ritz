export const dachiSingleData = () => {
  return useState("dachiSingleData", () => {
    return {
      title: "Гостевые Дачи",
      slug: "standart",
      params: {
        rooms: "14",
        description: "Просторные дома с панорамным видом на озеро",
      },
      images: ["/images/occupation/veresk/standart/standart-1.jpg"],
      tl: { room: 329453, hotel: 53273 },
      vr: dachiVR(),
      info: {
        price: 9800,
        link: "/hotel/standart",
        bookLink: "/",
        type: "veresk",
        description: `Приезжайте на «Дачу»! В эко-парке «Вереск» на берегу Большого Симагинского озера расположились несколько просторных гостевых домов с панорамным видом. Живописное лесное озеро, вековые сосны и непосредственная близость к городу гарантируют вам незабываемый отдых — на природе, но с фирменным комфортом и искренним гостеприимством. 

«Дачи» — это 14 панорамных домов, обустроенных с максимальным комфортом и заботой к нашим гостям. 

`,
      },
      slideShow: [
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-1.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-2.jpeg",
        },
        {
          src: "/images/occupation/dachi/first-line/slides/dachi-first-line-outside-3.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-2.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-3.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-4.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-5.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-6.jpeg",
        },
        {
          src: "/images/occupation/dachi/second-line/slides/dachi-second-line-7.jpeg",
        },
      ],
    };
  });
};
