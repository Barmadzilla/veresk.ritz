<template>
  <div class="map">
    <ClientOnly>
      <YandexMap :settings="mapSettings">
        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />
        <!--<YandexMapDefaultMarker
        v-show="false"
        :settings="marker"
      />-->

        <YandexMapControls v-if="false" :settings="{ position: 'right' }">
          <YandexMapZoomControl />
          <YandexMapGeolocationControl />
        </YandexMapControls>
        <YandexMapMarker
          v-for="(marker, i) in mapMarkers"
          :key="i"
          :settings="marker.settings"
        >
          <MapCustomMarker :src="marker.src" :title="marker.name" />
        </YandexMapMarker>
      </YandexMap>
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  YandexMapEntity,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapGeolocationControl,
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapMarker,
} from "vue-yandex-maps";

const mapMarkers = [
  {
    name: "ВерескОтель",
    src: "veresk-hotel.jpg",
    settings: {
      coordinates: [29.777202, 60.249091],
      draggable: false,
      mapFollowsOnDrag: false,
    },
  },
  {
    name: "Ресторан Вереск",
    src: "veresk-restoran.jpg",
    settings: {
      coordinates: [29.782889, 60.248153],
      draggable: false,
      mapFollowsOnDrag: false,
    },
  },
  {
    name: 'Банкетный зал "Линтулла"',
    src: "lintulla.jpg",
    settings: {
      coordinates: [29.784425, 60.250484],
      draggable: false,
      mapFollowsOnDrag: false,
    },
  },
  {
    name: 'Шатер "Вереск"',
    src: "tent.jpg",
    settings: {
      coordinates: [29.783472, 60.249537],
      draggable: false,
      mapFollowsOnDrag: false,
    },
  },
];
const mapSettings = {
  location: {
    // Координаты центра карты
    center: [29.781813, 60.249112],

    // Уровень масштабирования
    zoom: 17,
    showScaleInCopyrights: true,
  },
};
</script>

<style scoped>
.map {
  height: 55rem;
  max-height: 60vh;
  /* clip-path: polygon(0% 0%,100% 0%,100% 100%,100% 0%) */
  overflow: hidden;
  clip-path: inset(0 0 0 0 round var(--radius));
  position: relative;
  border: 1rem solid var(--color-blue);
}
@media (max-width: 480px) {
  .map {
    height: 80vh;
    width: 100%;
    max-height: unset;
  }
}
</style>
