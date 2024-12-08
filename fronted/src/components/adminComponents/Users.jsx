import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Users = () => {
  const [allusers, setAllusers] = useState()


  useEffect(() => {

    const GetAllUsers = async () => {
      try {
        const response = await axios.get('/api/users/getallusers')
        const data = await response.data
        setAllusers(data)
        console.log(response.data)
      } catch (error) {
        console.log("Error")
      }
    }


    GetAllUsers()


  }, [])

  return (

    <>
      <div className="admin-table">
        <h1>Users</h1>

        <div className="table-head">

          <div className="user-id">
            User Id
          </div>

          <div className="user-name">
            Name
          </div>

          <div className="user-email">
            Email
          </div>

          <div className="isAdmin">
            isAdmin
          </div>

          <div className="account-created">
            Account Created At
          </div>


        </div>


        {allusers && allusers.length > 0 ? (
          allusers.map((user) => {
            return (
              <div className="table-body" key={user._id}>
                <div className="user-id">{user._id}</div>
                <div className="user-name">{user.username}</div>
                <div className="user-email">{user.email}</div>
                <div className="isAdmin">{user.isAdmin ? "Yes" : "No"}</div>
                <div className="account-created">
                  {new Date(user.createdAt).toLocaleString()}
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-users">No users available.</div>
        )}


      </div>
    </>

  )
}

export default Users