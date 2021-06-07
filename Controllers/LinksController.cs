using LinkShortner.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace LinkShortner.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LinksController : Controller
    {

        private readonly IConfiguration _config;
        public LinksController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public async Task<IActionResult> PostLink(string url)
        {

            var id = 0;

            try
            {
                using (var db = new LinksDbContext())
                {
                    var link = new Link();
                    link.Url = url;

                    await db.AddAsync(link);
                    await db.SaveChangesAsync();

                    id = link.Id;

                }
            }
            catch (Exception e) 
            {
                return BadRequest(e);
            }

            var result = _config.GetValue<string>("HostName") + "?id=" + id;

            return Content(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetLink(int id) 
        {

            var url = "";

            using (var db = new LinksDbContext())
            {
                var link = db.links
                .FirstOrDefault(l => l.Id == id);

                if (link != null)
                {
                    url = link.Url;
                }
                else 
                {
                    return BadRequest();
                }

            }

            return Redirect(url);

        }

    }
}
