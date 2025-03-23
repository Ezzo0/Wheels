using CarRentalWebAPI.DTO;
using CarRentalWebAPI.IRepository;
using CarRentalWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalWebAPI.Repository
{
    public class BookingRepository:IBookingRepository
    {
        private readonly ApplicationContext context;

        public BookingRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public async Task<List<UserBookingListDTO>> GetAllUserBookingsAsync(string userId)
        {
            var getAllUserBookings = await context.Bookings.Where(booking => booking.UserId == userId)
                .Select(booking => new UserBookingListDTO() { 
                    BookingId = booking.BookingId,
                    Status = booking.BookingStatusNavigation.StatusName,
                    CarModel = booking.Car.Model,
                    EndDate = booking.EndDate,
                    StartDate = booking.StartDate,
                    TotalPrice  = booking.TotalPrice
                })
                .ToListAsync(); 
            return getAllUserBookings;
        }
    }
}
