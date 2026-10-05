export const apartsData = () => {
  return useState("apartsData", () => [
    {
      title: "Вереск Апарт с сауной",
      slug: "apart-sauna",
      params: { s: "50", rooms: "2", guests: "4" },
      images: ["/images/occupation/aparts/apart-sauna/apart-sauna.jpg"],
      tl: { room: 329456, hotel: 53273 },
      vr: apartsVR(),
      info: {
        price: 15300,
        link: "/hotel/apart-sauna",
        bookLink: "/",
        type: "aparts",
        description: `Верескапарт с сауной — приватный семейный формат.  
Девять просторных двухуровневых апартаментов в отдельных коттеджах с индивидуальным входом — максимум уединения и свободы. На первом уровне — кухня‑гостиная для совместных обедов, на втором — спальня и комната отдыха. В каждом апарте — сауна. На улице — зона барбекю с мангалом и террасной мебелью.`,
      },
      slideShow: [
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-1.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-2.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-3.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-4.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-5.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-6.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-7.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-8.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-9.jpeg",
        },
        {
          src: "/images/occupation/aparts/apart-sauna/slides/apart-sauna-10.jpeg",
        },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Вереск Апарт без сауны",
      slug: "apart",
      params: { s: "50", rooms: "2", guests: "4" },
      images: ["/images/occupation/aparts/apart/apart.jpg"],
      tl: { room: 329457, hotel: 53273 },
      vr: apartsVR(),
      info: {
        price: 14400,
        link: "/hotel/apart",
        bookLink: "/",
        type: "aparts",
        description: `Верескапарт — приватный семейный формат.  
Три просторных двухуровневых апартаментов в отдельных коттеджах с индивидуальным входом — максимум уединения и свободы. На первом уровне — кухня‑гостиная для совместных обедов, на втором — спальня и комната отдыха. На улице — зона барбекю с мангалом и террасной мебелью.`,
      },
      slideShow: [
        { src: "/images/occupation/aparts/apart/slides/apart-1.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-2.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-3.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-4.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-5.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-6.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-7.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-8.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-9.jpeg" },
        { src: "/images/occupation/aparts/apart/slides/apart-10.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
    {
      title: "Хюгге Дом",
      slug: "hygge",
      params: { s: "64", rooms: "2", guests: "4" },
      images: ["/images/occupation/aparts/hygge/hygge.jpg"],
      tl: { room: 333763, hotel: 53273 },
      vr: hyggeVR(),
      info: {
        price: 25500,
        link: "/hotel/hygge",
        bookLink: "/",
        type: "dachi",
        description: `Хюгге Дом — скандинавский уют с террасой у озера.  
Уединённый коттедж в современном скандинавском стиле с просторной террасой и видами на озеро. Идеален для спокойного отдыха вдвоём или камерного семейного уик‑энда.`,
      },
      slideShow: [
        { src: "/images/occupation/aparts/hygge/slides/hygge-1.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-2.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-3.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-4.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-5.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-6.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-7.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-8.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-9.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-10.jpeg" },
        { src: "/images/occupation/aparts/hygge/slides/hygge-1.jpeg" },
      ],
      features: ["wifi", "air-conditioner", "vault", "kingsize-bed"],
    },
  ]);
};
