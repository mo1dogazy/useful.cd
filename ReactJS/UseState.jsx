import { useState } from "react";

function UseStateNice() {
  const [greeting, setGreeting] = useState({ greet: "Nice Hellow World!" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "Nice Oh sorry, Hi from MOLDOGAZY aka!";
    setGreeting(newGreeting);
  }
  return (
    <div className="all">
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Updat greeting</button>
    </div>
  );
}

export default UseStateNice;
