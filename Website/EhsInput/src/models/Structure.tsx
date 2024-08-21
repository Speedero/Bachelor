import { MonthlyReport } from "./MonthlyReport";

export class Structure {
  public healthFields = [
    "hrsPerDay",
    "labourHrs",
    "overtimeHrs",
    "workingDays",
    "fullTimeEqvTarifEmp",
    "fullTimeEqvNonTarifEmp",
    "sickDays",
    "sickNotifications",
    "longTermSick",
    "plannedAbsentism",
    "leaving",
  ];

  public safetyFields = [
    "accidentsWithFirstAid",
    "accidentsWithMedicalTreatment",
    "accidentsWithLostTime",
    "lostDays",
    "nearMisses",
    "safetyTrainings",
    "safetyAudits",
    "unsafeConditions",
    "unsafeActs",
    "fatalities",
    "seriousInjuries",
    "fullowUps",
  ];

  public energyFields = [
    "naturalGas",
    "lightFuelOil",
    "coal",
    "carGasoline",
    "carDiesel",
    "bioFuel",
    "electricityPurchased",
    "sharePurchasedRenewable",
    "selfGeneratedElectricityCosumed",
    "selfGeneratedElectricitySold",
  ];

  public materialFields = [
    "rawMaterialConsumption",
    "nonRawMaterialConsumption",
    "renewableNonRawMaterialConsumption",
    "renewableRawMaterialConsumption",
    "recycledInputMaterials",
    "recycledInputMaterialsOwnPrudiction",
  ];

  public wasteFields = [
    "fabricationWaste",
    "productionWaste",
    "otherNonHazardousWaste",
    "reusedNonHazardousWaste",
    "recycledNonHazardousWaste",
    "hazardousWaste",
    "reusedHazardousWaste",
    "recycledHazardousWaste",
  ];

  public healthUnits = [
    "hrs",
    "hrs",
    "days",
    "hrs",
    "number",
    "number",
    "number",
    "number",
    "number",
    "days",
    "number",
  ];

  public safetyUnits = [
    "number",
    "number",
    "number",
    "days",
    "number",
    "hrs",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
  ];

  public energyUnits = [
    "m³",
    "t",
    "t",
    "l",
    "l",
    "l",
    "kWh",
    "%",
    "kWh",
    "kWh",
  ];

  public materialUnits = ["kg", "kg", "kg", "kg", "kg", "kg"];

  public wasteUnits = ["m²", "m²", "kg", "kg", "kg", "kg", "kg", "kg"];

  public monthlyReport: MonthlyReport = {
    werk: "Hannover",
    month: 5,
    year: 2024,
    health: {
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
    },
    safety: {
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
    },
    energy: {
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
    },
    material: {
      rawMaterialConsumption: 0,
      nonRawMaterialConsumption: 0,
      renewableNonRawMaterialConsumption: 0,
      renewableRawMaterialConsumption: 0,
      recycledInputMaterials: 0,
      recycledInputMaterialsOwnPrudiction: 0,
    },
    waste: {
      fabricationWaste: 0,
      productionWaste: 0,
      otherNonHazardousWaste: 0,
      reusedNonHazardousWaste: 0,
      recycledNonHazardousWaste: 0,
      hazardousWaste: 0,
      reusedHazardousWaste: 0,
      recycledHazardousWaste: 0,
    },
  };
}
