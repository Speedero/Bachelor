using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Threading.Tasks;
using System.Text.Json;


namespace Company.Function.Werk {

    public class WerkData {
        public string id { get; set; }
        public string WerkID { get; set; }
        public string name { get; set; }
        public string country { get; set; }
        public string[] employees { get; set; }
    }

    public class AddWerk {
    
        private readonly ILogger<AddWerk> _logger;
        private readonly CosmosClient _cosmosClient;
        private readonly Container _container;

        public AddWerk(ILogger<AddWerk> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
            _container = _cosmosClient.GetContainer("EhsInfoSys", "WerkData"); // Container und Datenbankname spezifizieren
        }

        [Function("AddWerk")]
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
                var data = JsonSerializer.Deserialize<WerkData>(requestBody);

                _logger.LogInformation($"reportID={data.WerkID}");

                var werk = data;

                // Dokument in CosmosDB speichern
                await _container.UpsertItemAsync<WerkData>(werk, new PartitionKey(werk.WerkID));

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

