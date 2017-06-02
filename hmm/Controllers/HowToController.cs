using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hmm.Controllers
{
    public class HowToController : MasterController
    {
        // GET: HowTo
        public ActionResult Index()
        {
            return View();
        }
    }
}