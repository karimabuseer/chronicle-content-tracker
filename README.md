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
2. Navigate to the local project directory
3. Tests are run using the Jest testing suite. To run tests:
``` 
yarn test
```
*To run tests with a coverage report*
```
yarn test --coverage
```
4. To install the relevant databases, you'll need to be able to access the sequelize JS package via the command line: 
```
npm install -g sequelize-cli
```

