import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";


const Header = () => {
	const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		// @ts-ignore
		if (localStorage.getItem("i18nextLng")?.length > 1) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e:any) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				{t("yousuckatcoding")}
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<select className="nav-link bg-dark border-0 ml-1 mr-2" value={localStorage.getItem("i18nextLng") || ''}
							onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="es">Español</option>
							<option value="fr">Français</option>
						</select>
					</li>
					<li className="nav-item ml-2">
						<Link className="nav-link" to="/profile">
							{t("profile")}
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;