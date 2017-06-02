using System.Web;
using System.Web.Optimization;

namespace hmm
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            // --------------------------
            // - STYLE > LIB            -
            // --------------------------

            // Lib > Bootstrap
            bundles.Add(new StyleBundle("~/Content/Bootstrap").Include(
                      "~/Content/Css/Lib/bootstrap.min.css"));

            // --------------------------
            // - STYLE > COMPONENTS     -
            // --------------------------

            // Components > OfferendNavbar
            bundles.Add(new StyleBundle("~/Content/Css/Components").Include(
                      "~/Content/Css/Components/offerend-navbar.css",
                      "~/Content/Css/Icons/offerend-font.css",
                      "~/Content/Css/Components/offerend-loading-icon.css"));


            // --------------------------
            // - STYLE > THEMES         -
            // --------------------------

            bundles.Add(new StyleBundle("~/Content/Css/Themes").Include(
                      "~/Content/Css/Bootstrap/Themes/forms.css",
                      "~/Content/Css/Bootstrap/Themes/buttons.css",
                      "~/Content/Css/Bootstrap/Themes/alerts.css",
                      "~/Content/Css/Bootstrap/Themes/navbar.css"));


            // --------------------------
            // - STYLE > VIEWS          -
            // --------------------------

            //Views > Home
            bundles.Add(new StyleBundle("~/Content/Css/Views/Home").Include(
                      "~/Content/Css/Views/Home/home.css"));

            //Views > Offices
            bundles.Add(new StyleBundle("~/Content/Css/Views/offices").Include(
                      "~/Content/Css/Views/Offices/offices.css"));

            //Views > MyOffices
            bundles.Add(new StyleBundle("~/Content/Css/Views/myOffices").Include(
                      "~/Content/Css/Views/MyOffices/my-offices.css"));

            //Views > HowTo
            bundles.Add(new StyleBundle("~/Content/Css/Views/HowTo").Include(
                      "~/Content/Css/Views/HowTo/how-to.css"));




            // --------------------------
            // - SCRIPTS > LIB          -
            // --------------------------

            //Lib > Angular + Angular-Boostrap + Angular-Animate
            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                        "~/Scripts/Lib/angular.js",
                        "~/Scripts/Lib/ui-bootstrap-tpls.js",
                        "~/Scripts/Lib/angular-animate.js",
                        "~/Scripts/Lib/angular-route.min.js"));


            // --------------------------
            // - SCRIPTS > APPS         -
            // --------------------------

            //Apps > Default
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default").Include(
                        "~/Scripts/angular/Apps/Default/app.js"));

            //Apps > Login
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/UserControllers").Include(
                        "~/Scripts/angular/Apps/Login/app.js",
                        "~/Scripts/angular/Apps/Login/Controllers/RegisterController.js",
                        "~/Scripts/angular/Apps/Login/Controllers/LoginController.js"));

            //Apps > Offices
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/OfficeController").Include(
                        "~/Scripts/angular/Apps/Offices/app.js",
                        "~/Scripts/angular/Apps/Offices/Controllers/OfficeController.js"));

            //Apps > Global
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/GlobalController").Include(
                        "~/Scripts/angular/Apps/Global/app.js",
                        "~/Scripts/angular/Apps/Global/Controllers/GlobalController.js"));


            // --------------------------
            // - SCRIPTS > SERVICES     -
            // --------------------------

            //Angular > Default > Services > OfficeService
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Services/OfficeService").Include(
                        "~/Scripts/angular/Apps/Default/Services/OfficeService.js"));

            //Angular > Default > Services > LoginService
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Services/LoginService").Include(
                        "~/Scripts/angular/Apps/Default/Services/LoginService.js"));


            // --------------------------
            // - SCRIPTS > DIRECTIVES   -
            // --------------------------

            //Angular > Default > Directives > CheckUsername
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Directives/CheckUsername").Include(
                        "~/Scripts/angular/Apps/Default/Directives/CheckUsername.js"));

            //Angular > Default > Directives > PasswordMatch
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Directives/PasswordMatch").Include(
                        "~/Scripts/angular/Apps/Default/Directives/PasswordMatch.js"));

            //Angular > Default > Directives > LoadingSpinner
            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Directives/LoadingSpinner").Include(
                        "~/Scripts/angular/Apps/Default/Directives/LoadingSpinner.js"));

            bundles.Add(new ScriptBundle("~/bundles/Scripts/Apps/Default/Directives/AngularTooltip").Include(
                        "~/Scripts/angular/Apps/Default/Directives/AngularTooltip.js"));







            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));
        }
    }
}
