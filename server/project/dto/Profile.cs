﻿using AutoMapper;
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
            CreateMap<MealDTO, Meal>();
            CreateMap<Meal, MealDTO>();
            CreateMap<MealCategoryDTO, MealCategory>();
            //CreateMap<MealDTO, Meal>().ForMember(dest=>dest.MealCategories, src => src.MapFrom(o => o.CategoryListId));
            //CreateMap<Meal, MealDTO>().ForMember(dest => dest.CategoryListId,src=>src.MapFrom(o=>o.MealCategories.Select(c=>c.Idcategory)));
            CreateMap<Category, CategoryDTO>();
            
            CreateMap<History, HistoryDTO>().ForMember(dest=>dest.FoodName,src=>src.MapFrom(p=>p.IdFoodNavigation.FoodName));
            CreateMap<HistoryDTO, History>();




            //foreach (var cli in CategoryListId)
            //{
            //}
            //CreateMap<(Meal, Category), MealDto >().ForMember(dest => dest.Categories, src => src .MapFrom(o => o.Item2.CategoryName.Select(c => c.)));
            //CreateMap<(MealDto, Category), MealDto>().ForMember(dest => dest.CategoryListName, src => src.MapFrom(o => o.Item2.IdCategory.se   .Item1.CategoryListId.ForEach(ci=>ci == o.Item2.IdCategory);
            ///CreateMap<Category, MealDto>().ForMember(dest => dest.CategoryListName, src => src.MapFrom(o => o.MealCategories.Select(c => c.IdMeal)));
            //CreateMap<(MealDto, Category), MealDto>()
            //    .ForMember(
            //    d => d.CategoryListName, src => src.MapFrom
            //    (
            //        o => o.Item2.se .FirstOrDefault(id => id == o.Item2.IdCategory)
            //       //o => o.Item1.CategoryListId.Where(id => id == o.Item2.IdCategory).ToList().Select(i => i) Item2.CategoryName)
            //    )
            //    );
            //CreateMap<(MealDTO, Category), MealDTO>().ForMember(d => d.CategoryListName, src => src.MapFrom(o => o.Item1.CategoryListId));
            //CreateMap<>
        }
    }
}
