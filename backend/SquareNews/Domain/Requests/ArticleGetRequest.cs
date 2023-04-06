using NewsAPI.Constants;
using NewsAPI.Models;
using SquareNews.Domain.Entities;

namespace SquareNews.Domain.Requests;
public class ArticleGetRequest
{
    public string Term { get; set; }
    public DateTime FromDate { get; set; }
    public int CurrentPage { get; set; }
    public int ItensPerPage { get; set; }

    public static explicit operator EverythingRequest(ArticleGetRequest userCreateRequest)
    {
        return new()
        {
            Q = userCreateRequest.Term,
            SortBy = SortBys.Popularity,
            Language = Languages.PT,
            From = userCreateRequest.FromDate,
            Page = userCreateRequest.CurrentPage,
            PageSize = userCreateRequest.ItensPerPage
        };
    }
}