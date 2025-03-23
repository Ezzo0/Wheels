namespace CarRentalWebAPI.Models
{
    using System;

    public class LocationGenerator
    {
        private static readonly Random random = new Random();

        // Coordinates of Faculty of Electronic Engineering, Menouf
        private const double CenterLat = 30.4622;
        private const double CenterLon = 30.9335;
        private const double EarthRadius = 6378137; // Radius of Earth in meters

        public static (double Latitude, double Longitude) GenerateRandomLocation()
        {
            double maxOffset = 500.0; // Maximum radius in meters (500m)

            // Generate random distance and angle
            double distance = random.NextDouble() * maxOffset;
            double angle = random.NextDouble() * 2 * Math.PI; // Random angle (0 to 2π)

            // Convert meters to degrees
            double deltaLat = (distance * Math.Cos(angle)) / EarthRadius * (180 / Math.PI);
            double deltaLon = (distance * Math.Sin(angle)) / (EarthRadius * Math.Cos(CenterLat * Math.PI / 180)) * (180 / Math.PI);

            // New latitude and longitude
            double newLat = CenterLat + deltaLat;
            double newLon = CenterLon + deltaLon;

            return (newLat, newLon);
        }

    }

}
