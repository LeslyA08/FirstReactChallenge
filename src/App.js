import './App.css';
import Teams from './components/Teams/Teams.jsx'
import team from './data/team'

function App() {
  
  const mappedTeams = team.map(member => {
    return <Teams teamMember = {member}  />
  })



  return (
    <>
    <div>
    <div className="wholePage">
     <h1>Ticket Tracker</h1>
     <div className="wholeContainer">
      {mappedTeams}
     </div>
    </div>
    </div>
    </>
  );
}

export default App;

//<h2>Total: {this.state.counters.map((counter) => { return counter.value; }).reduce((a, b) => a + b, 0)}</h2>//