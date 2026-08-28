<template>
  <span :class="{ active: type == current }">{{ name[type] }} </span>
</template>

<script setup>
const props = defineProps(["type", "current"]);
const name = {
  all: "Все",
  occupation: "Проживание",
  restorant: "Рестораны",
  pool: "Бассейн",
  "for-kids": "Для детей",
  spa: "СПА",
  gym: "Тренажерный зал",
  veresk: "Номер",
  dachi: "Коттедж",
  aparts: "Апартаменты",
  terrasa: "Глэмпинг",
};
const tag = name[props.type];
</script>

<style scoped>
span {
  color: #828282;
  cursor: pointer;
}
span.active {
  color: var(--color-primary);
}
span:not(span:last-child)::after {
  content: "/";
  margin: 0 0.7rem;
  opacity: 0.5;
}
</style>
