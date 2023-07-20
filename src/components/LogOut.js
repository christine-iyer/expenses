import { logOut } from "../utilities/users-service";
import { useState } from "react";
export default function LogOut({ user, setUser }) {
     function handleLogOut(){
          logOut()
          setUser(null)
     }
     return(
          <div>
               {/* <div>{user.name}</div>
               <div>{user.email}</div> */}
               <button onClick={handleLogOut}>Log Out</button>
          </div>
     )
}