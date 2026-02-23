export const TEAM_MEMBERS = [
    {
        name: "FAYAZ SHAIK",
        role: "Project Lead",
        contribution: "Led the conception and implementation of GuideX.",
        social: "#",
    },
    {
        name: "SAMDHANI",
        role: "Core Developer",
        contribution: "Developed the dynamic mock systems.",
        social: "#",
    },
    {
        name: "AREEFA",
        role: "UI/UX Designer",
        contribution: "Designed the neo-brutalism design style and user experience flow.",
        social: "#",
    },
    {
        name: "IQRAR",
        role: "Frontend Engineer",
        contribution: "Developed interactive components and Framer Motion animations.",
        social: "#",
    },
    {
        name: "DEEPIKA",
        role: "QA & Testing",
        contribution: "Ensured system reliability and structured layout behaviors.",
        social: "#",
    },
    {
        name: "THANUJA",
        role: "Product Strategist",
        contribution: "Managed project scope and curated the foundational roadmap.",
        social: "#",
    },
    {
        name: "SHASHI KIRAN",
        role: "Contributor",
        contribution: "Assisting with project tasks.",
        social: "#",
    }
];

export const ROADMAP = [
    {
        phase: "Phase 1: Foundation",
        description: "Launch core itinerary generation, user research, and MVP testing.",
        status: "Completed",
    },
    {
        phase: "Phase 2: Scale",
        description: "Expand to 50+ countries, refine recommendations with local guides.",
        status: "In Progress",
    },
    {
        phase: "Phase 3: Community",
        description: "Introduce social sharing, group itineraries, and offline access.",
        status: "Upcoming",
    }
];

export function generateMockItinerary(country: string, duration: number) {
    const days = [];
    for (let i = 1; i <= duration; i++) {
        days.push({
            day: i,
            title: `Exploring the heart of ${country || "the unknown"}`,
            activities: [
                "Morning: Local breakfast & walking city tour",
                "Afternoon: Visit top historical landmarks & museums",
                "Evening: Dinner at a popular local spot & sunset views"
            ]
        });
    }
    return days;
}
