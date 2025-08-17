// export const SearchFilter = ({ countries, onFilter }) => {
// 	const [searchTerm, setSearchTerm] = useState("");

import { useEffect, useState } from "react";
import { getRegions } from "../../apis/postApi";
import Select from "react-select";

export const SearchFilter = ({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion, countries, setCountries }) => {

	// const handleSearch = (event) => {
	// 	setSearchTerm(event.target.value);
	// };

	const [regions, setRegions] = useState([]);

	useEffect(() => {
		const fetchRegions = async () => {
			try {
				const response = await getRegions();
				// console.log("Regions Response:", response);
				setRegions(response.data || []);
			} catch (error) {
				console.error("Error fetching regions:", error);
				setRegions([]); // Fallback to an empty array in case of error
			}
		};

		fetchRegions();
	}, []);

	const sortCountries = (order) => {
		// Implement sorting logic here based on the order parameter
		console.log("Sort Countries:", order);
		const sortedCountries = [...countries].sort((a, b) => order === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common));

		// Update the countries state with the sorted array
		console.log("Sorted Countries:", sortedCountries);
		setCountries(sortedCountries);
	};

	// Custom styles for the Select component
	// This is optional, you can customize it as per your design requirements
	const customStyles = {
		control: (base) => ({
			...base,
			background: 'linear-gradient(71deg, #080509, #1a171c, #080509)',
			borderRadius: '5rem',
			border: '0.05rem solid #ffffff',
			// border: '2px solid rgba(255, 255, 255, 0.2)',
			padding: '0.3rem 1.4rem',
			color: '#fff',
			'&:hover': {
				// backgroundColor: '#1a1721', // Dark gray with slight highlight
				border: '0.05rem solid #ffffff',
				cursor: 'pointer',
			},
			fontSize: '1.5rem',
			fontWeight: 'bold',
			textTransform: 'capitalize',
			// outline: 'none',
			boxShadow: 'none',
			width: '10.6vw'
		}),
		// Add these two style properties:
		placeholder: (base) => ({
			...base,
			color: 'rgba(255, 255, 255, 0.8)',  // White placeholder text
			fontSize: '1.5rem',
			fontWeight: 'bold',
			textTransform: 'capitalize',
		}),
		
		singleValue: (base) => ({
			...base,
			color: 'rgba(255, 255, 255, 0.8)',  // White text for selected option
			fontSize: '1.5rem',
			fontWeight: 'bold',
			textTransform: 'capitalize',
		}),
		option: (base) => ({
			...base,
			background: '#080509',
			color: 'rgba(255, 255, 255, 0.8)',
			padding: '0.6rem 2.4rem',
			border: 'none',
			'&:hover': {
				backgroundColor: '#1a171c', // Dark gray with slight highlight
				color: 'rgba(255, 255, 255, 0.9)',
				cursor: 'pointer',
			},
			fontSize: '1.4rem',
		}),
		menu: (base) => ({
			...base,
			background: '#080509',
			borderRadius: '1rem',
		}),
	};

	return (
        <section className="section-search-filter container">
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

			<div><button type="button" className="sort-button" onClick={() => sortCountries("asc")}>ASC</button></div>
			<div><button type="button" className="sort-button" onClick={() => sortCountries("desc")}>DESC</button></div>

            <div>
                <Select
                    styles={customStyles}
                    options={[
                        { value: "all", label: "All Regions" },
                        ...regions.map(region => ({ value: region, label: region }))
                    ]}
                    placeholder="All Regions"
                    onChange={(option) => setSelectedRegion(option)}
                    value={selectedRegion}
                    isSearchable={false}
                    defaultValue={{ value: "all", label: "All Regions" }}
                />
            </div>
        </section>
    );
};
