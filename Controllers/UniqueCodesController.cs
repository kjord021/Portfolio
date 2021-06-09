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


            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                NewLine = Environment.NewLine,
            };

            using (var mem = new MemoryStream())
            using (var writer = new StreamWriter(mem))
            using (var csvWriter = new CsvWriter(writer, config))
            {
                csvWriter.WriteHeader<UniqueCode>();
                csvWriter.NextRecord();
                csvWriter.WriteRecords(codes);
                writer.Flush();

                var filePath = Directory.GetCurrentDirectory() + "/" + fileName;


                System.IO.File.WriteAllBytes(filePath, mem.ToArray());

                return PhysicalFile(filePath, "text/csv", fileName);

            }
        }


        [HttpGet]
        public async Task<IActionResult> DeleteFile(string fileName)
        {
            try
            {
                var filePath = Directory.GetCurrentDirectory() + "/" + fileName;
                System.IO.File.Delete(filePath);
            }
            catch(Exception e) 
            {
                return BadRequest(e);
            }
            

            return Ok();
        }

    }
}
