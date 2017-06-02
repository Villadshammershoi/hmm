using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace hmm.Models
{
    public class Office
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }

        [MaxLength(150)]
        [Required]
        public string Description { get; set; }

        [Required]
        public int NumberOfEmployees { get; set; }

        [MaxLength(50)]
        public string Relation { get; set; }

        [MaxLength(50)]
        public string Interest { get; set; }

        public Guid? FK_User { get; set; }


        public class OfficeMap : EntityTypeConfiguration<Office>
        {
            public OfficeMap()
            {
                HasKey(t => t.Id);

            }
        }
    }


}