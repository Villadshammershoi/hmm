using hmm.Models;
using hmm.Models.DBHandling;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace hmm.Controllers
{
    public class OfficesController : Controller
    {
        // GET: Offices
        public ActionResult Index()
        {
            return View();
        }

        public Office GetOffice(int id)
        {
            var db = new DataContext();
            var office = db.Office.Where(t => t.Id == id).FirstOrDefault();
            if(office != null)
            {
                return office;
            }else
            {
                return new Office();
            }
        }


        [HttpPost]
        public void CreateOrUpdateOffice(string stringOffice)
        {
            var db = new DataContext();
            var office = Newtonsoft.Json.JsonConvert.DeserializeObject<Office>(stringOffice);

            if (office.Id != 0)
            {
                var dbOffice = GetOffice(office.Id);
                if(dbOffice.Id != 0)
                {
                    db.Entry(dbOffice).CurrentValues.SetValues(office);
                }
            }else
            {
                db.Office.Add(office);
            }
            db.SaveChanges();
        }


        [HttpGet]
        public JsonResult GetOffices()
        {
            var db = new DataContext();
            var offices = db.Office.ToList();
            return new JsonResult { Data = offices, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}