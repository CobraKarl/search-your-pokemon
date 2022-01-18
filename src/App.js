import React from "react";
import {Routing} from "./routes/Routing"
import {Navigationbar} from "./components/navigationbar/NavigationBar"
import {UserProvider} from "./shared/global/provider/UserProvider"
import "./shared/global/Global.css"

function App() {
  return (
    <UserProvider>
     <Routing>
     <Navigationbar />
     </Routing>
    </UserProvider>
  );
}

export default App;
