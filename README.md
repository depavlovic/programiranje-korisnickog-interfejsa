# ProgramiranjeKorisnickogIntefejsa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Movie Component

`Features`
Displays a list of movies retrieved from the MovieListService.
Allows users to reserve a movie and navigate to the reservation page.
Enables users to rate each movie with multiple rating options.
Shows success and error alerts using SweetAlert for user feedback.

`Dependencies`
Angular
Angular Material (MatCardModule, MatButtonModule, MatCheckboxModule, MatFormField)
SweetAlert (for alert notifications)

`Component Structure`
`Properties`
`movies:` An array of `Movie` objects containing the movie details.
`localRating`: An object storing ratings for each movie, initialized for each movie upon component initialization.
`Methods`
`ngOnInit()`: Retrieves the list of movies from the `MovieListService` and initializes the local ratings.
`reserveMovie(movie: Movie)`: Navigates to the reservations page and sets the selected movie in the `ReservationService.`
`submitRating(movie: Movie, rating: MovieRating)`: Collects selected ratings and updates the movie's rating. Displays success or error notifications based on user input.
`Template`
The component's template (movie.component.html) should include:

A display of each movie in a card format.
Options to rate the movie using checkboxes.
A button to reserve the movie.
`Error Handling`
The `submitRating` method provides feedback through SweetAlert notifications, indicating whether the rating was successfully recorded or if no rating was selected.

## Login Component
`Features```
Input fields for email and password using Angular Material components.
Basic validation to ensure fields are not empty.
Navigation to the user profile upon successful login.
Error handling for failed login attempts.
`Dependencies`
Angular
Angular Material (specifically MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule)
`Component Structure`
`Properties`
`email:` A string that holds the user's email input.
`password:` A string that holds the user's password input.
`userService:` An instance of `UserService` for handling authentication.
`Methods`
`updateEmail(e: any)`: Updates the `email` property based on user input.
`updatePassword(e: any)`: Updates the `password` property based on user input.
`doLogin()`: Validates user input and attempts to log the user in. If successful, navigates to the profile page.
`Template`
The component's template (login.component.html) should include the following:

Input fields for email and password.
A button to submit the login form.
`Error Handling`
The doLogin method alerts the user if the email or password fields are empty or if there is an error during the login process.

