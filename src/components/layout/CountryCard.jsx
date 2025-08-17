import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

export const CountryCard = forwardRef(({ country }, ref) => {
    return (
        <li ref={ref} className="country-card card">
            <div className="container-card bg-white-box">
                <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
                <div className="card-content">
                    <h2 className="card-title" title={country.name.common}>{country.name.common.length > 13 ? `${country.name.common.slice(0, 13)}...` : country.name.common}</h2>
                    <p className="card-text" title={country.capital?.length ? country.capital[0] : "N/A"}><span className="card-description">Capital:</span> {country.capital?.[0].length > 13 ? `${country.capital?.[0].slice(0, 13)}...` : country.capital?.[0]}</p>
                    <p className="card-text"><span className="card-description">Population:</span> {country.population.toLocaleString()}</p>
                    <p className="card-text"><span className="card-description">Region:</span> {country.region}</p>
                    {/* <p className="card-text"><span className="card-description">Subregion:</span> {country.subregion}</p> */}
                    <p className="card-text"><span className="card-description">Area:</span> {country.areaKm2.toLocaleString()} km²</p>
                    <NavLink to={`/country/${country.ccn3}`}><button>Read More</button></NavLink>
                </div>
            </div>
        </li>
    );
});