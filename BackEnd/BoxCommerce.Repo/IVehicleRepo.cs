using BoxCommerce.Common.Models;
using BoxCommerce.Customer.Api.Contract.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoxCommerce.Repo
{
    public interface IVehicleRepo
    {
        public Task<Guid> PlaceOrder(Guid customerId, VehicleSpecifications vehicleSpecifications);
        public Task<Order> GetOrder(Guid id);
    }
}
