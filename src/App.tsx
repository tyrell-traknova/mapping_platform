// entry-point for react components

import { useState } from "react"
import { ThemeSelector } from "./components/ThemeSelector"
import { MapComponent } from "./components/mapComponent"


const App = () => {

 const [theme, setTheme] = useState<string>("mapbox://styles/mapbox/light-v10")

return( 
  <div className= "app">
    <h1>Mapping Platform</h1>
    {/* pass the setter function to update this state.  */}
    <ThemeSelector selectedTheme = {theme} onChangeTheme={setTheme}/>
    <MapComponent theme={theme}/>
  </div>
)
}

export default App
