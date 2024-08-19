using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;


namespace Company.Function
{
    public class MonthlyData
    {
        public string id { get; set; }
        public string ReportID { get; set; }
        public int workinghours { get; set; }
        public int overtimehours { get; set; }
    }


    public class CreateItem
    {
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
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous,"get", "post")] HttpRequestData req,
                                                FunctionContext executionContext)
        {
            try
            {
                _logger.LogInformation("C# HTTP trigger function processed a request.");

                var message = "ReportCreated";

                var response = req.CreateResponse(HttpStatusCode.OK);
                await response.WriteStringAsync(message);

                _logger.LogInformation("Writing to CosmosDB...");

                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var data = JsonSerializer.Deserialize<MonthlyData>(requestBody);

                _logger.LogInformation($"reportID={data.ReportID}");

                var document = new MonthlyData
                {
                    id = System.Guid.NewGuid().ToString(),
                    ReportID = data.ReportID,
                    workinghours = data.workinghours,
                    overtimehours = data.overtimehours
                };

                // Dokument in CosmosDB speichern
                await _container.CreateItemAsync(document, new PartitionKey(document.ReportID));

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
