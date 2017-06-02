using hmm.Models;
using hmm.Models.DBHandling;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using Microsoft.AspNet.Identity;

namespace hmm.Controllers
{
    public class OfficesController : MasterController
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
            if (office != null)
            {
                return office;
            }
            else
            {
                return new Office();
            }
        }


        [HttpPost]
        public void CreateOrUpdateOffice(string stringOffice)
        {
            var currentUser = User.Identity.GetUserId();
            if (currentUser != null)
            {
                var db = new DataContext();
                var office = Newtonsoft.Json.JsonConvert.DeserializeObject<Office>(stringOffice);

                office.FK_User = new Guid(currentUser);

                if (office.Id != 0)
                {
                    var dbOffice = GetOffice(office.Id);
                    if (dbOffice.Id != 0)
                    {
                        db.Entry(dbOffice).CurrentValues.SetValues(office);
                    }
                }
                else
                {
                    db.Office.Add(office);
                }
                db.SaveChanges();
            }
        }


        [HttpGet]
        public JsonResult GetOffices(bool? ShowUsersOnly = false)
        {
            var currentUser = User.Identity.GetUserId();
            if (ShowUsersOnly.Value ? currentUser != null : true)
            {
                var db = new DataContext();
                var offices = db.Office.Where(t => ShowUsersOnly.Value ? t.FK_User == new Guid(currentUser) : true).ToList();
                return new JsonResult { Data = offices, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
            return new JsonResult();
        }

        [HttpGet]
        public JsonResult GetOfficePage(int? id)
        {
            var db = new DataContext();
            var office = db.Office.Where(t => t.Id == id).FirstOrDefault();
            if (office == null)
            {
                office = new Office();
            }
            return new JsonResult { Data = office, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }

        public ActionResult ShowSelectedOffice()
        {
            return View();
        }
    }
}