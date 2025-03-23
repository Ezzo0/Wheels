namespace CarRentalWebAPI.DTO
{
    public class CarListDTO
    {
        public decimal Price { get; set; }
        public Guid CarId { get; set; }
        public string Model { get; set; }
        public List<string> Images { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string EngineType { get; set; }
        public DateTime CreatedDate { get; set; }

        public int Year { get; set; }
    }
}
