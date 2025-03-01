using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalWebAPI.DTO
{
    [ModelMetadataType(typeof(CarMetaData))]
    public class NewCarDTO
    {
        public string Model { get; set; }
        public int Year { get; set; }

        public string LicensePlate { get; set; }

        public decimal DailyPrice { get; set; }
    }
}
