<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>
      {{ data.params.rooms }} домов &bull; {{ data.params.description }}
    </ContentParams>
    <ButtonGroup>
      <Price :value="data.info.price" from curr="руб/ночь" large />
      <ButtonSolid
        label="Забронировать"
        data-tl-booking-open="true"
        :data-tl-room="data.tl.room"
        :data-tl-booking-scenario="data.tl.hotel"
      />
    </ButtonGroup>
    <ContentTextBlock :data="data.info.description" />
    <Modal :open-modal="modal" @close="closeModal">
      <ContentTour v-if="vr" :config="data.vr" />
      <ContentVideo v-if="video" :video="'/video/dachi/dachi'" />
    </Modal>
    <ButtonGroup>
      <ButtonRoomMedia v-if="data?.vr" @click="openVR" type="virtual-tour" />
      <ButtonRoomMedia @click="openVideo" type="video" />
      <ButtonRoomMedia type="gallery" />
    </ButtonGroup>
    <SliderContainer type="image" cards="1" :data="data.slideShow" />
    <ContentTextBlock
      data="По соседству в эко-парке находится культовый загородный ресторан «Вереск», песчаные пляжи, детские площадки и эко-тропы, петляющие по берегу озера. Между локациями проложены освещенные дорожки. 

Мы не оставляем гостей равнодушными и предоставляем отельный сервис самого высокого качества.
      "
    />
    <TitleSecondary title="Варианты размещения" />
    <ContentSpace />
    <ListOccupationCard
      v-for="(item, i) in occupation"
      :data="item"
      filter="all"
    />
    <ContentSpace />
    <More />
  </div>
</template>

<script setup>
const route = useRoute();
const data = dachiSingleData();

const occupation = dachiData();

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

// const poster = setPoster();
// poster.value = data.images[0];

// definePageMeta({
//   parent: [{ title: "Отель", slug: "/hotel" }],
// });
</script>
