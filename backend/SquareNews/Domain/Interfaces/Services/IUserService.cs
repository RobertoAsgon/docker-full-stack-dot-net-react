using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Interfaces.Services;

public interface IUserService
{
    Task<User> GetUserById(int userId);
    Task CreateUser(User user);
    
}