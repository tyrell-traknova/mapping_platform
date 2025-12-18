import React from "react";


// enforces structure to the objects with this generic type 
interface ThemeSelectorProps { 
  selectedTheme: string,
  onChangeTheme: (newTheme: string) => void
} 

export const ThemeSelector = ({selectedTheme, onChangeTheme}: ThemeSelectorProps) => {

  return (
    <div className = "theme-selector">

      <h2>Choose a Theme</h2>
      <label>
        <input
          type = "radio"
          value = "light"
          checked = {selectedTheme === "light"}
          onChange = {(e) => onChangeTheme(e.target.value)}
        />
        Light Theme
      </label>
    <br/>
    <label>
      <input
        type = "radio"
        value = "dark"
        checked = {selectedTheme === "dark"}
        onChange = {(e) => onChangeTheme(e.target.value)}
      />
      Dark Theme
    </label>
    </div>
  )
}