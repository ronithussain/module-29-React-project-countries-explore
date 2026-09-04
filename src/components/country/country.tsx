import { useState } from "react";
import type { CountriesType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountriesType;
  handleVisitedCountry: (country: CountriesType) => void;
  handleVisitedFlag: (flag: string) => void;
}

export default function Country({
  country,
  handleVisitedCountry,
  handleVisitedFlag,
}: CountryProps) {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(true);
    // if(visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }
    setVisited(!visited);
    handleVisitedCountry(country);
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
      <button
        onClick={handleVisited}
        className={visited ? "visited-btn active" : "visited-btn"}
      >
        {visited ? "Visited" : "Mark As Visited"}
      </button>
      {/* // Recap: */}
      <button
        className={visited ? "visited-btn active" : "visited-btn"}
        onClick={() => handleVisitedFlag(country.flags.flags.png)}
      >
        Add Flag as Visited
      </button>
    </div>
  );
}
