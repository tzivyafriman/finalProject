using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class Meal
    {
        public Meal()
        {
            Histories = new HashSet<History>();
            MealCategories = new HashSet<MealCategory>();
            TypesMealsUsers = new HashSet<TypesMealsUser>();
        }

        public int IdMeal { get; set; }
        public string MealName { get; set; }

        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<MealCategory> MealCategories { get; set; }
        public virtual ICollection<TypesMealsUser> TypesMealsUsers { get; set; }
    }
}
