import './App.css';
import Teams from './components/Teams/Teams.jsx'
import team from './data/team'

function App() {
  
  const mappedTeams = team.map(member => {
    return <Teams teamMember = {member}  />
  })



  return (
    <>
    <div className="wholePage">
     <h1>Ticket Tracker</h1>
     <div className="wholeContainer">
      {mappedTeams}
     </div>
    </div>
    </>
  );
}

export default App;
