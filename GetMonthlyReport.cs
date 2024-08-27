using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;

namespace Company.Function
{
    public class GetRequest
    {
        public string ReportID { get; set; }
    }

    public class GetMonthlyReport
    {
    private readonly ILogger<CreateItem> _logger;
        private readonly CosmosClient _cosmosClient;
        private readonly Container _container;

        public GetMonthlyReport(ILogger<CreateItem> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
            _container = _cosmosClient.GetContainer("EhsInfoSys", "MonthlyData"); // Container und Datenbankname spezifizieren
        }

        [Function("GetMonthlyReport")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous,"post")] HttpRequestData req,
                                                FunctionContext executionContext)
        {
            try {
            
                _logger.LogInformation("C# HTTP trigger function processed a request.");

                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var data = JsonSerializer.Deserialize<GetRequest>(requestBody);

                _logger.LogInformation($"reportID={data.ReportID}");

                // Dokument in CosmosDB speichern
                ItemResponse<MonthlyData> readResponse = await _container.ReadItemAsync<MonthlyData>(id: data.ReportID, new PartitionKey(data.ReportID));
                MonthlyData report = readResponse.Resource;

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
