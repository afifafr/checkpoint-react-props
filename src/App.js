import React from "react";
import PlayersList from "./Components/PlayersList";
import './Styles/App.css';


function App() {
  return (
    <React.Fragment>
      {/* Div  principal */}
      <div style={{display:"flexbox", alignItems:"flex-start"}} >
        {/* Titre  */}
    <h1>FIFA Player Cards</h1>
    {/* Liste des joueurs */}
    <PlayersList />
  
  </div>
  </React.Fragment>
  );
}

export default App;
