import { IntroTypes, PostsTypes } from "../types/types";

export const postslData: PostsTypes[] = [
  {
    id: 1,
    title: "JSX",
    text: `JSX stands for JavaScript XML.

    JSX allows us to write HTML in React.
    
    JSX makes it easier to write and add HTML in React.`,
    text1: "Example",
    code1: "const myElement = <h1>React is {5 + 5} times better with JSX</h1>;",
    text2: "Example 2",
    code2: `const myElement = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );`,
    text3: `Summary`,
    text4: `With JSX you can write expressions inside curly braces. To write HTML on multiple lines, put the HTML inside parentheses. `,
  },
  {
    id: 2,
    title: "Components",
    text: `Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.`,
    text1: "Example",
    code1: `class Car extends React.Component {
      render() {
        return <h2>Hi, I am a Car!</h2>;
      }
    }`,
    text2: "Example 2",
    code2: `function Car() {
      return <h2>I am a Car!</h2>;
    }
    
    function Garage() {
      return (
        <>
          <h1>Who lives in my Garage?</h1>
          <Car />
        </>
      );
    }`,
    text3: `Summary`,
    text4: `Components are functions, and we can refer to components inside of other components. React is all about re-using code, and it is recommended to split your components into separate files.`,
  },
  {
    id: 3,
    title: "Props",
    text: `Props are arguments passed into React components.

    Props are passed to components via HTML attributes.`,
    text1: "Example",
    code1: `const myElement = <Car brand="Ford" />;
    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }
    `,
    text2: "Example 2",
    code2: `function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }
    
    function Garage() {
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand="Ford" />
        </>
      );
    }`,
    text3: `Summary`,
    text4: `React Props are like function arguments in JavaScript and attributes in HTML. React Props are read-only! You will get an error if you try to change their value.`,
  },
  {
    id: 4,
    title: "Events",
    text: `Just like HTML DOM events, React can perform actions based on user events.

    React has the same events as HTML: click, change, mouseover etc.`,
    text1: "Example",
    code1: "<button onClick={shoot}>Take the Shot!</button>",
    text2: "Example 2",
    code2: `function Football() {
      const shoot = (a) => {
        alert(a);
      }
    
      return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
      );
    }`,
    text3: `Summary`,
    text4: `Event handlers have access to the React event that triggered the function.

    In our example the event is the "click" event. `,
  },
  {
    id: 5,
    title: "Conditionals",
    text: `In React, you can conditionally render components.

    There are several ways to do this. We will check && and ternary operators.`,
    text1: "Example",
    code1: `function Garage(props) {
      const cars = props.cars;
      return (
        <>
          <h1>Garage</h1>
          {cars.length > 0 &&
            <h2>
              You have {cars.length} cars in your garage.
            </h2>
          }
        </>
      );
    }
    
    const cars = ['Ford', 'BMW', 'Audi'];`,
    text2: "Example 2",
    code2: `function Goal(props) {
      const isGoal = props.isGoal;
      return (
        <>
          { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
      );
    }`,
    text3: `Summary`,
    text4: `We have learned most common usage of conditionals. For further info including if/else please visit official documentation. `,
  },
  {
    id: 6,
    title: "Hooks",
    text: `Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. We will look into 2 most use hooks, useState and useEffect`,
    text1: "Example",
    code1: `import { useState } from "react";
    import ReactDOM from "react-dom/client";
    
    function FavoriteColor() {
      const [color, setColor] = useState("red");
    
      return <h1>My favorite color is {color}!</h1>
    }`,
    text2: "Example 2",
    code2: `import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";
    
    function Timer() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
    
      return <h1>I've rendered {count} times!</h1>;
    }`,
    text3: `Summary`,
    text4: `The React useState Hook allows us to track state in a function component.

    State generally refers to data or properties that need to be tracking in an application.The useEffect Hook allows you to perform side effects in your components.

    Some examples of side effects are: fetching data, directly updating the DOM, and timers. `,
  },
  {
    id: 7,
    title: "Congratulations",
    text: ``,
    text1: "",
    code1: "You have just completed 10 min introduction to React.",
    text2: "",
    code2: `As a next step we recommend you to start learning from official doccumenation react-dev`,
    text3: ``,
    text4: ` `,
  },
];

export const introData: IntroTypes = {
  description: `React is a JavaScript library for building user interfaces. React is used to build single-page applications and allows us to create reusable UI components.`,
  howItWorks1title: `React creates a VIRTUAL DOM in memory.`,
  howItWorks1text: `Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.`,
  howItWorks2title: `React only changes what needs to be changed!`,
  howItWorks2text: `React finds out what changes have been made, and changes only what needs to be changed.`,
  settingUp: `Setting up React environment`,
  settingUptext: `First of All we need a code editor, where we will create our react app. We suggest you to use VISUAL STUDIO CODE, which can be found `,
  settingUptext1: `To work with react we have to make sure NODE.JS is installed, you can find it `,
  settingUptext2: `Once Node.js and VS Code are installed, we can create react app. CRA is no longer recommended by React Dev Team, so we will use another building tool, VITE. Create folder with any name you like (e.g app1) in any folder you want (we suggest to keep projects in 1 place), once it is done you can open this app1 folder by dragging it to VS code icon or by opening VS code and opening project inside of it. Once this part is done, open new terminal in VS Code (top menu), and type: `,
  settingUptext3: `This command will start creation of new project. We will be prompted to pick framework, pick React, after that we can choose variant (js or ts), let's stick to javascript. Once we pick javascript, our project folder will be created with required files from Vite. Let's download necessarry node_modules now, type:  `,
  settingUptext4: `Wait until installation of required modules is done. Once it is done, we can start our application with code:  `,
  settingUptext5: `Congratulations, your app is running. You should be able to see this in your web browser: `,
};
