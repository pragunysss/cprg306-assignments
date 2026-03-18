"use client";

import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Shopping List App</h1>
        
        {user ? (
          <div className="space-y-6">
            <p className="text-lg text-slate-300">
              Welcome, <span className="text-white font-semibold">{user.displayName || user.email}</span>
            </p>
            
            <div className="pt-4 border-t border-slate-700">
              <Link 
                href="/week-9/shopping-list" 
                className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-md transition-colors"
              >
                Go to Shopping List
              </Link>
            </div>
            
            <button 
              onClick={handleLogout}
              className="mt-4 text-slate-400 hover:text-white transition-colors underline"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-slate-400 mb-6">Please sign in to view your shopping list.</p>
            <button 
              onClick={handleLogin}
              className="w-full py-3 px-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <svg height="24" width="24" viewBox="0 0 16 16" className="fill-current">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
