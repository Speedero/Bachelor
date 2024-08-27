using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;


namespace Company.Function {

    public class MonthlyData
    {
        public string id { get; set; }
        public string ReportID { get; set; }
        public int month { get; set; }
        public int year { get; set;}
        public string werk { get; set; }
        public Health health { get; set; }
        public Safety safety { get; set; }
        public Energy energy { get; set; }
        public Material material { get; set; }
        public Waste waste { get; set; }
    }

    public class Health {

        public int labourHrs { get; set; }
        public int overtimeHrs { get; set; }
        public int workingDays { get; set; }
        public int hrsPerDay { get; set; }
        public int fullTimeEqvTarifEmp { get; set; }
        public int fullTimeEqvNonTarifEmp { get; set; }
        public int sickDays { get; set; }
        public int sickNotifications { get; set; }
        public int longTermSick { get; set; }
        public int plannedAbsentism { get; set; }
        public int leaving { get; set; }
    }

    public class Safety {
        public int accidentsWithFirstAid { get; set; }
        public int accidentsWithMedicalTreatment { get; set; }
        public int accidentsWithLostTime { get; set; }
        public int lostDays { get; set; }
        public int nearMisses { get; set; }
        public int safetyTrainings { get; set; }
        public int safetyAudits { get; set; }
        public int unsafeConditions { get; set; }
        public int unsafeActs { get; set; }
        public int fatalities { get; set; }
        public int seriousInjuries { get; set; }
        public int fullowUps { get; set; }
    }

    public class Energy {
        public int naturalGas { get; set; }
        public int lightFuelOil { get; set; }
        public int coal { get; set; }
        public int carGasoline { get; set; }
        public int carDiesel { get; set; }
        public int bioFuel { get; set; }
        public int electricityPurchased { get; set; }
        public int sharePurchasedRenewable { get; set; }
        public int selfGeneratedElectricityCosumed { get; set; }
        public int selfGeneratedElectricitySold { get; set; }
    }

    public class Material {
        public int rawMaterialConsumption { get; set; }
        public int nonRawMaterialConsumption { get; set; }
        public int renewableNonRawMaterialConsumption { get; set; }
        public int renewableRawMaterialConsumption { get; set; }
        public int recycledInputMaterials { get; set; }
        public int recycledInputMaterialsOwnPrudiction { get; set; }
    }

    public class Waste {
        public int fabricationWaste { get; set; }
        public int productionWaste { get; set; }
        public int otherNonHazardousWaste { get; set; }
        public int reusedNonHazardousWaste { get; set; }
        public int recycledNonHazardousWaste { get; set; }
        public int hazardousWaste { get; set; }
        public int reusedHazardousWaste { get; set; }
        public int recycledHazardousWaste { get; set; }
    }


    public class CreateItem {
    
        private readonly ILogger<CreateItem> _logger;
        private readonly CosmosClient _cosmosClient;
        private readonly Container _container;

        public CreateItem(ILogger<CreateItem> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
            _container = _cosmosClient.GetContainer("EhsInfoSys", "MonthlyData"); // Container und Datenbankname spezifizieren
        }

        [Function("CreateItem")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequestData req,
                                                FunctionContext executionContext)
        {
            try {
            
                _logger.LogInformation("C# HTTP trigger function processed a request.");

                var message = "{ \"message\": \"Created/Updated\"}";

                var response = req.CreateResponse(HttpStatusCode.OK);
                await response.WriteStringAsync(message);

                _logger.LogInformation("Writing to CosmosDB...");

                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var data = JsonSerializer.Deserialize<MonthlyData>(requestBody);

                _logger.LogInformation($"reportID={data.ReportID}");

                var document = new MonthlyData {
                
                    id = data.ReportID,
                    ReportID = data.ReportID,
                    month = data.month,
                    year = data.year,
                    werk = data.werk,
                    health = new Health {
                    labourHrs = data.health.labourHrs,
                    overtimeHrs = data.health.overtimeHrs,
                    workingDays = data.health.workingDays,
                    hrsPerDay = data.health.hrsPerDay,
                    fullTimeEqvTarifEmp = data.health.fullTimeEqvTarifEmp,
                    fullTimeEqvNonTarifEmp = data.health.fullTimeEqvNonTarifEmp,
                    sickDays = data.health.sickDays,
                    sickNotifications = data.health.sickNotifications,
                    longTermSick = data.health.longTermSick,
                    plannedAbsentism = data.health.plannedAbsentism,
                    leaving = data.health.leaving
                    },
                    safety = new Safety {
                    accidentsWithFirstAid = data.safety.accidentsWithFirstAid,
                    accidentsWithMedicalTreatment = data.safety.accidentsWithMedicalTreatment,
                    accidentsWithLostTime = data.safety.accidentsWithLostTime,
                    lostDays = data.safety.lostDays,
                    nearMisses = data.safety.nearMisses,
                    safetyTrainings = data.safety.safetyTrainings,
                    safetyAudits = data.safety.safetyAudits,
                    unsafeConditions = data.safety.unsafeConditions,
                    unsafeActs = data.safety.unsafeActs,
                    fatalities = data.safety.fatalities,
                    seriousInjuries = data.safety.seriousInjuries,
                    fullowUps = data.safety.fullowUps
                    },
                    energy = new Energy {
                    naturalGas = data.energy.naturalGas,
                    lightFuelOil = data.energy.lightFuelOil,
                    coal = data.energy.coal,
                    carGasoline = data.energy.carGasoline,
                    carDiesel = data.energy.carDiesel,
                    bioFuel = data.energy.bioFuel,
                    electricityPurchased = data.energy.electricityPurchased,
                    sharePurchasedRenewable = data.energy.sharePurchasedRenewable,
                    selfGeneratedElectricityCosumed = data.energy.selfGeneratedElectricityCosumed,
                    selfGeneratedElectricitySold = data.energy.selfGeneratedElectricitySold
                    },
                    material = new Material {
                    rawMaterialConsumption = data.material.rawMaterialConsumption,
                    nonRawMaterialConsumption = data.material.nonRawMaterialConsumption,
                    renewableNonRawMaterialConsumption = data.material.renewableNonRawMaterialConsumption,
                    renewableRawMaterialConsumption = data.material.renewableRawMaterialConsumption,
                    recycledInputMaterials = data.material.recycledInputMaterials,
                    recycledInputMaterialsOwnPrudiction = data.material.recycledInputMaterialsOwnPrudiction
                    },
                    waste = new Waste {
                    fabricationWaste = data.waste.fabricationWaste,
                    productionWaste = data.waste.productionWaste,
                    otherNonHazardousWaste = data.waste.otherNonHazardousWaste,
                    reusedNonHazardousWaste = data.waste.reusedNonHazardousWaste,
                    recycledNonHazardousWaste = data.waste.recycledNonHazardousWaste,
                    hazardousWaste = data.waste.hazardousWaste,
                    reusedHazardousWaste = data.waste.reusedHazardousWaste,
                    recycledHazardousWaste = data.waste.recycledHazardousWaste
                    }
                    };

                // Dokument in CosmosDB speichern
                await _container.UpsertItemAsync<MonthlyData>(document, new PartitionKey(document.ReportID));

                return response;
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                var response = req.CreateResponse(HttpStatusCode.InternalServerError);
                await response.WriteStringAsync(ex.Message);
                return response;
            }
        }
    }
}    

