import { Component } from "react";
import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

export class ToDoListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      showUserDetails: false,
      showUserData: {},
      taskId : ""
    };
    // this.showUser = this.showUser.bind(this);
  }
  showUser = async (id,taskId) => {
    const me = this;
   await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) =>
        me.setState({
          showUserData: data,
        })
      )
      .catch((err) => console.log(err));
      console.log(this.state.showUserData)
    this.setState({
      showUserDetails: !this.state.showUserDetails,
      taskId : taskId
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          userData: data,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const showUserDetailsTable = (
      <div>
        <MDBRow className="row">
          <MDBCol md="6">
            <span>To Do ID</span>
          </MDBCol>
          <MDBCol md="6">{this.state.taskId}</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <span>To Do Title</span>
          </MDBCol>
          <MDBCol md="6">{this.state.showUserData.name}</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <span>User Id</span>
          </MDBCol>
          <MDBCol md="6">{this.state.showUserData.id}</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <span>User name</span>
          </MDBCol>
          <MDBCol md="6">{this.state.showUserData.username}</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <span>User email</span>
          </MDBCol>
          <MDBCol md="6">{this.state.showUserData.email}</MDBCol>
        </MDBRow>
      </div>
    );
    return (
      <div>
        <MDBRow>
          <MDBCol md="8">
            <table>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>action</th>
              </tr>
              {this.state.userData.map((item) => {
                const { userId, id, title, completed } = item;
                return (
                  <tr>
                    <td>{userId}</td>
                    <td>{title}</td>
                    <td>{completed === true ? "Complete" : "InComplete"}</td>
                    <td>
                      {
                        <span>
                          <button onClick={() => this.showUser(userId,id)}>
                            View User
                          </button>
                        </span>
                      }
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </table>
          </MDBCol>
          <MDBCol md="4">
            {this.state.showUserDetails ? showUserDetailsTable : "no data"}
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
export default ToDoListTable;
