using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace project.Models
{
    public partial class myFoodContext : DbContext
    {
        public myFoodContext()
        {
        }

        public myFoodContext(DbContextOptions<myFoodContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Food> Foods { get; set; }
        public virtual DbSet<History> Histories { get; set; }
        public virtual DbSet<Meal> Meals { get; set; }
        public virtual DbSet<MealCategory> MealCategories { get; set; }
        public virtual DbSet<NutritionalValue> NutritionalValues { get; set; }
        public virtual DbSet<NutritionalValuesFood> NutritionalValuesFoods { get; set; }
        public virtual DbSet<NutritionalValuesUser> NutritionalValuesUsers { get; set; }
        public virtual DbSet<TypesMealsUser> TypesMealsUsers { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=myFood;Trusted_Connection=True; TrustServerCertificate=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.IdCategory)
                    .HasName("PK__categori__79D361B689818E0E");

                entity.ToTable("categories");

                entity.Property(e => e.IdCategory).HasColumnName("idCategory");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("categoryName");
            });

            modelBuilder.Entity<Food>(entity =>
            {
                entity.HasKey(e => e.IdFood)
                    .HasName("PK__foods__69D92BAA1FD23C47");

                entity.ToTable("foods");

                entity.Property(e => e.IdFood).HasColumnName("idFood");

                entity.Property(e => e.FoodName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("foodName");

                entity.Property(e => e.IdCategory).HasColumnName("idCategory");

                entity.Property(e => e.Picture).HasColumnName("picture");

                entity.HasOne(d => d.IdCategoryNavigation)
                    .WithMany(p => p.Foods)
                    .HasForeignKey(d => d.IdCategory)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__foods__idCategor__5CD6CB2B");
            });

            modelBuilder.Entity<History>(entity =>
            {
                entity.HasKey(e => new { e.IdUser, e.IdMeal });

                entity.ToTable("history");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.IdMeal).HasColumnName("idMeal");

                entity.Property(e => e.DateMeal)
                    .HasColumnType("datetime")
                    .HasColumnName("dateMeal");

                entity.Property(e => e.IdFood).HasColumnName("idFood");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.IdFoodNavigation)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.IdFood)
                    .HasConstraintName("FK__history__idFood__6754599E");

                entity.HasOne(d => d.IdMealNavigation)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.IdMeal)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_history_meals");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Histories)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_history_users");
            });

            modelBuilder.Entity<Meal>(entity =>
            {
                entity.HasKey(e => e.IdMeal)
                    .HasName("PK__meals__C26D6F24C39423B7");

                entity.ToTable("meals");

                entity.Property(e => e.IdMeal).HasColumnName("idMeal");

                entity.Property(e => e.MealName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("mealName");
            });

            modelBuilder.Entity<MealCategory>(entity =>
            {
                entity.HasKey(e => new { e.IdMeal, e.Idcategory });

                entity.ToTable("mealCategories");

                entity.Property(e => e.IdMeal).HasColumnName("idMeal");

                entity.Property(e => e.Idcategory).HasColumnName("idcategory");

                entity.HasOne(d => d.IdMealNavigation)
                    .WithMany(p => p.MealCategories)
                    .HasForeignKey(d => d.IdMeal)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__mealCateg__idMea__59063A47");

                entity.HasOne(d => d.IdcategoryNavigation)
                    .WithMany(p => p.MealCategories)
                    .HasForeignKey(d => d.Idcategory)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__mealCateg__idcat__59FA5E80");
            });

            modelBuilder.Entity<NutritionalValue>(entity =>
            {
                entity.HasKey(e => e.IdValue)
                    .HasName("PK__nutritio__666C5AC3B4D721DE");

                entity.ToTable("nutritionalValues");

                entity.Property(e => e.IdValue).HasColumnName("idValue");

                entity.Property(e => e.ValueName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("valueName");
            });

            modelBuilder.Entity<NutritionalValuesFood>(entity =>
            {
                entity.HasKey(e => new { e.IdFood, e.IdValue });

                entity.ToTable("nutritionalValuesFood");

                entity.Property(e => e.IdFood).HasColumnName("idFood");

                entity.Property(e => e.IdValue).HasColumnName("idValue");

                entity.Property(e => e.For100g).HasColumnName("for100g");

                entity.Property(e => e.QuantityForOne).HasColumnName("quantityForOne");

                entity.HasOne(d => d.IdFoodNavigation)
                    .WithMany(p => p.NutritionalValuesFoods)
                    .HasForeignKey(d => d.IdFood)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__nutrition__idFoo__60A75C0F");

                entity.HasOne(d => d.IdValueNavigation)
                    .WithMany(p => p.NutritionalValuesFoods)
                    .HasForeignKey(d => d.IdValue)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__nutrition__idVal__619B8048");
            });

            modelBuilder.Entity<NutritionalValuesUser>(entity =>
            {
                entity.HasKey(e => new { e.IdValue, e.IdUser });

                entity.ToTable("nutritionalValuesUser");

                entity.Property(e => e.IdValue).HasColumnName("idValue");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.MinOrMax)
                    .HasColumnName("minOrMax")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.NutritionalValuesUsers)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__nutrition__idUse__6383C8BA");

                entity.HasOne(d => d.IdValueNavigation)
                    .WithMany(p => p.NutritionalValuesUsers)
                    .HasForeignKey(d => d.IdValue)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__nutrition__idVal__6477ECF3");
            });

            modelBuilder.Entity<TypesMealsUser>(entity =>
            {
                entity.HasKey(e => new { e.IdUser, e.IdMeal });

                entity.ToTable("typesMealsUser");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.IdMeal).HasColumnName("idMeal");

                entity.Property(e => e.EndTime).HasColumnName("endTime");

                entity.Property(e => e.StartTime).HasColumnName("startTime");

                entity.HasOne(d => d.IdMealNavigation)
                    .WithMany(p => p.TypesMealsUsers)
                    .HasForeignKey(d => d.IdMeal)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__typesMeal__idMea__52593CB8");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.TypesMealsUsers)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__typesMeal__idUse__5165187F");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser)
                    .HasName("PK__users__3717C982D12086AF");

                entity.ToTable("users");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.PasswordUser).HasColumnName("passwordUser");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
