export const sliderCards = () => {
  return useState("sliderCards", () => [
    {
      title: "Вереск отель",
      description: "Номера и апартаменты в формате SPA",
      src: "/images/veresk_card.jpg",
      price: 12000,
      link: "/",
    },
    {
      title: "Дачи",
      description: "Дома у озера с сауной и  террасой",
      src: "/images/dachi_card.jpg",
      price: 19000,
      link: "/",
    },
    {
      title: "Террасы",
      description: "Всесезонные сафари‑лоджии в лесу",
      src: "/images/terrasa_card.jpg",
      price: 9000,
      link: "/",
    },
    {
      title: "Террасы",
      description: "Всесезонные сафари‑лоджии в лесу",
      src: "/images/terrasa_card.jpg",
      price: 9000,
      link: "/",
    },
  ]);
};
