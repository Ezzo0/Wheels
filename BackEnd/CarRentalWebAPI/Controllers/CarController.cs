using CarRentalWebAPI.AdminDTO;
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
    public class CarController : ControllerBase
    {
        private readonly ICarRepository carRepository;

        public CarController(ICarRepository carRepository)
        {
            this.carRepository = carRepository;
        }
        [HttpPost("admin/addcar")]
        //[Authorize(Roles ="admin")]
        public async Task<IActionResult> AddNewCarAdmin(AdminNewCarDTO adminNewCarDTO)
        {

            Car newCar = new Car()
            {
                CreatedDate = DateTime.Now,
                DailyPrice = adminNewCarDTO.DailyPrice,
                LicensePlate = adminNewCarDTO.LicensePlate,
                Year = adminNewCarDTO.Year,
                Model = adminNewCarDTO.Model,
                OwnerId = adminNewCarDTO.ownerId
            };
            await carRepository.AddCar(newCar);
            return Created($"http://localhost:5232/api/Car/{newCar.CarId}" , newCar);
        }

        [HttpPost("user/addcar")]
        [Authorize(Roles = "user")]
        public IActionResult AddNewCarAdmin(NewCarDTO carDTO)
        {
            Car newCar = new Car()
            {
                CreatedDate = DateTime.Now,
                DailyPrice = carDTO.DailyPrice,
                LicensePlate = carDTO.LicensePlate,
                Year = carDTO.Year,
                Model = carDTO.Model,
                OwnerId = User.Claims.First(x => x.Type == "userid").Value
            };
            carRepository.AddCar(newCar);
            return Created($"http://localhost:5232/api/Car/{newCar.CarId}", newCar);
        }

        [HttpGet("{id}")]
        public IActionResult GetCar(Guid id)
        {
            var x = carRepository.GetCar(id);
            return Ok(x);
        }
    }
}
