using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using Portfolio.Models;
using System.Text;
using Portfolio.Logic;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UniqueCodesController : Controller
    {

        [HttpPost]
        public async Task<IActionResult> PostInformation(string fileName, int number)
        {

            var codes = new List<UniqueCode>();
            int x = 1;

            while (x <= number)
            {
                Guid g = Guid.NewGuid();
                codes.Add(new UniqueCode
                {
                    Id = x,
                    identifier = g

                });

                x++;
            }

            CsvMethods methods = new CsvMethods();
            var result = methods.WriteCsvToMemory(codes);
            var memoryStream = new MemoryStream(result);
            return new FileStreamResult(memoryStream, "text/csv")
            {
                FileDownloadName = fileName
            };

        }
    }
}
