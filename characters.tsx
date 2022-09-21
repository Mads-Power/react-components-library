import { Data, Result } from "../components/types";
import PersonCard from "./PersonCard";

interface Props {
  count: number;
  next: string;
}

const Characters: React.FunctionComponent<Props> = ({ count, next }) => {
  return (
    <div>
      <p>{count}</p>
      <a href="https://swapi.dev/api/people/?page=2">{next}</a>
      {/* {results.map((res) => (
        <PersonCard result={res.name} />
      ))} */}
    </div>
  );
};

export default Characters;
