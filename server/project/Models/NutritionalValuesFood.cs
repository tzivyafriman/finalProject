using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class NutritionalValuesFood
    {
        public int IdFood { get; set; }
        public int IdValue { get; set; }
        public int? QuantityForOne { get; set; }
        public int? For100g { get; set; }

        public virtual Food IdFoodNavigation { get; set; }
        public virtual NutritionalValue IdValueNavigation { get; set; }
    }
}
