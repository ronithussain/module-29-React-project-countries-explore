import { use, useState } from "react";
import type { CountriesType } from "../../type";
import Country from "../country/country";
import "./Countries.css";

export interface CountriesProps {
  countriesDataPromise: Promise<CountriesType[]>;
}
export default function Countries({ countriesDataPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<CountriesType[]>([]);
  //Recap:
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const countries = use(countriesDataPromise);
  // console.log(countries);

  const handleVisitedCountries = (country: CountriesType) => {
    // bad way to check object/array;
    // visitedCountries.includes(country);

    // good way to check object/array;
    const exists = visitedCountries.find((c) => c.ccn3.ccn3 === country.ccn3.ccn3,);
    if (exists) {
      const remainingVisitedCountries = visitedCountries.filter((c) => c.ccn3.ccn3 !== country.ccn3.ccn3,);
      setVisitedCountries(remainingVisitedCountries);
    }else{
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  // Recap:
  const handleVisitedFlags = (flag: string) => {
    console.log("visited flags...", flag);

    // bad way to check object/array;
    if (visitedFlags.includes(flag)) {
      const remainingFlags = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h5>Visited Flag: {visitedFlags.length}</h5>
      <div>
        <ul>
          {visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        {visitedFlags.map((flag, index) => (
          <img
            key={index + 1}
            className="w-[30%] md:w-[10%] h-20"
            src={flag}
            alt={flag}
          />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
