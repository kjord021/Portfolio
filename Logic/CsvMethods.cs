using CsvHelper;
using CsvHelper.Configuration;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Logic
{
    public class CsvMethods
    {

        public byte[] WriteCsvToMemory(IEnumerable<UniqueCode> records)
        {
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                NewLine = Environment.NewLine,
            };

            using (var memoryStream = new MemoryStream())
            using (var streamWriter = new StreamWriter(memoryStream))
            using (var csvWriter = new CsvWriter(streamWriter, config))
            {
                csvWriter.WriteHeader<UniqueCode>();
                csvWriter.NextRecord();
                csvWriter.WriteRecords(records);
                streamWriter.Flush();
                return memoryStream.ToArray();
            }
        }

    }
}
