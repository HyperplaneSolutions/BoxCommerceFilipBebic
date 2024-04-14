using BoxCommerce.Common.Models;
using BoxCommerce.Customer.Api.Contract.Dto.Request;
using BoxCommerce.Customer.Api.Logging;
using BoxCommerce.Customer.Api.Services;
using BoxCommerce.Repo;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BoxCommerceBackEndTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleOrderController : ControllerBase
    {
        private readonly ICorrelationIdGenerator _correlationGenerator;
        private readonly ILogger<VehicleOrderController> _logger;
        private readonly IVehicleRepo _vehicleRepo;
        private readonly IUserService _userService;

        public VehicleOrderController(ICorrelationIdGenerator correlation, ILogger<VehicleOrderController> logger, IVehicleRepo vehicleRepo, IUserService userService)
        {
            _correlationGenerator = correlation;
            _logger = logger;
            _vehicleRepo = vehicleRepo;
            _userService = userService;
        }

        [HttpPost(Name = "New")]
        public async Task<IActionResult> Post(NewVehicleOrder newVehicleOrder)
        {
            if (newVehicleOrder?.Specifications == null)
                _logger.Log(LogLevel.Error, "RequestId {correlationId}: Vehicle Order creation attempted with null parameters: {newVehicleOrder}", _correlationGenerator.Get(), newVehicleOrder);
            try
            {
                Guid orderId = await _vehicleRepo.PlaceOrder(_userService.GetCurrentUser(), newVehicleOrder.Specifications);
                if (orderId == Guid.Empty)
                {
                    _logger.Log(LogLevel.Error, "RequestId {correlationId}: Vehicle Order creation unsuccessful: {newVehicleOrder}", _correlationGenerator.Get(), newVehicleOrder);
                    return BadRequest("Error during order placement");
                }

                return new OkObjectResult(await _vehicleRepo.GetOrder(orderId));
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "RequestId {correlationId}: Vehicle Order creation unsuccessful: {newVehicleOrder}, {ex}", _correlationGenerator.Get(), newVehicleOrder, ex);
                return BadRequest("Error during order placement");
            }
        }
    }
}
