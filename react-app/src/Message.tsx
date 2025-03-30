// two ways to create react component, class or function
// function-based component is more popular for now, they
// are more concise and easier to write

// PascalCasing
function Message() {
  // jsx: javascript xml
  const name = "Mosh";
  if (name) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello world</h1>;
  }
}

export default Message;
