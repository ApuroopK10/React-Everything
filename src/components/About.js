import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>
          Hunger games is all about facilitating users with multiple cuisines,
          reachable on the click of a button.
        </h2>
        <User name="Apuroop" location="Hyderabad" />
      </div>
    );
  }
}

export default About;
