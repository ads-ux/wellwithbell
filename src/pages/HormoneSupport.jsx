import { Link } from 'react-router-dom';
import { CheckCircle2, Info, Sparkles, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function HormoneSupport() {
    return (
        <div className="page-container">
            <SEO
                title="Hormone & Metabolism Support for Midlife"
                description="Reclaim your hormonal balance during perimenopause and menopause. Natural, evidence-based strategies for better moods, metabolism, and vitality."
                canonical="/hormone-support"
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How do hormones shift during perimenopause?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "During perimenopause, progesterone levels often drop while estrogen becomes more unpredictable. This can lead to symptoms like anxiety, irregular cycles, and metabolic changes."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the best way to support metabolism over 40?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Focusing on hormone-balancing nutrients, adequate protein intake, and resistance training are key to maintaining a healthy metabolism after 40."
                            }
                        }
                    ]
                }}
            />
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

                        <div className="info-card bg-beige" style={{ margin: '2rem 0', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                <Info size={24} color="var(--accent-sage-dark)" />
                                Quick Definition: Hormonal Synergy
                            </h3>
                            <p style={{ margin: 0, lineHeight: '1.7', fontSize: '1.05rem' }}>
                                <strong>Hormonal Synergy</strong> in midlife occurs when nutrition, movement, and targeted supplementation work together to stabilize estrogen and progesterone fluctuations. This reduces systemic inflammation and supports a healthy metabolism.
                            </p>
                        </div>

                        <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Unpredictable, irregular cycles</span></li>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Disruptive hot flashes & night sweats</span></li>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Waking up at 3 AM wired and tired</span></li>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Foggy thinking and sudden mood shifts</span></li>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>Stubborn weight gain around the middle</span></li>
                                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--accent-sage)" /> <span style={{ fontSize: '0.95rem' }}>A persistent "running on empty" feeling</span></li>
                            </ul>
                        </div>
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
                            <img src="/prod-harmonia.png" alt="Harmonia Menopause Support supplement for hormone balance and symptom relief" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
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

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="Triotic™ Probiotics" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>For Gut & Hormone Harmony</span>
                                <h3>Triotic™ Probiotics</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    A healthy gut is essential for clearing excess hormones. Triotic™ features a specialized blend of three clinically studied probiotic strains to support gentle digestion, enhance immune function, and nurture the microbiome that regulates your estrogen.
                                </p>
                                <a href="https://www.isagenix.com/share/4LDS7KQ" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Support Your Gut</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/guide-hormones.png" alt="IsaFlush® Magnesium & Digestion" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Relaxation Mineral</span>
                                <h3>IsaFlush®</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Magnesium is the unsung hero of midlife. IsaFlush combines soothing magnesium with gentle cleansing herbs to support digestive regularity, calm the nervous system, and help regulate cortisol—without harsh laxatives.
                                </p>
                                <a href="https://www.isagenix.com/share/G296ND" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Calm Your System</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-powder.png" alt="Happy Mix Pack" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>For Mood & Stress Resilience</span>
                                <h3>Happy Mix Pack</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    A daily dose of joy. This targeted blend of adaptogens and nootropics helps calm the mind, elevate mood, and improve stress resilience—crucial support when hormonal fluctuations leave you feeling overwhelmed or foggy.
                                </p>
                                <a href="https://www.isagenix.com/share/4LDS7KP" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Elevate Your Mood</a>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-sage-dark)', textDecoration: 'none', fontWeight: '500' }}>
                            <ArrowLeft size={18} /> Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
