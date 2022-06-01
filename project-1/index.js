// ReactDOM = global variable from React DOM API
// render() = method that allows us to place something on the sceen
// first param: what you want to display
// second param: where you want it displayed (using vanilla JS DOM manipulation)
ReactDOM.render(
    <ul>
        <li>Hello</li>
        <li>World!</li>
    </ul>
    , document.getElementById("root"));