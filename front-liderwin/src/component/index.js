import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavElement';

const navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/index' activeStyle>
			Inicio
		</NavLink>
		<NavLink to='/Catalogo' activeStyle>
			Catalogo
		</NavLink>
		<NavLink to='/Servicio' activeStyle>
			Servicios
		</NavLink>
		<NavLink to='/Contacto' activeStyle>
			Contacto
		</NavLink>
		<NavLink to='/Equipo' activeStyle>
			Equipo
		</NavLink>

		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default navbar;
