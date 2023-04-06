using Microsoft.EntityFrameworkCore;
using SquareNews.Domain.Entities;
using SquareNews.Domain.Interfaces.Repositories;
using SquareNews.Provider;

namespace SquareNews.Domain.Repositories;

public class UserRepository : IUserRepository 
{
    private readonly AppDbContext _appDbContext;
    public UserRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<User> GetUserById(int userId) =>
        await _appDbContext.User
            .Where(user => user.Id == userId)
            .FirstOrDefaultAsync();
  

    public async Task CreateUser(User user)
    {
        await _appDbContext.User.AddAsync(user);
        _appDbContext.SaveChanges();
    }

}


