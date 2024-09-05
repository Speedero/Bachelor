using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;

namespace Company.Function.Employee
{
    public class GetRequest
    {
        public string EmpID { get; set; }
    }

    public class GetEmployee
    {
    private readonly ILogger<GetEmployee> _logger;
        private readonly CosmosClient _cosmosClient;
        private readonly Container _container;

        public GetEmployee(ILogger<GetEmployee> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
            _container = _cosmosClient.GetContainer("EhsInfoSys", "EmpData"); // Container und Datenbankname spezifizieren
        }

        [Function("GetEmployee")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous,"post")] HttpRequestData req,
                                                FunctionContext executionContext)
        {
            try {
            
                _logger.LogInformation("C# HTTP trigger function processed a request.");

                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var data = JsonSerializer.Deserialize<GetRequest>(requestBody);

                _logger.LogInformation($"reportID={data.EmpID}");

                // Dokument in CosmosDB speichern
                ItemResponse<EmployeeData> readResponse = await _container.ReadItemAsync<EmployeeData>(id: data.EmpID, new PartitionKey(data.EmpID));
                EmployeeData report = readResponse.Resource;

                var response = req.CreateResponse(HttpStatusCode.OK);
                await response.WriteStringAsync(JsonSerializer.Serialize(report));

                return response;
            }
            catch (CosmosException ex)
            {
                _logger.LogError(ex, ex.Message);
                var response = req.CreateResponse(HttpStatusCode.NoContent);
                return response;
            }
        }
    }
}
