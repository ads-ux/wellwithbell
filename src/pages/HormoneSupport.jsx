import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function HormoneSupport() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Reclaim Your Vitality</h1>
                    <p className="page-subtitle">
                        Navigate perimenopause and menopause with grace and confidence. Discover the science-backed
                        foundations and gentle nutrients that help you feel like *yourself* again.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="content-block" style={{ marginBottom: '3rem' }}>
                        <h2>Does This Feel Like You?</h2>
                        <p>
                            Perimenopause isn't just about "getting older." It's a significant physiological shift
                            that impacts every system in your body. If you've felt a sudden disconnect between
                            your efforts and your results, you're not alone.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Unpredictable, irregular cycles</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Disruptive hot flashes & night sweats</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Waking up at 3 AM wired and tired</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Foggy thinking and sudden mood shifts</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Stubborn weight gain around the middle</span></li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>A persistent "running on empty" feeling</span></li>
                        </ul>
                    </div>

                    <div className="content-block bg-beige" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Lifestyle Foundations for Balance</h3>
                        <p>
                            While we can't stop our hormones from changing, we can provide our bodies with an environment
                            that makes the transition smoother. The foundational pillars of hormone support are:
                        </p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>1. Blood Sugar Regulation</strong>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                                Hormonal shifts make us more insulin resistant. Focus on savory, protein-rich breakfasts and pairing carbohydrates with protein and fiber to avoid blood sugar spikes.
                            </p>

                            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>2. Gut Health</strong>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                                The estrobolome is the collection of microbes in your gut capable of metabolizing estrogens. A healthy gut is essential for clearing excess hormones and reducing inflammation.
                            </p>

                            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>3. Stress Resilience (Cortisol Management)</strong>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                As ovarian hormone production winds down, our adrenal glands take over. If your adrenals are already exhausted from chronic stress, perimenopause symptoms will be significantly worse.
                            </p>
                        </div>
                    </div>

                    <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '4rem 0' }} />

                    <div className="recommendations">
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Supportive Recommendations</h2>
                        <p className="text-center" style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>*Always consult your healthcare provider before starting new supplements.</p>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-harmonia.png" alt="Harmonia™ Menopause Support" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lesley's Daily Essential</span>
                                <h3>Harmonia™ Menopause Support</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Imagine waking up feeling cool, rested, and in control. This hormone-free solution
                                    is my go-to for multi-symptom relief. It gently addresses hot flashes and night sweats
                                    while supporting the restful sleep and emotional balance you deserve.
                                </p>
                                <div style={{ borderLeft: '3px solid var(--accent-sage)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                                        "I noticed a significant shift in my internal thermostat within the first two weeks. It's the most effective natural support I've found." — Lesley
                                    </p>
                                </div>
                                <a href="https://www.isagenix.com/share/4LDSBNY" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Explore the Benefits</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="High-Quality Omega-3 Fish Oil" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>High-Quality Omega-3 Fish Oil</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    Essential for reducing inflammation, supporting brain health (clearing up brain fog), and cardiovascular health. I look for high EPA/DHA ratios.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>Coming Soon</button>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="Magnesium Glycinate" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Magnesium Glycinate</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    The relaxation mineral. It supports over 300 enzymatic processes in the body, helps regulate cortisol, and is crucial for deep, restorative sleep.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>Coming Soon</button>
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
