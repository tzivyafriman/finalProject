using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class History
    {
        public int IdUser { get; set; }
        public DateTime? DateMeal { get; set; }
        public int? IdFood { get; set; }
        public int? Quantity { get; set; }
        public int IdMeal { get; set; }

        public virtual Food IdFoodNavigation { get; set; }
        public virtual Meal IdMealNavigation { get; set; }
        public virtual User IdUserNavigation { get; set; }
    }
}
