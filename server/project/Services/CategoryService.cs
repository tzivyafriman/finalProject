using project.dto;
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
        myFoodContext _context;
        public CategoryService(myFoodContext context)
        {
            _context = context;
        }
        public List<CategoryDTO> GetAllCategories()
        {
            List<CategoryDTO> lc = new List<CategoryDTO>();
            foreach (var c in _context.Categories)
            {
                CategoryDTO c1 = new CategoryDTO();
                c1.CategoryName = c.CategoryName;
                c1.IdCategory = c.IdCategory;
                lc.Add(c1);
            }
            return lc;
        }
    }
}
