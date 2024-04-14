using BoxCommerce.Common.Enums;
using BoxCommerce.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BoxCommerce.Customer.Api.Contract.Dto
{
    public class VehicleSpecifications
    {
        public ChassisType Chassis { get; set; }
        public EngineType Engine { get; set; }
        public OptionsType Options { get; set; }
    }
}
