using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Interfaces
{
    public interface IMealService
    {
        public List<MealDTO> GetAllMeals();
        public void AddMeal(MealDTO m1);
        public bool CheekMealName(string mealName);
    }
}
