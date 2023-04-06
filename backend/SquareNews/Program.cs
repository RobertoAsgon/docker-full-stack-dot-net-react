using Microsoft.EntityFrameworkCore;
using SquareNews.Domain.Interfaces.Presenter;
using SquareNews.Domain.Interfaces.Repositories;
using SquareNews.Domain.Interfaces.Services;
using SquareNews.Domain.Presenters;
using SquareNews.Domain.Repositories;
using SquareNews.Provider;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("SqlConnection");

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<INewsApiLibraryService, NewsApiLibraryService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ErrorContext>();
builder.Services.AddScoped<IPresenter, Presenter>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

AppDbInitialization.MigrationInitialization(app);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
