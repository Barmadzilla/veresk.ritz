export const occupationData = () => {
  return useState("occupationData", () => [
    {
      title: "Стандарт",
      slug: "standart",
      params: { s: "24", rooms: "1", guests: "2" },
      images: ["/images/occupation/standart-1.jpg"],
      info: {
        price: 12000,
        link: "/hotel/standart",
        bookLink: "/",
        type: "vereskHotel",
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

      slug: "junior-suit-lake-view",
      params: { s: "28-40", rooms: "1", guests: "4" },
      images: ["/images/occupation/apart-1.jpg"],
      info: {
        price: 14500,
        link: "/hotel/junior-suit-lake-view",
        bookLink: "/",
        type: "vereskHotel",
        description: `Просторный номер от 28 м² с гостиной и спальной зонами. Располагается на первом и втором этажах. В каждом номере — балкон с открытым видом на озеро: утренний кофе, тишина и свежий воздух — как отдельный ритуал. балкон в каждом номере, прямой вид на озеро полноценная ванная комната`,
      },
      slideShow: [
        { src: "/images/occupation/standart/standart-1.jpeg" },
        { src: "/images/occupation/standart/standart-2.jpeg" },
        { src: "/images/occupation/standart/standart-3.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Вереск Апарт с сауной",
      slug: "veresk-apart-with-sauna",
      params: { s: "50", rooms: "2", guests: "4" },
      images: ["/images/occupation/apart-1.jpg"],
      info: {
        price: 14500,
        link: "/hotel/veresk-apart-with-sauna",
        bookLink: "/",
        type: "vereskHotel",
        description: `**Веререск Апарт** с сауной — приватный семейный формат 9 просторных двухуровневых апартаментов в отдельных коттеджах с индивидуальным входом — максимум уединения и свободы.  
На первом уровне — кухня‑гостиная для совместных обедов, на втором — спальня и комната отдыха. В каждом апарте — сауна. На улице — зона барбекю с мангалом и террасной мебелью.`,
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
