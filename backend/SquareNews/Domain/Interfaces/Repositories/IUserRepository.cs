

using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Interfaces.Repositories;

public interface IUserRepository
{
    Task<User> GetUserById(int userId);
    Task CreateUser(User user);
}