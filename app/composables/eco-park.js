export const ecoParkData = () => {
  return useState("ecoParkData", () => {
    return {
      title: "Еко-Парк Вереск",
      poster: "/images/posters/eco-park.jpg",
      subtitle: `Вход в парк бесплатный. Время работы парка — ежедневно с 10:00 до 22:00`,
      content: [
        {
          type: "textBlock",
          text: `Парк расположен всего в часе езды от Петербурга и является частью вековых сосновых лесов Выборгского района. Территория эко-парка занимает более 10га и по праву считается одним из самых удивительных и красивых мест в Ленинградской области. `,
        },
        {
          type: "slideShow",
          slideShow: [
            { src: "/images/eco-park/slides/eco-park-19.jpg" },
            { src: "/images/eco-park/slides/eco-park-20.jpg" },
            { src: "/images/eco-park/slides/eco-park-1.jpg" },
            { src: "/images/eco-park/slides/eco-park-7.jpg" },
            { src: "/images/eco-park/slides/eco-park-8.jpg" },
            { src: "/images/eco-park/slides/eco-park-9.jpg" },
            { src: "/images/eco-park/slides/eco-park-10.jpg" },
            { src: "/images/eco-park/slides/eco-park-11.jpg" },
            { src: "/images/eco-park/slides/eco-park-12.jpg" },
            { src: "/images/eco-park/slides/eco-park-13.jpg" },
            { src: "/images/eco-park/slides/eco-park-14.jpg" },
            { src: "/images/eco-park/slides/eco-park-15.jpg" },
            { src: "/images/eco-park/slides/eco-park-16.jpg" },
            { src: "/images/eco-park/slides/eco-park-17.jpg" },
            { src: "/images/eco-park/slides/eco-park-18.jpg" },
            { src: "/images/eco-park/slides/eco-park-22.jpg" },
            { src: "/images/eco-park/slides/eco-park-23.jpg" },
            { src: "/images/eco-park/slides/eco-park-24.jpg" },
            { src: "/images/eco-park/slides/eco-park-2.jpg" },
            { src: "/images/eco-park/slides/eco-park-3.jpg" },
            { src: "/images/eco-park/slides/eco-park-4.jpg" },
            { src: "/images/eco-park/slides/eco-park-5.jpg" },
            { src: "/images/eco-park/slides/eco-park-6.jpg" },
            { src: "/images/eco-park/slides/eco-park-21.jpg" },
          ],
        },
        {
          type: "textBlock",
          text: `С момента открытия парка мы взяли на себя ответственность за чистоту и сохранность окружающей нас природы. Мы заботимся о том, чтобы наши леса оставались живыми и здоровыми, регулярно проводим профилактику и уборку. В 2018 мы запустили специальную программу #ЗЕЛЕНАЯЛИНИЯ с целью приобщить всех гостей парка к осознанному отдыху на природе. На территории парка установлены мотивационные таблоиды рассказывающие гостям о важности соблюдение чистоты в местах отдыха и диспенсеры с пакетами для мусора, чтобы каждый гость парка не раскидывал мусор а самостоятельно доносил его до центрального сбора мусора у выхода из парка.

Эко-парк «Вереск» — идеальное место для семейного отдыха.

Мы постоянно развиваем парковую инфраструктуру, чтобы сделать посещение парка всегда интересным и запоминающимся в независимости от времени года.

Здесь вы найдете множество вариантов для отдыха и активности:`,
        },
        {
          type: "offers",
          offers: [
            {
              title: "Рестораны",
              src: "/icon/banquet.png",
              link: "/restorants",
            },
            {
              title: "Пиццерия",
              src: "/icon/fastfood.png",
              link: "https://pizza.veresk.club",
            },
            {
              title: "Спорт",
              src: "/icon/sport.png",
              link: "https://sport.veresk.club",
            },
            { title: "СПА", src: "/icon/spa.png", link: "/spa-resort" },
            {
              title: "Детям",
              src: "/icon/kids.png",
              link: "/restorants",
            },
            {
              title: "Вейк Парк",
              src: "/icon/wake.png",
              link: "https://wake.veresk.club",
            },
            {
              title: "Размещение",
              src: "/icon/hotel.png",
              link: "/hotel",
            },
          ],
        },
        { type: "space" },
        {
          type: "textAndPic",
          title: "Часовная Иннокентия Иркутского",
          text: `На территории эко-парка расположена действующая часовня Иннокентия Иркутского — удивительный образец деревянного церковного зодчества. Построена энтузиастами-профессилналами русского деревянного зодчества и освещена в 2012 году `,
          images: ["/images/chasovna/chasovna-innokentia-irkutskogo.jpg"],
          buttons: [{ label: "Подробнее", to: "/" }],
        },
        { type: "space" },
        {
          type: "textBlock",
          text: `Мы рады приветствовать всех гостей эко-парка «Вереск» и просим соблюдать чистоту, воздержаться от разведения костров и не оставлять в лесу мусор.`,
        },
      ],
    };
  });
};
