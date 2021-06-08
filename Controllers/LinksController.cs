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
        private readonly LinksDbContext _context;
        public LinksController(IConfiguration config, LinksDbContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostLink(string url)
        {

            var id = 0;

            try
            {

                var link = new Link();
                link.Url = url;

                await _context.AddAsync(link);
                await _context.SaveChangesAsync();

                id = link.Id;

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

            var link = _context.links
            .FirstOrDefault(l => l.Id == id);

            if (link != null)
            {
                url = link.Url;
            }
            else 
            {
                return BadRequest();
            }


            return Redirect(url);

        }

    }
}
