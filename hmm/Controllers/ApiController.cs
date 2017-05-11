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
    }
}