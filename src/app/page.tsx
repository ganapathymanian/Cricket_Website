import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    const [clubInfo, setClubInfo] = useState(null);

    useEffect(() => {
        const fetchClubInfo = async () => {
            try {
                const response = await fetch('https://adamstowncc.hitscricket.com/default.aspx');
                const data = await response.text();
                // Parse the data as needed
                setClubInfo(data);
            } catch (error) {
                console.error('Error fetching club information:', error);
            }
        };

        fetchClubInfo();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Cricket Club</h1>
                {clubInfo ? (
                    <div dangerouslySetInnerHTML={{ __html: clubInfo }} />
                ) : (
                    <p>Loading club information...</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
