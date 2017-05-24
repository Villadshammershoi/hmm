using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hmm.Controllers
{
    [Route("my-offices")]
    public class MyOfficesController : Controller
    {
        // GET: MyOffices
        
        public ActionResult Index()
        {
            return View();
        }
    }
}