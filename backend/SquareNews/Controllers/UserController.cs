
using Microsoft.AspNetCore.Mvc;
using SquareNews.Domain.Entities;
using SquareNews.Domain.Interfaces.Services;
using SquareNews.Domain.Interfaces.Presenter;
using System.Net;
using SquareNews.Domain.Responses;
using SquareNews.Domain.Requests;

namespace SquareNews.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IPresenter _presenter;

        public UserController (
            IUserService userService,
            IPresenter presenter
        )
        {
            _userService = userService;
            _presenter = presenter;
        }

        [HttpGet("{userId}")]
        [ActionName(nameof(GetUserById))]
        [ProducesResponseType(typeof(UserGetByIdResponse), (int)HttpStatusCode.Found)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var user = await _userService.GetUserById(userId);
            return _presenter.GetResult(user, user => (UserGetByIdResponse)user);
        }

        [HttpPost("register")]
        [ProducesResponseType(typeof(UserCreateResponse), (int)HttpStatusCode.Created)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post(UserCreateRequest request)
        {
            var user = (User)request;
            await _userService.CreateUser(user);
            return _presenter.GetResult(user, user => (UserCreateResponse)user);
        }
    }
}