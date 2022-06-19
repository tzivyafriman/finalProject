using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Interfaces
{
    public interface IUserservice
    {
        List<string> ppppppGetAllUsers();
        void addUser(UserDto u1);
        List<string> GetAllCategories();
    }
}
