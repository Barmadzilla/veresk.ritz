<template>
  <NuxtLink v-if="type == 'item'" :to="to" class="item">
    {{ title }}
  </NuxtLink>
  <div v-if="type == 'separator'" class="separator" />
</template>

<script setup>
const props = defineProps(["to", "title", "type"]);
</script>

<style scoped>
.item {
  color: black;
  font-size: 1.6rem;
  padding: 0.6rem 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: 300;
  position: relative;
  transition: all 200ms;
}

.item:hover,
.router-link-active {
  color: #794ac0;
  /* padding-left: 3rem; */
}

.item.router-link-active::before {
  opacity: 1;
}

.item::before {
  content: "";
  background: url("~/assets/images/menu_item_hover_logo.svg") no-repeat center /
    100%;
  height: 2rem;
  width: 2rem;
  display: block;
  position: absolute;
  left: -3.3rem;
  margin-bottom: 0.2rem;
  opacity: 0;
  transition: all 300ms;
}

.item:hover::before {
  opacity: 1;
}
.separator {
  border-bottom: 0.1rem solid #cfcfcf;
  margin: 1rem 0;
}
</style>
