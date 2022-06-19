using AutoMapper;
using project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.dto
{
    public class MyProfile: Profile
    {
        public MyProfile()
        {
            CreateMap <User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<MealDto, Meal>();
            CreateMap<Meal, MealDto>().ForMember(dest => dest.CategoryList,src=>src.MapFrom(o=>o.MealCategories.Select(c=>c.IdMeal)));
            CreateMap<History, HistoryDTO>().ForMember(dest=>dest.FoodName,src=>src.MapFrom(p=>p.IdFoodNavigation.FoodName));
            CreateMap<HistoryDTO, History>();

            //CreateMap<>
        }
    }
}
