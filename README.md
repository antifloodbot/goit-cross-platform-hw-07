# CoffeeGo

CoffeeGo is a React Native Expo homework project that builds a reusable component structure for a coffee ordering app.

## Implemented Components

- CustomButton
- CategoryChip
- SearchBar
- ProductCard
- Header
- BottomNavigation
- OrderInfoCard

## Adaptive Design

The home screen uses a centered app shell with a maximum width of 430px for web, while keeping the layout full width on mobile devices. Product cards use `useWindowDimensions` to calculate a responsive width, so they adapt to smaller screens and stay readable on wider screens. The header also uses `Platform.select()` to apply small platform-specific spacing differences for iOS and Android.

## Props Usage

Components receive data and behavior through props. For example, `CustomButton` receives `title` and `onPress`, `CategoryChip` receives `title`, `active`, and `onPress`, and `ProductCard` receives `title`, `price`, `imageUrl`, and `onAddToCart`. This keeps the UI components reusable across screens.

## Run The Project

```bash
npm install
npm run web
```

# Homescreen

![HomeScreen](assets/homescreen.png)
