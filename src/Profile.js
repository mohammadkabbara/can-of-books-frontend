import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import './profile.css'
// import Card from 'react-bootstrap/Card';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
        <Card style={{ width: '18rem',margin:'5%',marginLeft:'40%' ,marginBottom:'10%'}} >
  <Card.Img variant="top" src={user.picture}  />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    {user.email}
    </Card.Text>
    
  </Card.Body>
</Card>
      </div>
    )
  );
};

export default Profile;