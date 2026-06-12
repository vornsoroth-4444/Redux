import { CounterComponents } from "../components/counter";
import NavbarComponent from "../components/navbar";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <CounterComponents />
    </div>
  );
}
