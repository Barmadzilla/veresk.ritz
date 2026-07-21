<template>
  <div>
    <TitleMain title="СПА-Курорт на озере в ленинградской области" />
    <ContentTextBlock :data="introText" />
    <TitleSecondary title="Формат проживания" />
    <SliderContainer :data="sliderData" type="occupation" />
    <TitleSecondary title="Вереск предлагает" />
    <ContentTextBlock :data="offerText">
      <ButtonNude label="Подробнее" to="/hotel" />
    </ContentTextBlock>
    <OffersContainer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});

const p = setPoster();
p.value = "/images/posters/hotel.jpg";

const sliderData = sliderCards();
const introText =
  "Откройте для себя загородный спа-курорт «Вереск»: Отдых начинается здесь! Погрузитесь в мир гармонии и спокойствия в загородном отеле, укрытом среди вековых сосен на берегу живописного озера. Этот оазис комфорта и уюта стал идеальным местом для полноценного отдыха и единения с природой всей семьёй всего в 30 минутах езды от Санкт-Петербурга.";

const offerText =
  "Добро пожаловать в чудесный мир Вереск. Здесь всё так же сказочно, как и наши гости. Окунитесь в нетронутую красоту природы, а затем войдите внутрь, чтобы получить впечатления, превосходящие ваши самые смелые ожидания. Здесь вас ждет не просто регистрация в отеле, а встреча как дома. Ознакомьтесь с нашими эксклюзивными предложениями — вы обязательно найдете то, что вам нужно. Ваш номер ждет вас, и много интересного.";

// useHead({
//   bodyAttrs: {
//     class: "gradient",
//   },
// });
// // const options = useState("options");
//
setSeo({
  title: "СПА курорт на озере",
  excerpt:
    "Отдых начинается здесь! Погрузитесь в мир гармонии и спокойствия загородного отеля, укрытом среди вековых сосен на берегу живописного озера. Этот оазис комфорта и уюта стал идеальным местом для полноценного отдыха и единения с природой всей семьёй всего в 30 минутах езды от Санкт-Петербурга.",
});
</script>

<style scoped>
section p {
  font-size: 2rem;
  font-weight: 300;
  padding-bottom: 4rem;
  margin: 0 12rem 0;
  line-height: 1.6;
}
section {
  margin-bottom: 5rem;
}
</style>
