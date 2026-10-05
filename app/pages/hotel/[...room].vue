<template>
  <div>
    <BreadCrumbs :current="room.title" />
    <TitleMain :title="room.title" />
    <ContentParams>
      {{ room.params.s }}м<sup>2</sup> &bull; до {{ room.params.guests }} мест
      &bull; {{ room.params.rooms }} комн.
    </ContentParams>
    <ButtonGroup>
      <Price :value="room.info.price" from curr="руб/ночь" large />
      <ButtonSolid
        label="Забронировать"
        data-tl-booking-open="true"
        :data-tl-room="room.tl.room"
        :data-tl-booking-scenario="room.tl.hotel"
      />
    </ButtonGroup>
    <ContentTextBlock :data="room.info.description" />
    <Modal :open-modal="modal" @close="closeModal">
      <ContentTour v-if="vr" :config="room.vr" />
      <ContentVideo v-if="video" :video="'/video/dachi/dachi'" />
    </Modal>
    <ButtonGroup>
      <ButtonRoomMedia v-if="room?.vr" @click="openVR" type="virtual-tour" />
      <ButtonRoomMedia @click="openVideo" type="video" />
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

const modal = ref(false);
const vr = ref(false);
const video = ref(false);

const closeModal = () => {
  modal.value = false;
  vr.value = false;
  video.value = false;
};
const openVideo = () => {
  modal.value = true;
  video.value = true;
};
const openVR = () => {
  modal.value = true;
  vr.value = true;
};

const poster = setPoster();
poster.value = room.images[0];

definePageMeta({
  parent: [{ title: "Отель", slug: "/hotel" }],
});
</script>
