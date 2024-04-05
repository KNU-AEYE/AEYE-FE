'use client'

import { useEffect } from 'react';
import Image from 'next/image'
import {
	Paper,
	Stack,
	Typography
} from '@mui/material';

function GoogleLoginButton() {
	const handleLoginWithGoogle = async () => {
		window.location.replace(`https://api.a-eye.live/oauth2/authorization/google`);
	}

	return (
		<Image
			src="/signin-assets/web_light_rd_ctn@1x.png"
			width={189}
			height={40}
			alt="kakao-login-button"
			onClick={handleLoginWithGoogle}
		/>
	);
}

function KakaoLoginButton() {
	const handleLoginWithKakao = async () => {
		window.location.replace(`https://api.a-eye.live/oauth2/authorization/kakao`);
	}

	return (
		<Image
			src="/signin-assets/kakao_login_medium_narrow.png"
			width={183}
			height={45}
			alt="kakao-login-button"
			onClick={handleLoginWithKakao}
		/>
	);
}

function LoginCard() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Paper elevation={24} style={{ padding: '60px', textAlign: 'center' }}>
				<Stack spacing={3}>
					<Typography variant="h4">AEYE</Typography>
					<GoogleLoginButton />
					<KakaoLoginButton />
				</Stack>
			</Paper>
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
			<LoginCard />
		</Stack>
	);
}
