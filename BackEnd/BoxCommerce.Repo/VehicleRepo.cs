using BoxCommerce.Common.Models;
using BoxCommerce.Customer.Api.Contract.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoxCommerce.Repo
{
    public class VehicleRepo : IVehicleRepo
    {
        private readonly string _connectionString;

        public VehicleRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<Order> GetOrder(Guid id)
        {
            return await Task.FromResult(new Order());
        }

        public async Task<Guid> PlaceOrder(Guid customerId, VehicleSpecifications vehicleSpecifications)
        {
            return await Task.FromResult(Guid.NewGuid());
        }
    }
}
