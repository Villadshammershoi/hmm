using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace hmm.Models.DBHandling
{
    public class DataContext : DbContext
    {
        public DataContext()
            : base("DefaultConnection")
        {
            Database.SetInitializer<DataContext>(null);
        } 

        public DbSet<Office> Office { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new Office.OfficeMap());
        }
    }
}