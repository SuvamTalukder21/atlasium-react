import { scaleQuantize } from "d3-scale";
import { useEffect, useState, useTransition } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Graticule,
	Sphere,
} from "react-simple-maps";
import { getCountryByDensity } from "../../apis/postApi";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

export const Globe = () => {
	const geoUrl =
		"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
	const [tooltip, setTooltip] = useState("");
	const [densityData, setDensity] = useState({});
	const [isPending, startTransition] = useTransition();
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const navigate = useNavigate();

	const colorScale = scaleQuantize().domain([0, 400]).range([
		// "#ffedea",
		// "#ffcec5",
		// "#ffad9f",
		// "#ff8a75",
		// "#ff5533",
		// "#e2492d",
		// "#be3d26",
		// "#9a311f",
		// "#782618"

		// "#eef0ff",
		"#dce0ff",
		// "#bdc4fa",
		"#9ea7f5",
		// "#7c89f0",
		"#5a6be6",
		// "#3a4ed5",
		"#2a3eb0",
		// "#1b2e8a"
	]);
	// Fetch population data (in a real app, this would be an API call)
	useEffect(() => {
		startTransition(async () => {
			try {
				const data = await getCountryByDensity();
				// console.log(data);
				setDensity(data);
			} catch (error) {
				console.error("Error fetching population data:", error);
			}
		});
	}, []);

	const handleMouseMove = (event) => {
		// Update tooltip position to follow cursor
		setPosition({ x: event.clientX + 15, y: event.clientY - 25 });
	};

	const handleMouseEnter = (geo) => {
		// // Get population data for the hovered country
		// const countryName = geo.properties.name;
		// const info = densityData[countryName] ? densityData[countryName].toLocaleString() : 'Data not available';

		// // Set tooltip content
		// setTooltip(`${countryName}: ${info}`);
		const countryName = geo.properties.name;
		// const info = densityData.name.common === countryName ? Math.round(densityData.density) : 'Data not available';
		// Find the matching country in the array
		const country = Array.isArray(densityData.data)
			? densityData.data.find(
					(item) => item.name && (item.name.common === countryName || item.name.official === countryName)
			  )
			// ? densityData.data.find((item) => {
			// 	if (!item.name) return false;

			// 	// Check if either name contains the other or they're identical
			// 	const commonName = item.name.common || "";
			// 	const officialName = item.name.official || "";

			// 	return countryName.includes(commonName) || 
			// 			commonName.includes(countryName) ||
			// 			countryName.includes(officialName) ||
			// 			officialName.includes(countryName) ||
			// 			countryName === commonName ||
			// 			countryName === officialName;
			// })
			: null;

			
		
		console.log("Country:", country);
		console.log("Country Name:", countryName);
		console.log("Country Density:", country?.density);
		console.log("Country Data:", densityData.data);
		console.log("Density Data:", densityData);
		console.log("Density Data Array:", Array.isArray(densityData.data));

		// Use optional chaining to safely access density
		const info = country?.density 
			? Number(country.density.toFixed(2)) 
			: "Data not available";
			
		setTooltip(`${geo.properties.name}: ${info}`);

		// const info = Number(country.density.toFixed(2)) || "Data not available";

		// setTooltip(`${geo.properties.name}: ${info}`);
	};

	// a click handler function to navigate to the country page
	const handleCountryClick = (geo) => {
		const countryName = geo.properties.name;
		// Find the matching country to get its ccn3 code
		const country = Array.isArray(densityData.data) ? 
			densityData.data.find(
				(item) => item.name && item.name.common === countryName
			) : null;
		
		// console.log("Country:", country);
		// console.log("Country Name:", countryName);
		// console.log("Country ccn3:", country?.ccn3);
		// console.log("Country Density:", country?.density);
		// console.log("Country Data:", densityData.data);
		// console.log("Density Data:", densityData);
		// console.log("Density Data Array:", Array.isArray(densityData.data));

		// If country is found and has a ccn3 property, navigate to its page
		if (country && country.ccn3) {
			navigate(`/country/${country.ccn3}`);
		}
	};

	if (isPending) return <Loader />;

	return (
		// <MapProvider>
		//     <div className="demo-map">
		//         <ComposableMap>
		//             <Geographies geography={World}>
		//                 {({ geographies }) =>
		//                     geographies.map((geo) => (
		//                         <Geography
		//                             key={geo.rsmKey}
		//                             geography={geo}
		//                             onMouseEnter={() => {
		//                                 setTooltip(geo.properties.name);
		//                             }}
		//                             onMouseLeave={() => {
		//                                 setTooltip('');
		//                             }}
		//                         />
		//                     ))
		//                 }
		//             </Geographies>
		//         </ComposableMap>
		//         {tooltip && <div className="tooltip">{tooltip}</div>}
		//     </div>
		// </MapProvider>

		// <div style={{ margin: '0 auto', maxWidth: '90rem', width: '100%' }}>
		<div
			className="map-container"
			onMouseMove={handleMouseMove}
			style={{
				position: "relative",
				margin: "0 auto 7.5vh",
				maxWidth: "130rem",
				width: "100%",
			}}
		>
			<ComposableMap
				data-tip={tooltip}
				projectionConfig={{ scale: 150 }}
				width={812}
				height={400}
			>
				<Sphere
					stroke="#E4E5E6"
					strokeWidth={0.25}
					fill="transparent"
				/>
				<Graticule stroke="#E4E5E6" strokeWidth={0.25} />
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map((geo) => {
							const countryName = geo.properties.name;
							// console.log(geo.properties);
							const density =
								(Array.isArray(densityData.data)
									? densityData.data.find(
											(item) =>
												item.name &&
												item.name.common === countryName
									  )
									: null
								)?.density || 0;

							return (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									// fill={colorScale(population)}
									// stroke="#E4E5E6"
									// strokeWidth={0.5}
									onMouseEnter={() => handleMouseEnter(geo)}
									onMouseLeave={() => setTooltip("")}
									onMouseMove={handleMouseMove}
									onClick={() => handleCountryClick(geo)}
									style={{
										default: {
											fill: colorScale(density),
											stroke: "#FFFFFF",
											strokeWidth: 0.5,
											outline: "none",
										},
										hover: {
											fill: colorScale(density),
											stroke: "#FFFFFF",
											strokeWidth: 0.5,
											outline: "none",
										},
										pressed: {
											fill: colorScale(density),
											stroke: "#FFFFFF",
											strokeWidth: 0.5,
											outline: "none",
										},
									}}
									// tabIndex={0}
									// role="button"
									// aria-label={`${geo.properties.NAME} - Population: ${population.toLocaleString()}`
									// }
									// aria-describedby={`tooltip-${geo.rsmKey}`}
									// data-tooltip-id={`tooltip-${geo.rsmKey}`}
									// data-tooltip-content={`${geo.properties.NAME}: ${population.toLocaleString()}`
									// }
									// data-tooltip-place="top"
									// data-tooltip-style={{
									//     backgroundColor: '#333',
									//     color: '#fff',
									//     padding: '5px 10px',
									//     borderRadius: '4px',
									//     fontSize: '12px',
									//     maxWidth: '200px'
									// }}
									// data-tooltip-arrow={true}
									// data-tooltip-offset={10}
									// data-tooltip-position={position}
									// data-tooltip-event="hover"
									// data-tooltip-event-delay={1000}
									// data-tooltip-event-hide="mouseleave"
									// data-tooltip-event-show="mouseenter"
									// data-tooltip-event-move="mousemove"
									// data-tooltip-event-focus="true"
									// data-tooltip-event-blur="true"
									// data-tooltip-event-click="true"
									// data-tooltip-event-keydown="Enter"
									// data-tooltip-event-keyup="Escape"
									// data-tooltip-event-keypress="Space"
									// data-tooltip-event-touchstart="true"
									// data-tooltip-event-touchend="true"
									// data-tooltip-event-touchmove="true"
									// data-tooltip-event-touchcancel="true"
									// data-tooltip-event-focusin="true"
									// data-tooltip-event-focusout="true"
									// data-tooltip-event-focusvisible="true"
									// data-tooltip-event-focushidden="true"
								/>
							);
						})
					}
				</Geographies>
			</ComposableMap>
			{/* {tooltip && (
                <div className="tooltip" style={{ position: 'absolute' }}>
                {tooltip}
                </div>
            )} */}

			{/* Dynamic tooltip */}
			{/* <Tooltip
                id="tooltip"
                place="top"
                style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    maxWidth: '200px',
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                }}
                getContent={() => tooltip}
                // onMouseMove={handleMouseMove}
                // onMouseLeave={() => setTooltip('')}
                // onMouseEnter={() => handleMouseEnter(geo)}
            /> */}
			{tooltip && (
				<div
					className="map-tooltip"
					style={{
						position: "fixed",
						left: position.x,
						top: position.y,
						backgroundColor: "rgba(0, 0, 0, 0.85)",
						color: "white",
						padding: "8px 15px",
						borderRadius: "5px",
						fontSize: "14px",
						pointerEvents: "none",
						zIndex: 100,
						transition: "all 0.1s ease",
						boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
						transform: "translateY(-50%)",
					}}
				>
					{tooltip} people/km²
				</div>
			)}

			{/* Legend */}
			<div
				className="map-legend"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "20px",
					gap: "5px",
				}}
			>
				<span
					style={{
						color: "white",
						marginRight: "10px",
						fontSize: "14px",
					}}
				>
					Density:
				</span>
				{colorScale.range().map((color, index) => {
					const [min, max] = colorScale.invertExtent(color);
					// <div key={index} style={{
					//     display: 'flex',
					//     alignItems: 'center',
					//     marginRight: '10px',
					// }}>
					//     <div style={{
					//         width: '20px',
					//         height: '20px',
					//         backgroundColor: color,
					//         borderRadius: '50%',
					//         marginRight: '5px',
					//     }}></div>
					//     <span style={{color: "#white", fontSize: '14px'}}>
					//         {Math.round(colorScale.invertExtent(color)[0]).toLocaleString()} - {Math.round(colorScale.invertExtent(color)[1]).toLocaleString()}
					//     </span>
					// </div>
					return (
						<div
							key={index}
							style={{
								backgroundColor: color,
								width: "30px",
								height: "20px",
								position: "relative",
							}}
						>
							{index === colorScale.range().length - 1 && (
								<span
									style={{
										// position: 'absolute',
										// top: '50%',
										// left: '50%',
										// transform: 'translate(-50%, -50%)',
										// color: '#fff',
										// fontSize: '12px',
										position: "absolute",
										top: "20px",
										left: 0,
										fontSize: "10px",
										color: "white",
										whiteSpace: "nowrap",
									}}
								>
								</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
