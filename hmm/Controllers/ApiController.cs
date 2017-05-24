using hmm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hmm.Controllers
{
    
    public class ApiController : Controller
    {
        // GET: api
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult OfferendUser(string username, string password, string confirmPassword, string email, string confirmEmail, string validationMessage, string registerSuccessMessage)
        {
            return View();
        }

        public ApplicationDbContext Database = new ApplicationDbContext();
        [HttpGet]
        [Route("api/CheckUsername/{id}")]
        public ApplicationUser CheckUsername(string id) //Returnere true hvis der findes en bruger
        {
            if (Database.Users.Where(p => p.UserName == id).Any())//HVis der findes nogen
            {
                return Database.Users.Where(p => p.UserName == id).FirstOrDefault();
            }
            else//Hvis der ikke findes nogen
            {
                return null;
            }
        }


        ////test
        //[HttpPost]
        //public JsonResult Test(string id)
        //{
        //    if (db.Users.Where(p => p.Id == id).Any())
        //    {

        //        return Json(db.Users.Where(P => P.Id == id).FirstOrDefault());
        //    }
        //    var res = User.Identity.GetUserId();
        //    return Json(db.Users.Where(P => P.Id == res).FirstOrDefault());
        //}
    }
}