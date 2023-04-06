using SquareNews.Domain.Responses;

public class ErrorResponse
{
    public IEnumerable<ErrorMessageResponse> Messages { get; private set; }

    public ErrorResponse(IEnumerable<ErrorMessageResponse> messages)
    {
        Messages = messages;
    }

}
