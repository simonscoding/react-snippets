function App() {
  const fruits = ["orange", "apple", "strawberry"];

  const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return <>{fruitList}</>;
}

export default App;
