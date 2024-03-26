import Navbar from '@/app/components/Navbar'

export default function NavLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<div>{children}</div>
		</>
	);
}
