using project.dto;
using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class MealDTO
    {
        public MealDTO()
        {

        }

        public int IdMeal { get; set; }
        public string MealName { get; set; }
        public List<MealCategoryDTO> MealCategories { get; set; }
        //public List<string> CategoryListName { get; set; }
        //public List<int> CategoryListId { get; set; }


        //public List<stri MyProperty { get; set; }
        //public virtual ICollection<TypesMealsUser> TypesMealsUsers { get; set; }
    }
}
