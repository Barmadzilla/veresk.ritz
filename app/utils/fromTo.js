import moment from "moment";
export default function (from, to) {
  const bfrom = moment()
    .set({
      hour: from.h,
      minute: from.m,
    })
    .format("H:mm");
  const bto = moment()
    .set({
      hour: to.h,
      minute: to.m,
    })
    .format("H:mm");
  return `c ${bfrom} до ${bto}`;
}
