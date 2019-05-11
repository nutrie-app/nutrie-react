# About

React Native source code for the NUTRIE-app.

#### Latest stable release:

_X.X.X_

#### Features in this release (0.0.1):

- [x] Barcode scanner
- [ ] Recommendations based on food category and diet
- [ ]
- [ ]
- [ ]

# Contribution guidelines

Each merge request must be approved by at least **1 developer** in the team.

# Branching

- **wip** - Sandbox branch
- **feature** - When a feature should be added/edited or removed from the project.
- **devel** - The devel branch is the official working branch from where new feature or wip branches should be checked-out from.
- **master** - Edits to master can only be done by merges from the devel branch. Protected branch.

# Structure

```
nutrie-react/
  README.md
  node_modules/
  package.json
  assets/
    demo/
  src/
    components/
    views/
  App.css
  App.js
  App.test.js
  index.css
  index.js
  .eslinrc
  .gitignore
  .watchmanconfig
  babel.config.js
  .expo/
```

# Getting started

## Prerequisites

- Install [Node 10+](https://nodejs.org/en/download/)
- Install the [Expo client app](https://expo.io/) on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, follow on-screen instructions to get a link.

_See [Getting started](https://facebook.github.io/react-native/docs/getting-started) for more details._

## Run development server

From root of repository, run `npm start` or `expo start`.
