
using CarRentalWebAPI.IRepository;
using CarRentalWebAPI.Models;
using CarRentalWebAPI.Repository;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace CarRentalWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddControllers();

            builder.Services.AddDbContext<ApplicationContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("main"));
            });
            #region SecurityJWT

            builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
            .AddEntityFrameworkStores<ApplicationContext>();
            var jwtOptions = builder.Configuration.GetSection("Jwt").Get<JwtOptions>();
            builder.Services.AddSingleton(jwtOptions);
            builder.Services.AddAuthentication(options => { options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; }).AddJwtBearer
            (JwtBearerDefaults.AuthenticationScheme, options =>
            {
                options.SaveToken = true;
                options.TokenValidationParameters = new()
                {
                    ValidateIssuer = true,
                    ValidIssuer = jwtOptions?.Issuer,

                    ValidateAudience = true,
                    ValidAudience = jwtOptions?.Audience,

                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.SecretKey)),

                    ValidateLifetime = true,
                    RequireExpirationTime = true, // Ensure the token has an expiration
                    ClockSkew = TimeSpan.Zero, // Prevents the default 5-minute leeway for expired tokens

                    RequireSignedTokens = true // Ensure tokens are signed
                };

            }); 
            #endregion


            builder.Services.AddScoped<ICarRepository, CarRepository>();
            builder.Services.AddScoped<IBookingRepository, BookingRepository>();


            var app = builder.Build();

            app.UseStaticFiles();
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
