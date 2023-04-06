using Microsoft.EntityFrameworkCore;
using SquareNews.Domain.Entities;

namespace SquareNews.Provider
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<User> User { get; set; }
    }
}