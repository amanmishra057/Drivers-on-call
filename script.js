document.addEventListener('DOMContentLoaded', function () {
    // --- DATA (JSON) ---
    // This data can now be used on any page that includes this script
    const data = {
        services: [
            // ... (service data from original file)
            {
                icon: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
                title: "City & Outstation Trips",
                description: "Whether it's a short trip within the city or a long journey to another town, our drivers ensure you reach your destination safely and on time."
            },
            {
                icon: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
                title: "Corporate Driver Service",
                description: "Professional, uniformed drivers for your business needs. Perfect for executive travel, client pickups, and corporate events."
            },
            {
                icon: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
                title: "Hourly & Daily Packages",
                description: "Flexible booking options. Hire a driver for a few hours for your errands or for the entire day for complete convenience."
            }
        ],
        howItWorks: [
            // ... (how it works data from original file)
             { step: "01", title: "Book Your Driver", description: "Fill out our simple booking form with your trip details or give us a call." },
             { step: "02", title: "Get Confirmation", description: "We'll confirm your booking and assign a professional, verified driver for your trip." },
             { step: "03", title: "Enjoy Your Ride", description: "Your driver will arrive at the specified time and location. Sit back, relax, and enjoy the journey." }
        ],
        faqs: [
            // ... (faq data from original file)
             { question: "Are the drivers verified and professional?", answer: "Absolutely. All our drivers go through a rigorous background check, including verification of their driving license, identity, and past records. They are also trained in professional etiquette and safe driving practices." },
             { question: "What are the charges for the driver service?", answer: "Our charges are transparent and depend on the type of service you choose (e.g., hourly, daily, outstation). There are no hidden fees. You can get a detailed quote by contacting us with your requirements." },
             { question: "What happens if I need to cancel my booking?", answer: "We have a flexible cancellation policy. Please refer to our terms and conditions or contact our support team for details on cancellations and any applicable charges." }
        ]
    };

    // --- RENDER FUNCTIONS ---
    function renderServices() {
        const grid = document.getElementById('services-grid');
        // Check if the element exists on the page before rendering
        if (grid) {
            grid.innerHTML = data.services.map(service => `
                <div class="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div class="flex justify-center items-center mb-4">${service.icon}</div>
                    <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
            `).join('');
        }
    }

    function renderHowItWorks() {
        const container = document.getElementById('how-it-works-steps');
        if (container) {
            container.innerHTML = data.howItWorks.map(step => `
                <div class="text-center max-w-xs">
                    <div class="relative mb-4">
                        <div class="w-24 h-24 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">${step.step}</div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                    <p class="text-gray-600">${step.description}</p>
                </div>
            `).join('');
        }
    }
    
    function renderFaqs() {
        const container = document.getElementById('faq-container');
        if (container) {
            container.innerHTML = data.faqs.map(faq => `
                <div class="faq-item border border-gray-200 rounded-lg overflow-hidden">
                    <button class="question w-full flex justify-between items-center text-left p-5 font-semibold focus:outline-none">
                        <span>${faq.question}</span>
                        <svg class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="answer p-5 pt-0 text-gray-600">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');
        }
    }


    // --- EVENT LISTENERS ---
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqContainer.addEventListener('click', function(e) {
            const questionButton = e.target.closest('.question');
            if (questionButton) {
                const faqItem = questionButton.parentElement;
                const wasActive = faqItem.classList.contains('active');
                
                // Close all items
                faqContainer.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

                // Toggle the clicked item
                if (!wasActive) {
                    faqItem.classList.add('active');
                }
            }
        });
    }

    // *** NEW: Interactive Form Submission ***
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            const formContent = document.getElementById('form-content');
            const formConfirmation = document.getElementById('form-confirmation');

            // Hide the form fields and show the confirmation message
            formContent.classList.add('hidden');
            formConfirmation.classList.remove('hidden');
        });
    }

    // *** NEW: Scroll Animation Observer ***
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });


    // --- INITIALIZE DYNAMIC CONTENT ---
    // These functions will only run if their target IDs are found on the current page
    renderServices();
    renderHowItWorks();
    renderFaqs();
});