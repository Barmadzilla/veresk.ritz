export default function (date) {
  const d = new Date(date),
    year = d.getFullYear(),
    month = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth(),
    day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  return [year, month, day].join("-");
}
