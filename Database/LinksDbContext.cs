using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinkShortner.Database
{
    public class LinksDbContext : DbContext
    {

        public DbSet<Link> links { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
                => options.UseSqlite(@"Data Source=" + System.IO.Directory.GetCurrentDirectory() + "/links.db");

    }

    public class Link 
    {
        public int Id { get; set; }
        public string Url { get; set; }
    }
}
