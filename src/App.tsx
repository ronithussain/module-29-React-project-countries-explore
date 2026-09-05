import { Suspense } from "react";
import "./App.css";
import type { CountriesType } from "./type";
import Countries from "./components/countries/Countries";

function App() {
  const countriesDataPromise = async (): Promise<CountriesType[]> => {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    const data = await res.json();
    return data.countries;
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">React Project Countries...</h1>

        <Suspense fallback={<p>Loading....</p>}>
          <Countries countriesDataPromise={countriesDataPromise()}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
