export default function (data, size) {
  const { alt_text, title, guid, media_details, date } = data;

  const sizes = media_details?.sizes ? media_details.sizes : null;
  const url = sizes[size] ? sizes[size].source_url : guid.rendered;

  return { alt_text, title: title.rendered, url, date };
}
