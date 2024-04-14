using BoxCommerce.Common.Enums;
using BoxCommerce.Customer.Api.Contract.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoxCommerce.Common.Models
{
    public class AssembledVehicle
    {
        public Guid Id { get; set; }
        public VehicleSpecifications Specifications{ get; set; }

        public AssembledVehicle()
        {
            
        }

        public AssembledVehicle(Guid id, VehicleSpecifications specifications)
        {
            Id = id;
            Specifications = specifications;
        }
    }
}
