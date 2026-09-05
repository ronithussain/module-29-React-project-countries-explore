import { useState } from "react";
import type { CountriesType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountriesType;
  handleVisitedCountries: (country: CountriesType) => void;
  handleVisitedFlags: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedCountries,
  handleVisitedFlags,
}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    // setVisited(true);
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  //   const countryStyle = {
  //     backgroundColor: visited  ?'lightgreen' : 'gray'
  //   }
  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Population: {country.population.population}</h4>
      <p>Capital: {country.capital.capital}</p>

      {/* Button */}
      <div className="flex md:flex-row flex-col gap-2">
        <button
          onClick={handleVisited}
          className={visited ? "visited-btn active" : "visited-btn"}
        >
          {visited ? "Visited" : "Mark As Visited"}
        </button>
        {/* Recap: */}
        <button 
        onClick={() => handleVisitedFlags(country.flags.flags.png)}
        className={visited ? "visited-btn active" : "visited-btn"}>
          Add Flag as Visited
        </button>
      </div>
    </div>
  );
}
