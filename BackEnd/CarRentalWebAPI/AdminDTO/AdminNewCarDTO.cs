using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalWebAPI.AdminDTO
{
    [ModelMetadataType(typeof(CarMetaData))]
    public class AdminNewCarDTO
    {
        public string ownerId { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }

        public string LicensePlate { get; set; }

        public decimal DailyPrice { get; set; }
    }
}
