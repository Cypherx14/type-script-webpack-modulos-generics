
interface Power {
    id: number;
    name: string;
    description: string;
    level: number; // Level of the power, e.g., 1 to 5
}

const powers: Power[] = [
    {
        id: 1,
        name: 'Super Strength',
        description: 'Ability to lift and carry heavy objects with ease.',
        level: 5
    },
    {
        id: 2,
        name: 'Flight',
        description: 'Ability to fly at high speeds.',
        level: 4
    },
    {
        id: 3,
        name: 'Invisibility',
        description: 'Ability to become invisible to the naked eye.',
        level: 3
    },
    {
        id: 4,
        name: 'Telepathy',
        description: 'Ability to read and communicate thoughts.',
        level: 2
    },
    {
        id: 5,
        name: 'Time Travel',
        description: 'Ability to travel through time.',
        level: 1
    },
    {
        id: 6,
        name: 'Super Knowledge',
        description: 'Ability to create anything.',
        level: 5
    }
];

export default powers;