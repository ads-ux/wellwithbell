import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Feel Strong, Energized, and Confident After 40 — Without Extreme Diets
                        </h1>
                        <p className="hero-subtitle">
                            Simple, research-informed wellness guidance for women navigating perimenopause and menopause.
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-primary" onClick={() => document.getElementById('optin').scrollIntoView({ behavior: 'smooth' })}>
                                Download the Free 7-Day Menopause Reset Guide
                            </button>
                            <Link to="/resources" className="btn btn-secondary">
                                Explore Wellness Guides
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        {/* The generated image will go here */}
                        <img src="/hero-lesley.jpg" alt="Lesley, founder of Well With Bell" className="hero-image" />
                    </div>
                </div>
            </section>

            {/* The Real Struggle Section */}
            <section className="struggle-section bg-beige">
                <div className="container struggle-container">
                    <div className="struggle-text">
                        <h2>The Body Changes You Are Feeling Are Real</h2>
                        <p>
                            Weight gain that feels stubborn. Low energy dragging you down. Poor sleep that leaves you exhausted. Hormonal changes that feel unpredictable. Feeling like your body just doesn't respond the way it used to.
                        </p>
                        <p className="struggle-reassurance">
                            <strong>You are not alone.</strong> These changes are common during perimenopause and menopause. More importantly, there are supportive, sustainable, and entirely natural solutions to help you feel like yourself again.
                        </p>
                    </div>
                    <div className="struggle-features">
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" />
                            <span>No extreme diets</span>
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" />
                            <span>No punishing workouts</span>
                        </div>
                        <div className="feature-item">
                            <CheckCircle2 className="feature-icon" />
                            <span>Practical, evidence-based support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Lesley Section */}
            <section className="about-preview-section">
                <div className="container about-container">
                    <div className="about-image-wrapper">
                        <img src="/lesley-2.jpg" alt="Lesley, founder of Well With Bell" className="about-image" />
                    </div>
                    <div className="about-content">
                        <h2>Hi, I'm Lesley.</h2>
                        <p>
                            Like many women in my 40s, I experienced unexpected body changes — weight gain, fatigue, skin changes, and shifting hormones.
                        </p>
                        <p>
                            Instead of accepting it as "just aging," I began learning how to support my body differently through nutrition, strength training, smarter supplementation, and hormone-aware wellness.
                        </p>
                        <p>
                            Now I share what works for women in this stage of life — no extremes, no crash diets, just practical and supportive guidance to help you thrive.
                        </p>
                        <Link to="/about" className="learn-more-link">
                            Read my full story <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The 4 Pillars Section */}
            <section className="pillars-section bg-beige">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>The 4 Pillars of Midlife Wellness</h2>
                        <p>Targeted support for the areas that matter most during perimenopause and menopause.</p>
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-color-block hormone"></div>
                            <h3>Hormone & Metabolism Support</h3>
                            <p>Understand the shifts in your body and discover natural ways to restore balance and harmony.</p>
                            <Link to="/hormone-support" className="btn btn-secondary btn-sm">Learn More</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-color-block weight"></div>
                            <h3>Sustainable Weight Loss After 40</h3>
                            <p>Learn why weight gain happens now, and how to build strong, lean muscle without starvation diets.</p>
                            <Link to="/menopause-weight-loss" className="btn btn-secondary btn-sm">Learn More</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-color-block energy"></div>
                            <h3>Energy & Sleep Optimization</h3>
                            <p>Combat fatigue, manage cortisol, and improve your sleep hygiene for better restorative rest.</p>
                            <Link to="/energy-sleep" className="btn btn-secondary btn-sm">Learn More</Link>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-color-block skin"></div>
                            <h3>Skin, Hair & Collagen Health</h3>
                            <p>Support your body's changing needs from the inside out with hydration and key nutrients.</p>
                            <Link to="/skin-beauty" className="btn btn-secondary btn-sm">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Guides Section */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Featured Wellness Guides</h2>
                        <p>Our most popular resources for women over 40.</p>
                    </div>

                    <div className="articles-grid">
                        <article className="article-card">
                            <div className="article-image-placeholder color-1"></div>
                            <div className="article-content">
                                <span className="article-category">Nutrition</span>
                                <h3>Best Protein Powder for Women Over 40</h3>
                                <Link to="/blog" className="read-more">Read Article <ArrowRight size={16} /></Link>
                            </div>
                        </article>

                        <article className="article-card">
                            <div className="article-image-placeholder color-2"></div>
                            <div className="article-content">
                                <span className="article-category">Beauty</span>
                                <h3>Does Collagen Help After Menopause?</h3>
                                <Link to="/blog" className="read-more">Read Article <ArrowRight size={16} /></Link>
                            </div>
                        </article>

                        <article className="article-card">
                            <div className="article-image-placeholder color-3"></div>
                            <div className="article-content">
                                <span className="article-category">Weight Loss</span>
                                <h3>How to Lose Belly Fat After 45</h3>
                                <Link to="/blog" className="read-more">Read Article <ArrowRight size={16} /></Link>
                            </div>
                        </article>

                        <article className="article-card">
                            <div className="article-image-placeholder color-4"></div>
                            <div className="article-content">
                                <span className="article-category">Hormones</span>
                                <h3>Top Supplements for Hormone Balance</h3>
                                <Link to="/blog" className="read-more">Read Article <ArrowRight size={16} /></Link>
                            </div>
                        </article>
                    </div>

                    <div className="text-center mt-xl">
                        <Link to="/blog" className="btn btn-secondary">View All Articles</Link>
                    </div>
                </div>
            </section>

            {/* Email Opt-in Section */}
            <section id="optin" className="email-optin-section">
                <div className="container">
                    <h2>Start Your 7-Day Menopause Reset</h2>
                    <p>
                        A simple step-by-step guide to support metabolism, energy, sleep, and hormone balance. Get it delivered straight to your inbox.
                    </p>
                    <form className="optin-form-inline">
                        <input type="email" placeholder="Enter your email address" required />
                        <button type="submit" className="btn">Get the Free Guide</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
