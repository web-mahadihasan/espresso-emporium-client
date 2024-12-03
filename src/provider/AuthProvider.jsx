import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.init";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthProviderContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    // Create new user 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sing in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Sign in with google 
    const signInWithSocial = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    } 
    // Sign out user 
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Update user profile 
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    //Current sing in user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        createNewUser,
        signInUser,
        signInWithSocial,
        signOutUser,
        user,
        setUser,
        updateUserProfile
    }
    return (
        <div>
            <AuthProviderContext.Provider value={userInfo}>
                {children}
            </AuthProviderContext.Provider>
        </div>
    );
};

export const useAuth = () => {
    const context = useContext(AuthProviderContext);
    return context;
  };

export default AuthProvider;