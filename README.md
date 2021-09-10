# Chronicle Content Tracker
Final Project for Makers. For information about our approach and process, check out our wiki. 

## User Stories
MVP user stories
```
As a User,
So that I can track books I want to read,
I want to be able to add books to a list.
```

```
As a User,
So that I can choose the next book I want to read,
I want to be able to see the books on my list.
```

```
As a User,
So that I can track books I have read,
I want to be able to mark books in my list as 'Read'.
```

```
As a User,
So I can keep track of the books I'm currently reading,
I want to mark books as 'Reading'.
```

```
As a User,
To keep my book list tidy,
I want to delete books I don't want on my list.
```

```
As a User,
So I have a personal list,
I want to be able to make an account and login.
```
## Built With
- For the backend, we decided to use Node.js to run our server side applications. Express.js is used for our routing framework. Postgresql was used as our database manager. Mockup docs were created using Sketch.

## Usage
To setup the project:

1. Install Node using Homebrew (macOS/Linux) or via the [Node.js website!](https://nodejs.org/en/download/) (Windows)
2. Navigate to the local project directory and install dependencies: 
```
npm install
npm install -g --save sequelize-cli
```

3. Tests are run using the Jest testing suite. To run tests:

Start the server in the test environment:
```
NODE_ENV=test npm start
```

then run

``` 
npm test
```
*To run tests with a coverage report*
```
yarn test --coverage
```
4. Create a role for the test database. Connect to psql and run the following commands:
```
CREATE ROLE noodle_eater WITH LOGIN PASSWORD 'r@m3n!';
ALTER ROLE noodle_eater CREATEDB;
```

5. Create a database plus a test user to make changes to it using the following PSQL commands: 
```
CREATE DATABASE chronicle_development;
CREATE DATABASE chronicle_test;
```

6. To update the databases, you'll need to be able to access the sequelize JS package via the command line: 
```
sequelize db:migrate
sequelize db:migrate --env test
```

7. To run the project in the developer environment:
```
npm start
```

or after setting it to the test environment:

```
NODE_ENV=development npm start
```

