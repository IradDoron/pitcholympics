"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react';
import Image from 'next/image';

function AuthButton() {
	const { data: session } = useSession();

	const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

	useEffect(() => {
		(async () => {
			const response = await getProviders();
			setProviders(response);
		})();
	}, []);

	if (session?.user) {
		return (
			<>
				<button onClick={() => signOut()}>Sign out</button>
				<Image
					className="m-0.5 inline-block h-auto w-auto rounded-full ring-2 ring-white"
					src={session.user.image ?? ""}
					alt=""
					width={64}
					height={64}
				/>
			</>
		);
	}

	return (
		<>
			{providers &&
				Object.values(providers).map((provider) => (
					<button
						type='button'
						key={provider.name}
						onClick={() => signIn(provider.id)}
						className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover-bg-white hover-text-black text-center text-sm font-inter flex items-center justify-center'>
						Sign In
					</button>
				))}
		</>
	);
}

export default AuthButton;
