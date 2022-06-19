using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class Category
    {
        public Category()
        {
            Foods = new HashSet<Food>();
            MealCategories = new HashSet<MealCategory>();
        }

        public int IdCategory { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Food> Foods { get; set; }
        public virtual ICollection<MealCategory> MealCategories { get; set; }
    }
}
