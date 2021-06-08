using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinkShortner.Database
{
    public class LinksDbContext : DbContext
    {

        public DbSet<Link> links { get; set; }

        public LinksDbContext(DbContextOptions<LinksDbContext> options) : base(options) { }

    }

    public class Link 
    {
        public int Id { get; set; }
        public string Url { get; set; }
    }
}
