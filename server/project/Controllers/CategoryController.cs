using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project.dto;
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
    public class CategoryController : ControllerBase
    {
        private ICategoryService CategoryServices;
        public CategoryController(ICategoryService CategoryServices2)
        {
            this.CategoryServices = CategoryServices2;
        }
        //שמות וקוד ארוחות
        [HttpGet]
        [Route("[action]")]
        public List<CategoryDTO> GetAllCategories() => CategoryServices.GetAllCategories();
        //קבלת שמות ארוחות
        [HttpGet]
        [Route("[action]")]
        public List<string> GetAllCategoriesNames() => CategoryServices.GetAllCategoriesNames();
        
    }
}
