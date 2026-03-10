import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Moon, Sun, Zap, Info } from 'lucide-react';
import SEO from '../components/SEO';

export default function EnergyAndSleep() {
    return (
        <div className="page-container">
            <SEO
                title="Wired and Tired? Reclaim Deep Sleep After 40"
                description="Stop the 3 AM wake-up cycle. Learn how to balance cortisol and support your nervous system for deep, restorative sleep in perimenopause."
                canonical="/energy-sleep"
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Why do I wake up at 3 AM every night?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Waking up at 3 AM is often due to a cortisol spike triggered by a drop in blood sugar or declining progesterone levels during the menopause transition."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I improve my energy during perimenopause?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Boosting energy involves supporting mitochondrial health, maintaining stable blood sugar throughout the day, and ensuring quality REM sleep."
                            }
                        }
                    ]
                }}
            />
            <img
                src="/prod-30day-reset.png"
                alt="Lesley's Sleep and Energy Reset Bundle featuring Isagenix Renewal Spray"
                className="product-image"
            />
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Wake Up Refreshed</h1>
                    <p className="page-subtitle">
                        Move beyond "wired and tired." Learn how to soothe your nervous system,
                        balance your cortisol, and reclaim the deep, restorative sleep your body craves.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="content-block" style={{ marginBottom: '3rem' }}>
                        <h2>Why Fatigue Increases After 40</h2>
                        <p>
                            If you feel like you're running on empty despite getting "enough" hours in bed,
                            there's a physiological reason. The fluctuating hormones of perimenopause, specifically
                            dropping progesterone (our calming hormone), can leave our nervous systems feeling wired and tired.
                        </p>
                        <p>
                            Simultaneously, our cells become less efficient at producing energy (ATP) in the mitochondria,
                            and our thyroid hormones often become sluggish. Add to this the mental load of caring for aging
                            parents, growing children, and peak career demands, and it's a perfect storm for burnout.
                        </p>
                    </div>

                    <div className="info-card bg-sage-light" style={{ marginBottom: '3rem', padding: '2.5rem', borderRadius: '16px', background: 'rgba(163, 178, 161, 0.1)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
                            <Info size={24} color="var(--accent-sage-dark)" />
                            Why do I wake up at 3 AM?
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            <li><strong>Cortisol Spikes:</strong> Low blood sugar at night triggers a stress response.</li>
                            <li><strong>Progesterone Decline:</strong> The loss of this "calming" hormone disrupts deep sleep.</li>
                            <li><strong>Nervous System Hyper-arousal:</strong> Chronic stress keeps the body in a shallow sleep state.</li>
                        </ul>
                    </div>

                    <div className="content-block bg-beige" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>The Blood Sugar & Cortisol Connection</h3>
                        <p>
                            Many women experience an afternoon crash or wake up wide-eyed at 3:00 AM.
                            Often, this is a blood sugar and cortisol issue.
                        </p>
                        <p>
                            When we eat carbohydrate-heavy meals without sufficient protein or fiber, our blood sugar spikes and then crashes.
                            To bring blood sugar <em>back up</em> from that crash, the body releases cortisol and adrenaline.
                            If this crash happens in the middle of the night, you will wake up feeling alert, anxious, and perfectly awake.
                        </p>
                        <p style={{ marginTop: '1rem' }}><strong>How to fix it:</strong></p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>Eat 30g of protein within 60 minutes of waking up.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>Never eat carbohydrates "naked" (always pair with fat or protein).</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 size={20} color="var(--accent-sage)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>Avoid caffeine after 12:00 PM.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="content-block" style={{ marginBottom: '4rem' }}>
                        <h2>Sleep Hygiene Basics for Midlife</h2>
                        <p>
                            Good sleep doesn't start when your head hits the pillow; it starts the moment you wake up.
                            Getting morning sunlight in your eyes sets your circadian rhythm so you produce melatonin 12-14 hours later.
                        </p>
                        <p>
                            Keep your bedroom cool (especially important if you experience night sweats), completely dark,
                            and banish glowing screens at least an hour before bed. Consider a wind-down routine that tells
                            your nervous system it's safe to rest — like reading, light stretching, or sipping herbal tea.
                        </p>
                    </div>

                    <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '4rem 0' }} />

                    <div className="recommendations">
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Supportive Recommendations</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-cherry.png" alt="Renewal Sleep Support™" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>My Bedtime Essential</span>
                                <h3>Renewal Sleep Support™</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Finally quiet the 3 AM mind. This fast-acting oral spray uses gentle melatonin and calming
                                    botanicals to help you drift off naturally and stay asleep through the night, so you can
                                    wake up without that heavy, groggy feeling.
                                </p>
                                <div style={{ borderLeft: '3px solid var(--accent-sage)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                                        "This changed the game for those mid-night wake-ups. It's clean, effective, and works within minutes." — Lesley
                                    </p>
                                </div>
                                <a href="https://www.isagenix.com/share/4LDSJ1R" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Discover Restful Sleep</a>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-powder.png" alt="E+™ Energy Shot" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>For a Clean Midday Lift</span>
                                <h3>E+™ Energy Shot</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.6' }}>
                                    Beat the afternoon slump without the cortisol spike. This plant-based energy shot uses
                                    naturally sourced caffeine from green tea and yerba mate, paired with powerful adaptogens
                                    to provide sustained mental clarity and physical energy. No jitters, no crash.
                                </p>
                                <a href="https://www.isagenix.com/share/4LDTA4E" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block' }}>Boost Your Energy naturally</a>
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
