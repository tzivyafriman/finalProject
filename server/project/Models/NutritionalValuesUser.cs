using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class NutritionalValuesUser
    {
        public int IdValue { get; set; }
        public int IdUser { get; set; }
        public int? Quantity { get; set; }
        public int MinOrMax { get; set; }

        public virtual User IdUserNavigation { get; set; }
        public virtual NutritionalValue IdValueNavigation { get; set; }
    }
}
