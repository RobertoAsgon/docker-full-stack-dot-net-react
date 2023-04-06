using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Responses;
public class UserGetByIdResponse
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Login { get; set; }
    public string Password { get; set; }

    public static explicit operator UserGetByIdResponse(User user)
    {
        return new()
        {
            Id = user.Id,
            Name = user.Name,
            Login = user.Login,
            Password = user.Password
        };
    }
}