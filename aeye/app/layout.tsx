export const metadata = {
	title: 'AEYE',
	description: 'AI powered CCTV controller',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
			 <link rel="icon" href="/images/favicon.ico" sizes="any" />
				{children}
			</body>
		</html>
	)
}
