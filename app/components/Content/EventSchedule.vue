<template>
  <section class="event-schedule">
    <TitleSecondary :title="data.title" />
    <div class="schedule">
      <div class="item" v-for="(item, index) in data.data" :key="index">
        <span class="time">{{ item.time }}</span> {{ item.text }}
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style scoped>
section {
  margin-bottom: 10rem;
}
.schedule {
  text-align: left;
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
}
.item {
  margin-bottom: 1rem;
}
.item .time {
  font-weight: bold;
  color: var(--color-primary);
  margin-right: 4rem;
}
</style>
