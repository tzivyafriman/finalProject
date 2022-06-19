using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class MealDto
    {
        public MealDto()
        {

        }

        public int IdMeal { get; set; }
        public string MealName { get; set; }
        public List<int> CategoryList { get; set; }
        //public virtual ICollection<MealCategory> MealCategories { get; set; }
        //public virtual ICollection<TypesMealsUser> TypesMealsUsers { get; set; }
    }
}
