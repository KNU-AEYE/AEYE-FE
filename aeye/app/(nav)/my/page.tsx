'use client'

import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {
	Box,
	Grid,
	Paper,
	Avatar,
	Tooltip,
	Typography
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	margin: theme.spacing(1),
}));

function ProfileAvatar() {
	const [avatar, setAvatar] = useState<string | null>(null);
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Tooltip title="Update Avatar" placement="top-start">
				<Avatar
					alt="User Avatar"
					src={avatar || "/default-avatar.png"}
					sx={{ width: 56, height: 56 }}
				/>
			</Tooltip>
			<Typography variant="h5" component="h2" style={{ marginTop: '8px' }}>
				사람이름
			</Typography>
		</div>
	);
}

export default function MyPage() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8} lg={9} container direction="column">
					<ProfileAvatar />
					<Grid item>
						<Item>xs=8</Item>
					</Grid>
					<Grid item>
						<Item>xs=4</Item>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
