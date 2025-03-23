using CarRentalWebAPI.DTO;
using CarRentalWebAPI.Models;

namespace CarRentalWebAPI.IRepository
{
    public interface IBookingRepository
    {
        public Task<List<UserBookingListDTO>> GetAllUserBookingsAsync(string userId);
    }
}
