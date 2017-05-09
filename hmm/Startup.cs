using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(hmm.Startup))]
namespace hmm
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
