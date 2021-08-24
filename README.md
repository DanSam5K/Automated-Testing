![](https://img.shields.io/badge/Microverse-blueviolet)

# Automated Unit Testing With Jest

> In this exercise, I write a few practical tests for JavaScript functions using the [Jest](https://jestjs.io/) library. I make sure to follow the [AAA pattern](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-12-structure-tests-by-the-aaa-pattern) to make my tests easier for other developers to read and understand. I also try to use the TDD approach in practice.

Additional description about the project and its features.
### Instructions 
#### Task 1
- Write a function *stringLength(string)* that takes any string as an argument and returns its characters count.
- Now write a test for this function.
- Next, expand my function to make it check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met.
- Add tests for the new functionality.

#### Task 2
- Write a function *reverseString(string)* function. It should take a string as an argument and return it reversed. With a test for this function.
#### Task 3
In this task, I wrote several tests for each tested function. Using group related tests so their output is more readable. *Jest* has the `describe()` method just for that. Read about it [here](https://jestjs.io/docs/api#describename-fn)

- Wrote a simple *calculator* class or object, which will have 4 methods: *add*, *subtract*, *divide*, and *multiply*. with at least 3 tests for each of the calculator methods.
- Group tests for each method using `describe()` method.
#### Task 4 
This task was implemented differently:
- Started by writing a test for a *capitalize(string)* function. My test made sure that this function takes a string as an argument and returns that string with the first character capitalized.
- Then I make my tests green by implementing the *capitalize(string)* function.
## Built With

- Jest
- JavaScript
- Visual Studio Code
- Git & Github


To get a local copy up and running follow these simple example steps.

### Prerequisites
- You need to have node installed in your computer
### Setup
- You can follow the link to get [node installed](https://nodejs.org/en/) into your local machine
- Click [Jest](https://jestjs.io/) to install jest and view documentation.
### Install

To get a local copy up and running follow these simple example steps.
- Open terminal
- Clone this project using the command `git clone https://github.com/DanSam5K/Automated-Testing.git`
- `cd <clone>` folder

### Run tests
- Run `npm install` to install project dependencies.
- Run `npm test` in your local browser to see Jest in action and test passing.
## Authors

👤 **Daniel Samuel**

- Github: [DanSam5k](https://github.com/DanSam5k)
- Twitter: [@_dan_sam](https://twitter.com/_dan_sam)
- Linkedin: [dansamuel](https://www.linkedin.com/in/dansamuel/)
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/DanSam5K/Automated-Testing/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used 🔰
- Inspiration 💘
- Microverse program ⚡
- Our standup team 🏹
- Our family's support 🙌
## 📝 License

This project is [MIT](./MIT.md) licensed.
