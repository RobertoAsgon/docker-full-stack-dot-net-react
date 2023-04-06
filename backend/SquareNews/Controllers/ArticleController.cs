
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Models;
using SquareNews.Domain.Interfaces.Presenter;
using SquareNews.Domain.Interfaces.Services;
using System.Net;
using SquareNews.Domain.Responses;
using SquareNews.Domain.Requests;

namespace SquareNews.Controllers
{
    [Route("api/articles")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly INewsApiLibraryService _articleService;
        private readonly IPresenter _presenter;

        public ArticleController (
            INewsApiLibraryService articleService,
            IPresenter presenter
        )
        {
            _articleService = articleService;
            _presenter = presenter;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ArticleGetResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.NotFound)]
        public async Task<IActionResult> GetArticles([FromQuery] ArticleGetRequest requestParams)
        {
            var data = _articleService.GetArticlesFromNewsApiLibrary(requestParams);
            var presenterResult = _presenter.GetResult(data, data => data.Articles
                .Select(news => new Article
                    {
                        Source = new Source
                        {
                            Id = news.Source.Id,
                            Name = news.Source.Name
                        },
                        Author = news.Author,
                        Title = news.Title,
                        Description = news.Description,
                        Url = news.Url,
                        UrlToImage = news.UrlToImage,
                        PublishedAt = news.PublishedAt,
                        Content = news.Content })
                .ToArray());
            return presenterResult;
        }
    }
}