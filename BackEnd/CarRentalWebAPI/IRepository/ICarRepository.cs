using CarRentalWebAPI.Models;

namespace CarRentalWebAPI.IRepository
{
    public interface ICarRepository
    {
        public Car GetCar(Guid id);
        public Task AddCar(Car car);
    }
}
