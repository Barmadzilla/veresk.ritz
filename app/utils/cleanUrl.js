export default function (url) {
  const regex = url.replace(/(?:.*?\/){3}|(\/$)/g, "");
  return url ? "/" + regex : "/";
}
