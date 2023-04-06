using Moq;
using SquareNews.Domain.Entities;
using SquareNews.Domain.Interfaces.Repositories;
using System.ComponentModel;

namespace SquareNews.Tests
{
    public class UserServiceTests
    {
        private readonly ErrorContext _errorContext = new();
        private readonly Mock<IUserRepository> _mockUserRepository = new();

        private UserService ConfigurarService() =>
            new UserService(
                _mockUserRepository.Object,
                _errorContext
            );

        [Fact]
        [Description("Testa chamada createUser com dados válidos.")]
        public async Task CreateUser_WithValidData_ReturnsNoError()
        {
            _mockUserRepository
                .Setup(service => service.CreateUser(It.IsAny<User>()));

            var validDataUser = new User()
            {
                Id = 1,
                Login = 123456,
                Name = "Fulano",
                Password = "ABC123"

            };

            var service = ConfigurarService();

            await service.CreateUser(validDataUser);

            Assert.True(_errorContext.IsValid);
        }

        public static IEnumerable<object[]> InvalidUserScenarios = new[]
        {
            new object[]
            {
                //Login Invalido
                new User()
                {
                    Id = 1,
                    Login = 0,
                    Name = "Fulano",
                    Password = "ABC123"
                }
            },
            new object[]
            {
                //Password Invalido
                new User()
                {
                    Id = 1,
                    Login = 123456,
                    Name = "Fulano",
                    Password = "ABC123!"
                }
            },
            new object[]
            {
                //Nome Invalido
                new User()
                {
                    Id = 1,
                    Login = 123456,
                    Name = "Fu",
                    Password = "ABC123"
                }
            }
        };

        [Theory]
        [MemberData(nameof(InvalidUserScenarios))]
        [Description("Testa chamada createUser com dados invalidos para todos os cenários de erro.")]
        public async Task CreateUser_WithInvalidData_ReturnsError(User user)
        {
            _mockUserRepository
                .Setup(service => service.CreateUser(It.IsAny<User>()));

            var service = ConfigurarService();

            await service.CreateUser(user);

            Assert.False(_errorContext.IsValid);
        }

    }
}