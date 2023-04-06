using SquareNews.Domain.Entities;
using SquareNews.Domain.Interfaces.Repositories;
using SquareNews.Domain.Interfaces.Services;
using System.Text.RegularExpressions;

public class UserService : IUserService 
{
    private readonly IUserRepository _userRepository;
    private readonly ErrorContext _errorContext;

    public UserService(
        IUserRepository userRepository,
        ErrorContext errorContext
    )
    {
        _userRepository = userRepository;
        _errorContext = errorContext;
    }

    public async Task<User> GetUserById(int userId) 
    {
        var data = await _userRepository.GetUserById(userId);
        if (data == null) {
            _errorContext.AddValidationError("Não encontrado.");
            return null;
        }
        return data;
    }

    private bool IsNameValidString(string name)
    {
        if(name.Length < 4)
        {
            _errorContext.AddValidationError("O nome deve conter no mínimo 4 caracteres.");
            return false;
        } else
        {
            return true;
        }
    }

    private bool IsLoginValidString(decimal login)
    {
        bool isValidLogin = Regex.IsMatch(login.ToString(), "^[0-9]{6}$");

        if (isValidLogin == false)
        {
            _errorContext.AddValidationError("O login deve ser um número inteiro de 6 caracteres.");
            return false;
        } 

        return isValidLogin;
    }

    private bool IsPasswordValidString(string password)
    {
        bool isValidPassword = Regex.IsMatch(password.ToString(), "^[A-Za-z0-9]*$");
        if (isValidPassword == false)
        {
            _errorContext.AddValidationError("A senha deve conter apenas letras e números.");
            return false;
        }
        else
        {
            return true;
        }
    }

    public async Task CreateUser(User user)
    {
        if (this.IsNameValidString(user.Name) == false) {
            return ;
        }
        if(this.IsLoginValidString(user.Login) == false) {
            return ;
        }
        if(this.IsPasswordValidString(user.Password) == false) {
            return ;
        }

        await _userRepository.CreateUser(user);
    }

}