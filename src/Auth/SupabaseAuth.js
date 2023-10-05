import { createClient } from '@supabase/supabase-js';
//Database Keys
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

//session API
export async function checkUserAuth() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
// for password rest 
export async function resetPassword(email,) {
  try {
    await supabase.auth.resetPasswordForEmail(email,);
    console.log('Password reset email sent successfully!');
  } catch (error) {
    console.error('Error resetting password:', error.message);
  }
}


// for user authenticated
export const isAuthenticated = () => {
  const user = supabase.auth.user();
  return user !== null;
};

//Sign Up Api
export async function signUp(email, password) {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  } catch (error) {
    throw new Error('Failed to sign up');
  }
}
//Sign In Api
export async function signIn(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return user;
  } catch (error) {
    throw new Error('Failed to sign in');
  }
}

//Sign Out Api
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return true; // Indicate that the sign-out was successful
  } catch (error) {
    throw new Error('Failed to sign out');
  }
}



