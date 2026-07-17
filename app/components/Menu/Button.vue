<template>
  <div class="btn">
    <img v-if="icon == 'burger'" src="~/assets/images/icons/burger.svg" />
    <img v-if="icon == 'search'" src="~/assets/images/icons/search.svg" />
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps(["label", "icon"]);
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 2rem;
  color: white;
  text-transform: uppercase;
  font-size: 1.65rem;
  font-weight: 300;
  cursor: pointer;
}
span {
  line-height: 1;
}
</style>
