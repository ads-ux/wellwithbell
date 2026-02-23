import { CheckCircle2 } from 'lucide-react';

export default function Resources() {
    const categories = [
        {
            title: "Protein",
            description: "Supporting muscle mass is crucial after 40.",
            color: "#E2D9CD",
            items: [
                { name: "Clean Whey Isolate", desc: "No artificial sweeteners, mixes easily." },
                { name: "Plant-Based Protein Blend", desc: "Pea and pumpkin seed blend for those sensitive to dairy." }
            ]
        },
        {
            title: "Collagen",
            description: "Support your skin elasticity, hair thickness, and joint health.",
            color: "#D3DCD0",
            items: [
                { name: "Marine Collagen Peptides", desc: "Highly bioavailable type I collagen." },
                { name: "Bovine Collagen Support", desc: "Great for overall skin and joint health." }
            ]
        },
        {
            title: "Daily Multivitamin",
            description: "Fill the nutritional gaps in your daily diet.",
            color: "#EBDDCB",
            items: [
                { name: "Whole Food Women's 40+ Multi", desc: "Includes bioavailable B12 and folate." }
            ]
        },
        {
            title: "Hormone Support",
            description: "Targeted nutrients for perimenopause and beyond.",
            color: "#DEE4DF",
            items: [
                { name: "High-EPA Omega 3 Fish Oil", desc: "Essential for brain health and reducing inflammation." },
                { name: "Maca Root Extract", desc: "Adaptogen that supports energy and libido." }
            ]
        },
        {
            title: "Sleep Support",
            description: "Calm your nervous system for deep, restorative rest.",
            color: "#E2D9CD",
            items: [
                { name: "Magnesium Glycinate", desc: "The ultimate relaxation mineral." },
                { name: "Tart Cherry Extract", desc: "Natural source of melatonin and antioxidants." }
            ]
        },
        {
            title: "Skincare",
            description: "Topical support for aging skin.",
            color: "#D4D9D5",
            items: [
                { name: "Hyaluronic Acid Serum", desc: "Draws moisture into the skin for a plumping effect." },
                { name: "Gentle Retinol Alternative (Bakuchiol)", desc: "Supports cell turnover without the harsh peeling." }
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                        {categories.map((cat, index) => (
                            <div key={index} style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '80px', backgroundColor: cat.color }}></div>
                                <div style={{ padding: '1.5rem', flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{cat.description}</p>

                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {cat.items.map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1rem' }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                                    <CheckCircle2 size={18} color="var(--accent-sage)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                                    <div>
                                                        <strong style={{ display: 'block', fontSize: '1rem' }}>{item.name}</strong>
                                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: '0.25rem 0' }}>{item.desc}</p>
                                                        <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', marginTop: '0.25rem' }}>View Details</button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
