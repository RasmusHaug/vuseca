import { useState, useEffect } from "react"
import Card from "./components/Card"

export const themeVariantTypes = [
  "dark", "light"
] as const;

export type ThemeVariants = typeof themeVariantTypes[number];


function App() {
  const [theme, setTheme] = useState<ThemeVariants>("dark");

  useEffect(() => {
    const saved = localStorage.getItem('site-theme') as ThemeVariants;
    if (saved && themeVariantTypes.includes(saved)) {
      setTheme(saved);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  return (
    <>
      {/* navigation bar */}
      <header>
        <nav className="w-screen h-12 bg-cyan-950">
          <ul className="flex justify-center h-full">
            <button
              className="w-full rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle light/dark mode"
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? "dark" : "light"}
            </button>
          </ul>
        </nav>
      </header>
      {/* body */}
      <div className="flex h-screen justify-center items-center">
        <Card title="Hello" >
          <div className="m-4">
            <p className="flex-wrap text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
        </Card>
      </div >
    </>
  )
}

export default App
