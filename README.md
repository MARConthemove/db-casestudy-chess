# DB Case Study Chess Application

Dieses Projekt umfasst die Entwicklung einer interaktiven Webanwendung, die ein Schachbrett darstellt und die möglichen Züge eines Springers (eng. Knight) visualisiert und simmuliert. Die Anwendung ist in HTML, CSS und JavaScript/TypeScript geschrieben. Also Frameworks wurden React.js und MaterialUI (MUI) verwendet. Alle weiteren "Dependencies" siehe package.json.

Die Anwendung akzeptiert eine URL-Query-Parameter namens "start", der den Startplatz des Springers bestimmt, z.B. "e4". Es ist auserdem möglich, ein Feld anzuklicken, um so die Startposition des Läufers zu bestimmen. Basierend auf diesem Startfeld berechnet die Anwendung die möglichen Züge des Springers und hebt diese auf dem Schachbrett hervor (weiß). Darüber hinaus wird das Startfeld selbst auch visuell hervorgehoben (gelb).

Die Anwendung ist so konzipiert, dass die Farben des Schachbretts und die Farben der Beschreibungen einfach durch Änderung des Stylesheets angepasst werden können (Board.css).

Der Code für dieses Projekt ist auf Github verfügbar, was eine einfache Nachvollziehbarkeit der Entwicklungsschritte ermöglicht.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
