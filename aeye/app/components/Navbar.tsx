'use client'

import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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

	const [open, setOpen] = useState<boolean>(false);

	const handleClick = (): void => {
		setOpen(!open);
	};

	return (
		<div>
			<AppBar position="static">
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
							<Button color="inherit">
								Home
							</Button>

							<Button color="inherit">
								About
							</Button>
							<Button color="inherit">
								Contact
							</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
