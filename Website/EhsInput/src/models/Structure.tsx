import { Months } from "../enums/Months";
import { Werks } from "../enums/Werks";
import { InputFieldState } from "./InputFIeldState";
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

  public inputFieldSetter = {
    labourHrs: new InputFieldState(0, () => {}),
    overtimeHrs: new InputFieldState(0, () => {}),
    workingDays: new InputFieldState(0, () => {}),
    hrsPerDay: new InputFieldState(0, () => {}),
    fullTimeEqvTarifEmp: new InputFieldState(0, () => {}),
    fullTimeEqvNonTarifEmp: new InputFieldState(0, () => {}),
    sickDays: new InputFieldState(0, () => {}),
    sickNotifications: new InputFieldState(0, () => {}),
    longTermSick: new InputFieldState(0, () => {}),
    plannedAbsentism: new InputFieldState(0, () => {}),
    leaving: new InputFieldState(0, () => {}),
    accidentsWithFirstAid: new InputFieldState(0, () => {}),
    accidentsWithMedicalTreatment: new InputFieldState(0, () => {}),
    accidentsWithLostTime: new InputFieldState(0, () => {}),
    lostDays: new InputFieldState(0, () => {}),
    nearMisses: new InputFieldState(0, () => {}),
    safetyTrainings: new InputFieldState(0, () => {}),
    safetyAudits: new InputFieldState(0, () => {}),
    unsafeConditions: new InputFieldState(0, () => {}),
    unsafeActs: new InputFieldState(0, () => {}),
    fatalities: new InputFieldState(0, () => {}),
    seriousInjuries: new InputFieldState(0, () => {}),
    fullowUps: new InputFieldState(0, () => {}),
    naturalGas: new InputFieldState(0, () => {}),
    lightFuelOil: new InputFieldState(0, () => {}),
    coal: new InputFieldState(0, () => {}),
    carGasoline: new InputFieldState(0, () => {}),
    carDiesel: new InputFieldState(0, () => {}),
    bioFuel: new InputFieldState(0, () => {}),
    electricityPurchased: new InputFieldState(0, () => {}),
    sharePurchasedRenewable: new InputFieldState(0, () => {}),
    selfGeneratedElectricityCosumed: new InputFieldState(0, () => {}),
    selfGeneratedElectricitySold: new InputFieldState(0, () => {}),
    rawMaterialConsumption: new InputFieldState(0, () => {}),
    nonRawMaterialConsumption: new InputFieldState(0, () => {}),
    renewableNonRawMaterialConsumption: new InputFieldState(0, () => {}),
    renewableRawMaterialConsumption: new InputFieldState(0, () => {}),
    recycledInputMaterials: new InputFieldState(0, () => {}),
    recycledInputMaterialsOwnPrudiction: new InputFieldState(0, () => {}),
    fabricationWaste: new InputFieldState(0, () => {}),
    productionWaste: new InputFieldState(0, () => {}),
    otherNonHazardousWaste: new InputFieldState(0, () => {}),
    reusedNonHazardousWaste: new InputFieldState(0, () => {}),
    recycledNonHazardousWaste: new InputFieldState(0, () => {}),
    hazardousWaste: new InputFieldState(0, () => {}),
    reusedHazardousWaste: new InputFieldState(0, () => {}),
    recycledHazardousWaste: new InputFieldState(0, () => {}),
  };

  public description = {
    labourHrs:
      "Actual labour hours for all employees with time registry plus contractual working hours for employees without time registry.  For a site it may happen that there are no actual working hours registered. In this case only consider the contractual working hours. All blue colour and blue colour indirect employees as wells as white collar employees contracted at the corresponding site.",
    overtimeHrs:
      "Calculation of hours worked by an employee that exceed those hours defined for a standard workweek. This can only be reported if labour hours are registered (actual labour hours - planned labour hours)  hours worked in excess of contractual working hours are considered regardless of compensation.",
    workingDays: "the number of days worked per reported month.",
    hrsPerDay:
      "the contractual standard work hours per day. In case of deviating working hours per day the average is used.",
    fullTimeEqvTarifEmp: "",
    fullTimeEqvNonTarifEmp: "",
    sickDays:
      "number of registered sick days - absent days from work due to sickness.  Counted from the first day not appearing at work per employee.",
    sickNotifications:
      "number of  sick notifications from doctor that have been handed to HR department. All sick notifications independently, if new or a prolongation needs to count.",
    longTermSick:
      "Number of FTE on Long Term Sickness Leave (more than four calender weeks of absence)",
    plannedAbsentism: "",
    leaving:
      "The leaving FTE is registered in the following month after leaving the company. Example: employee is leaving 15th of month 1, the employee is registered as leaving in month 2. As long as an employee is on the pay roll it is counted.",
    accidentsWithFirstAid:
      "Sub-category of total accidents: all work- related Accidents that cause Association book entries if this is requested and are self-medicated, but do not need further medical treatment. It does not include accidents on the way to work or back.a",
    accidentsWithMedicalTreatment:
      "Sub-category of total accidents: all work- related Accidents which are not causing lost days. It is an injury that requires  medical treatment. Only first aid is not sufficient. It does not include accidents on the way to work or back.",
    accidentsWithLostTime:
      "Sub-category of total accidents: All work- related Accidents which cause lost days. It leads to an operator's absence of at least 1 day (7 days per week to be considered). It does not include accidents on the way to work or back.",
    lostDays:
      "Number of lost days, which are defined as days lost [7 days per week], caused by people being absent due to an accident",
    nearMisses:
      "Number of incidents that could have caused  injury or death, but were narrowly avoided.",
    safetyTrainings: "Hours of trainings 100% dedicated to Safety",
    safetyAudits: "Number of dedicated safety observation tours or audits",
    unsafeConditions:
      "Number of observed and reported unsafe working conditions, i.e. violation of an accepted safe procedure which could permit the occurrence of an accident.",
    unsafeActs:
      "Number of observed and reported unsafe working acts, i.e. violation of an accepted safe procedure which could permit the occurrence of an accident.",
    fatalities: "Work-related accident that leads to a fatality.",
    seriousInjuries: "",
    fullowUps:
      "defined as that a Lost Time Accident has been discussed in the Divisional Board meeting",
    naturalGas: "",
    lightFuelOil: "",
    coal: "",
    carGasoline: "",
    carDiesel: "",
    bioFuel: "",
    electricityPurchased: "",
    sharePurchasedRenewable: "",
    selfGeneratedElectricityCosumed: "",
    selfGeneratedElectricitySold: "",
    rawMaterialConsumption: "",
    nonRawMaterialConsumption: "",
    renewableNonRawMaterialConsumption: "",
    renewableRawMaterialConsumption: "",
    recycledInputMaterials: "",
    recycledInputMaterialsOwnPrudiction: "",
    fabricationWaste: "",
    productionWaste: "",
    otherNonHazardousWaste: "",
    reusedNonHazardousWaste: "",
    recycledNonHazardousWaste: "",
    hazardousWaste: "",
    reusedHazardousWaste: "",
    recycledHazardousWaste: "",
  };
}
