# react-native-challenge-nov

A Día de los Muertos themed hidden-object game built with React Native (Expo) as a November coding challenge. Explore a detailed illustration, zoom in, and tap the hidden hint points to score.

## Features

- **Home and Intro screens**: story intro with background music and a sound toggle
- **Game screen**: zoomable illustration with tappable hint points
- **Counter**: tracks found items, with a reset button
- **Accessibility**: labels and hints on interactive elements

## Tech stack

- [Expo](https://expo.dev/) 47 / React Native 0.70 / TypeScript
- React Navigation (native stack)
- `expo-av` for audio
- `@openspacelabs/react-native-zoomable-view` for pinch and zoom
- Zustand for state management
- NativeWind (Tailwind CSS) for styling
- React Native Reanimated

## Getting started

Requires Node 18 (see `.nvmrc`) and Yarn.

```bash
yarn install
yarn start      # Expo dev server
yarn ios        # iOS simulator
yarn android    # Android emulator
yarn web        # Web
```

## Project structure

```
src/
├── features/
│   ├── Home/
│   ├── Intro/   # Intro text, music and sound controls
│   └── Game/    # Zoomable view, hint points and counter
├── shared/      # Buttons and animations
├── hooks/       # useZoom, useFadeInAnimation
└── zustand/     # Global store
```

> This was a learning project and is not actively maintained.
