using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using project.Interfaces;
using project.Models;
using project.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserservice UserService;
        //private readonly IMapper _mapper;
        public UsersController(IUserservice userService2)
        {
            this.UserService = userService2;
        }

        List<string> l;

        //myFoodContext context = new myFoodContext();
        [HttpGet]
        public List<string> GetAllUsers()
        {
            return UserService.GetAllUsers();
        }
        //public List<string> GetAllUsers()=> context.Users.Select(u => u.FirstName).ToList();

        [HttpPost]
        [Route("[action]")]
        public void addUser(UserDto u1)
        {
            UserService.addUser(u1);
            //User u = _mapper.Map<UserDto,User>(u1);
            //context.Users.Add(u);
            //context.SaveChanges();
        }
        [HttpGet]
        [Route("[action]")]
        public List<string> GetAllCategories() => UserService.GetAllCategories();
        //public List<string> GetAllCategories() => context.Categories.Select(c => c.CategoryName).ToList();
       
        /*public void update()
        {
            context.Users.Update(u => u.)
        }*/


        /*[HttpGet]
        public string GetUser() => context.Users.Where(u => u.FirstName.Equals("dasi")).ToString();
        */


        //[HttpGet]
        /*public bool login(String name,String password)
        {
           return(context.Users.Select(u => name.Equals(u.FirstName) && password.Equals(u.PasswordUser))!=null);
        }*/

        /*public string GetUser()
        {
            return context.Users.Select();
        }*/

        /*public void login()
        {

        }
        [HttpPost]
        public void addUser(int idUser, string firstName, string lastName, int password)
        {
            User u = new User(idUser,firstName,lastName,password);
            context.Users.Add(u);
        }*/

    }
}
