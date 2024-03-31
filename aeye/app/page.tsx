'use client'

import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const handleLoginWithGoogle = async () => {
	window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=982098409297-8krnotrs5aq8d9og7tofnvnnslfvf677.apps.googleusercontent.com&scope=email%20profile&state=z7o9tS1KdVjnBVcc1YhH7Dwk5FPqID_u_MIkY38nTP8%3D&redirect_uri=https://api.a-eye.live/login/oauth2/code/google`);
}

const handleLoginWithKakao = async () => {
	window.location.replace(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=cdfde096b799357de4372685356ad669&scope=profile_nickname%20profile_image%20account_email&state=gefkirF7Oe7S0L7WPE2MQU2nnajOgYBMD1DSgI56N2s%3D&redirect_uri=https://api.a-eye.live/login/oauth2/code/kakao`);
}


function LoginCard() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Paper elevation={24} style={{ padding: '60px', textAlign: 'center' }}>
				<Stack spacing={3}>
					<Typography variant="h4">AEYE</Typography>
					<Button
						variant="contained"
						sx={{ bgcolor: '#65d586', '&:hover': { bgcolor: '#4caf50' } }}
						onClick={handleLoginWithGoogle}
					>
						Login with Google
					</Button>
					<Button
						variant="contained"
						sx={{ bgcolor: '#65d586', '&:hover': { bgcolor: '#4caf50' } }}
						onClick={handleLoginWithKakao}
					>
						Login with Kakao
					</Button>
				</Stack>
			</Paper>
		</div>
	);
}

function Logo() {
	return (
		<div>
			logo image
		</div>
	);
}

export default function Landing() {
	useEffect(() => {
		document.body.style.margin = '0';
		document.body.style.padding = '0';
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';

		document.body.style.background = 'linear-gradient(135deg, #65d586 0%, #e0e0e0 100%)';
		document.body.style.backgroundSize = '200% 200%';
		document.body.style.animation = 'waving 20s ease infinite';

		const keyframes = `@keyframes waving {
      0% { background-position: 0% 50%; opacity: 0.8; }
      50% { background-position: 100% 50%; opacity: 1; }
      100% { background-position: 0% 50%; opacity: 0.8; }
    }`;

		const styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

		return () => {
			// Clean up the style changes when the component unmounts
			document.body.style.removeProperty('margin');
			document.body.style.removeProperty('padding');
			document.body.style.removeProperty('overflow');
			document.body.style.removeProperty('height');
			document.body.style.removeProperty('background');
			document.body.style.removeProperty('background-size');
			document.body.style.removeProperty('animation');
			styleSheet.deleteRule(styleSheet.cssRules.length - 1);
		};
	}, []);

	return (
		<Stack>
			<Logo />
			<LoginCard />
		</Stack>
	);
}
