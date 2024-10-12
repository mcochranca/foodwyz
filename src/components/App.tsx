import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import NavigationMenu from "./NavigationMenu";
import RecipeTracker from "./RecipeTracker";
import WorldMap from "./WorldMap";
import UserDashboard from "./UserDashboard";

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path="/recipes" element={<RecipeTracker />} />
        <Route path="/map" element={<WorldMap />} />
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;