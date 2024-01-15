import React from "react";
import { useContext, useState, useEffect } from 'react';
import { userContext } from "../../../context/authContext";

const Profile = () => {
    const { userstate } = useContext(userContext);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (userstate != null) {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/user/getUser/${userstate.user_id}`);
            const result = await response.json();
            if (result == "error") {
              setData(null)
            } else {
              setData(result);
            }
          } catch (error) {
            setData(null)
          }
        }
        fetchData()
      }
    }, [userstate]);

    const paintCards = () => {
      
    }

  return (
    <>
    {userstate != null && userstate.acceso ? (
        <section id="ProfileContainer">
            <h1>Hola</h1>
        </section>
    ) : ("")}
    </>
  ); 
};

export default Profile;