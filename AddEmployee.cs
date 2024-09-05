using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;


namespace Company.Function.Employee {

    public class EmployeeData {
        public string id { get; set; }
        public string EmpID { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public bool manager { get; set; }
        public string[] werks { get; set; }
    }

    public class AddEmployee {
    
        private readonly ILogger<AddEmployee> _logger;
        private readonly CosmosClient _cosmosClient;
        private readonly Container _container;

        public AddEmployee(ILogger<AddEmployee> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
            _container = _cosmosClient.GetContainer("EhsInfoSys", "EmpData"); // Container und Datenbankname spezifizieren
        }

        [Function("AddEmployee")]
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
                var data = JsonSerializer.Deserialize<EmployeeData>(requestBody);

                _logger.LogInformation($"reportID={data.EmpID}");

                var employee = new EmployeeData {
                    id = data.EmpID,
                    EmpID = data.EmpID,
                    name = data.name,
                    email = data.email,
                    manager = data.manager,
                    werks = data.werks
                    };

                // Dokument in CosmosDB speichern
                await _container.UpsertItemAsync<EmployeeData>(employee, new PartitionKey(employee.EmpID));

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

