export const terrasaData = () => {
  return useState("terrasaData", () => {
    return {
      title: 'Глемп-Отель "ТЕРРАСЫ"',
      slug: "standart",
      params: {
        rooms: "11",
        description: "2 просторные террасы с обустроенными сафари-лоджами",
      },
      images: ["/images/occupation/veresk/standart/standart-1.jpg"],
      tl: { room: 329453, hotel: 53273 },
      vr: terrasaVR(),
      info: {
        price: 9800,
        link: "/hotel/standart",
        bookLink: "/",
        type: "veresk",
        description: `Новый глэмп-отель «Террасы» открылся в 2024 году на территории эко-парка «Вереск» в рамках национального проекта России «Туризм». Здесь, на берегу лесного озера, всего в часе езды от центра Петербурга расположились просторные террасы с обустроенными всесезонными сафари-лоджиями — панорамными номерами в эстетике природности и комфортных путешествий.

Изюминкой глэмп-отеля «Террасы» стали 2 лоджии на крыше ресторана «Вереск». Уникальная концепция: 4 местное размещение на панорамной террасе 200квм, оборудованной каминной зоной, уличной крытой обеденной зоной, и видовой горячей купелью для настоящего отдыха на все «5 звезд» .`,
      },
      slideShow: [
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-4.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-5.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-6.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-7.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-8.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-9.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-10.jpeg",
        },
        {
          src: "/images/occupation/terrasa/lodge-hill/slides/lodge-hill-11.jpeg",
        },
      ],
    };
  });
};
