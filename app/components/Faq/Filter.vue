<template>
  <div class="tags">
    <span v-if="before" class="before">{{ before }}:</span>
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
const props = defineProps(["data", "filter", "before"]);
</script>

<style scoped>
.before {
  margin-right: 1.2rem;
}
.tags {
  margin-bottom: 5rem;
}
</style>
