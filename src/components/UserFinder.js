import { Component } from 'react';

//Context
import UsersContext from '../store/users-context';

//Components
import Users from './Users';

//Styles
import classes from './UserFinder.module.css';

class UserFinder extends Component {
  //Context
  static contextType = UsersContext;

  state = {
    filteredUsers: [],
    searchTerm: ''
  }

  componentDidMount() {
    //Simulate http request
    this.setState({ filteredUsers: this.context.users })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;