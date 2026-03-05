import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function MenopauseWeightLoss() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Unlock Metabolic Vitality</h1>
                    <p className="page-subtitle">
                        Shift from "eating less" to "nourishing more." Learn how to build lean muscle,
                        optimize your protein, and work *with* your hormones to feel strong and resilient.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="content-block" style={{ marginBottom: '3rem' }}>
                        <h2>Why Weight Gain Happens After 40</h2>
                        <p>
                            If you feel like what used to work no longer does, you aren't imagining things.
                            During perimenopause and menopause, declining estrogen levels can shift where our
                            bodies store fat — specifically leading to more visceral fat around the abdomen.
                        </p>
                        <p>
                            Additionally, we naturally begin to lose lean muscle mass as we age. Since muscle
                            is metabolically active tissue, losing it means our resting metabolic rate slows down.
                            The combination of hormonal shifts, muscle loss, and often increased stress or sleep
                            disturbances makes weight management completely different in our 40s and 50s.
                        </p>
                    </div>

                    <div className="content-block bg-beige" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>The Solution Isn't Eating Less</h3>
                        <p>
                            The most common mistake women make is drastically cutting calories or increasing high-intensity cardio.
                            This often backfires by increasing cortisol (stress hormone) and further breaking down precious muscle tissue.
                        </p>
                        <p><strong>Instead, the focus should shift to:</strong></p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" />
                                <span>Prioritizing protein to protect and build muscle</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" />
                                <span>Strength training 2-3 times per week</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" />
                                <span>Managing stress and optimizing sleep</span>
                            </li>
                        </ul>
                    </div>

                    <div className="content-block" style={{ marginBottom: '4rem' }}>
                        <h2>Muscle is Your Metabolic Currency</h2>
                        <p>
                            Lifting weights isn't just about looking toned; it's about building metabolic currency.
                            Strength training signals to your body to keep muscle tissue, which in turn keeps your
                            metabolism firing. It also improves insulin sensitivity, which is crucial as our hormones shift.
                        </p>
                    </div>

                    <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '4rem 0' }} />

                    <div className="recommendations">
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Supportive Recommendations</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-30day-reset.png" alt="30-Day Reset" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Metabolic Foundation</span>
                                <h3>The 30-Day Reset</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    My secret to breaking through plateaus. This science-backed, guided system help you
                                    re-balance your nutrition, fight stubborn cravings, and jumpstart your
                                    metabolism by focusing on quality and timing.
                                </p>
                                <div style={{ borderLeft: '3px solid var(--accent-sage)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                                        "This was the catalyst for my own transformation. It takes the guesswork out of healthy eating and provides instant momentum." — Lesley
                                    </p>
                                </div>
                                <a href="https://www.isagenix.com/share/4LDTA4D" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Start Your Reset</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-isalean-protein.png" alt="IsaLean® Performance Protein" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>My Post-Workout Pick</span>
                                <h3>IsaLean® Performance Protein</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Protect your muscle mass. With 36 grams of high-quality protein, this shake is
                                    designed to help you build and maintain the lean muscle that is crucial for
                                    metabolic health as we aging.
                                </p>
                                <a href="https://www.isagenix.com/share/4LDSK7E" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Build Your Strength</a>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link to="/" className="btn btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                            <ArrowLeft size={18} /> Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
