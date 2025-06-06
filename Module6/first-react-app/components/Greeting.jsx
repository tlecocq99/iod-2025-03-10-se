function Greeting(props) {
  // convert object to strin
  return (
    <div className="Greeting componentBox">
      {props.name ? <h3>Hello {props.name}!</h3> : <h3>Hello World!</h3>}
    </div>
  );
}
// export this component so we can import it elsewhere
export default Greeting;
