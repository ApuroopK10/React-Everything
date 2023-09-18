import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="text-red-700">
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1>LoggedInUser: {loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
