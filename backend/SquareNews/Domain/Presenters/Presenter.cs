using Microsoft.AspNetCore.Mvc;
using SquareNews.Domain.Interfaces.Presenter;
using SquareNews.Domain.Responses;

namespace SquareNews.Domain.Presenters;
public class Presenter : IPresenter
{
    private readonly ErrorContext _errorContext;

    public Presenter(ErrorContext errorContext)
    {
        _errorContext = errorContext;
    }

    public IActionResult GetResult<TResult, TResponse>(TResult result, Func<TResult, TResponse> responseFunc)
        where TResult : class
        where TResponse : class
    {
        if (_errorContext.IsValid)
            return new OkObjectResult(responseFunc(result));

        return GetInvalidResult();
    }

    private IActionResult GetInvalidResult()
    {
        var errorResponse = new ErrorResponse(_errorContext.MessageErrors.Select(message => (ErrorMessageResponse)message));

        if (_errorContext.MessageErrors.Any(x => x.ErrorType == ErrorType.NotFound))
            return new NotFoundObjectResult(errorResponse);

        return new BadRequestObjectResult(errorResponse);
    }
}