import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function HormoneSupport() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Hormone & Metabolism Support</h1>
                    <p className="page-subtitle">
                        Navigate perimenopause and menopause with knowledge. Discover the lifestyle
                        foundations and nutrients that support hormonal balance naturally.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="content-block" style={{ marginBottom: '3rem' }}>
                        <h2>Understanding the Shifts</h2>
                        <p>
                            Perimenopause can begin in our late 30s or early 40s. During this time, estrogen and
                            progesterone levels begin to fluctuate unpredictably before eventually declining.
                            These shifts affect every entire system in your body because we have hormone receptors
                            everywhere — from our brains to our bones.
                        </p>
                        <p>
                            <strong>Common signs of perimenopause include:</strong>
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Irregular cycles</span></li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Hot flashes & night sweats</span></li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Sleep disturbances</span></li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Brain fog or mood swings</span></li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Weight gain, especially around the middle</span></li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span>Fatigue and low energy</span></li>
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
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Supportive Nutrients</h2>
                        <p className="text-center" style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>*Always consult your healthcare provider before starting new supplements.</p>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="High-Quality Omega-3 Fish Oil" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>High-Quality Omega-3 Fish Oil</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    Essential for reducing inflammation, supporting brain health (clearing up brain fog), and cardiovascular health. I look for high EPA/DHA ratios.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View Product</button>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="Magnesium Glycinate" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Magnesium Glycinate</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    The relaxation mineral. It supports over 300 enzymatic processes in the body, helps regulate cortisol, and is crucial for deep, restorative sleep.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View Product</button>
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
