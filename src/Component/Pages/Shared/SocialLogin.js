import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center'>
                <button onClick={()=>signInWithGoogle()} className="btn btn-outline hover:bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;