import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../Context/Auth";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useCookies } from "react-cookie";
import { useHistory, Link } from "react-router-dom";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
function NavBar() {
	const history = useHistory();
	const { currentUser, logout } = useAuth();
	const [cookies, setCookies, removeCookies] = useCookies();
	const handleLogout = () => {
		removeCookies("user", { path: "/" });
		logout();
		history.push("/login");
	};
	return (
		<div className='nav'>
			<Navbar bg='dark' variant='dark' className='navbar'>
				<Navbar.Brand href='/'>
					<ImportContactsRoundedIcon /> Saul's Book System
				</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link as={Link} to='/add'>
						Add
					</Nav.Link>
					<Nav.Link as={Link} to='/update'>
						Update
					</Nav.Link>
					<Nav.Link as={Link} to='/delete'>
						Delete
					</Nav.Link>
				</Nav>
				<Nav>
					{cookies.user ? (
						<div className='icons'>
							<Nav.Link href='/dashboard' style={{ color: "whitesmoke" }}>
								<AccountCircleIcon /> {cookies.user.email}
							</Nav.Link>
							<Nav.Link href='/' onClick={handleLogout}>
								Log Out
							</Nav.Link>
						</div>
					) : (
						<div className='icons'>
							<Nav.Link as={Link} to='/login'>
								Login
							</Nav.Link>
							<Nav.Link as={Link} to='/signup'>
								SignUp
							</Nav.Link>
						</div>
					)}
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
