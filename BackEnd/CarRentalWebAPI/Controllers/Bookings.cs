using CarRentalWebAPI.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Bookings : ControllerBase
    {
        private readonly IBookingRepository bookingRepository;

        public Bookings(IBookingRepository bookingRepository)
        {
            this.bookingRepository = bookingRepository;
        }
        [HttpGet("userId")]
        public async Task<IActionResult> GetAllUserBookings(string userId)
        {
            var AllUserBookings = await bookingRepository.GetAllUserBookingsAsync(userId);
            return Ok(AllUserBookings);
        }
    }
}
