using CarRentalWebAPI.DTO;
using CarRentalWebAPI.IRepository;
using CarRentalWebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarRepository carRepository;

        public CarsController(ICarRepository carRepository)
        {
            this.carRepository = carRepository;
        }


        [HttpPost("addcar")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddNewCarAdmin(NewCarDTO carDTO)
        {
            var CarId = await carRepository.AddCarAsync(carDTO);
            return Created($"http://localhost:5232/api/Cars/{CarId}", carDTO);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCarById(Guid id)
        {
            var Car = await carRepository.GetCarByIdAsync(id);
            return Ok(Car);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var AllCars = await carRepository.GetAllCarsAsync();
            return Ok(AllCars);
        }
        [HttpGet("lastAdded/{num?}")]
        public async Task<IActionResult> GetLastAdded(int num = 10)
        {
            var lastAddedCars = await carRepository.GetLastCarsAsync(num);
            return Ok(lastAddedCars);
        }

    }
}
