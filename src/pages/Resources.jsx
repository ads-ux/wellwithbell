import { CheckCircle2 } from 'lucide-react';

export default function Resources() {
    const authorityResources = [
        {
            category: "Expert Voices & Education",
            items: [
                {
                    name: "The Menopause Society",
                    url: "https://www.menopause.org/",
                    desc: "The gold standard for evidence-based information on menopause health and hormone therapy."
                },
                {
                    name: "Mary Claire Haver, MD",
                    url: "https://maryclairehaver.com/",
                    desc: "Leading OB/GYN and advocate for science-backed menopause care and anti-inflammatory nutrition."
                },
                {
                    name: "Dr. Stacy Sims",
                    url: "https://www.drstacysims.com/",
                    desc: "Expert on female physiology. Her mantra 'Women are not small men' defines her approach to training and fueling."
                }
            ]
        },
        {
            category: "Movement & Mindset",
            items: [
                {
                    name: "Flipping 50",
                    url: "https://www.flippingfifty.com/",
                    desc: "Debra Atkinson's specialized strength and fitness protocols designed specifically for women over 50."
                },
                {
                    name: "Insight Timer",
                    url: "https://insighttimer.com/",
                    desc: "The world's largest library of free meditations—perfect for managing cortisol and improving sleep."
                },
                {
                    name: "Yoga With Adriene",
                    url: "https://www.youtube.com/user/yogawithadriene",
                    desc: "Accessible, high-quality yoga sessions that support nervous system regulation and mobility."
                }
            ]
        }
    ];

    const curatedProducts = [
        {
            title: "Hormone & Menopause Relief",
            description: "Targeted support for hot flashes, night sweats, and internal balance.",
            items: [
                { name: "Harmonia™", desc: "My daily essential for multi-symptom menopause relief.", link: "https://www.isagenix.com/share/4LDSBNY" },
                { name: "Renewal Sleep Support™", desc: "Fast-acting oral spray to quiet the 3 AM mind.", link: "https://www.isagenix.com/share/4LDSJ1R" }
            ]
        },
        {
            title: "Metabolic & Beauty Support",
            description: "Build lean muscle and support your glow from the inside out.",
            items: [
                { name: "IsaLean® Performance Protein", desc: "36g of bioavailable protein to protect muscle mass.", link: "https://www.isagenix.com/share/4LDSK7E" },
                { name: "Collagen Elixir™", desc: "Premium marine collagen for skin, hair, and nails.", link: "https://www.isagenix.com/share/WMFB4" }
            ]
        }
    ];

    return (
        <div className="page-container">
            <header className="page-header" style={{ paddingBottom: '2rem' }}>
                <div className="container">
                    <h1 className="page-title">My Recommended Products for Women 40+</h1>
                    <p className="page-subtitle" style={{ maxWidth: '800px' }}>
                        I only recommend products I personally use and trust. These supplements and tools
                        are designed to support your body through the changes of perimenopause and menopause.
                    </p>
                    <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'inline-block', maxWidth: '700px' }}>
                        <p className="affiliate-disclosure" style={{ margin: 0, fontSize: '0.85rem' }}>
                            <strong>Affiliate Disclosure:</strong> Some of the links below are affiliate links.
                            This means if you click through and make a purchase, I may earn a small commission
                            at no additional cost to you. Thank you for supporting Well With Bell!
                        </p>
                    </div>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Trusted Voices & Tools</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
                        {authorityResources.map((section, index) => (
                            <div key={index}>
                                <h3 style={{ color: 'var(--accent-sage-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>{section.category}</h3>
                                {section.items.map((item, idx) => (
                                    <div key={idx} style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h4>
                                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: '1.6' }}>{item.desc}</p>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-terracotta)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>Visit Website &rarr;</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <h2 style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>My Curated Toolkit</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '2rem' }}>
                        {curatedProducts.map((cat, index) => (
                            <div key={index} style={{ background: 'var(--bg-beige)', padding: '2.5rem', borderRadius: '16px' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '2rem', opacity: 0.8 }}>{cat.description}</p>

                                <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    {cat.items.map((item, idx) => (
                                        <div key={idx} style={{ marginBottom: idx === cat.items.length - 1 ? 0 : '1.5rem', paddingBottom: idx === cat.items.length - 1 ? 0 : '1.5rem', borderBottom: idx === cat.items.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                                <div>
                                                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.name}</strong>
                                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>{item.desc}</p>
                                                </div>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ whiteSpace: 'nowrap' }}>Shop Now</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
