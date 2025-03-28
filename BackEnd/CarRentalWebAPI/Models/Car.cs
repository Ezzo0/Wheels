﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Spatial;
namespace CarRentalWebAPI.Models;

[Index("LicensePlate", Name = "UQ__Cars__026BC15C85E7F6FB", IsUnique = true)]
[ModelMetadataType(typeof(CarMetaData))]
public partial class Car
{
    [Key]
    public Guid CarId { get; set; }
    public string EngineType { get; set; }

    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string Model { get; set; }

    public int Year { get; set; }

    public string Description { get; set; }
    public string LicensePlate { get; set; }

    [Column(TypeName = "decimal(10, 2)")]
    public decimal DailyPrice { get; set; }

    public bool IsAvailable { get; set; } = true;

    [Column(TypeName = "datetime")]
    public DateTime CreatedDate { get; set; }

    public bool IsDeleted { get; set; } = false;

    public double CarCurrentRate { get; set; } = 0;

    public int NumberOfReviews { get; set; } = 0;

    [InverseProperty("Car")]
    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public List<string> Photos { get; set; } = new();
    public List<Review> Reviews { get; set; } = new();
}