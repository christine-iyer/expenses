import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import LogOut from '../components/LogOut'
export default function AuthPage(props) {
     return(
          <main>
               <h1>Auth Page</h1>
               <SignUpForm setUser={props.setUser}/>
               <LoginForm setUser={props.setUser}/>
               <LogOut setUser={props.setUser}/>
          </main>
     )
}