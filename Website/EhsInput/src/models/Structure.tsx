import { Months } from "../enums/Months";
import { Werks } from "../enums/Werks";
import { MonthlyReport } from "./MonthlyReport";

export class Structure {
  public healthFields = [
    "labourHrs",
    "overtimeHrs",
    "workingDays",
    "hrsPerDay",
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
    ReportID: "",
    werk: Werks.Hannover,
    month: Months.May,
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

  public fields = {
    labourHrs: "Labour hours",
    overtimeHrs: "Overhours worked",
    workingDays: "Working days",
    hrsPerDay: "Working hours per day",
    fullTimeEqvTarifEmp: "Full Time Equivalent Tariff employees",
    fullTimeEqvNonTarifEmp: "Full Time Equivalent Non-tariff employees",
    sickDays: "Sick days",
    sickNotifications: "Sick notifications",
    longTermSick: "Long Term Sickness Leave",
    plannedAbsentism: "Planned absentism",
    leaving: "Leaving FTE",
    accidentsWithFirstAid: "Accidents which require first aid",
    accidentsWithMedicalTreatment: "Accidents which require medical treatment",
    accidentsWithLostTime: "Lost Time Incidents",
    lostDays: "Lost Days",
    nearMisses: "Near Misses",
    safetyTrainings: "Safety Trainings",
    safetyAudits: "Safety observations / tours / audits",
    unsafeConditions: "Unsafe conditions",
    unsafeActs: "Unsafe acts",
    fatalities: "Fatalities",
    seriousInjuries: "Serious Accidents/ Injuries",
    fullowUps: "Follow-ups after LTI",
    naturalGas: "Natural Gas consumption",
    lightFuelOil: "Light Fuel Oil consumption",
    coal: "Coal consumption",
    carGasoline: "Car gas consumption",
    carDiesel: "Car diesel consumption",
    bioFuel: "Bio fuel consumption",
    electricityPurchased: "Total Electricity purchased for Consumption",
    sharePurchasedRenewable:
      "Share of total Electricity consumption from purchased renewable sources",
    selfGeneratedElectricityCosumed:
      "Self-generated Electricity, heating, cooling, steam, which are consumed",
    selfGeneratedElectricitySold:
      "Self-generated Electricity, heating, cooling, steam, which are sold",
    rawMaterialConsumption: "Raw materials consumption",
    nonRawMaterialConsumption: "Non-raw materials consumption",
    renewableNonRawMaterialConsumption:
      "Renewable non raw material consumption",
    renewableRawMaterialConsumption: "Renewable raw material consumption",
    recycledInputMaterials: "Recycled input materials used",
    recycledInputMaterialsOwnPrudiction:
      "Recycled input materials used from own production",
    fabricationWaste: "Fabrication Waste",
    productionWaste: "Production Waste",
    otherNonHazardousWaste: "Other Non-Hazardous Waste",
    reusedNonHazardousWaste: "Reused non-hazardous Waste",
    recycledNonHazardousWaste: "Recycled non-hazardous Waste",
    hazardousWaste: "Hazardous Waste",
    reusedHazardousWaste: "Reused hazardous Waste",
    recycledHazardousWaste: "Recycled hazardous Waste",
  };
}
