using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRentalWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class EngineTypeAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EngineType",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EngineType",
                table: "Cars");
        }
    }
}
