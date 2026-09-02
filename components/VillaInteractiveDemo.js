"use client";

import React from 'react';
import {
  Sun,
  Calendar as CalendarIcon,
  Users,
  ChevronRight,
  ShieldAlert,
  Thermometer,
  Wifi,
  Tv,
  UtensilsCrossed,
  Microwave,
  ShowerHead,
  Trees,
  Car,
  BedDouble,
  DoorClosed,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';

/**
 * Luxury Villa Stay - Full Interactive / Visual Demo Showcase
 * Pixel-perfect reproduction of the luxury villa website including all sections:
 * Hero, Discover The Villa, The Gallery, Villa Amenities, Select Your Stay Calendar,
 * Guest Book (Unforgettable Stays), Nearby Attractions, Get in Touch / Inquiry Form, and Footer.
 * Note: Styled as a pristine non-interactive visual demo as requested.
 */
export default function VillaInteractiveDemo() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      title: "Master Suite & Wooden Accents",
      category: "Bedrooms"
    },
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Guest Bedroom",
      category: "Beds"
    },
    {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      title: "Colonial Lounge & Tea Table",
      category: "Living Areas"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Garden Verandah with Rattan Seating",
      category: "Outdoor"
    },
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      title: "Fully Equipped Kitchen",
      category: "Kitchen"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      title: "Misty Mountain & Tea Garden Views",
      category: "Views"
    }
  ];

  const amenities = [
    {
      icon: ShieldAlert,
      title: "Smoke alarm",
      desc: "Advanced smoke detection system for guest safety"
    },
    {
      icon: Thermometer,
      title: "Room Heater",
      desc: "Heating system for cold mountain climates"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      desc: "Seamless connectivity everywhere"
    },
    {
      icon: Tv,
      title: "Smart TV",
      desc: "Netflix, Apple TV & more"
    },
    {
      icon: UtensilsCrossed,
      title: "Crockery & Cutlery",
      desc: "Complete dining essentials including plates, bowls, cups and utensils"
    },
    {
      icon: Microwave,
      title: "Equipped Kitchen",
      desc: "Modern appliances included"
    },
    {
      icon: ShowerHead,
      title: "Hot Water Shower",
      desc: "Continuous solar & electric hot water system"
    },
    {
      icon: Trees,
      title: "Mountain & Tea View",
      desc: "Panoramic vistas from balconies and patio"
    },
    {
      icon: Car,
      title: "Private Parking",
      desc: "Secure on-site parking for multiple vehicles"
    }
  ];

  const testimonials = [
    {
      name: "Sophia & Liam Wright",
      location: "Melbourne, Australia",
      stayDate: "August 2026",
      quote: "Our stay at Nalaka Rest exceeded every expectation. Waking up to the misty tea plantation views with fresh Ceylon tea on the verandah was pure magic. The attention to detail, warmth of the hosts, and peaceful ambiance made it the highlight of our Sri Lanka journey.",
      rating: 5
    },
    {
      name: "Jean-Pierre Laurent",
      location: "Geneva, Switzerland",
      stayDate: "July 2026",
      quote: "A true sanctuary of serenity. The villa seamlessly blends colonial charm with modern comforts — the room heaters were very welcome in the crisp Nuwara Eliya evenings! The concierge arranged our Lover's Leap trek effortlessly. We will definitely return.",
      rating: 5
    },
    {
      name: "Dr. Ananya & Dev Sharma",
      location: "Mumbai, India",
      stayDate: "June 2026",
      quote: "Traveling with our extended family of 7, we booked the entire villa. The spacious bedrooms, well-appointed kitchen, and warm living area felt like our private mountain manor. Exceptional hospitality and five-star cleanliness throughout.",
      rating: 5
    }
  ];

  const attractions = [
    {
      title: "Lover's Leap Waterfall",
      distance: "1.8 km",
      time: "5 min drive",
      desc: "A legendary, breathtaking cascading waterfall surrounded by tea estates and emerald hills."
    },
    {
      title: "Lake Gregory & Promenade",
      distance: "2.5 km",
      time: "7 min drive",
      desc: "Scenic highland lake offering leisurely boat rides, cycling paths, and lakeside dining."
    },
    {
      title: "Victoria Park & Botanic Gardens",
      distance: "3.0 km",
      time: "8 min drive",
      desc: "Historic Victorian botanical garden with rare exotic flowers, manicured lawns, and birdwatching."
    },
    {
      title: "Pedro Tea Estate & Factory",
      distance: "4.2 km",
      time: "12 min drive",
      desc: "Experience heritage tea manufacturing from leaf to cup with panoramic hillside terraces."
    }
  ];

  return (
    <div className="villa-demo-wrapper select-none">
      {/* Non-Clickable Demo Notice Banner */}
      <div className="villa-demo-banner">
        <span className="villa-demo-pulse" />
        <span>VILLA WEBSITE DEMO PREVIEW · NON-CLICKABLE SHOWCASE MODE</span>
      </div>

      <div className="villa-demo-container">
        {/* ================= HEADER / TOPBAR ================= */}
        <header className="villa-topbar">
          <div className="villa-brand">
            VILLA<span className="text-amber-400">.</span>
          </div>

          <nav className="villa-nav hidden lg:flex">
            <span className="villa-nav-link active">The Villa</span>
            <span className="villa-nav-link">Gallery</span>
            <span className="villa-nav-link">Amenities</span>
            <span className="villa-nav-link">Experiences</span>
            <span className="villa-nav-link">Reviews</span>
            <span className="villa-nav-link">Location</span>
            <span className="villa-nav-link">Contact</span>
          </nav>

          <div className="flex items-center gap-3">
            {/* Weather Widget */}
            <div className="villa-weather-pill hidden sm:flex">
              <Sun size={15} className="text-amber-400" />
              <div className="text-left">
                <span className="villa-temp">28°C</span>
                <span className="villa-weather-desc">Sunny, Galle</span>
              </div>
            </div>

            <button type="button" className="villa-book-btn" tabIndex={-1}>
              BOOK NOW
            </button>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="villa-hero">
          <div className="villa-hero-backdrop" />
          <div className="villa-hero-content">
            <span className="villa-badge-gold">
              ESCAPE TO PARADISE IN SRI LANKA
            </span>
            <h1 className="villa-hero-title">
              Luxury Villa Stay <br />
              <span className="villa-hero-italic">with Ocean Breeze</span>
            </h1>

            {/* Floating Glass Booking Bar */}
            <div className="villa-glass-booking-bar">
              <div className="villa-booking-item">
                <span className="villa-booking-label">CHECK-IN</span>
                <div className="villa-booking-val">
                  <CalendarIcon size={14} className="text-amber-400" />
                  <span>Add Date</span>
                </div>
              </div>

              <div className="villa-booking-divider" />

              <div className="villa-booking-item">
                <span className="villa-booking-label">CHECK-OUT</span>
                <div className="villa-booking-val">
                  <CalendarIcon size={14} className="text-amber-400" />
                  <span>Add Date</span>
                </div>
              </div>

              <div className="villa-booking-divider" />

              <div className="villa-booking-item">
                <span className="villa-booking-label">GUESTS</span>
                <div className="villa-booking-val">
                  <Users size={14} className="text-amber-400" />
                  <span>2 Guests</span>
                </div>
              </div>

              <button type="button" className="villa-cta-gold-btn" tabIndex={-1}>
                <span>Book Now</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= DISCOVER THE VILLA ================= */}
        <section className="villa-section">
          <div className="villa-discover-grid">
            <div className="villa-discover-text">
              <span className="villa-badge-gold">DISCOVER THE VILLA</span>
              <h2 className="villa-section-title">
                A Sanctuary of <br />
                <span className="villa-serif-italic">Misty Elegance</span>
              </h2>
              <p className="villa-discover-desc">
                Welcome to Nalaka Rest — a luxury mountain escape hidden within the breathtaking
                misty hills of Nuwara Eliya. Surrounded by rolling tea plantations, cool mountain
                air, and picturesque waterfalls, our villa offers a peaceful blend of comfort,
                privacy, and authentic Sri Lankan hospitality.
              </p>
              <p className="villa-discover-desc mt-3">
                Designed as your perfect &ldquo;home away from home,&rdquo; Nalaka Rest is ideal for
                family holidays, group retreats, and relaxing getaways with friends. Experience cozy
                interiors, scenic landscapes, and unforgettable moments in one of Sri Lanka&apos;s
                most beautiful hill country destinations.
              </p>

              {/* 6 Metric Highlights Grid */}
              <div className="villa-metrics-grid">
                <div className="villa-metric-card">
                  <Users size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">8</span>
                  <span className="villa-metric-label">GUESTS</span>
                </div>
                <div className="villa-metric-card">
                  <DoorClosed size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">3</span>
                  <span className="villa-metric-label">BEDROOMS</span>
                </div>
                <div className="villa-metric-card">
                  <BedDouble size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">4</span>
                  <span className="villa-metric-label">BEDS</span>
                </div>
                <div className="villa-metric-card">
                  <ShowerHead size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">2</span>
                  <span className="villa-metric-label">BATHROOMS</span>
                </div>
                <div className="villa-metric-card">
                  <Wifi size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">WiFi</span>
                  <span className="villa-metric-label">HIGH SPEED</span>
                </div>
                <div className="villa-metric-card">
                  <Car size={18} className="text-amber-400 mb-1" />
                  <span className="villa-metric-num">2</span>
                  <span className="villa-metric-label">PARKING</span>
                </div>
              </div>
            </div>

            {/* Overlapping Image Composition */}
            <div className="villa-photo-collage">
              <div className="villa-collage-card main">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Villa Bedroom Suite"
                  className="villa-collage-img"
                />
              </div>
              <div className="villa-collage-card sub">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
                  alt="Villa Living Lounge"
                  className="villa-collage-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= THE GALLERY ================= */}
        <section className="villa-section villa-gallery-section">
          <div className="text-center mb-8">
            <h2 className="villa-section-title text-center">The Gallery</h2>
            <div className="villa-filter-pills">
              <span className="filter-pill active">All</span>
              <span className="filter-pill">Bedrooms</span>
              <span className="filter-pill">Living Areas</span>
              <span className="filter-pill">Beds</span>
              <span className="filter-pill">Kitchen</span>
              <span className="filter-pill">Outdoor</span>
              <span className="filter-pill">Views</span>
            </div>
          </div>

          <div className="villa-gallery-grid">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="villa-gallery-item">
                <img src={img.url} alt={img.title} className="villa-gallery-img" />
                <div className="villa-gallery-caption">
                  <span className="villa-gallery-tag">{img.category}</span>
                  <span className="villa-gallery-name">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VILLA AMENITIES ================= */}
        <section className="villa-section">
          <div className="text-center mb-10">
            <span className="villa-badge-gold">PREMIUM COMFORTS</span>
            <h2 className="villa-section-title text-center mt-2">Villa Amenities</h2>
          </div>

          <div className="villa-amenities-grid">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="villa-amenity-card">
                  <div className="villa-amenity-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="villa-amenity-title">{item.title}</h3>
                  <p className="villa-amenity-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SELECT YOUR STAY (CALENDAR) ================= */}
        <section className="villa-section">
          <div className="villa-booking-engine-card">
            {/* Left: Calendar Picker */}
            <div className="villa-calendar-pane">
              <h3 className="villa-booking-pane-title">Select your stay</h3>
              <p className="villa-booking-pane-sub">Choose your check-in and check-out dates</p>

              <div className="villa-mock-calendar">
                <div className="villa-calendar-header">
                  <ChevronLeft size={16} className="text-zinc-500" />
                  <span className="villa-cal-month">September 2026</span>
                  <ChevronRight size={16} className="text-zinc-500" />
                </div>

                <div className="villa-cal-weekdays">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>

                <div className="villa-cal-days">
                  <span className="empty" />
                  <span className="empty" />
                  <span>1</span>
                  <span className="selected">2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            {/* Right: Reservation Summary */}
            <div className="villa-summary-pane">
              <h3 className="villa-summary-title">Reservation Details</h3>

              <div className="villa-field-group">
                <label className="villa-field-label">Check In</label>
                <div className="villa-field-input">Select check-in date</div>
              </div>

              <div className="villa-field-group">
                <label className="villa-field-label">Check Out</label>
                <div className="villa-field-input">Select check-out date</div>
              </div>

              <div className="villa-field-group">
                <label className="villa-field-label">Guests</label>
                <div className="villa-field-input flex justify-between items-center">
                  <span>1 Guest</span>
                  <ChevronRight size={14} className="rotate-90 text-zinc-500" />
                </div>
              </div>

              <div className="villa-field-group">
                <label className="villa-field-label">Number of Nights</label>
                <div className="villa-field-input">0 Nights</div>
              </div>

              <div className="villa-price-row">
                <span className="villa-price-label">Estimated Total</span>
                <span className="villa-price-value">$0.00</span>
              </div>

              <button type="button" className="villa-confirm-btn" tabIndex={-1}>
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* ================= GUEST BOOK / REVIEWS ================= */}
        <section className="villa-section">
          <div className="text-center mb-10">
            <span className="villa-badge-gold">GUEST BOOK</span>
            <h2 className="villa-section-title text-center mt-2">Unforgettable Stays</h2>
            <p className="villa-section-sub max-w-2xl mx-auto">
              Hear from guests who have experienced the serenity, luxury, and hospitality of our retreat.
            </p>
          </div>

          <div className="villa-reviews-grid">
            {testimonials.map((review, idx) => (
              <div key={idx} className="villa-review-card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="villa-review-text">&ldquo;{review.quote}&rdquo;</p>
                <div className="villa-reviewer-info">
                  <div className="villa-reviewer-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="villa-reviewer-name">{review.name}</h4>
                    <span className="villa-reviewer-meta">{review.location} · {review.stayDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= NEARBY ATTRACTIONS ================= */}
        <section className="villa-section">
          <div className="text-center mb-10">
            <span className="villa-badge-gold">EXPLORE SRI LANKA</span>
            <h2 className="villa-section-title text-center mt-2">Nearby Attractions</h2>
            <p className="villa-section-sub max-w-2xl mx-auto">
              Discover scenic waterfalls, lush tea estates, and historic landmarks just minutes away.
            </p>
          </div>

          <div className="villa-attractions-grid">
            {attractions.map((item, idx) => (
              <div key={idx} className="villa-attraction-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="villa-attraction-dist">
                    <MapPin size={12} className="text-amber-400" />
                    <span>{item.distance}</span>
                  </span>
                  <span className="villa-attraction-time">
                    <Clock size={12} className="text-zinc-400" />
                    <span>{item.time}</span>
                  </span>
                </div>
                <h3 className="villa-attraction-title">{item.title}</h3>
                <p className="villa-attraction-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GET IN TOUCH / INQUIRY ================= */}
        <section className="villa-section villa-contact-section">
          <div className="villa-contact-grid">
            <div className="villa-contact-info-pane">
              <span className="villa-badge-gold">GET IN TOUCH</span>
              <h2 className="villa-section-title mt-2">
                Ready to book <br />
                <span className="villa-serif-italic">your escape?</span>
              </h2>
              <p className="villa-contact-desc">
                Our concierge team is available 24/7 to assist with your reservation,
                special requests, or any inquiries you might have.
              </p>

              <div className="villa-contact-methods">
                <div className="villa-contact-card">
                  <div className="villa-contact-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="villa-contact-label">Call Us</span>
                    <span className="villa-contact-val">+94 77 509 9361</span>
                  </div>
                </div>

                <div className="villa-contact-card">
                  <div className="villa-contact-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="villa-contact-label">Email</span>
                    <span className="villa-contact-val">reservations@villa.com</span>
                  </div>
                </div>

                <div className="villa-contact-card">
                  <div className="villa-contact-icon text-emerald-400">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="villa-contact-label">WhatsApp</span>
                    <span className="villa-contact-val">Chat with Concierge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="villa-inquiry-pane">
              <h3 className="villa-inquiry-title">Send an Inquiry</h3>

              <div className="villa-form-row">
                <div className="villa-form-field">
                  <label className="villa-field-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="villa-input"
                    readOnly
                    tabIndex={-1}
                  />
                </div>
                <div className="villa-form-field">
                  <label className="villa-field-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="villa-input"
                    readOnly
                    tabIndex={-1}
                  />
                </div>
              </div>

              <div className="villa-form-field">
                <label className="villa-field-label">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="villa-input"
                  readOnly
                  tabIndex={-1}
                />
              </div>

              <div className="villa-form-field">
                <label className="villa-field-label">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dates, group size, and any special requests..."
                  className="villa-textarea"
                  readOnly
                  tabIndex={-1}
                />
              </div>

              <button type="button" className="villa-submit-btn" tabIndex={-1}>
                <span>Send Message</span>
                <Send size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="villa-footer">
          <div className="villa-footer-grid">
            <div className="villa-footer-brand-col">
              <div className="villa-brand text-2xl">
                VILLA<span className="text-amber-400">.</span>
              </div>
              <p className="villa-footer-tagline">
                Experience the pinnacle of luxury living on the southern coast and misty highlands of Sri Lanka.
              </p>
            </div>

            <div className="villa-footer-links-col">
              <h4 className="villa-footer-heading">Quick Links</h4>
              <ul className="villa-footer-list">
                <li>The Villa</li>
                <li>Gallery</li>
                <li>Amenities</li>
                <li>Experiences</li>
              </ul>
            </div>

            <div className="villa-footer-links-col">
              <h4 className="villa-footer-heading">Legal</h4>
              <ul className="villa-footer-list">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cancellation Policy</li>
                <li>House Rules</li>
              </ul>
            </div>

            <div className="villa-footer-newsletter-col">
              <h4 className="villa-footer-heading">Newsletter</h4>
              <p className="villa-footer-news-desc">
                Subscribe to receive special offers and updates.
              </p>
              <div className="villa-news-input-wrap">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="villa-news-input"
                  readOnly
                  tabIndex={-1}
                />
                <button type="button" className="villa-news-btn" tabIndex={-1}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="villa-footer-bottom">
            <span>© 2026 Villa Sri Lanka. All rights reserved.</span>
            <span>Designed by Figma AI · Made for Luxury</span>
          </div>
        </footer>

        {/* Floating Side & Bottom Widgets */}
        <div className="villa-floating-widgets">
          <div className="villa-float-btn grid-icon" title="Quick Navigation">
            <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
              <span className="bg-amber-400 rounded-sm" />
              <span className="bg-amber-400 rounded-sm" />
              <span className="bg-amber-400 rounded-sm" />
              <span className="bg-amber-400 rounded-sm" />
            </div>
          </div>
          <div className="villa-float-btn ai-icon" title="AI Concierge">
            <Sparkles size={16} className="text-indigo-400" />
          </div>
          <div className="villa-float-btn chat-icon" title="Guest Chat">
            <MessageCircle size={18} className="text-amber-400" />
          </div>
          <div className="villa-float-btn whatsapp-icon" title="WhatsApp Concierge">
            <Phone size={18} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
