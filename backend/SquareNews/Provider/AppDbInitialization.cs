using Microsoft.EntityFrameworkCore;
using SquareNews.Provider;

namespace SquareNews.Provider;

public static class AppDbInitialization
{
    public static void MigrationInitialization(this IApplicationBuilder app)
    {
        using (var serviceScrope = app.ApplicationServices.CreateScope())
        {
            var serviceDb = serviceScrope
                .ServiceProvider
                .GetService<AppDbContext>();

            serviceDb.Database.Migrate();
        }
    }
}
