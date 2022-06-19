using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class TypesMealsUser
    {
        public int IdUser { get; set; }
        public int IdMeal { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }

        public virtual Meal IdMealNavigation { get; set; }
        public virtual User IdUserNavigation { get; set; }
    }
}
