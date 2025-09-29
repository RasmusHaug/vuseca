import HomeContainerCards from "./views/home/HomeContainerCards";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <>
      {/* ---------- Navigation bar ---------- */}
      <header>
        <nav className="w-screen h-12 flex items-center px-4 bg-primary text-primary">
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* ---------- Page body ---------- */}
      <main className="flex min-h-screen justify-center items-center p-4">
        <HomeContainerCards />
      </main>
    </>
  );
}

export default App
