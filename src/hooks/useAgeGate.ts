import { useState } from 'react';

const useAgeGate = () => {
    const [age, setAge] = useState<number | null>(null);

    const handleAgeInput = (input: string) => {
        const parsedAge = parseInt(input, 10);
        if (!isNaN(parsedAge) && parsedAge >= 0) {
            setAge(parsedAge);
        } else {
            setAge(null);
        }
    };

    const isAdult = () => age !== null && age >= 18;

    return {
        age,
        handleAgeInput,
        isAdult,
    };
};

export default useAgeGate;
