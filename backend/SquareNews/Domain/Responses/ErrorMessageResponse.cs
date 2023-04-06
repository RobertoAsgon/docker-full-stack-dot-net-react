using SquareNews.Errors;

namespace SquareNews.Domain.Responses;
public class ErrorMessageResponse
{
    public string Message { get; set; }

    public static explicit operator ErrorMessageResponse(MessageError messageError)
    {
        return new()
        {
            Message = messageError.Message,
        };
    }
}