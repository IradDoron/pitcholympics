"use client "

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth"; // Import the appropriate Session type

type ProviderProps = {
    children: ReactNode;
    session: Session | null; // Use the Session type from next-auth
};

const Provider = ({ children, session }: ProviderProps) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
