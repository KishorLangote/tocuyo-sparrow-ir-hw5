import { useParams } from "react-router-dom";
import { players } from "./Players";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlayerDetails = () => {
  const playerId = useParams(); // get the specific player's id:

  const playerData = players.find((player) => player.id == playerId.id); // get the specific player's data

  return (
    <>
      <Header />
      <main className="container py-3">
        <h2>{playerData.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <p>
              <strong>Name: </strong>
              {playerData.name}
            </p>
          </li>
          <li className="list-group-item">
            <p>
              <strong>Position: </strong>
              {playerData.position}
            </p>
          </li>
          <li className="list-group-item">
            <p>
              <strong>Team: </strong>
              {playerData.team}
            </p>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PlayerDetails;
