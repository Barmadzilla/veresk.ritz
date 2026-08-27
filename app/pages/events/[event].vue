<template>
  <div>
    <BreadCrumbs :current="data.title" />
    <TitleMain :title="data.title" />
    <ContentParams>
      Дата мероприятия: {{ eventDate }} начало в {{ data.event_date.t }}
    </ContentParams>
    <component
      v-for="(item, index) in data.content"
      :key="index"
      :is="
        item.type == 'textAndPic'
          ? TextAndPic
          : item.type == 'textBlock'
            ? TextBlock
            : item.type == 'slideShow'
              ? SlideShow
              : item.type == 'buttons'
                ? Buttons
                : item.type == 'space'
                  ? Space
                  : item.type == 'offers'
                    ? Offers
                    : item.type == 'eventSchedule'
                      ? EventSchedule
                      : null
      "
      v-bind="
        item.type == 'slideShow'
          ? { type: 'image', cards: 1, data: item.slideShow }
          : item.type == 'buttons'
            ? { data: item.buttons }
            : item.type == 'offers'
              ? { data: item.offers }
              : item.type == 'eventSchedule'
                ? { data: item }
                : { data: item, reverse: index % 2 != 0 }
      "
    />
  </div>
</template>

<script setup>
const TextAndPic = resolveComponent("ContentTextAndPic");
const TextBlock = resolveComponent("ContentTextBlock");
const SlideShow = resolveComponent("SliderContainer");
const Buttons = resolveComponent("ContentButtons");
const Space = resolveComponent("ContentSpace");
const Offers = resolveComponent("OffersContainer");
const EventSchedule = resolveComponent("ContentEventSchedule");

const events = vereskEventsData();

const router = useRoute();

const { data } = events.value.find((item) => item.slug == router.params.event);
const title = data.title;
const eventDate = humanDate(data.event_date.d);
definePageMeta({
  parent: [{ title: "Афиша Мероприятий", slug: "/events" }],
});
const poster = setPoster();
poster.value = data.poster;

const text =
  "Приглашаем посетить мероприятия СПА-Курорта “Вереск”, отдохнуть и хорошо провести время.";
</script>

<style scoped></style>
