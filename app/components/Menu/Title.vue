<template>
  <div class="container">
    <NuxtLink to="/"><LogoVeresk color="light" class="logo" /></NuxtLink>
    <div class="line" />
    <div class="status">СПА-Курорт на озере в ленинградской области</div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  text-align: center;
}
.logo {
  height: 7.5rem;
}
.line {
  width: 15rem;
  border-bottom: 0.1rem solid white;
  margin: 1rem auto;
}
.status {
  text-transform: uppercase;
  color: white;
  font-weight: 300;
  font-size: 1.2rem;
}
</style>
