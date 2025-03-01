using CarRentalWebAPI.Models;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRentalWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class test : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles" ,
                columns: ["Id" , "Name" , "NormalizedName" , "ConcurrencyStamp"],
                values: [Guid.NewGuid().ToString(), ApplicationUser.Roles.Admin.ToString(), ApplicationUser.Roles.Admin.ToString().ToUpper() , Guid.NewGuid().ToString()] );
            migrationBuilder.InsertData(table: "AspNetRoles",
                columns: ["Id", "Name", "NormalizedName", "ConcurrencyStamp"],
                values: [Guid.NewGuid().ToString(), ApplicationUser.Roles.User.ToString(), ApplicationUser.Roles.User.ToString().ToUpper(), Guid.NewGuid().ToString()]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("delete from [aspnetroles]");
        }
    }
}
