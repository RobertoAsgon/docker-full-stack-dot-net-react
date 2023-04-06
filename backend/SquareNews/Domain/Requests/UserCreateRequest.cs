using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Requests;
public class UserCreateRequest
{
    public string Name { get; set; }
    public decimal Login { get; set; }
    public string Password { get; set; }

    public static explicit operator User(UserCreateRequest userCreateRequest)
    {
        return new()
        {
            Name = userCreateRequest.Name,
            Login = userCreateRequest.Login,
            Password = userCreateRequest.Password
        };
    }
}