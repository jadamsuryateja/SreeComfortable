export interface Work {
    id: number;
    workName: string;
    description: string;
    image: string;
    images?: string[];
    category: string;
    reviews: {
        user: string;
        comment: string;
        rating: number;
    }[];
}

export const works: Work[] = [
    // --- RESIDENTIAL PROJECTS ---
    {
        id: 1,
        workName: "Urban Harmony Living & Dining",
        description: "A spacious open-plan living and dining area featuring a custom white slat partition, limestone texture walls, and elegant dining furniture. The design maximizes natural light and flow.",
        image: "/residential/IMG_4276.JPG",
        images: [
            "/residential/IMG_4276.JPG",
            "/residential/IMG_4277.JPG",
            "/residential/IMG_4264.JPG",
            "/residential/IMG_4265.JPG",
            "/residential/IMG_4267.JPG"
        ],
        category: "Residential",
        reviews: [
            { user: "Priya S.", comment: "The partition design completely transformed our hall! It feels so much bigger now.", rating: 5 },
            { user: "Arun Kumar", comment: "Excellent use of space. The limestone wall texture is a real conversation starter.", rating: 5 },
            { user: "Sarah J.", comment: "Minimalist yet warm. Exactly the vibe we were looking for.", rating: 4 }
        ]
    },
    {
        id: 2,
        workName: "Lime Zest Modular Kitchen",
        description: "A customized modular kitchen with striking lime green and white cabinetry. Features a black granite countertop, pendant lighting, and smart storage solutions for maximum utility.",
        image: "/residential/IMG_4270.JPG",
        images: [
            "/residential/IMG_4270.JPG",
            "/residential/IMG_4271.JPG",
            "/residential/IMG_4273.JPG"
        ],
        category: "Residential",
        reviews: [
            { user: "Sneha Reddy", comment: "I love the pop of lime green! It makes cooking so much more fun.", rating: 5 },
            { user: "Mohan Das", comment: "Storage solutions are brilliant. Everything has its place now.", rating: 5 },
            { user: "Kavya L.", comment: "Great finish on the cabinets. Highly recommended.", rating: 4 }
        ]
    },
    {
        id: 3,
        workName: "Vibrant Modern Bedroom",
        description: "A colorful and cozy bedroom design featuring a dual-tone wardrobe in grey and lime, a built-in study unit, and custom window treatments to match the energetic theme.",
        image: "/residential/IMG_4252.JPG",
        images: [
            "/residential/IMG_4252.JPG",
            "/residential/IMG_4260.JPG",
            "/residential/IMG_4261.JPG"
        ],
        category: "Residential",
        reviews: [
            { user: "Rohan & Aishwarya", comment: "The dual-tone wardrobe is stunning. The study unit is perfect for my work-from-home days.", rating: 5 },
            { user: "Vikram S.", comment: "Very cozy and modern. The lighting was well planned.", rating: 4 },
            { user: "Divya M.", comment: "Timely completion and good quality materials used.", rating: 5 }
        ]
    },
    {
        id: 9,
        workName: "Contemporary Living Room",
        description: "A sophisticated living area centered around a stunning geometric wall panel with metallic inlays. Includes a sleek floating TV unit and comfortable recliner seating.",
        image: "/residential/f97c5a28-b5a2-4c20-a442-3772ee82173e.jpg", // Main TV unit view
        images: [
            "/residential/f97c5a28-b5a2-4c20-a442-3772ee82173e.jpg",
            "/residential/c97778ba-ff35-48ba-9922-a681f25ce617.jpg", // Wider angle
            "/residential/c1956e6e-13af-4241-a216-e0af81e0dab3.jpg"  // Living room view
        ],
        category: "Residential",
        reviews: [
            { user: "Amit Patel", comment: "The geometric wall panel is a masterpiece. Everyone asks about it!", rating: 5 },
            { user: "Suresh K.", comment: "Classy and sophisticated. The TV unit floats perfectly.", rating: 5 },
            { user: "Meera N.", comment: "Elegant design that suits our lifestyle perfectly.", rating: 4 }
        ]
    },

    {
        id: 11,
        workName: "Luxury Interior Collection",
        description: "A comprehensive showcase of premium residential interiors, featuring custom wardrobes, bedroom units, and detailed woodworking finishes.",
        image: "/residential/1aa2fd21-6799-4925-bf34-7c0787f153ce.jpg",
        images: [
            "/residential/1aa2fd21-6799-4925-bf34-7c0787f153ce.jpg",
            "/residential/1b565e6e-8021-4ad7-bf5a-f1bbd9fd529b.jpg",
            "/residential/3a2cf365-dfd2-4dde-b374-eb43779f979c.jpg",
            "/residential/07c200ff-452f-4860-b832-53b232458acc.jpg",
            "/residential/40b59b8a-bddd-4a28-9c25-51fe0b5e8048.jpg",
            "/residential/58f1751e-21ca-4f67-ab19-a10b1d1a93e8.jpg",
            "/residential/939d61de-6aee-4a2e-8ff3-30d0055bda9b.jpg",
            "/residential/aa4a3fc9-24b4-4d97-9b4a-47dd0e4fc02b.jpg"
        ],
        category: "Residential",
        reviews: [
            { user: "Dr. Rao", comment: "Exceptional woodworking. The details in the wardrobe are exquisite.", rating: 5 },
            { user: "Sunita W.", comment: "True luxury feeling. The materials used are top-notch.", rating: 5 },
            { user: "Rajeev C.", comment: "A comprehensive solution for our entire floor. Very satisfied.", rating: 4 }
        ]
    },
    {
        id: 12,
        workName: "Grand Villa Interiors",
        description: "A complete home interior project spanning two floors. Features a grand drawing room, modern kitchens on both levels, and distinctively designed bedrooms for the entire family. A perfect blend of comfort and class.",
        image: "/residential/LIVING AND DINNING.JPG",
        images: [
            "/residential/LIVING AND DINNING.JPG",
            "/residential/GROND FLOOR DRAWING ROOM.JPG",
            "/residential/MASTER BEDROOM.JPG",
            "/residential/GROUND FLOOR BEDROOM.JPG",
            "/residential/FIRST FLOOR 2 ND BEDROOM.JPG",
            "/residential/KITCHEN -2.JPG",
            "/residential/KITCHEN V.JPG",
            "/residential/BALCONY.JPG",
            "/residential/Capture.JPG-1.JPG",
            "/residential/Capture.JPG-2.JPG",
            "/residential/Capture.JPG-3.JPG",
            "/residential/Capture.JPG-4.JPG",
            "/residential/Capture.JPG-5.JPG"
        ],
        category: "Residential",
        reviews: [
            {
                user: "Rajesh & Meena",
                comment: "We are absolutely in love with our new home interiors! The team captured exactly what we wanted for the drawing room.",
                rating: 5
            },
            {
                user: "Karthik R.",
                comment: "The modular kitchen is not just beautiful but extremely functional. Great attention to detail.",
                rating: 5
            },
            {
                user: "Anjali Gupta",
                comment: "Professional execution and timely delivery. The bedroom wardrobes have such a premium finish.",
                rating: 4
            }
        ]
    },

    // --- OFFICE PROJECTS ---
    {
        id: 5,
        workName: "Corporate Entry & Lobby",
        description: "A first impression that lasts. This sleek lift lobby features polished black granite cladding and stainless steel textures, establishing a tone of professionalism and luxury right from the entrance.",
        image: "/office/20200104-DSC09999.jpg",
        images: [
            "/office/20200104-DSC09999.jpg"
        ],
        category: "Office",
        reviews: [
            { user: "TechSolutions CEO", comment: "Our clients are impressed the moment they step out of the lift. Great branding.", rating: 5 },
            { user: "HR Manager", comment: "Professional and sleek. Sets the right tone for our office.", rating: 5 },
            { user: "Facilities Team", comment: "Durable materials chosen for high traffic areas. Good thinking.", rating: 4 }
        ]
    },
    {
        id: 6,
        workName: "Modern Open-Plan Workspace",
        description: "Designed for collaboration and efficiency. Features expansive linear workstations, acoustic dividers for privacy, and vibrant accent colors to energize the work environment.",
        image: "/office/View Cabins from WS.JPG",
        images: [
            "/office/View Cabins from WS.JPG",
            "/office/Part Photo.JPG"
        ],
        category: "Office",
        reviews: [
            { user: "Startup Founder", comment: "The open plan has improved our tea collaboration significantly.", rating: 5 },
            { user: "Operations Head", comment: "Vibrant colors keep the energy high. Acoustic dividers work well.", rating: 4 },
            { user: "Employee Survey", comment: "Much better than our old cubicles. Feels spacious and airy.", rating: 5 }
        ]
    },
    {
        id: 7,
        workName: "Executive Glass Cabins",
        description: "Premium private cabins that maintain transparency. High-quality glass partitions with wooden door frames offer acoustic privacy without isolating leaders from the team.",
        image: "/office/Cabin Fur View.JPG",
        images: [
            "/office/Cabin Fur View.JPG",
            "/office/Cabin Front Door Glass Partition.JPG"
        ],
        category: "Office",
        reviews: [
            { user: "Director", comment: "Privacy without isolation. The glass partitions are perfect for management.", rating: 5 },
            { user: "Client Relations", comment: "Looks very premium during video calls. Excellent backdrop.", rating: 5 },
            { user: "Admin Dept", comment: "Easy to maintain and clean. Very practical design.", rating: 4 }
        ]
    }
];
