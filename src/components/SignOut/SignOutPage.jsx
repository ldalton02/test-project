import React, {useEffect} from 'react'
import firebase from "gatsby-plugin-firebase"
import { redirectTo, navigate } from "@reach/router"
import LoadingIcons from 'react-loading-icons'
import 'firebase/auth'
const SignOutPage = (props) => {
    useEffect(() => {
        firebase.auth().signOut();
        navigate('/');
    }, [])


    return (
        <LoadingIcons.Puff fill="#663399" />
    );
}

export default SignOutPage;