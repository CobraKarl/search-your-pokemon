import React from "react";
import {Routing} from "./routes/Routing"
import {Navigationbar} from "./components/navigationbar/NavigationBar"
import "./shared/global/Global.css"

function App() {
  return (
   <Routing>
     <Navigationbar />
   </Routing>
    

  );
}

export default App;
