<template>
  <section class="list-card">
    <ListImage :src="data.images" />
    <ListCardContent>
      <ListOccupationInfo
        :title="data.title"
        :params="data.params"
        :info="data.info"
      />
    </ListCardContent>
  </section>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
.list-card {
  display: flex;
  justify-content: start;
  text-align: left;
  gap: 8rem;
  margin-bottom: 8rem;
}
</style>
