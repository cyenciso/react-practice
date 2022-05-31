
/* Component:
- function that returns one object that represents an HTML element
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