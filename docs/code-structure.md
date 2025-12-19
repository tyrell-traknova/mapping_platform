## Code Structure & Business Logic Documentation

This document describes the business logic and code flow between the main React components in the Mapping Platform application, focusing on the files in `src/App.tsx` and `src/components/`.

### Overview

The application is structured around three main components:

- **App** (`App.tsx`): The root component, manages global state and orchestrates child components.
- **ThemeSelector** (`components/ThemeSelector.tsx`): UI for selecting the map theme (light/dark).
- **MapComponent** (`components/mapComponent.tsx`): Renders the interactive map using Mapbox, with the selected theme.

---

### App Component Logic (`App.tsx`)

- **State Management:**
	- Uses React's `useState` to store the current map theme (`theme`).
	- Initial value is set to the Mapbox light theme style URL.

- **Component Composition:**
	- Renders a header, the `<ThemeSelector/>`, and the `<MapComponent/>`.
	- Passes the current theme and the setter function of the piece of state (`setTheme`) to `<ThemeSelector/>`.
	- Passes the current theme to `<MapComponent/>`.

- **Data Flow:**
	- When the user selects a theme in `ThemeSelector`, it calls `setTheme`, updating the state in `App`.
	- The updated theme is then passed down to `MapComponent`, which re-renders the map with the new style.

---

### ThemeSelector Component Logic (`ThemeSelector.tsx`)

- **Props:**
	- `selectedTheme`: The currently selected theme (string).
	- `onChangeTheme`: Function to update the theme in the parent (`App`).

- **UI & Events:**
	- Renders radio buttons for "Light Theme" and "Dark Theme".
	- The radio button's `checked` state is determined by comparing `selectedTheme` to "light" or "dark".
	- On change, calls `onChangeTheme` with the new value (`e.target.value`).

- **Business Logic:**
	- Acts as a controlled component, with its state managed by `App`.
	- Ensures only one theme is selected at a time.
	- Triggers a re-render of the map when the theme changes.

---

### MapComponent Logic (`mapComponent.tsx`)

- **Props:**
	- `theme`: The current theme string ("light" or "dark").

- **Map Style Resolution:**
	- Uses a mapping object (`mapStyles`) to convert the theme string to a Mapbox style URL.
	- Defaults to the light style if the theme is not recognized.

- **Rendering:**
	- Uses the `react-map-gl` library to render the map.
	- The `mapStyle` prop is set dynamically based on the theme.
	- The map access token is loaded from environment variables.

- **Business Logic:**
	- Reacts to changes in the `theme` prop by updating the map style.
	- Is stateless; all logic is driven by props from `App`.

---

### Component Interaction Flow

1. **User selects a theme in ThemeSelector.**
2. **ThemeSelector** calls `onChangeTheme` (from `App`) with the new theme value.
3. **App** updates its `theme` state.
4. **App** passes the updated `theme` to **MapComponent**.
5. **MapComponent** re-renders the map with the new style.

---

### Example Data Flow

```
App (theme: "light")
	├─ ThemeSelector (selectedTheme: "light", onChangeTheme: setTheme)
	└─ MapComponent (theme: "light")

User selects "dark" → ThemeSelector calls onChangeTheme("dark") → App sets theme to "dark" → MapComponent receives theme="dark" → Map style updates
