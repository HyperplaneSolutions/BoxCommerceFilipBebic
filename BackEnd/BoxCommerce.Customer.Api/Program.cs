using BoxCommerce.Customer.Api.Extensions;
using BoxCommerce.Customer.Api.Logging;
using BoxCommerce.Customer.Api.Services;
using BoxCommerce.Repo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICorrelationIdGenerator, CorrelationIdGenerator>();

builder.Services.AddSingleton<IUserService, UserService>();

string connectionString = builder.Configuration.GetSection("Database:ConnectionString").Value ?? string.Empty;
builder.Services.AddSingleton<IVehicleRepo>(x => new VehicleRepo(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.AddCorrelationIdMiddleware();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
