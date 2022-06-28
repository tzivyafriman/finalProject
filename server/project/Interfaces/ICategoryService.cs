using project.dto;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Interfaces
{
    public interface ICategoryService
    {
        List<CategoryDTO> GetAllCategories();
        List<string> GetAllCategoriesNames();
    }
}
