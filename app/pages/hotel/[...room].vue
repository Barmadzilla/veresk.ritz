<template>
  <div>
    <BreadCrumbs :current="room.title" />
    <TitleMain :title="room.title" />
    <p class="params">
      {{ room.params.s }}м<sup>2</sup> &bull; до {{ room.params.guests }} мест
      &bull; {{ room.params.rooms }} комн.
    </p>
    <ButtonGroup>
      <Price :value="room.info.price" from curr="руб/ночь" large />
      <ButtonSolid label="Забронировать" to="/" />
    </ButtonGroup>
    <ContentTextBlock :data="room.info.description" />
    <ButtonGroup>
      <ButtonRoomMedia type="virtual-tour" />
      <ButtonRoomMedia type="video" />
      <ButtonRoomMedia type="gallery" />
    </ButtonGroup>
    <SliderContainer type="image" cards="1" :data="room.slideShow" />
    <ContentTextBlock
      data="Эти особые детали, присущие отелю Вереск, создают ощущение личного общения. Все это в совокупности создает неповторимое чувство романтического блаженства и расслабления, словно идеально сформированная маленькая жемчужина."
    />
    <ContentRoomFeatures :data="room.features" />
    <More />
    <ContentRoomAdditional />
  </div>
</template>

<script setup>
const route = useRoute();
const data = occupationData();
const room = data.value.find((item) => item.slug == route.params.room[0]);

definePageMeta({
  parent: [{ title: "Отель", slug: "/hotel" }],
});
</script>

<style scoped>
.params {
  font-weight: 500;
  margin-top: -1.4rem;
  margin-bottom: 5rem;
  font-size: 1.8rem;
}
sup {
  font-size: 0.8rem;
}
</style>
