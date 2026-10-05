<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>
      {{ data.params.rooms }} лоджей &bull; {{ data.params.description }}
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
      :data="`Но самое главное — это террасы: у каждого из лоджей есть небольшая закрытая зона для отдыха и релакса и общая просторная площадка с панорамным видом на тихое озеро и сосновый лес. и конечно же банные купели в окружении вековых сосен. Здесь чувствуешь себя наедине с природой, но в центре событий — совсем рядом находится культовый загородный ресторан, песчаный пляж, детские площадки и эко-тропы.

Высокие стандарты сервиса, безопасность, развитая инфраструктура парка и непосредственная близость к природе делают глэмп-отель настоящим местом притяжения туристов в любой сезон.`"
    />
    <TitleSecondary title="Номерной фонд" />
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
const data = terrasaData();

const occupation = terrasaRoomsData();

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
