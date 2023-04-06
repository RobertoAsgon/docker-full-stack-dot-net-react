

using System.Collections.ObjectModel;
using SquareNews.Errors;

public class ErrorContext
{
    private readonly IList<MessageError> _errors = new List<MessageError>();
    public IReadOnlyCollection<MessageError> MessageErrors { get => new ReadOnlyCollection<MessageError>(_errors); }
    public bool IsValid { get => _errors.Count == 0; }

    public void AddError(string message, ErrorType errorType)
    {
        _errors.Add(new()
        {
            ErrorType = errorType,
            Message = message
        });
    }

    public void AddNotFound(string message)
    {
        AddError(message, ErrorType.NotFound);
    }

    public void AddValidationError(string message)
    {
        AddError(message, ErrorType.Validation);
    }
}
