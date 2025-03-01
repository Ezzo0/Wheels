using System.ComponentModel.DataAnnotations;

namespace CarRentalWebAPI.DTO
{
    public class LoginDTO
    {
        [Display(Name ="User Name")]
        public required string UserName { get; set; }
        public required string Password { get; set; }   
    }
}
