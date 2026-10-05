export const contactsData = () => {
  return useState("contactsData", () => {
    return {
      title: "Контактная информация",
      poster: "/images/posters/veresk-for-kids.jpg",
      // subtitle: `Вход в парк бесплатный. Время работы парка — ежедневно с 10:00 до 22:00`,
      content: [
        {
          type: "textBlock",
          text: `Ленинградская область, Выборгский район, пос. Ильичево, Линтульская аллея 3В  

Отель: +7 (812) 760 51-70   
**info@veresk.club**  

Ресторан: +7 (812) 407 33-01   
Банкетный менеджер: +7 (921) 569 35-36   
Бассейн и СПА: +7 (812) 760 51-70

[построить маршрут](yandexnavi://build_route_on_map?lat_to=60.249027&lon_to=29.777052)
`,
        },
        {
          type: "mapField",
        },
      ],
    };
  });
};
