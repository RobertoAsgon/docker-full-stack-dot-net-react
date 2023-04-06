using Microsoft.AspNetCore.Mvc;

namespace SquareNews.Domain.Interfaces.Presenter;
public interface IPresenter
{
    IActionResult GetResult<TResult, TResponse>(TResult result, Func<TResult, TResponse> responseFunc)
        where TResult : class
        where TResponse : class;
}