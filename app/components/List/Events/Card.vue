<template>
  <ListCard>
    <ListImage :src="data.images" />
    <ListCardContent>
      <ListEventsInfo
        :title="data.title"
        :description="data.description"
        :params="data.event_date"
        :slug="slug"
      />
    </ListCardContent>
  </ListCard>
</template>

<script setup>
defineProps(["data", "slug"]);
</script>
