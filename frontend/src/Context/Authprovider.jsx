import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../Auth/SupabaseAuth';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const passwordReset = (email) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://refinipee.vercel.app/update-password',
  });

const updatePassword = (updatedPassword) =>
  supabase.auth.updateUser({ password: updatedPassword });

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        setAuth(false);
      } else if (event === 'SIGNED_IN') {
        setUser(session.user);
        setAuth(true);
      } else if (event === 'SIGNED_OUT') {
        setAuth(false);
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setLoading(false);
    };
    getUser();
    // onAuthStateChange code below
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, user, login, signOut, passwordReset, updatePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
