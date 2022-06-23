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
        public List<string> CategoryListName { get; set; }
        public List<int> CategoryListId { get; set; }
        //public List<stri MyProperty { get; set; }
        //public virtual ICollection<MealCategory> MealCategories { get; set; }
        //public virtual ICollection<TypesMealsUser> TypesMealsUsers { get; set; }
    }
}
