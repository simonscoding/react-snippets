import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function ListSection({ people }) {
  return people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
}

export default function App() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ListSection people={chemists} />
      <h2>Everyone else</h2>
      <ListSection people={everyoneElse} />
    </article>
  );
}
