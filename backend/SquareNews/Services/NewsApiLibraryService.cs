using NewsAPI;
using NewsAPI.Models;
using SquareNews.Domain.Interfaces.Services;
using SquareNews.Domain.Requests;
using SquareNews.Errors;

public class NewsApiLibraryService : INewsApiLibraryService
{
    private readonly ErrorContext _errorContext;

    public NewsApiLibraryService(
        ErrorContext errorContext
    )
    {
        _errorContext = errorContext;
    }

    public ArticlesResult GetArticlesFromNewsApiLibrary(ArticleGetRequest requestParams)
    {
        // OBTER KEY NO SITE https://newsapi.org/
        var newsApiKey = "0db790a39be6445484e691ee4eb497c6";
        var newsApiClient = new NewsApiClient(newsApiKey);
        var newsApiParams = (EverythingRequest)requestParams;
        var newsApiResponse = newsApiClient.GetEverything(newsApiParams);

        if(newsApiResponse.TotalResults == 0) {
            _errorContext.AddNotFound(MessageConstants.ArticleNotFound);
            return null;
        }

        return newsApiResponse;
    }

}