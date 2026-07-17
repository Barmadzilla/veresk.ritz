<template>
  <div class="contact-card">
    <div class="type">{{ type }}</div>
    <div class="content">
      <NuxtLink :to="'tel:' + phone" class="phone">{{ phone }}</NuxtLink>
      <div class="social">
        <LogoTG v-if="tg" size="20" :to="tg" />
        <LogoMax v-if="max" size="19" :to="max" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type", "phone", "max", "tg"]);
</script>

<style scoped>
.contact-card {
  margin: 1.6rem 0;
}
.type {
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #828282;
  /* padding-bottom: 0.5rem; */
}
.content {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  min-width: 20rem;
  width: 60%;
}
.phone {
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 0.2rem;
  translate: all 200ms;
}
.phone:hover {
  color: var(--color-primary);
}
.social {
  display: flex;
  gap: 1rem;
}
</style>
