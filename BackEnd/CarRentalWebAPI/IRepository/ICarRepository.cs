using CarRentalWebAPI.DTO;
using CarRentalWebAPI.Models;

namespace CarRentalWebAPI.IRepository
{
    public interface ICarRepository
    {
        public Task<List<CarListDTO>> GetAllCarsAsync();
        public Task<List<CarListDTO>> GetLastCarsAsync(int leastCarsNeeded = 10);
        public Task<CarDetailDTO> GetCarByIdAsync(Guid id);
        public Task<Guid> AddCarAsync(NewCarDTO car);
    }
}
