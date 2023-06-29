import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, db } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"




export const useGitHubPopUp = () => {
    const navigate = useNavigate()
    const githubPopUp = async () => {

       

        const provider = new GithubAuthProvider()

            try {
                const result = await signInWithPopup(auth, provider) 
                const credential: {} | any = GithubAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
                console.log(user)
                await setDoc(doc(db,"users", `${[user.displayName!.toLowerCase().split("-")]}`), {name: user.displayName, email: user.email, avatar: user.photoURL, uid: user.uid})
                console.log("github completed")
                // navigate("/")
            } catch(error: string | any) {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorMessage)
                // const email = error.customData.email
                const credentials = GithubAuthProvider.credentialFromError(error)
            }

        
    }
    return { githubPopUp }
}