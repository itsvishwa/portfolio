import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="bg-[#131313] text-white min-h-screen w-full px-72 py-8 ">
      <Navigation />
      <Welcome />
    </div>
  );
}
