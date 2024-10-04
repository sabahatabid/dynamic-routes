import React from 'react';

interface CountryProps {
  params: {
    CountryName: string;
  };
}

const CountryPage = async ({ params }: CountryProps) => {
  const { CountryName } = params;

  
  const res = await fetch(`https://restcountries.com/v3.1/name/${CountryName}`);
  const data = await res.json();

  if (!res.ok || data.status === 404) {
    return <div>Country not found</div>;
  }

  const country = data[0];
  const { capital, population } = country;

  return (
    <div className='flex flex-col text-3xl bg-black text-white p-6 m-8 w-80'>
      <div className='flex justify-center align-middle flex-col ' style={{backgroundColor:'lightseagreen'}}>
      <h1>Country: {country.name.common}</h1>
      <p>Capital: {capital ? capital[0] : 'No capital found'}</p>
      <p>Population: {population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CountryPage;