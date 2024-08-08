using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using Newtonsoft.Json;

namespace Azure
{
    public static class UpdateMonthly
    {
        [FunctionName("UpdateMonthly")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "put", Route = null)] HttpRequest req,
            ILogger log)
        {
            string databaseName = "EhsInfoSys";
            string containerName = "MonthlyData";
            // log.LogInformation("C# HTTP trigger function processed a request.");

            private CosmosClient cosmosClient = new CosmosClient("https://ehsinfosys.documents.azure.com:443/", );
            private Database database = await cosmosClient.GetDatabase(databaseName);
            private Container container = await database.GetContainer(containerName, "/id");
            dynamic data = new { Id = "1", name = "monthly", ReportID = "DE01022024" };
            ItemResponse<dynamic> response = await container.container.CreateItemAsync(data);

            // dynamic data = JsonConvert.DeserializeObject(requestBody);

            string responseMessage = "Success!";

            // return new OkObjectResult(responseMessage);
        }
    }
}
