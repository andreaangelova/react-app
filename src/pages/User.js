const User = ({ user }) => {
  console.log("render user comp");
  return (
    <h1>
      Your name: {user.name} and surname: {user.surname}
    </h1>
  );
};

export default User;
