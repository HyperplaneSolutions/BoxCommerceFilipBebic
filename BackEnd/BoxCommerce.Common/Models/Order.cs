namespace BoxCommerce.Common.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public Guid CustomerId { get; set; }
        public AssembledVehicle Vehicle { get; set; }
        public DateTime OrderPlaced { get; set; }
        public DateTime LastModified { get; set; }

        public Order()
        {
            OrderPlaced = DateTime.Now;
            LastModified = DateTime.Now;
        }

        public Order(Guid customerId, AssembledVehicle vehicle)
        {
            CustomerId = customerId;
            Vehicle = vehicle;
            OrderPlaced = DateTime.Now;
            LastModified = DateTime.Now;
        }
    }
}
