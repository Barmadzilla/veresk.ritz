export const restorantsData = () => {
  return useState("restorantsData", () => [
    {
      title: 'Ресторан на озере "Вереск" ',
      slug: "veresk",
      images: ["/images/restorants/veresk.jpg"],
      services: ["breakfast", "lunch", "dinner"],
      description:
        "Атмосферу ресторана и непреодолимое желание возвращаться к нам почаще создает фирменный дружелюбный сервис от каждого члена нашей команды: каждую секунду мы искренне заботимся о том, чтоб ваш визит в «Вереск» прошел незабываемо!",
      working: { from: { h: 10, m: 0 }, to: { h: 22, m: 0 } },
      link: "/restorants/veresk",
      book: true,
    },
    {
      title: 'Ресторан "Примавера"',
      slug: "primavera",
      images: ["/images/restorants/primavera.jpg"],
      services: ["breakfast"],
      description:
        "Атмосферу ресторана и непреодолимое желание возвращаться к нам почаще создает фирменный дружелюбный сервис от каждого члена нашей команды: каждую секунду мы искренне заботимся о том, чтоб ваш визит в «Вереск» прошел незабываемо!",
      working: { from: { h: 8, m: 0 }, to: { h: 11, m: 0 } },
      link: "/restorants/primavera",
      book: false,
    },
    {
      title: 'Пиццерия "Лавка"',
      slug: "pizzeria",
      images: ["/images/restorants/pizzeria.jpg"],
      services: ["fastfood"],
      description:
        "Здесь всего за 15 минут приготовим овальную римскую пиццу и напитки и подадим их на теплой и уютной террасе с потрясающим видом. Обедать на свежем воздухе на берегу тихого лесного озера, согреваясь чашкой ароматного глинтвейна — вот рецепт идеального выходного!",
      working: { from: { h: 10, m: 0 }, to: { h: 22, m: 0 } },
      link: "https://pizza.veresk.club",
      book: false,
    },
  ]);
};
