namespace SquareNews.Errors;
public struct MessageError
{
    public string Message { get; set; }
    public ErrorType ErrorType { get; set; }

    public MessageError(string message, ErrorType errorType)
    {
        Message = message;
        ErrorType = errorType;
    }
}