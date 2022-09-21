import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import type { Data } from "./types";

// component for handling api, and showing it in a list or a collapsible in this case.

const HomePage: React.FunctionComponent = () => {
  // useState hook that have the Data from types.
  const [apiDataResult, setApiDataResult] = useState<Data>();
  // async arrow function
  const fetchData = async () => {
    const API_STRING = "https://swapi.dev/api/people/";
    // await result
    const API_RESULT = await fetch(API_STRING);
    const API_DATA = await API_RESULT.json();
    // fill the useState with the data
    setApiDataResult(API_DATA);
  };

  useEffect(() => {
    // call on fetchData() to render
    fetchData();
  }, []);

  return (
    <div>
      {/* map the apiResults and burrow into Results[] (from types), then you will have access to data like names, height etc */}
      {apiDataResult?.results.map((res) => {
        return (
          <li>
            <ul>
              <PersonCard name={res.name} height={res.height} />
            </ul>
          </li>
        );
      })}
    </div>
  );
};

export default HomePage;
