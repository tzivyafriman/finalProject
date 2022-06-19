using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class User
    {
        public User()
        {
            Histories = new HashSet<History>();
            NutritionalValuesUsers = new HashSet<NutritionalValuesUser>();
            TypesMealsUsers = new HashSet<TypesMealsUser>();
        }

        public int IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int PasswordUser { get; set; }

        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<NutritionalValuesUser> NutritionalValuesUsers { get; set; }
        public virtual ICollection<TypesMealsUser> TypesMealsUsers { get; set; }
    }
}
