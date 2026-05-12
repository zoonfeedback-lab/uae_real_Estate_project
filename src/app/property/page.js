"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/ui/PropertyCard";
import { ELITE_RESIDENCES } from "@/data/siteData";
import styles from "./property.module.css";

export default function PropertyPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <>
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <div 
        className={styles.scrollProgress} 
        style={{ width: `${scrollProgress}%` }} 
      />

      <main className={styles.page}>
        <div className="container">
          
          {/* Image Gallery */}
          <div className={`${styles.gallery} animate-fadeIn`}>
            <div className={styles.mainImage}>
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
                alt="Living Room"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className={styles.imageOverlay} />
              <div className={styles.galleryActions}>
                <button className={styles.galleryBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  VIRTUAL TOUR
                </button>
                <button className={styles.galleryBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  GALLERY VIEW
                </button>
              </div>
            </div>
            
            <div className={styles.sideGrid}>
              <div className={styles.gridImg}>
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
                  alt="Bedroom"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.gridImg}>
                <Image
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
                  alt="Kitchen"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.skyline}>
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
                  alt="Dubai Skyline"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.contentLayout} animate-fadeInUp`} style={{ animationDelay: "0.2s" }}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              <div className={styles.tags}>
                <span className={styles.tagGold}>Exclusive</span>
                <span className={styles.tag}>Ready to Move</span>
              </div>

              <h1 className={styles.title}>The Grand Penthouse at Palm Jumeirah</h1>
              <div className={styles.location}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Signature Villas, Palm Jumeirah, Dubai
              </div>

              <div className={styles.statsGrid}>
                <div>
                  <span className={styles.statLabel}>Price</span>
                  <div className={`${styles.statValue} ${styles.statValueGold}`}>AED 45,000,000</div>
                </div>
                <div>
                  <span className={styles.statLabel}>Bedrooms</span>
                  <div className={styles.statValue}>6 Beds</div>
                </div>
                <div>
                  <span className={styles.statLabel}>Bathrooms</span>
                  <div className={styles.statValue}>7 Baths</div>
                </div>
                <div>
                  <span className={styles.statLabel}>Size</span>
                  <div className={styles.statValue}>12,500 Sq. Ft.</div>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>Property Overview</h2>
              <p className={styles.overviewText}>
                Experience the pinnacle of coastal luxury in this architectural masterpiece. Spread across the entire top floor, the Grand Penthouse offers 360-degree views of the Arabian Gulf and Dubai Skyline. Designed for the discerning few, it features double-height ceilings, a private cinema, and an infinity pool that merges with the horizon.
              </p>

              <h2 className={styles.sectionTitle}>Amenities</h2>
              <div className={styles.amenitiesGrid}>
                <div className={styles.amenityCard}>
                  <svg className={styles.amenityIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12c-2 0-2 2-4 2s-2-2-4-2-2 2-4 2-2-2-4-2-2 2-4 2v4h22v-4z"></path></svg>
                  <span className={styles.amenityLabel}>Private Pool</span>
                </div>
                <div className={styles.amenityCard}>
                  <svg className={styles.amenityIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18h12"></path><path d="M6 14h12"></path><path d="M4 10h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z"></path></svg>
                  <span className={styles.amenityLabel}>Private Gym</span>
                </div>
                <div className={styles.amenityCard}>
                  <svg className={styles.amenityIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                  <span className={styles.amenityLabel}>Home Cinema</span>
                </div>
                <div className={styles.amenityCard}>
                  <svg className={styles.amenityIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 11L19 11M5 19L19 19M5 23L19 23"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span className={styles.amenityLabel}>6 Parking Slots</span>
                </div>
              </div>

              <div className={styles.mapHeader}>
                <h2 className={styles.sectionTitle} style={{ margin: 0 }}>Location & Connectivity</h2>
                <a href="#" className={styles.mapLink}>Open in Google Maps</a>
              </div>
              <div className={styles.mapContainer}>
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
                  alt="Map Location"
                  fill
                  style={{ objectFit: "cover", opacity: 0.5, filter: "grayscale(1)" }}
                />
                <div className={styles.mapOverlay}>
                  <div className={styles.mapPin}>
                    <svg className={styles.pinIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Dubai College - 5 mins
                  </div>
                  <div className={styles.mapPin}>
                    <svg className={styles.pinIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    Nakheel Mall - 8 mins
                  </div>
                  <div className={styles.mapPin}>
                    <svg className={styles.pinIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    Al Zahra Hospital - 12 mins
                  </div>
                </div>
              </div>

              <div className={styles.investmentHeader}>
                <h2 className={styles.sectionTitle} style={{ margin: 0 }}>Investment Analysis</h2>
                <span className={styles.investmentRoi}>Estimated ROI: 8.5%</span>
              </div>
              <div className={styles.investmentCard}>
                <div className={styles.investMetrics}>
                  <div className={styles.investItem}>
                    <div>
                      <span className={styles.investLabel}>Annual Rental Income</span>
                      <div className={styles.investValue}>AED 3,200,000</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className={styles.investItem}>
                    <div>
                      <span className={styles.investLabel}>Service Charge</span>
                      <div className={styles.investValue}>AED 180,000</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>
                <div className={styles.investChart}>
                  <div className={styles.chartCircle}>
                    <span>85%</span>
                  </div>
                  <div className={styles.chartLegend}>
                    <span style={{ color: "var(--color-white)", fontWeight: 500 }}>Capital Appreciation</span><br/>
                    Target 12% in 2 Years
                  </div>
                </div>
              </div>

              <div className={styles.agentCard}>
                <div className={styles.agentAvatar}>
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Agent" fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.agentInfo}>
                  <h3 className={styles.agentName}>Alexander Vance</h3>
                  <div className={styles.agentRole}>Senior Portfolio Manager</div>
                  <p className={styles.agentDesc}>
                    Specializing in ultra-prime Palm Jumeirah assets for over 12 years, Alexander has closed over AED 2B in transactions and provides bespoke consultancy for HNWIs.
                  </p>
                  <div className={styles.agentActions}>
                    <button className={styles.agentBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      Email
                    </button>
                    <button className={styles.agentBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Call
                    </button>
                    <button className={styles.agentBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      Verify Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column / Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.enquiryCard}>
                <div className={styles.formHeader}>
                  <span className={styles.formSubtitle}>Leasing Offer</span>
                  <div className={styles.formPrice}>AED 45,000,000</div>
                </div>

                {formStatus === "success" ? (
                  <div className={styles.successMessage} style={{ textAlign: "center", padding: "40px 0" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={{ marginBottom: "16px" }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 style={{ color: "var(--color-white)", marginBottom: "8px" }}>Enquiry Sent</h3>
                    <p style={{ color: "var(--color-gray-400)", fontSize: "0.9rem" }}>We will contact you shortly.</p>
                    <button onClick={() => setFormStatus("idle")} className={styles.actionBtn} style={{ marginTop: "20px" }}>Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Full Name</label>
                      <input type="text" className={styles.formInput} placeholder="John Doe" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Contact Number</label>
                      <input type="tel" className={styles.formInput} placeholder="+971 50 000 0000" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Message</label>
                      <textarea className={`${styles.formInput} ${styles.formTextarea}`} placeholder="I am interested in this property..." required></textarea>
                    </div>
                    
                    <button type="submit" className={styles.formSubmit} disabled={formStatus === "submitting"}>
                      {formStatus === "submitting" ? "Sending..." : "Enquire Now"}
                    </button>
                    
                    <div className={styles.btnGroup}>
                      <button type="button" className={styles.actionBtn}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Book Viewing
                      </button>
                    </div>
                    <div className={styles.splitBtns}>
                      <button type="button" className={styles.actionBtn}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        WhatsApp
                      </button>
                      <button type="button" className={styles.actionBtn}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call Now
                      </button>
                    </div>
                  </form>
                )}

                <div className={styles.reference}>
                  <span>Reference</span>
                  <span className={styles.refValue}>LX-08992</span>
                </div>
              </div>
            </aside>
          </div>

          {/* Similar Properties Section */}
          <div className={styles.similarSection}>
            <div className={styles.similarHeader}>
              <div>
                <span className={styles.similarSubtitle}>Curated Selection</span>
                <h2 className={styles.similarTitle}>Similar Signature Properties</h2>
              </div>
              <div className={styles.carouselNav}>
                <button className={styles.navBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button className={styles.navBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>

            <div className={styles.similarGrid}>
              {ELITE_RESIDENCES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
