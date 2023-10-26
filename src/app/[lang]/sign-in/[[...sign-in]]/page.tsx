import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<>
			<h1>Sign in page</h1>
			<SignIn />
		</>
	);
}
