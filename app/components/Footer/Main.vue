<template>
  <footer>
    <div class="container">
      <section>
        <h2>Контакты</h2>
        <FooterContact
          v-for="(c, i) in contacts"
          :key="i"
          :type="c.type"
          :phone="c.phone"
          :max="c.max"
          :tg="c.tg"
        />
        <p>
          Ленинградская область, Выборгский район,  пос. Ильичево, Линтульская
          аллея 3В
        </p>
      </section>
      <section>
        <h2>Основное</h2>
        <ul>
          <li v-for="(item, i) in main">
            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </section>
      <section>
        <h2>Докуметны</h2>
        <ul>
          <li v-for="(item, i) in docs">
            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </footer>
  <div class="copyright">
    <div class="container">&copy;2026 ООО "Линтулла"</div>
  </div>
</template>

<script setup>
const docs = [
  { title: "Договор оферты", link: "#" },
  { title: "Пользовательское соглашение", link: "#" },
  { title: "Правила использования сайта", link: "#" },
  { title: "Политика конфиденциальности", link: "#" },
];
const main = [
  { title: "Отель", link: "/hotel" },
  { title: "СПА", link: "/spa-resort" },
  { title: "Рестораны", link: "#" },
  { title: "Банкетные залы", link: "#" },
  { title: "Свадьбы", link: "#" },
  { title: "Детям", link: "#" },
  { title: "Спорт клуб", link: "#" },
  { title: "F.A.Q.", link: "#" },
];
const contacts = [
  {
    type: "Отель",
    phone: "+7 (812) 760-51-70",
    tg: "https://t.me/veresk_park",
    max: "https://max.ru/u/f9LHodD0cOJPir0jjAl8UXeDuKgiIqB2qvzsozsB8xtT8tW9JSIJ6E9BeF8",
  },
  {
    type: "Ресторан",
    phone: "+7 (812) 407-33-01",
    tg: "",
    max: "",
  },
  {
    type: "Банкетный менеджер",
    phone: "+7 (921) 569-35-36",
    tg: "https://t.me/parkveresk",
    max: "https://max.ru/u/f9LHodD0cOJuUN7bYSqZZyU9RhBHOwL6cC0ln-8ovrmWpOa8b_6n_PnVjyI",
  },
  {
    type: "Бассейн и СПА",
    phone: "+7 (921) 760-51-70",
    tg: "https://t.me/SpaVeresk",
    max: "https://max.ru/u/f9LHodD0cOKjRVJYzfGJxWOpGSirG94w1RDk1NKjkuqj73lPwT1xsgrhrFc",
  },
];
</script>

<style scoped>
footer {
  padding: 5rem;
  background: #f5f5f5;
}
section {
  max-width: 28%;
}
h2 {
  text-transform: uppercase;
  font-weight: 400;
  color: #626262;
  font-size: 2rem;
  margin-bottom: 2.5rem;
}
li {
  list-style: none;
  margin-bottom: 1rem;
}
li a {
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  transition: color 200ms;
}
a:hover {
  color: var(--color-link);
}
.container {
  margin: 0 auto;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;

  gap: 2rem;
}
.copyright {
  background: #d9d9d9;
  padding: 2rem 5rem;
  font-size: 1.2rem;
}
</style>
