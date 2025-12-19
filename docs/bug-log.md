

1. used initialState instead of initialViewState for the `Map` component.

2. version 8+ of the react-map-gl package was incompatible with Vite, causing building errors- needed to downgrade to v7.0.18.

3. with the downgraded package version, TypeScript could not find type declarations for `react-map-gl`- had to write an expect-error comment for this import.
