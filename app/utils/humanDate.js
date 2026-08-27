import moment from "moment";
import "moment/dist/locale/ru";

export default function (date, format = "D MMM") {
  moment.locale("ru");
  return moment(date).format(format);
}
