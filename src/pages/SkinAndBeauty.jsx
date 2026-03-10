import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, Heart, Info, ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function SkinAndBeauty() {
    return (
        <div className="page-container">
            <SEO
                title="Radiant Skin & Beauty After 40 | From Within"
                description="Stop the decline and start the glow. Discover the power of marine collagen and nutrient-dense strategies for radiant skin and hair during menopause."
                canonical="/skin-beauty"
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Does collagen really help after 40?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, collagen production declines significantly during perimenopause and menopause. Supplementing with high-quality marine collagen can support skin elasticity and reduce the appearance of fine lines."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I maintain glowing skin during menopause?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Maintaining a glow involves internal hydration, high-quality amino acids for collagen support, and protecting your skin's moisture barrier from the inside out."
                            }
                        }
                    ]
                }}
            />
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Glow from Within</h1>
                    <p className="page-subtitle">
                        Nourish your skin, hair, and nails with the building blocks they need.
                        Focus on internal radiance and structural strength for a vibrant, timeless glow.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="content-block" style={{ marginBottom: '3rem' }}>
                        <h2>The Collagen Decline After 40</h2>
                        <p>
                            Collagen is the most abundant protein in our bodies, acting as the scaffolding for our skin,
                            hair, nails, and joints. We naturally lose about 1% of our collagen production every year starting in our 20s.
                        </p>
                        <p>
                            However, in the first five years of menopause, women lose a staggering <strong>30% of their skin's collagen</strong>.
                            This rapid decline, triggered by dropping estrogen levels, is why you might suddenly notice
                            increased skin thinning, loss of elasticity, and more prominent wrinkles.
                        </p>
                    </div>

                    <div className="info-card bg-beige" style={{ margin: '2rem 0', padding: '2.5rem', borderRadius: '16px' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                            <Info size={24} color="var(--accent-sage-dark)" />
                            Quick Definition: Cellular Radiance
                        </h3>
                        <p style={{ margin: 0, lineHeight: '1.8', fontSize: '1.05rem' }}>
                            <strong>Cellular Radiance</strong> is the byproduct of efficient skin cell turnover and robust collagen synthesis. As estrogen levels decline in midlife, the skin's ability to retain moisture and structural integrity decreases. Bioavailable marine collagen and antioxidant-rich "beauty from within" strategies are essential for maintaining this vibrant, healthy glow.
                        </p>
                    </div>

                    <div className="content-block bg-beige" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Internal Nutrition for External Health</h3>
                        <p>
                            While expensive creams can hydrate the top layer of skin, they cannot restore collagen deep in the dermis.
                            The most effective way to support your skin and hair is from the inside out through nutrition and hydration.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={24} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <strong>Hydration is Non-Negotiable</strong>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-charcoal)', marginTop: '0.25rem' }}>
                                        As we age, our skin's ability to retain moisture drops. Drink at least half your body weight in ounces of water daily, and consider adding electrolytes for better cellular hydration.
                                    </p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={24} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <strong>Vitamin C for Collagen Synthesis</strong>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-charcoal)', marginTop: '0.25rem' }}>
                                        Your body cannot produce collagen without adequate Vitamin C. Ensure your diet is rich in citrus, bell peppers, berries, and leafy greens.
                                    </p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={24} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <strong>Addressing Hair Thinning</strong>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-charcoal)', marginTop: '0.25rem' }}>
                                        Hair thinning is often tied to thyroid function, stress, or dropping iron/ferritin levels. Prioritizing protein and managing stress are foundational for maintaining hair volume.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '4rem 0' }} />

                    <div className="recommendations">
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Beauty From Within Recommendation</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img
                                src="/real-collagen.jpg"
                                alt="Marine Collagen Elixir supplement for midlife skin elasticity and hydration"
                                className="product-image"
                                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                            />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>My Daily Glow Essential</span>
                                <h3>Collagen Elixir™</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Stop the decline and start the glow. This premium elixr delivers a potent dose
                                    of marine collagen peptides that work to illuminate your skin, strengthen hair
                                    and nails, and visibly soften fine lines from the inside out.
                                </p>
                                <div style={{ borderLeft: '3px solid var(--accent-sage)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                                        "I've tried many collagens, but this is the only one where I saw a visible difference in my skin's hydration and 'bounce'." — Lesley
                                    </p>
                                </div>
                                <a href="https://www.isagenix.com/share/WMFB4" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Reveal Your Glow</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/real-hair.jpg" alt="Hair Revival" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>For Thicker, Stronger Hair</span>
                                <h3>Hair Revival</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Nourish your hair from the root. This clean, vegan supplement stimulates
                                    growth and supports visibly thicker, more resilient hair by providing
                                    the specific vitamins and minerals your scalp needs as you age.
                                </p>
                                <a href="https://www.isagenix.com/share/YRCE78" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Restore Your Radiance</a>
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
