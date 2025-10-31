import { useEffect, useState, useTransition } from "react";
import { HeroSection } from "../components/ui/HeroSection";
import { Loader } from "../components/ui/Loader";
import { getAllCountries } from "../apis/postApi";

export const Home = () => {
    // var { isLoading, data, error } = useFetch(`https://countries-api-jk2a.onrender.com/v1/all?limit=9`, {
    //     // console.log("Fetching data from API..."
    //     // // You can add options here if needed, like headers or method
    //     // method: "GET",
    //     // headers: {
    //     //     "Content-Type": "application/json"
    //     // }
    // });

    const [countries, setCountries] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            try {
                const response = await getAllCountries({ limit: 9 });
                setCountries(response.data || []);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        });
    }, []);

    // if (isPending) {
    //     return <Loader />;
    // }

    return (
        <main>
            <HeroSection />
            <section id="about-section" className="section-about container">
                <h2 className="container-title">
                    Here are the interesting facts <br /> we are proud of:
                </h2>
                {isPending ? 
                    <Loader /> :
                    <div className="gradient-cards">
                        {countries.map((country) => {
                            return (
                                <div className="card" key={country.ccn3}>
                                    <div className="container-card bg-blue-box">
                                        <p className="card-title">{country.name.common}</p>
                                        <p><span className="card-description">Capital:</span> {country.capital ? country.capital[0] : "N/A"}</p>
                                        <p><span className="card-description">Population:</span> {country.population.toLocaleString()}</p>
                                        <p><span className="card-description">Interesting Facts:</span> {country.interestingFacts ? country.interestingFacts.geography : "No facts available."}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
            </section>
        </main>
    );
}