export default function (crumbs) {
  const state = useState("breadCrumbs");
  state.value = crumbs;
}
