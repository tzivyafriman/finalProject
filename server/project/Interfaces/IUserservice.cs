using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Interfaces
{
    public interface IUserservice
    {
        List<string> GetAllUsers();
        int Login(UserDto u1);
        void AddUser(UserDto u1);
        

    }
}
