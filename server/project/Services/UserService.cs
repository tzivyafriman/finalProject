using AutoMapper;
using project.Interfaces;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Services
{
    public class UserService: IUserservice
    {
        private readonly IMapper _mapper;
        myFoodContext _context;

        public UserService(IMapper mapper, myFoodContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        List<string> l;
        public List<string> GetAllUsers()=> _context.Users.Select(u => u.FirstName).ToList();
        public void addUser(UserDto u1)
        {
            User u = _mapper.Map<UserDto,User>(u1);
            _context.Users.Add(u);
            _context.SaveChanges();
        }
        public List<string> GetAllCategories() => _context.Categories.Select(c => c.CategoryName).ToList();
    }
}
