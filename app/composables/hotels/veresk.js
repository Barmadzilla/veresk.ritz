export const vereskHotelData = () => {
  return useState("vereskHotelData", () => {
    return {
      title: "СПА Отель Вереск",
      slug: "standart",
      params: {
        rooms: "24",
        description: "Открытый бассейн с подогревом",
      },
      images: ["/images/occupation/veresk/standart/standart-1.jpg"],
      tl: { room: 329453, hotel: 53273 },
      vr: vereskStandartVR(),
      info: {
        price: 10800,
        link: "/hotel/standart",
        bookLink: "/",
        type: "veresk",
        description: `Представьте место, где утро начинается с тишины леса, свежего воздуха и вида на спокойную гладь озера. Где можно раствориться в уюте, насладиться моментом и почувствовать, что здесь о вас уже позаботились.

**Вереск Отель** – это загородный спа-отель, созданный для тех, кто ценит комфорт, приватность и возможность быть ближе к природе. Мы предлагаем номера, просторные апартаменты и уникальный Хюгге Дом, чтобы каждый гость нашел идеальное пространство для отдыха.`,
      },
      slideShow: [
        { src: "/images/occupation/veresk/standart/slides/standart-1.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-2.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-3.jpeg" },
        { src: "/images/occupation/veresk/standart/slides/standart-4.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    };
  });
};
