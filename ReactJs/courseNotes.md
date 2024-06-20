# ReactJS Course

[Course Link](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Components

React components are just javascript functions.

## Props

You can add properties to a component to change its behavior.

    function Hello(props) {
        return <h1> Hello {props.name} </h1>
    }

    <Hello name="John"/>

Props are not passed automatically to child components, to fix this you can pass the props to the component.

    function Section(){
        return (
            <section {...props}>
                <h2>something</h2>
            </section>
        )
    }

By doing this you pass all the props as an object to the child component, in this case the section component.

You can pass JSX as a prop too, just make sure you're only passing one element to the component.

    <section>
        <Component buttons={
            <div>
                something
            </div>
        }/>
    </section>

Something in this case could be another component with props etc.

## Children prop, Component composition

You can  access it with props.children, it contains all the data inside the component tag.

    function HelloComponent(props) {
        return 
            <li> 
                <button>{props.children}</button>
            </li>
    }

    <HelloComponent>
        Components
    </HelloComponent>

## Events

To add a behavior for a component in a event you can assign a function to the event in the component. Do it without the parentheses, if you use the parentheses the function will be called when the component is rendered.

    function HelloComponent(props) {

        function handleClick() {
            console.log('Hello');
        }

        return 
            <li> 
                <button onClick={props.onClick}>
                    {props.children}
                </button>
            </li>
    }

    <HelloComponent onClick={handleClick}>
        Components
    </HelloComponent>

To pass parameters to the funciton you can use arrow functions and the parameter.

    function HelloComponent({Onclick, children}) {

        function handleClick(text) {
            console.log(text);
        }

        return (
            <li> 
                <button onClick={Onclick}>
                    {children}
                </button>
            </li>
        )
    }

    <HelloComponent onClick={() => handleClick('Example Text')}>
        Components
    </HelloComponent>

## State

You should import the useState hook, all libraries that start with use in react are a hook. Hooks are functions that can only be called inside react components and the must be called at top level inside the function (not inside a condicional for example).

The useState function always returns an array with two elements, the first is the state and the second is the function to update the state.

    import {UseState} from 'react'

    function HelloComponent({Onclick, children}) {
        const [selectedTopic, setSelectedTopic] = useState("Initial value");

        function handleClick(text) {
            setSelectedTopic(text)
            console.log(text);
        }

        return (
            <li> 
                <button onClick={Onclick}>
                    {children}
                </button>
            </li>
        )
    }

    <HelloComponent onClick={() => handleClick('Example Text')}>
        Components
    </HelloComponent>

Everytime the use state is executed the component is re-rendered.

The useState function always receives the current variable value as an argument so you can use it, you can also execute a function inside so you set the new value to the one that these function returns.

    setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));

## Conditionals

You can add conditionals to topic rendering ex:

    { (condition) ? <h1>Something</h1> : null }

    { (condition && <h1>Something</h1>) }

You can add ifs to update before the return component.

    let div = <div></div>
    if condition do something
    return (component {div})

## Styling

You can set a css style by using the className prop.

    <h1 className="title">Hello</h1>

You can use conditionals in classes.

    <h1 className={condition ? "title" : null}>Hello</h1>

## Map components

If you have an array of data for a component you can populate the component with map function.

    <ul>
        {DUMMY_TODOS.map((todo)=><Todo text ={todo} />)}
    </ul>

## Pass component type as parameter

To do this if youre going to use a custom component you should pass it in a paramter and start with a capital letter if youre going to pass a html component you do it as a string.

    Custom component

    <CustomComponent componentType={CustomComponent}>
        <h1>Example</h1>
    </CustomComponent>

    HTML
    <CustomComponent componentType="menu">
        <h1>Example</h1>
    </CustomComponent>

Then inside the component function to use it:

    function CustomComponent({content, componentType}) {
        const ComponentType = componentType;
        return (
            <div>
                <ComponentType></ComponentType>
            </div>
        )

    }

## Style

The style property is an object with css properties, it is like doing inline css.

    <h1 style={{color: 'red'}}>Hello</h1>

Properties that use a dash must be in camelCase. For example text-align becomes textAlign, or you can wrap it in quotes 'text-align'.

Todo inline css with conditionals do it this way.

    <h1 style={{color: yesPressed ? 'green':'red'}}>CSS is great!</h1>

You can add dynamic classes using conditionals and template literals

    className={`label ${validEmail ? 'green':'red'}`}

You can import classes as modules using import

    import classes from 'file.module.css'
    <p className={classes.label}>Hello</p>

## Styled-Components

It is a npm module that lets you style components, it returns a function with those styles applied to it.

    const ControlContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px;
    `
This creates a component called Control container with those styles. To use it:

    <ControlContainer />

You can add conditionals to styled components just like with regular css

    const ControlContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px;
        color: ${(props) => (props.valid ? 'green' : 'red')};
    `

### Tailwind CSS

This library can be also used with just plain css an d html, it works like bootstrap, you can add classes to component to apply defined styles.

## Notes

If you want to execute an expresion inside JSX you use curly braces.

    <p> Hello {1+1} world </p>

If you want to assign an html property with a variable you dont use "".

    <img src={image}/>
