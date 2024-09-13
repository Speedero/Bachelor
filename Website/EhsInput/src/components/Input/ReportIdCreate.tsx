import { Months } from "../../enums/Months";
import { Werks } from "../../enums/Werks";

export default function createReportId(
  month: Months,
  year: number,
  werk: Werks
) {
  if (month < 10) {
    return werk + "0" + month.toString() + year.toString();
  }
  return werk + month.toString() + year.toString();
}
