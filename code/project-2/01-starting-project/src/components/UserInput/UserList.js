import React from "react";

const UserList = (props) => {
  console.log(props.users);
  return (
    <>
      {props.users.map((user) => (
        <div key={Math.random().toString}>
          <p>{user.userName}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </>
  );
};

export default UserList;
