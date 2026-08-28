<template>
  <ListCard v-if="data.info.type == filter || 'all' == filter">
    <ListImage :src="data.images" />
    <ListCardContent>
      <ListOccupationInfo
        :title="data.title"
        :params="data.params"
        :info="data.info"
      />
    </ListCardContent>
  </ListCard>
</template>

<script setup>
const props = defineProps(["data", "filter"]);
</script>
