using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Client;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;

namespace CarRentalWebAPI.Models
{
    public class BasicAuthentication : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        public BasicAuthentication(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder) : base(options, logger, encoder)
        {
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if (!Request.Headers.ContainsKey("Authorization"))
                return Task.FromResult(AuthenticateResult.Fail("TryAgain"));
            string base64account = Request.Headers["Authorization"].ToString();
            if(!base64account.StartsWith("Basic " , StringComparison.OrdinalIgnoreCase))
            {
                return Task.FromResult(AuthenticateResult.Fail("Try Again with a valid scheme"));
            }
            var encodedAccount = base64account["Basic ".Length..];
            var decodedAccount = Encoding.UTF8.GetString(Convert.FromBase64String(encodedAccount));
            var account = decodedAccount.Split(":");
            if (account[0] == "mahmoud" && account[1] == "123")
            {
                ClaimsIdentity claims = new(new List<Claim>
                {
                    new Claim(ClaimTypes.Name , "mahmoud reda"),
                    new Claim(ClaimTypes.NameIdentifier , Guid.NewGuid().ToString())
                });
                ClaimsPrincipal claimsPrincipal = new ClaimsPrincipal(claims);
                var ticket = new AuthenticationTicket(claimsPrincipal, "Basic");
                return Task.FromResult(AuthenticateResult.Success(ticket));
            }
            // and this takes the byte array and convert it into string 
            return Task.FromResult(AuthenticateResult.Fail("Wrong email or password"));
        }
    }
}
