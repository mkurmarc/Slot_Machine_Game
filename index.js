class App extends React.Component {
    render() {
        const fruits = [ '🍇', '🍏', '🍉' ];
        const randomFruit = (fruits) => fruits[Math.floor(Math.random() * 3)];
 
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine s1={randomFruit(fruits)} s2={randomFruit(fruits)} s3={randomFruit(fruits)} />
                <Machine s1={randomFruit(fruits)} s2={randomFruit(fruits)} s3={randomFruit(fruits)} />
                <Machine s1={randomFruit(fruits)} s2={randomFruit(fruits)} s3={randomFruit(fruits)} />
            </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'));