
/* Component:
- function that returns JSX, which is one object that represents an HTML element
- parenthesis are optional but allow you to move to the next line after `return`
*/
function Section() {
    return (
        <div>
            <h1 className="red">This is my section</h1>
            <p>It has some paragraph content!</p>
        </div>
    )
}

ReactDOM.render(
    // rendering a component uses tag syntax
    <Section />
    , document.getElementById("root"));

// viewing the output shows us that the React element is a JS object
const element = <h1 className="red">This is my section</h1>;
console.log(element);

// JSX can be saved into a variable, as it is just an object
const nav = (
    <nav>
        <h1>Dillo Dally</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(nav, document.getElementById("root"));