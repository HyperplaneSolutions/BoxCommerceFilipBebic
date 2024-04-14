# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore 
# Build and publish a release
RUN dotnet publish   -c Release -o App

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App
COPY --from=build-env /App .

ENV DOTNET_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT Development

EXPOSE 5000

WORKDIR /App/App
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]