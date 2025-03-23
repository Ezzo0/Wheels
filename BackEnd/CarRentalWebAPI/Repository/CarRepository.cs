using CarRentalWebAPI.DTO;
using CarRentalWebAPI.IRepository;
using CarRentalWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalWebAPI.Repository
{
    public class CarRepository : ICarRepository
    {
        private readonly ApplicationContext context;

        public CarRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public async Task<Guid> AddCarAsync(NewCarDTO car)
        {
            Car newCar = new Car()
            {
                CreatedDate = DateTime.Now,
                DailyPrice = car.DailyPrice,
                LicensePlate = car.LicensePlate,
                Year = car.Year,
                Model = car.Model,
                EngineType = car.EngineType,
                
                // Photos should be implemented here !
            };
            (newCar.Latitude, newCar.Longitude) = LocationGenerator.GenerateRandomLocation();

            context.Add(newCar);
            await context.SaveChangesAsync();
            return newCar.CarId;
        }

        public async Task<List<CarListDTO>> GetAllCarsAsync()
        {
            var CarsFromDB = await context.Cars.ToListAsync();
            List<CarListDTO> Result = CarsFromDB.Where(car=>car.IsAvailable)
                .Select(car => new CarListDTO
                {
                    CarId = car.CarId,
                    Model = car.Model,
                    Year = car.Year,
                    EngineType= car.EngineType,
                    Latitude = car.Latitude,
                    Longitude = car.Longitude,
                    Price = car.DailyPrice,
                    Images = car.Photos,
                    CreatedDate = car.CreatedDate
                }).ToList();
            return Result;
        }

        public async Task<CarDetailDTO> GetCarByIdAsync(Guid id)
        {
            var CarFromDB = await context.Cars.Where(x=>x.CarId == id)
                .Select(car => new CarDetailDTO() { 
                    Available=car.IsAvailable,
                    CarId = car.CarId,
                    Model = car.Model,
                    Year = car.Year,
                    Description = car.Description,
                    EngineType=car.EngineType,
                    Latitude = car.Latitude,
                    Longitude = car.Longitude,
                    Price = car.DailyPrice,
                    Images = car.Photos,
                    CreatedDate = car.CreatedDate
                })
                .FirstOrDefaultAsync();
            return CarFromDB;
        }

        public async Task<List<CarListDTO>> GetLastCarsAsync(int leastCarsNeeded = 10)
        {
            var allCars = await GetAllCarsAsync();
            var LeastCreatedCars = allCars.OrderByDescending(cars=>cars.CreatedDate)
                .Take(leastCarsNeeded)
                .ToList();
            return LeastCreatedCars;
        }
    }
}
