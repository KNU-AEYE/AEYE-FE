'use client'

import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from 'next/navigation';

import {
	List,
	ListItem,
	ListItemText,
	Collapse,
	Typography,
	AppBar,
	Toolbar,
	Button,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
	const small = useMediaQuery("(max-width:600px)");
	const full = useMediaQuery("(min-width:600px)");
	const router = useRouter();

	const [open, setOpen] = useState<boolean>(false);

	const handleClick = (): void => {
		setOpen(!open);
	};

	return (
		<div style={{marginBottom: '30px'}}>
			<AppBar position="static" style={{ backgroundColor: '#65d586' }}>
				<Toolbar variant="dense">
					{small && (
						<>
							<List>
								<ListItem button>
									<Button
										onClick={handleClick}
									>
										<MenuIcon />
										{open ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</Button>
									<Typography
										variant="h6"
										color="inherit"
										onClick={() => {
											console.log(
												"logo clicked"
											);
											setOpen(false);
										}}
									>
										AEYE
									</Typography>
								</ListItem>
								<Collapse
									in={open}
									timeout="auto"
									unmountOnExit
								>
									<List
										component="div"
										disablePadding
									>
										<ListItem button>
											<ListItemText primary="Home" />
										</ListItem>
										<ListItem button>
											<ListItemText primary="About" />
										</ListItem>
										<ListItem button>
											<ListItemText primary="Contact" />
										</ListItem>
									</List>
								</Collapse>
							</List>
						</>
					)}

					{full && (
						<>
							<Typography
								variant="h6"
								color="inherit"
							>
								AEYE
							</Typography>
							<Button color="inherit" onClick={() => router.push('/home')}>
								Home
							</Button>
							<Button color="inherit" onClick={() => router.push('/cams')}>
								Cams
							</Button>
							<Button color="inherit" onClick={() => router.push('/my')}>
								My
							</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
