import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();
  
  useEffect(() => {
    // Trigger sign-in if unauthenticated
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);
  
  return session?.user;
};
