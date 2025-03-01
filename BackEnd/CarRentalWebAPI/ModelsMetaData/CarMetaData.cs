
using CarRentalWebAPI.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public partial class CarMetaData
{

    [Required]
    [StringLength(450)]
    public string OwnerId { get; set; }

    [Required]
    [StringLength(500)]
    public string Model { get; set; }

    [Required]
    [StringLength(20)]
    public string LicensePlate { get; set; }

    [Column(TypeName = "decimal(10, 2)")]
    public decimal DailyPrice { get; set; }

}