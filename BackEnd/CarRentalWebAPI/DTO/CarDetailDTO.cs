using CarRentalWebAPI.Models;

namespace CarRentalWebAPI.DTO
{
    public class CarDetailDTO
    {
        public Guid CarId { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Model { get; set; }
        public bool Available { get; set; }
        public double Rating { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string EngineType { get; set; }
        public int Year { get; set; }
        public DateTime CreatedDate { get; set; }

        public List<Review> Reviews { get; set; }
        public List<string> Images { get; set; }
    }
}
