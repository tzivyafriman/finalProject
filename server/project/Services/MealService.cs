using AutoMapper;
using project.Interfaces;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Services
{
    public class MealService: IMealService
    {
        private readonly IMapper _mapper;
        private  int x;
        myFoodContext _context;
        public MealService(IMapper mapper, myFoodContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public List<MealDTO> GetAllMeals()
        {
            //זה לא עובד 
            //פונ' שהיתה טובה לפני שהחלפנו את מבנה 
            //mealDTO
            //לברר איך בדיוק נכון לכתוב אותו ומה לשנות
           
            var meals = _context.Meals.ToList();
            foreach (var m in meals)
            {
                _context.Entry(m).Collection(t => t.MealCategories).Load();
            }
            return _mapper.Map< List<Meal>,List<MealDTO> >(meals);
        }

        public void AddMeal(MealDTO m1)
        {
            Meal m = _mapper.Map<MealDTO, Meal>(m1);
            _context.Meals.Add(m);
            _context.SaveChanges();
        }

        public bool CheekMealName(string mealName)
        {
            foreach (Meal m in _context.Meals)
            {
                if (m.MealName.Equals(mealName))
                    return true;
            }
            return false;
        }
    }
}


