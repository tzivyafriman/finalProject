using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class MealCategory
    {
        public int IdMeal { get; set; }
        public int Idcategory { get; set; }

        public virtual Meal IdMealNavigation { get; set; }
        public virtual Category IdcategoryNavigation { get; set; }
    }
}
