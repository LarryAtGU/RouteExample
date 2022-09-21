import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Route path="/welcome/newuser">
        <h3>Welcome new user</h3>
      </Route>
    </div>
  );
};

export default Welcome;
