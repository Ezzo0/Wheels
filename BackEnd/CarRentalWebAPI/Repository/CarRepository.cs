using CarRentalWebAPI.IRepository;
using CarRentalWebAPI.Models;

namespace CarRentalWebAPI.Repository
{
    public class CarRepository : ICarRepository
    {
        private readonly ApplicationContext context;

        public CarRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public async Task AddCar(Car car)
        {
            context.Add(car);
            await context.SaveChangesAsync();
        }

        public Car GetCar(Guid id)
        {
            Car car = context.Cars.FirstOrDefault(x=>x.CarId == id) ?? new Car();
            return car;
        }
    }
}
