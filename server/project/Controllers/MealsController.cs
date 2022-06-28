using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using project.Interfaces;

namespace project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealsController : ControllerBase
    {
        private IMealService MealService;
        public MealsController(IMealService MealService2)
        {
            this.MealService = MealService2;
        }

        [HttpGet]
        [Route("[action]")]
        public List<MealDTO> GetAllMeals()
        {
            return MealService.GetAllMeals();
        }
        //public string GetIdReturnName(int idCategory)
        //{
        //    return context.Categories.Find(idCategory).CategoryName;
        //}
    //    foreach (var m in GetAllMeals())
//        {
//            List<string> l;
//            foreach (var c in m.CategoryListId)
//            {
//                l.Add(GetIdReturnName(c));
//            }
//            m.CategoryListName = l;
//        }




//[HttpGet]
//public List<MealDTO> GetAllMeals() =>(List<MealDTO>)context.Meals.ToList();

//[HttpGet("{id}")]
//[Route("[action]")]
//public Meal getMealById(int id)
//{
//    return context.Meals.First(m => m.IdMeal == id);
//}

        [HttpPost]
        [Route("[action]")]
        public void addMeal(MealDTO m1)
        {
            MealService.AddMeal(m1);
        }
        [HttpPost]
        [Route("[action]")]
        public bool cheekMealName(string mealName)
        {
            return MealService.CheekMealName(mealName);
        }


        //addmeal- נראה לנו שאפשר לותר
        //אם מה שהתקנו היה אמור לחסוך את זה
        //foreach (var c in m1.CategoryListId)
        //{
        //    MealCategory m2 = new MealCategory();
        //    m2.IdMeal = m.IdMeal;
        //    m2.Idcategory = c;
        //    context.MealCategories.Add(m2);
        //    // נראה שעובד , אז למה היה פה דיבוג?????
        //    context.Meals.FirstOrDefault(m3 => m3.IdMeal == m2.IdMeal).MealCategories.Add(m2);
        //}
    }
}
