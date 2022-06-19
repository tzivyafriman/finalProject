using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class Food
    {
        public Food()
        {
            Histories = new HashSet<History>();
            NutritionalValuesFoods = new HashSet<NutritionalValuesFood>();
        }

        public int IdFood { get; set; }
        public string FoodName { get; set; }
        public int IdCategory { get; set; }
        public byte[] Picture { get; set; }

        public virtual Category IdCategoryNavigation { get; set; }
        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<NutritionalValuesFood> NutritionalValuesFoods { get; set; }
    }
}
