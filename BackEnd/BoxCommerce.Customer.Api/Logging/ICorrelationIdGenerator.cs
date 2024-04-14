namespace BoxCommerce.Customer.Api.Logging
{
    public interface ICorrelationIdGenerator
    {
        string Get();
        void Set(string correlationId);
    }
}
