export default function (string) {
  const container = h("textarea", {
    innerHTML: string.replace(/<[^>]*>/gm, ""),
  });
  return container.props.innerHTML;
}
