<template>
  <div class="tags">
    <FaqFilterItem
      v-for="(item, index) in data"
      :key="index"
      :type="item"
      :current="filter"
      @click="$emit('setFilter', item)"
    />
  </div>
</template>

<script setup>
const props = defineProps(["data", "filter"]);
</script>

<style scoped>
.tags {
  margin-bottom: 5rem;
}
</style>
