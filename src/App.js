import React, { Component } from "react";
import Userdetails from "./userdetails";
import "./App.css";

const initialUsers = [
  {
    id: 1,
    name: "Ganesh",
    age: 16,
    img: "https://tse2.mm.bing.net/th/id/OIP.L1tOpfWSRi5Ur_RP98eJowHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Ramesh",
    age: 17,
    img: "https://th.bing.com/th/id/OIP.0J2kX4bYHkX4bYHkX4bYHkAAAA?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    name: "Suresh",
    age: 18,
    img: "https://th.bing.com/th/id/OIP.0J2kX4bYHkX4bYHkX4bYHkAAAA?pid=ImgDet&rs=1",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: initialUsers,
      search: ""
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id)
    }));
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { users, search } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="user-list-container">
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Search users..."
          className="search-bar"
          value={search}
          onChange={this.handleSearch}
        />
        {filteredUsers.length === 0 && <p>No users found.</p>}
        {filteredUsers.map((user) => (
          <Userdetails
            key={user.id}
            fname={user.name}
            age={user.age}
            img={user.img}
            onDelete={() => this.handleDelete(user.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;



