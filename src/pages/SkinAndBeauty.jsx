import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function SkinAndBeauty() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Skin, Hair & Collagen Health</h1>
                    <p className="page-subtitle">
                        True beauty in midlife is an inside job. Learn how to support your body's changing
                        needs for glowing skin, strong hair, and healthy joints.
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
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Beauty From Within Recommendations</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-powder.png" alt="Hydrolyzed Collagen Peptides" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Hydrolyzed Collagen Peptides</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    A flavorless, easily dissolving powder that delivers the specific amino acids your body needs to rebuild its own collagen. Look for types I and III for skin and hair.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View Product</button>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="Hydrating Facial Serum" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Hydrating Facial Serum with Hyaluronic Acid</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    While I focus on internal nutrition, topical hyaluronic acid draws water into the skin's surface, providing an immediate plumping effect for fine lines.
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
