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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("delete from [aspnetroles]");
        }
    }
}
