import { MonthlyHealth } from "./MonthlyHealth";
import { MonthlySafety } from "./MonthlySafety";
import { MonthlyEnergy } from "./MonthlyEnergy";
import { MonthlyMaterial } from "./MonthlyMaterial";
import { MonthlyWaste } from "./MonthlyWaste";
import { Months } from "../enums/Months";
import { Werks } from "../enums/Werks";

export class MonthlyReport {
  ReportID: string = "";
  werk: Werks = Werks.Hannover;
  month: Months = Months.May;
  year: number = 0;
  health: MonthlyHealth;
  safety: MonthlySafety;
  energy: MonthlyEnergy;
  material: MonthlyMaterial;
  waste: MonthlyWaste;
  public constructor() {
    this.health = {
      labourHrs: 0,
      overtimeHrs: 0,
      workingDays: 0,
      hrsPerDay: 0,
      fullTimeEqvTarifEmp: 0,
      fullTimeEqvNonTarifEmp: 0,
      sickDays: 0,
      sickNotifications: 0,
      longTermSick: 0,
      plannedAbsentism: 0,
      leaving: 0,
    };
    this.safety = {
      accidentsWithFirstAid: 0,
      accidentsWithMedicalTreatment: 0,
      accidentsWithLostTime: 0,
      lostDays: 0,
      nearMisses: 0,
      safetyTrainings: 0,
      safetyAudits: 0,
      unsafeConditions: 0,
      unsafeActs: 0,
      fatalities: 0,
      seriousInjuries: 0,
      fullowUps: 0,
    };
    this.energy = {
      naturalGas: 0,
      lightFuelOil: 0,
      coal: 0,
      carGasoline: 0,
      carDiesel: 0,
      bioFuel: 0,
      electricityPurchased: 0,
      sharePurchasedRenewable: 0,
      selfGeneratedElectricityCosumed: 0,
      selfGeneratedElectricitySold: 0,
    };
    this.material = {
      rawMaterialConsumption: 0,
      nonRawMaterialConsumption: 0,
      renewableNonRawMaterialConsumption: 0,
      renewableRawMaterialConsumption: 0,
      recycledInputMaterials: 0,
      recycledInputMaterialsOwnPrudiction: 0,
    };
    this.waste = {
      fabricationWaste: 0,
      productionWaste: 0,
      otherNonHazardousWaste: 0,
      reusedNonHazardousWaste: 0,
      recycledNonHazardousWaste: 0,
      hazardousWaste: 0,
      reusedHazardousWaste: 0,
      recycledHazardousWaste: 0,
    };
  }
  //  public setReportID(reportID: string) {
  //   this.reportID = reportID;
  // }
  //  public getReportID() {
  //   return this.reportID;
  // }
  //  public setWerk(werk: string) {
  //   this.werk = werk;
  // }
  //  public setMonth(month: number) {
  //   this.month = month;
  // }
  //  public setYear(year: number) {
  //   this.year = year;
  // }
  //  public getWerk() {
  //   return this.werk;
  // }
  //  public getMonth() {
  //   return this.month;
  // }
  //  public getYear() {
  //   return this.year;
  // }
}
