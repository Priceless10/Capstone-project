import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export const useGooglePopUp = ()=>{

    const navigate = useNavigate()

    
    const popUp = async () => {
        console.log("started 2")

        const provider = new GoogleAuthProvider();

        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();

        auth.languageCode = "it"
            try {
                const result = await signInWithPopup(auth, provider)
                console.log("success")
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: { accessToken: string } | any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                
                await setDoc(doc(db,"users", `${[user.displayName!.toLowerCase().split("-")]}`), { name: user.displayName, email: user.email, avatar: user.photoURL, uid: user.uid})

                console.log(user)
                navigate("/")
            }catch(error: string | any) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                console.log(errorMessage)
                const email = error.customData;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            }

    
}
    return { popUp }
}
