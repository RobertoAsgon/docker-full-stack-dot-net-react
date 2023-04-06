using NewsAPI.Models;
using SquareNews.Domain.Requests;

namespace SquareNews.Domain.Interfaces.Services;

public interface INewsApiLibraryService
{
    ArticlesResult GetArticlesFromNewsApiLibrary(ArticleGetRequest requestParams);

}