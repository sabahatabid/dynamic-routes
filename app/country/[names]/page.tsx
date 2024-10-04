function CountryName({ params }: { params: { names: string } }) {
  const country_data = [
    {
      name: "pakistan",
      population: "251269164",
      capital: "Islamabad",
      important_cities: ["Karachi", "Lahore", "Sialkot"],
    },
    {
      name: "china",
      population: "1419321278",
      capital: "Beijing",
      important_cities: ["Shanghai", "Beijing", "Guangzhou"],
    },
    {
      name: "iran",
      population: "91780985",
      capital: "Tehran",
      important_cities: ["Isfahan", "Tabriz", "Qom"],
    },
    {
      name: "turkey",
      population: "87527081",
      capital: "Ankara",
      important_cities: ["Istanbul", "Bursa", "Izmir"],
    },
    {
      name: "india",
      population: "1450935791",
      capital: "New Delhi",
      important_cities: ["Mumbai", "Kolkata", "Chennai"],
    },
  ];

 

  const selectedCountry = country_data.find(
    (country) => country.name === params.names
  );

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  return (
    <div style={{backgroundColor:"lightseagreen"}}>
      <h1>Country Name : {selectedCountry.name}</h1>
      <h3>Population: {selectedCountry.population}</h3>
      <h4>Capital: {selectedCountry.capital}</h4>
      <h5>Important Cities: {selectedCountry.important_cities.join(", ")}</h5>
    </div>
  );
}

export default CountryName;