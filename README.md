# Note Meeting People App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Clean code with Eslint
Install: `npm install eslint`\
Configure: `./node_modules/.bin/eslint --init`\
Add more rules in .eslintrc.json e.g.: `"no-empty-function": "off",`\
Add script in package.json: `"eslint": "eslint ./",`\
Run eslint: `npm run eslint`

## Testing with Cypress
Install: `npm install -D cypress`\
Open Desktop App: `npx cypress open`\
Run tests by clicking on: `>Run all specs`\
Or run following after configuring package.json with: "cy:open": "cypress open", "cy:run": "cypress run"\
`npm run cy:open`\
`npm run cy:run`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
