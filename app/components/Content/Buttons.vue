<template>
  <section>
    <ButtonGroup>
      <ButtonNude
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :to="item.to"
      />
    </ButtonGroup>
  </section>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped></style>
