<template>
  <div class="container">
    <ListRestoServiceItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.container {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.5rem;
}
</style>
