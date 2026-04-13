// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    if (hamburger && hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }
}));

// "Sprinkle Water" interactive blessing animation
function triggerBlessing() {
    // Number of water drops
    const dropCount = 60;
    
    for (let i = 0; i < dropCount; i++) {
        setTimeout(() => {
            createWaterDrop();
        }, i * 40); // Stagger the drops
    }

    // Button visual feedback fix
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        // Save the original text if it hasn't been saved yet
        const originalText = btn.dataset.originalText || btn.innerText;
        btn.dataset.originalText = originalText;
        
        btn.innerText = "Blessings Received! ✨";
        btn.classList.add("btn-success");
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("btn-success");
        }, 3000);
    });
}

function createWaterDrop() {
    const drop = document.createElement('div');
    drop.classList.add('water-drop');
    
    // Random horizontal position
    drop.style.left = Math.random() * 100 + 'vw';
    
    // Random fall duration between 1s and 2s
    const duration = Math.random() * 1 + 1;
    drop.style.animationDuration = duration + 's';
    
    // Slightly random sizes
    const size = Math.random() * 5 + 8; // 8px to 13px
    drop.style.width = size + 'px';
    drop.style.height = (size * 1.5) + 'px';

    document.body.appendChild(drop);

    // Clean up DOM after animation ends
    setTimeout(() => {
        drop.remove();
    }, duration * 1000);
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerText = '☀️';
            themeToggle.setAttribute('title', 'Toggle Light Theme');
        } else {
            themeToggle.innerText = '🌙';
            themeToggle.setAttribute('title', 'Toggle Dark Theme');
        }
    });
}

// Interactive map (Leaflet + OpenStreetMap free tiles)
document.addEventListener('DOMContentLoaded', () => {
    const mapEl = document.getElementById('live-map');
    if (!mapEl || typeof L === 'undefined') {
        return;
    }

    const map = L.map('live-map', {
        scrollWheelZoom: false
    }).setView([26.1, 83.9], 5.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const places = [
        {
            name: 'Mithila (Darbhanga)',
            coords: [26.1522, 85.8971],
            note: 'Cultural heartland of Jur Sital in the Mithila region.'
        },
        {
            name: 'Delhi',
            coords: [28.6139, 77.2090],
            note: 'Major urban center for Maithili diaspora communities.'
        },
        {
            name: 'Mumbai',
            coords: [19.0760, 72.8777],
            note: 'A growing Jur Sital celebration hub in western India.'
        },
        {
            name: 'Ludhiana',
            coords: [30.9010, 75.8573],
            note: 'Active Mithila Samaj-led celebrations in Punjab.'
        }
    ];

    const bounds = [];
    places.forEach((place) => {
        const marker = L.marker(place.coords).addTo(map);
        marker.bindPopup(`<strong>${place.name}</strong><br>${place.note}`);
        bounds.push(place.coords);
    });

    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [30, 30] });
    }
});

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
let isMaithili = false;
if (langToggle) {
    langToggle.addEventListener('click', () => {
        isMaithili = !isMaithili;
        const elements = document.querySelectorAll('[data-maithili]');
        
        elements.forEach(el => {
            if (!el.dataset.english) {
                el.dataset.english = el.innerText;
            }
            if (isMaithili) {
                el.innerText = el.dataset.maithili;
            } else {
                el.innerText = el.dataset.english;
            }
        });
        
        if (isMaithili) {
            langToggle.innerText = 'A';
            langToggle.setAttribute('title', 'Toggle English');
        } else {
            langToggle.innerText = '🔤';
            langToggle.setAttribute('title', 'Toggle Maithili');
        }
    });
}

// Checklist Progress
const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
const progressBar = document.getElementById('checklist-progress');

if (checkboxes.length > 0 && progressBar) {
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateProgress);
    });
    
    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.check-item input[type="checkbox"]:checked').length;
        const percentage = (checked / total) * 100;
        progressBar.style.width = percentage + '%';
    }
}

// Submit Memory
function submitMemory() {
    const nameInput = document.getElementById('memory-name');
    const textInput = document.getElementById('memory-text');
    const grid = document.getElementById('memory-grid');
    
    if (nameInput && textInput && nameInput.value.trim() !== '' && textInput.value.trim() !== '') {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        
        const p = document.createElement('p');
        p.innerText = `"${textInput.value}"`;
        
        const cite = document.createElement('cite');
        cite.innerText = `- ${nameInput.value}`;
        
        card.appendChild(p);
        card.appendChild(cite);
        
        // Add animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        grid.prepend(card);
        
        // Trigger reflow
        void card.offsetWidth;
        
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        
        // Clear inputs
        nameInput.value = '';
        textInput.value = '';
        
        // Change button text temporarily
        const btn = document.querySelector('.memory-form .btn');
        if (btn) {
            const originalText = btn.innerText;
            btn.innerText = "Memory Added! ✨";
            btn.classList.add("btn-success");
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove("btn-success");
            }, 3000);
        }
    } else {
        alert("Please enter both your name and your memory.");
    }
}
