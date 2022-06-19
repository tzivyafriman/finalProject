using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.dto
{
    public class HistoryDTO
    {
        public int IdUser { get; set; }
        public string UserName { get; set; }
        public DateTime? DateMeal { get; set; }
        public int? IdFood { get; set; }
        public string FoodName { get; set; }
        public int? Quantity { get; set; }
        public int IdMeal { get; set; }
        public string MealName { get; set; }

    }
}
