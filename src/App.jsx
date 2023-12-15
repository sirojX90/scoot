import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { Home, About, Locations, Careers, NotFound } from "./pages";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translationsUz from "./locale/translationUz";
import translationsEn from "./locale/traslationsEn";

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: translationsEn },
      uz: { translation: translationsUz },
    },
    lng: "en",
    fallbackLng: "en",
  })

function App() {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setTheme("dark")
      : setTheme("light")
  }, [])
  useEffect(() => {
    theme === "dark" 
      ? document.documentElement.classList.add("dark") 
      : document.documentElement.classList.remove("dark")
  }, [theme])
  const changeThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  const changeLang = (value) => {
    i18n.changeLanguage(value)
  }
  return (
    <div className="dark:bg-gray-700">
      <Navbar changeThemeHandler={changeThemeHandler} changeLang={changeLang}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/careers">
          <Careers/>
        </Route>
        <Route path="/locations">
          <Locations/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
