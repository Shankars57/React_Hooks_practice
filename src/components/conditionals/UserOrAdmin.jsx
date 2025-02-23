let IsAdmin = () => <h1>Admin is LoggedIn</h1>;
let IsUser = ()=><h1>User is LoggedIn</h1>;
const UserOrAdmin = ({invalid}) => {
if(invalid){
  return <IsAdmin/>
}
else{
  return <IsUser/>
}
};

export default UserOrAdmin;
