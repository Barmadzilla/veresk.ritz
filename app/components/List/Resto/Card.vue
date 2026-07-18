<template>
  <ListCard>
    <ListImage :src="data.images" />
    <ListCardContent>
      <ListRestoInfo
        :title="data.title"
        :params="data.working"
        :description="data.description"
        :link="data.link"
        :book="data.book"
        :services="data.services"
      />
    </ListCardContent>
  </ListCard>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
