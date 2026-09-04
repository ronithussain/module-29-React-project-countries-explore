import { use, useState } from "react";
import type { CountriesType } from "../../type";
import Country from "../country/country";
import './Countries.css'

export interface CountriesProps {
  countriesDataPromise: Promise<CountriesType[]>;
}
export default function Countries({ countriesDataPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<CountriesType[]>([]);
  //Recap:
  const [visitedFlags, setVisitedFlags] = useState<string[]>([])


  const countries = use(countriesDataPromise);
  // console.log(countries);

  const handleVisitedCountry = (country:CountriesType):void => {
    const newVisitedCountries = [...visitedCountries, country ];
    setVisitedCountries(newVisitedCountries);
  };
  // Recap:
  const handleVisitedFlag = (flag:string):void => {
    console.log('visited flag', flag);

    if(visitedFlags.includes(flag)){
      const remainingFlags = visitedFlags.filter(f => f !== flag);
      setVisitedFlags(remainingFlags); 
    }else{
      const newVisitedFlag = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlag)

    }

  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h5>Visited Flag: {visitedFlags.length}</h5>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} 
          country={country}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
