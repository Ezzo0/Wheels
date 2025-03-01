using CarRentalWebAPI.DTO;
using CarRentalWebAPI.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;

namespace CarRentalWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly JwtOptions jwtOptioins;

        public AccountController(UserManager<ApplicationUser> userManager, JwtOptions jwtOptioins)
        {
            this.userManager = userManager;
            this.jwtOptioins = jwtOptioins;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginDTO account)
        {
            ApplicationUser user;
            var emailValidator = new EmailAddressAttribute();
            if (emailValidator.IsValid(account.UserName))
            {
                var x = await userManager.FindByEmailAsync(account.UserName);
                if (x is null || !await userManager.CheckPasswordAsync(x , account.Password)) return BadRequest("Wrong Email or password");
                user = x;
            }
            else
            {
                var x = await userManager.FindByIdAsync(account.UserName);
                if (x is null || !await userManager.CheckPasswordAsync(x, account.Password)) return BadRequest("Wrong Username or password");
                user = x;
            }
            var securityHandler = new JwtSecurityTokenHandler(); // object to deal with jwt ( create , serialize )
            
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptioins.SecretKey)); // serialize the secretkey
            
            var jwtHeader = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            
            var claims = new ClaimsIdentity(JwtBearerDefaults.AuthenticationScheme);
            claims.AddClaim(new Claim(ClaimTypes.GivenName, user.FirstName));
            claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
            claims.AddClaim(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            
            var roles = await userManager.GetRolesAsync(user);
            foreach(var role in roles)
            {
                claims.AddClaim(new Claim(ClaimTypes.Role, role));
            }

            SecurityTokenDescriptor descriptor = new()
            {
                Issuer = jwtOptioins.Issuer,
                Audience = jwtOptioins.Audience,
                SigningCredentials = jwtHeader, // algorithm and secret key 
                Subject = claims,
                Expires = DateTime.Now.AddDays(1)
            };

            var secureToken = securityHandler.CreateJwtSecurityToken(descriptor); // this returns the JWT
            var token = securityHandler.WriteToken(secureToken); // this serialize it into string 
            return Ok(new { token });
        }
    }
}
