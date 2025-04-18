document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-btn');

    const instrumentData = {
        "jantar-mantar": {
            title: "Jantar Mantar",
            description: "Jantar Mantar is a series of five observatories built in the early 18th century by Maharaja Sawai Jai Singh II, with the largest and most famous one located in Jaipur. These structures house several architectural astronomical instruments made of stone and brass. Their primary function was to compile astronomical tables and to predict the movements of the sun, moon, and planets.",
            making: "The instruments at Jantar Mantar were constructed using local stone and marble, with brass and metal fittings in some places. Each instrument was carefully calibrated and aligned with celestial coordinates. The construction demonstrates a high level of craftsmanship and deep understanding of astronomical principles.",
            working: "The instruments include the Samrat Yantra (a giant sundial), the Ram Yantra (for measuring altitudes and azimuths), and the Jai Prakash Yantra (used to observe the position of celestial bodies). These instruments utilize geometric shapes to map celestial movements onto a flat or curved surface."
        },
        "astrolabe": {
            title: "Astrolabe",
            description: "The astrolabe is an ancient device used in astronomy and navigation to solve problems related to time and the position of the stars. It was widely adopted by Indian astronomers and scholars during the Islamic Golden Age and beyond.",
            making: "Traditional astrolabes were crafted from brass and consisted of a base plate (the mater), a rotating disk (the rete), and several other components such as the alidade and rule. Intricate engravings allowed for accurate readings of celestial data.",
            working: "By aligning the rotating parts to a specific star or celestial object, the astrolabe allowed users to determine the time, latitude, and even perform basic surveying tasks. It was also used to calculate the positions of the sun and planets for astrological predictions."
        },
        "sundial": {
            title: "Sundial",
            description: "Sundials are among the earliest instruments developed to measure time, using the position of the sun's shadow. They were used extensively in ancient India for civil and religious purposes.",
            making: "Typically made from stone, bronze, or other metals, sundials have a flat plate (dial) and a raised stick (gnomon) that casts a shadow on the dial. The dial is marked with hour lines based on the geographic location.",
            working: "As the sun moves across the sky, the shadow of the gnomon moves along the hour lines. By observing the shadow's position, one can determine the local solar time. The design must be tailored to the specific latitude to ensure accuracy."
        },
        "samrat-yantra": {
            title: "Samrat Yantra",
            description: "The Samrat Yantra is the world's largest sundial, located at Jantar Mantar in Jaipur. Its scale and precision reflect the astronomical advancements of ancient Indian science.",
            making: "Constructed from stone masonry and featuring a towering triangular gnomon flanked by curved quadrants on either side, the instrument is over 27 meters tall. It required advanced engineering to ensure its alignment with the celestial meridian.",
            working: "It functions by casting a shadow onto the quadrants which are marked with time intervals. The accuracy of the Samrat Yantra is within 2 seconds, which is remarkable for a manually-operated instrument from that era."
        },
        "jaiprakash-yantra": {
            title: "Jaiprakash Yantra",
            description: "The Jai Prakash Yantra is a complex instrument consisting of two hemispherical bowls with marked marble slabs. It was used to locate the position of celestial bodies.",
            making: "Each bowl is built below ground level and has a lattice framework suspended over it with crosswires. A small metal ring suspended inside acts as a sighting tool.",
            working: "Astronomers would observe the reflection of celestial objects onto the bowl’s marked interior. By aligning the ring with the celestial object’s reflection, they could accurately determine its zenith distance and altitude."
        },
        "rashivalaya-yantra": {
            title: "Rashivalaya Yantra",
            description: "The Rashivalaya Yantra is a set of twelve instruments each representing one zodiac sign. It was used for advanced astrological calculations and planetary analysis.",
            making: "These yantras are precisely aligned with each zodiacal sign and positioned according to celestial coordinates. They are engraved with symbols and measurement markings.",
            working: "Astrologers used them to measure the declinations and right ascensions of planets and stars, aiding in horoscopes and predictions based on the movement of celestial bodies through the zodiac."
        },
        "shankh-yantra": {
            title: "Shankh Yantra",
            description: "The Shankh Yantra is not purely an astronomical device but a symbolic instrument representing the cosmos. It is shaped like a conch shell (shankh), which holds significant spiritual and cosmic meaning in Indian tradition.",
            making: "Made from brass, copper, or silver, this yantra is often intricately inscribed with mantras and geometric patterns such as spirals and lotus petals.",
            working: "In religious astronomy and rituals, the Shankh Yantra is believed to generate auspicious energy fields, align the user's consciousness with cosmic rhythms, and enhance spiritual insight during meditation and puja."
        },
        "dhanur-yantra": {
            title: "Dhanur Yantra",
            description: "The Dhanur Yantra, inspired by the shape of a bow, was used to measure angular distances in the sky. It reflects the blending of martial arts, astronomy, and geometry.",
            making: "Built from wood or stone, the instrument’s structure resembles a semi-circular arc with calibrated markings, resembling a warrior’s bow. It often featured a central sighting point for taking measurements.",
            working: "This yantra was primarily used to determine the angular elevation of celestial objects or trajectory angles in warfare. It helped astronomers and warriors calculate parabolic arcs and directions with precision."
        },
        "kundali-yantra": {
            title: "Kundali Yantra",
            description: "The Kundali Yantra is an astrological diagram used to cast a person’s horoscope by mapping planetary positions at the time of their birth.",
            making: "Traditionally drawn on metal plates or paper, the yantra contains a grid with twelve sections representing the twelve zodiac signs. Each section is carefully marked with symbolic planetary and astrological information.",
            working: "Astrologers interpret this yantra by plotting the positions of the sun, moon, and planets at the exact moment and place of birth. The resulting chart is used to predict personality traits, life events, and spiritual inclinations."
        }
    };

    document.querySelectorAll('.instrument').forEach(instrument => {
        instrument.addEventListener('click', () => {
            const instrumentId = instrument.id;
            const data = instrumentData[instrumentId];
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-description').textContent = data.description;
            document.getElementById('modal-making').textContent = data.making;
            document.getElementById('modal-working').textContent = data.working;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
