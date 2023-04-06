using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Responses;
public class ArticleGetResponse
{
    public Source Source { get; set; }
    public string Author { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Url { get; set; }
    public string UrlToImage { get; set; }
    public DateTime? PublishedAt { get; set; }
    public string Content { get; set; }

    public static explicit operator ArticleGetResponse(Article article)
    {
        return new()
        {
            Source = article.Source,
            Author = article.Author,
            Title = article.Title,
            Description = article.Description,
            Url = article.Url,
            UrlToImage = article.UrlToImage,
            PublishedAt = article.PublishedAt,
            Content = article.Content
        };
    }
}