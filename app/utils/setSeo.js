export default function (data) {
  const { title, excerpt } = data;

  const seoTitle = "Евроинтех - " + (title.rendered ? title.rendered : title);
  const seoExcerpt = excerpt.rendered ? removeTags(excerpt.rendered) : excerpt;

  console.log(seoExcerpt);
  useSeoMeta({
    title: seoTitle,
    ogTitle: seoTitle,
    ogDescription: seoExcerpt,
    //TODO: Добавить картинку и юрл
  });
  return;
}
