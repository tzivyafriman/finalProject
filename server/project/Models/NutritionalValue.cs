using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class NutritionalValue
    {
        public NutritionalValue()
        {
            NutritionalValuesFoods = new HashSet<NutritionalValuesFood>();
            NutritionalValuesUsers = new HashSet<NutritionalValuesUser>();
        }

        public int IdValue { get; set; }
        public string ValueName { get; set; }

        public virtual ICollection<NutritionalValuesFood> NutritionalValuesFoods { get; set; }
        public virtual ICollection<NutritionalValuesUser> NutritionalValuesUsers { get; set; }
    }
}
