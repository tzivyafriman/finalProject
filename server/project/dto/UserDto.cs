using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Models
{
    public class UserDto
    {
        public UserDto()
        {

        }
        public int IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int PasswordUser { get; set; }

    }
}
