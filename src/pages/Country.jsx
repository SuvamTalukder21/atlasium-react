import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { getAllCountries, searchCountries } from "../apis/postApi";
import { CountryCard } from "../components/layout/CountryCard";
// import { Loader } from "../components/UI/Loader";
import { Loader } from "../components/ui/Loader";
import { SearchFilter } from "../components/ui/SearchFilter";

const LIMIT = 50;

export const Country = () => {
	const [isPending, startTransition] = useTransition();
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState();
	const [selectedRegion, setSelectedRegion] = useState({ value: "all", label: "All Regions" });
	// const [filteredCountries, setFilteredCountries] = useState("all");
	// const [skip, setSkip] = useState(0);
	// const [hasMore, setHasMore] = useState(true);
	// const [isLoadingMore, setIsLoadingMore] = useState(false);
	// const observerRef = useRef(null);

	// useEffect(() => {
	// 	// This is where you would typically fetch data or perform side effects
	// 	// For example, you might call an API to get country data
	// 	// console.log("Fetching country data...");
	// 	const load = async () => {
	// 		setIsLoadingMore(true);
	// 		try {
	// 			const response = await getAllCountries({ limit: LIMIT, skip: skip });
	// 			const data = response.data;
	// 			setCountries(prev => skip === 0 ? data : [...prev, ...data]);
	// 			console.log("Countries loaded:", data);
	// 			console.log("Total countries:", countries);
	// 			if (data.length < LIMIT) {
	// 				setHasMore(false);  // no more to load
	// 			}
	// 		} catch (err) {
	// 			console.error(err);
	// 		} finally {
	// 			setIsLoadingMore(false);
	// 		}
	// 	};

	// 	load();
	// }, [skip]);

	// // console.log("Countries:", countries);

	// useEffect(() => {
	// 	console.log("Updated countries length:", countries.length);
	// }, [countries]);

	// // Intersection observer to load more countries when scrolled to the bottom
	// const lastObservedRef = useCallback(node => {
	// 	if (isLoadingMore) return; // Prevent loading if already loading more
	// 	if (observerRef.current) observerRef.current.disconnect();

	// 	observerRef.current = new IntersectionObserver(entries => {
	// 		if (entries[0].isIntersecting && hasMore) {
	// 			setIsLoadingMore(true);
	// 			startTransition(() => {
	// 				setSkip(prev => prev + LIMIT);
	// 			});
	// 			// setSkip(prev => prev + LIMIT);
	// 		}

	// 		if (node) observerRef.current.observe(node);
	// 	}, [isLoadingMore, hasMore]);

	// 	if (node) observerRef.current.observe(node);

	// 	return () => {
	// 		if (observerRef.current) observerRef.current.unobserve(node);
	// 	};
	// }, [isLoadingMore, hasMore]);

	useEffect(() => {
        startTransition(async () => {
            try {
                const response = await getAllCountries();
                setCountries(response.data || []);
				console.log("Countries fetched:", response.data.length);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        });
    }, []);

    if (isPending) {
        return <Loader />;
    }

	// if (isPending) return <Loader />;

	const countrySearch = (country) => {
        if (!searchTerm) return true;
        return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    };

	const filteredRegion = (country) => {
		if (selectedRegion.value === "all") return true;
		return country.region === selectedRegion.value;
	};

	const countriesFiltered = countries.filter(country => countrySearch(country) && filteredRegion(country));

	console.log("Filtered Countries:", countriesFiltered.length, "Search Term:", searchTerm);

	// // Replace the current countries fetch with a combined filter effect
	// useEffect(() => {
	// 	// Debounce function to avoid too many API calls
	// 	const fetchFilteredCountries = async () => {
	// 		setIsLoadingMore(true);
			
	// 		try {
	// 			// Handle different filtering scenarios
	// 			if (!searchTerm && selectedRegion.value === "all") {
	// 				// No filters - get all countries with pagination
	// 				const response = await getAllCountries({ limit: LIMIT, skip: 0 });
	// 				setCountries(response.data);
	// 				setHasMore(true);
	// 				setSkip(0); // Reset pagination
	// 			} else if (searchTerm && selectedRegion.value === "all") {
	// 				// Only search term filter
	// 				const response = await searchCountries(searchTerm);
	// 				setCountries(response.data);
	// 				setHasMore(false); // Search results don't support pagination
	// 			} else if (!searchTerm && selectedRegion.value !== "all") {
	// 				// Only region filter
	// 				const response = await getCountryByRegion(selectedRegion.value);
	// 				setCountries(response.data);
	// 				setHasMore(false); // Region results don't support pagination
	// 			} else {
	// 				// Both search and region filters - get search results and filter by region
	// 				// (Assuming API doesn't support combined filtering)
	// 				const response = await searchCountries(searchTerm);
	// 				// Client-side filtering for region
	// 				const filteredByRegion = response.data.filter(
	// 					country => country.region === selectedRegion.value
	// 				);
	// 				setCountries(filteredByRegion);
	// 				setHasMore(false);
	// 			}
	// 		} catch (err) {
	// 			console.error("Error fetching filtered countries:", err);
	// 		} finally {
	// 			setIsLoadingMore(false);
	// 		}
	// 	};

	// 	// Add debounce for search to prevent excessive API calls
	// 	const timerId = setTimeout(() => {
	// 		fetchFilteredCountries();
	// 	}, 500); // 500ms delay
		
	// 	return () => clearTimeout(timerId); // Cleanup timeout
	// }, [searchTerm, selectedRegion]); // Respond to both searchTerm and selectedRegion changes

	return (
		<section className="country-section">
			<SearchFilter
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				selectedRegion={selectedRegion}
				setSelectedRegion={setSelectedRegion}
				countries={countries}
				setCountries={setCountries}
			/>

			<ul className="container grid grid-four-cols">
				{countriesFiltered.map((country, index) => {
					if (index === countries.length - 1) {
						return (
							<CountryCard
								country={country}
								key={index}
								// key={country.cca3}
								// ref={lastObservedRef}
							/>
						);
					} else {
						return <CountryCard country={country} key={index} />;
						// return <CountryCard country={country} key={country.cca3} />;
					}
				})}
			</ul>

			{/* {isLoadingMore && (
				<div className="loader-container">
					<Loader />
				</div>
			)} */}
		</section>
	);
};
