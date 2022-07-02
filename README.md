![Logo](./readme/assets/img/logo.png)

## Inside Joke
 
A website made for a musical band Inside Joke.

### Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Testing](#testing)
* [Project Structure](#project-structure)
* [Deployment](#deployment)
* [Resources](#resources)

### Prerequisites

* <img src="./readme/assets/img/nodejs.png" height="15px" style='padding-right: 5px'> *Node JS @16.14.2*
* <img src="./readme/assets/img/npm.png" height="15px" style='padding-right: 5px'/> *npm 8.5.0*

### Tech Stack

* <img src="./readme/assets/img/typescript.png" height="15"  style='padding-right: 5px'> [Typescript @4.6.4](https://www.typescriptlang.org/) - programming language
* <img src="./readme/assets/img/react.png" height="15"  style='padding-right: 5px'> [React @18.0.0](https://reactjs.org) - front-end framework
* <img src="./readme/assets/img/react-router.png" height="15"  style='padding-right: 5px'> [React Router @6.3.0](https://reactrouter.com/) - routing library
* <img src="./readme/assets/img/react-hook-form.png" height="15"  style='padding-right: 5px'> [React Hook Form @7.30.0](https://react-hook-form.com/) - form validation library
* <img src="./readme/assets/img/tailwind.png" height="15"  style='padding-right: 5px'> [Tailwind @3.0.24](https://tailwindcss.com/) - css framework
* <img src="./readme/assets/img/cypress.png" height="15"  style='padding-right: 5px'> [Cypress  @9.6.0](https://www.cypress.io/) - end-to-end testing framework

### Getting Started

1\. First of all clone the repository from github:
```sh
git clone https://github.com/Domianidze/inside-joke.git
```
2\. Secondly install all the dependencies:
```sh
npm install
```

3\. Then create the config file and change it if needed:
```sh
cp .env.example .env
```

4\. Lastly start the dev server:
```sh
cp .env.example .env
```

### Testing
Inside Joke uses ``` @cypress ```  for testing.

you can run and view tests in the Cypress GUI. You can open the Cypress GUI  using the following commands:

1\. First of all create the config file and change it if needed:
```sh
cp cypress.config.ts.example cypress.config.ts
```

2\. Then start the dev server:
```sh
npm start
```

3\. Lastly open the Cypress GUI:
```sh
npx cypress open
```

### Project Structure

```bash
├─── cypress # cypress files
├─── readme # readme assets
├─── public # public files
├─── src # source codes
│   ├─── assets # images and fonts
│   ├─── components # reusable components
│   ├───├─── component-name.tsx # component
│   ├───├─── index.ts # export all components
│   ├─── hooks # hook files 
│   ├───├─── hook-name.ts # hook file
│   ├───├─── index.ts # export all hooks
│   ├─── pages # pages
│   ├───├─── page-folder # page folder
│   ├───├───├─── components # [OPTIONAL] reusable components
│   ├───├───├───├─── component-name.tsx # component
│   ├───├───├───├─── index.ts # export all components
│   ├───├───├─── util # [OPTIONAL] utility functions
│   ├───├───├───├─── util-function.ts # utility function
│   ├───├───├───├─── index.ts # export utility functions
│   ├───├───├─── page-name.tsx # page component
│   ├───├───├─── index.ts # export default page
│   ├───├─── index.ts # export all pages
│   ├─── state # state managment files 
│   ├───├─── state-name.tscx # component
│   ├───├─── index.ts # export all states
│   ├─── App.tsx # react app 
│   ├─── index.css # global styles 
│   ├─── index.tsx # index file 
│   ├─── react-app-env.d.ts # essentialtypes 
- .env-example # config file example
- .gitignore # git ignore file
- .babelrc.json # babel config file
- .eslintrc.json # eslint config file
- .prettierrc.json # prettier config file
- tailwind.config.js # tailwind config file
- postcss.config.js # postcss config file
- tsconfig.json # typescript config file
- package.json # dependency manager configurations
- package-lock.json # dependency manager configurations
```

### Deployment

We have a helper script which helps us in deployment.

Simply run this command to get deplyoment ready files in the  ``` public ```  folder:

```sh
npm run build
```

### Resources

*  [Project Details](https://redberry.gitbook.io/assignment-iii-inside-joke/)
*  [Git Commit Rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)