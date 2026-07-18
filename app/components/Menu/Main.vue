<template>
  <div class="menu-bar">
    <MenuButton label="Mеню" icon="burger" @click="open = true" />
    <MenuTitle />
    <MenuButton label="Найти номер" icon="search" />
  </div>
  <Teleport to="#teleports">
    <Transition name="modal" :duration="300">
      <div class="overlay" @click.self="open = false" v-if="open">
        <div class="menu">
          <NuxtLink to="/"><LogoVeresk color="dark" class="logo" /></NuxtLink>
          <div v-for="(item, i) in menu" @click="open = false">
            <MenuItem
              :key="i"
              :to="item.to"
              :type="item.type"
              :title="item.title"
            />
          </div>
          <MenuBanner />
          <MenuItem type="separator" />
          <MenuSocial />
          <MenuItem type="separator" />
          <FooterContact
            v-for="(c, i) in contacts"
            :key="i"
            :type="c.type"
            :phone="c.phone"
            :max="c.max"
            :tg="c.tg"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const open = ref(false);
const menu = [
  { type: "separator" },
  { title: "Отель, глемпинг и дачи", to: "/hotel", type: "item" },
  { title: "Рестораны", to: "/restorants", type: "item" },
  { title: "Бизнес встречи", to: "/business-events", type: "item" },
  { title: "Свадебные торжeства", to: "/wedding", type: "item" },
  { title: "Корпоративные праздники", to: "/corporate-events", type: "item" },
  { title: "СПА-комплекс", to: "/spa-resort", type: "item" },
  { type: "separator" },
  { title: "Афиша мероприятий Верeска", to: "/events", type: "item" },
  { title: "Подарочные сертификаты", to: "/sertificates", type: "item" },
  { title: "Вопросф и ответы", to: "/faq", type: "item" },
  { title: "Эко-Парк", to: "/eco-park", type: "item" },
  { title: "Свяжитесь с нами", to: "/contacts", type: "item" },
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
.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 3rem 4rem;
  z-index: 20;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}
.menu {
  --w: 43rem;
  overflow-y: auto;
  background: #f3f3f3;
  position: absolute;
  height: 100%;
  padding: 2.5rem 5rem 5rem;
  width: var(--w);
  box-sizing: border-box;
  transition: all 300ms ease;
}
.logo {
  height: 7.5rem;
}
.overlay {
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.3rem);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 300ms;
}
.modal-enter-from .menu,
.modal-leave-to .menu {
  transform: translateX(calc(var(--w) * -1));
}
/* .modal-leave-from .menu { */
/*   transform: translateX(0); */
/* } */

.modal-leave-to.overlay,
.modal-enter-from.overlay {
  opacity: 0;
  backdrop-filter: blur(0);
}
.modal-leave-from.overlay,
.modal-enter-to.overlay {
  opacity: 1;
  backdrop-filter: blur(0.3rem);
}
</style>
