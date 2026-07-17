<template>
  <div class="contact-card">
    <div class="type">{{ c.type }}</div>
    <div class="content">
      <NuxtLink :to="'tel:' + c.phone" class="phone">{{ c.phone }}</NuxtLink>
      <div class="social">
        <LogoTG v-if="c.tg" size="28" :to="c.tg" />
        <LogoMax v-if="c.max" size="27" :to="c.max" />
      </div>
    </div>
  </div>
</template>

<script setup>
const c = {
  type: "по вопросам проживания",
  phone: "+7 (812) 760-51-70",
  tg: "https://t.me/veresk_park",
  max: "https://max.ru/u/f9LHodD0cOJPir0jjAl8UXeDuKgiIqB2qvzsozsB8xtT8tW9JSIJ6E9BeF8",
};
</script>

<style scoped>
.contact-card {
  margin: 1.6rem 0;
  text-align: left;
}
.type {
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #828282;
  font-weight: 500;
  padding-bottom: 0.5rem;
}
.content {
  min-width: 20rem;
  width: 60%;
}
.phone {
  color: black;
  text-decoration: none;
  font-size: 1.6rem;
  padding-bottom: 0.2rem;
  translate: all 200ms;
}
.phone:hover {
  color: var(--color-primary);
}
.social {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
