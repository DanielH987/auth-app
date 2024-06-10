"use client";

import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    signOut();
  };

 return (
    <div>
        {JSON.stringify(session)}
        <button onClick={onClick} type="submit">
          Sign out
        </button>
    </div>
  );
}

export default SettingsPage;