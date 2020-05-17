# Medic Creations recruitment test - React Native Instructions

Thanks for taking the time to do our front-end / full-stack coding test. The challenge has two parts:

* a task to create a basic app that will allow people to track their hand washing, keep a history of their hand washing and when needed receive regular reminders to wash their hands.
* some follow-up questions

You will be graded based on the following have been met:

* Your implementation works as described in the task.

## Task
### Approach

Mobile app on iOS and Android using React Native. The app will need to:

* Persist the users hand washing history locally on the device
* Ask for permission to send push notifications
* Send local push notifications
* Have an animated count down timer to help them as they wash their hands

The base project is available in this repo and we want you to fork this repo.

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.

* Please complete the user stories below.
* Your code should run in one step.
* We'd like you to use React Native. On top of that, use whatever front-end libraries you feel comfortable with.
* You must include tests

### User Stories

As a user I want to easily start a timer to wash my hands

As a user I want to see a history of my prior hand washing

As a user I want to get reminders every 2 hours when on shift

## Design

Design assets are available as a Sketch file via Sketch Cloud - https://www.sketch.com/s/nq8e4

Please do not spend a lot of time on styling as this is not the key part of the assessment, and you will not be penalised for basic styles. 


## Submission Guidelines

Fork this repo and send a link to the repo on Github/bitbucket/gitlab via email back to your contact.

The FOLLOW-UP.md file should have answers to the follow-up questions.

---

Inspiration for the test format taken with ❤️ from JustEat's recruitment test and Skyscanner recruitment test.

---

# Hand Wash Timer Mobile App - Development Readme

react-native repo for the Medic Bleep Hand Wash Timer mobile app

# Development

## Running the app locally - iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc
4. Install js dependencies: `yarn install`
5. Install native dependencies: `cd ios && pod install`
5. Create `app/config/local.js` - local dev config that isn't committed.
6. Start the js bundler: `react-native start`
7. Run the project: `react-native run-ios`

## Running the app locally - Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager (or have a real device connected)
3. Install js dependencies: `yarn install`
4. Create `app/config/local.js` - local dev config that isn't committed. Default options can be copied from `app/config/local-example.js`
5. Start the js bundler: `react-native start`
6. Run the project: `react-native run-android`

## Structure

We're using `redux` for state management and `redux-saga` for asynchronous actions e.g. api requests.

The bulk of the code is in the `app` directory.

| location       | contents                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| app/App.js     | Entrypoint for the app                                                                                                 |
| app/components | lower level components, e.g. buttons                                                                                   |
| app/screens    | components representing entire screens within the app, where integration with redux would happen                       |
| app/config     | app-wide config - things like an api host, colors, etc. Configuration of the redux store and, in dev, tools like Reactotron. |
| app/state      | redux reducers/actions/selectors. Combined in `index.js`                                                               |
| app/sagas      | `redux-saga` sagas, forked from the root saga in `index.js` to run in parallel.                                        |
| \_\_tests\_\_/ | Tests, using [Jest](https://jestjs.io/)                                                                                |
| ios/           | Native iOS project
| android/       | Native Android project

## Config

Global app config is in `app/config/index.js`. There are some defaults which are overridden by the contents of `local.js` and either `development.js` or `production.js`, in that order, depending on if the app is being run locally or built as a release.

`local.js` is intended for overriding config values without committing them. Things like enabling/disabling storybook locally or secret tokens.

`production.js` is applied last, so local values for these won't have an effect.

#### Possible config values

**TODO** Update these as config values are established

| value              | purpose                                                                |
| ------------------ | ---------------------------------------------------------------------- |
| `colors`           | The colors used throughout the app
| `storybookEnabled` | Should storybook run? (not currently implemented)

## Redux

**TODO** Setup redux

Our typical redux setup would be done in `config/store.js`. This would setup the redux store, add middleware (such as redux-saga and redux-persist).

We would then add the react-redux `Provider` to `app/App.js`.

We have included `@reduxjs/toolkit` which speeds up development by allowing us to abstract away most of the typical boilerplate code associated with setting up and using redux. For example:
- Includes a convenience function for configuring the store
- Has the concept of a `slice` which incorporates reducers and action creators

It's worth reading through the [toolkit docs](https://redux-toolkit.js.org/) for more details

## Dev Tools

#TODO

## Tests

Run the tests with `yarn test`. We use a mixture of snapshot tests for making sure we don't make any unintentional changes to components or redux state mutations, and unit tests elsewhere.

## Code style

We use `prettier` for code formatting.

# Build & Deploy

## iOS

**TODO** document how to deploy

## Android

**TODO** document how to deploy
