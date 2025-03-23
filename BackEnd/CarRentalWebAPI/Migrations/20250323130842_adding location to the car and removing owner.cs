using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRentalWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class addinglocationtothecarandremovingowner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Cars__OwnerId__52593CB8",
                table: "Cars");

            migrationBuilder.DropTable(
                name: "UserDocuments");

            migrationBuilder.DropTable(
                name: "DocumentTypes");

            migrationBuilder.DropIndex(
                name: "IX_Cars_OwnerId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "LastLogin",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "CarId",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "CarId1",
                table: "Reviews",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Cars",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Cars",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Photos",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_CarId1",
                table: "Reviews",
                column: "CarId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Cars_CarId1",
                table: "Reviews",
                column: "CarId1",
                principalTable: "Cars",
                principalColumn: "CarId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Cars_CarId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_CarId1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "CarId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "CarId1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Photos",
                table: "Cars");

            migrationBuilder.AddColumn<string>(
                name: "OwnerId",
                table: "Cars",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastLogin",
                table: "AspNetUsers",
                type: "datetime",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DocumentTypes",
                columns: table => new
                {
                    DocumentType = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Document__B987255BE8FB0C88", x => x.DocumentType);
                });

            migrationBuilder.CreateTable(
                name: "UserDocuments",
                columns: table => new
                {
                    DocumentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())"),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: false),
                    StorageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UploadDate = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getutcdate())"),
                    VerificationResult = table.Column<string>(type: "nvarchar(max)", nullable: true, defaultValueSql: "(NULL)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UserDocu__1ABEEF0FF8AA2080", x => x.DocumentId);
                    table.ForeignKey(
                        name: "FK__UserDocum__Docum__48CFD27E",
                        column: x => x.DocumentType,
                        principalTable: "DocumentTypes",
                        principalColumn: "DocumentType");
                    table.ForeignKey(
                        name: "FK__UserDocum__UserI__47DBAE45",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_OwnerId",
                table: "Cars",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_UserDocuments_DocumentType",
                table: "UserDocuments",
                column: "DocumentType");

            migrationBuilder.CreateIndex(
                name: "IX_UserDocuments_UserId",
                table: "UserDocuments",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK__Cars__OwnerId__52593CB8",
                table: "Cars",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
