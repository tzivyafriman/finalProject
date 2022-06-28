using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealsController : ControllerBase
    {
        private readonly IMapper _mapper;
        public MealsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        myFoodContext context = new myFoodContext();

        [HttpGet]
        //[Route("[action]")]
        public List<MealDto> GetAllMeals()
        {
            var meals = context.Meals.ToList();
            foreach (var m in meals)
            {
                context.Entry(m).Collection(t => t.MealCategories).Load();

            }
            return _mapper.Map<List<Meal>,List<MealDto>>(meals);
        }

        //[HttpGet]
        //public List<MealDto> GetAllMeals() =>(List<MealDto>)context.Meals.ToList();

        //[HttpGet("{id}")]
        //[Route("[action]")]
        //public Meal getMealById(int id)
        //{
        //    return context.Meals.First(m => m.IdMeal == id);
        //}

        [HttpPost]
        [Route("[action]")]
        public void addMeal(MealDto m1)
        {
            Meal m = _mapper.Map<MealDto, Meal>(m1);
            //m.MealName = m1.MealName;
            context.Meals.Add(m);
            context.SaveChanges();
            //אם מה שהתקנו היה אמור לחסוך את זה
            foreach (var c in m1.CategoryListId)
            {
                MealCategory m2 = new MealCategory();
                m2.IdMeal = m.IdMeal;
                m2.Idcategory = c;
                context.MealCategories.Add(m2);
                // נראה שעובד , אז למה היה פה דיבוג?????
                context.Meals.FirstOrDefault(m3 => m3.IdMeal == m2.IdMeal).MealCategories.Add(m2);
            }
            context.SaveChanges();
        }

    }
}
