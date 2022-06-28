using project.dto;
using AutoMapper;
using project.Interfaces;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Services
{
    public class CategoryService: ICategoryService
    {
        private readonly IMapper _mapper;
        myFoodContext _context;
        public CategoryService(IMapper mapper, myFoodContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public List<CategoryDTO> GetAllCategories()
        {
            List<CategoryDTO> lc = new List<CategoryDTO>();
            foreach (var c in _context.Categories)
            {
                lc.Add(_mapper.Map<Category, CategoryDTO>(c));
            }

            return lc;
        }
        public List<string> GetAllCategoriesNames() => _context.Categories.Select(c => c.CategoryName).ToList();
    }
}
