import "./styles.css";
import { Auth } from "./components/Auth";
import { Banking } from "./components/Banking";
import { Users } from "./components/Users";
export default function App() {
  return (
    <div className="App">
      <Auth />
      <Banking />
      <Users />
    </div>
  );
}
