import { useState, useEffect, useContext } from 'react';

//Context
import UsersContext from '../store/users-context';

//Components
import Users from './Users';

//Styles
import classes from './UserFinder.module.css';

const UserFinder = () => {
  const { users } = useContext(UsersContext)

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </>
  );
};

export default UserFinder;