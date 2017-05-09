using System.Web;
using System.Web.Optimization;

namespace hmm
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            //Bootstrap > Bundle
            bundles.Add(new StyleBundle("~/Content/Bootstrap").Include(
                      "~/Content/bootstrap.min.css"));

            //Content > Layout
            bundles.Add(new StyleBundle("~/Content/Css/Layout").Include(
                      "~/Content/Css/Layout/layout.css",
                      "~/Content/Css/Layout/navbar.css",
                      "~/Content/Css/Icons/offerend-font.css"));

            //Content > Themes
            bundles.Add(new StyleBundle("~/Content/Css/Themes").Include(
                      "~/Content/Css/Bootstrap/Themes/forms.css",
                      "~/Content/Css/Bootstrap/Themes/buttons.css"));









            //Scripts > Angular
            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                        "~/Scripts/angular/angular.js",
                        "~/Scripts/angular/ui-bootstrap-tpls.js",
                        "~/Scripts/angular/angular-animate.js"));


            //Angular > Default
            bundles.Add(new ScriptBundle("~/bundles/Default").Include(
                        "~/Scripts/angular/Default/app.js"));

            //Angular > LoginRegisterController
            bundles.Add(new ScriptBundle("~/bundles/LoginRegisterController").Include(
                        "~/Scripts/angular/Login/app.js",
                        "~/Scripts/angular/Login/Controllers/LoginRegisterController.js"));




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
