import { useEffect, useState } from 'react';

const ChangeTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>click</button>
  );
}

export default ChangeTheme;
