import FormerPicker from "./components/FormerPickerComponent/FormerPickerComponent"    
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import FormerComponent from "./components/FormerComponent/FormerComponent";
import ProfilComponent from "./components/ProfilComponent/ProfilComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Formateur } from "./data/formateur";

const App = () => {
  const formateursList = [...Formateur]

  return (
    <BrowserRouter>
        <NavBarComponent>
            <Routes>
                <Route path={'/'} element={<HomeComponent />}/>
                <Route path={'/former'} element={<FormerComponent formateursList={formateursList}/>}/>
                <Route path={'/formerPicker'} element={<FormerPicker formateursList={formateursList}/>}/>
                <Route path={'/former/:userId'} element={<ProfilComponent formateursList={formateursList}/>} />
            </Routes>
        </NavBarComponent>
    </BrowserRouter>
  );
}

export default App;
