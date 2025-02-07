import Header from "../components/Header";
import Footer from "../components/Footer";

const Report = () => {

  const topScorer = {name: "Lionel  Messi", goalScored: 25}
  const bestAssister = {name: "Neymar Jr", assists: 15}
  const mostValuablePlayer = {name: "Cristiano Ronaldo", overllRating: 9.5}


  return (
    <>
      <Header />
      <main className="container py-3">
        <h1>Team Performance Report</h1>
        <hr />
     
          <div className="row">

            <div className="col-md-4">
              <div className="card border-light">
              <div className="card-body">
                <h3>Top Scorer</h3>
                <p>Name: {topScorer.name}</p>
                <p>Goals Scored: {topScorer.goalScored}</p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Best Assister</h3>
                <p>Name: {bestAssister.name}</p>
                <p>Assists: {bestAssister.assists}</p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Most Valuable Player (MVP)</h3>
                <p>Name: {mostValuablePlayer.name}</p>
                <p>Overall Rating: {mostValuablePlayer.overllRating}</p>
              </div>
            </div>
            </div>
          </div>

      </main>
      <Footer />
    </>
  );
};

export default Report;
