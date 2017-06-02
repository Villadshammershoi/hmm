using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hmm.Controllers
{
    public class MasterController : Controller
    {
        public string displayUser()
        {
            return User.Identity.Name;
        }

        public bool isLoggedIn()
        {
            return (System.Web.HttpContext.Current.User != null) && System.Web.HttpContext.Current.User.Identity.IsAuthenticated;
        }
    }
}