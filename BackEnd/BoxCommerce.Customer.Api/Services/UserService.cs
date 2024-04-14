
namespace BoxCommerce.Customer.Api.Services
{
    public class UserService : IUserService
    {
        public Guid GetCurrentUser()
        {
            return Guid.NewGuid();
        }
    }
}
