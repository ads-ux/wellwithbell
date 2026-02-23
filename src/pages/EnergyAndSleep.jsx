import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function EnergyAndSleep() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Energy & Sleep Optimization</h1>
                    <p className="page-subtitle">
                        Combating midlife fatigue requires more than just caffeine. Learn how to soothe
                        your nervous system, manage cortisol, and finally get a good night's sleep.
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
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Sleep & Calm Support</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-supplements.png" alt="Magnesium L-Threonate" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Magnesium L-Threonate</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    Unlike other forms, this type of magnesium easily crosses the blood-brain barrier.
                                    It's fantastic for calming an overactive mind before bed and supporting cognitive function.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View Product</button>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <img src="/prod-cherry.png" alt="Tart Cherry Extract" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                            <div>
                                <h3>Tart Cherry Extract</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    Tart cherries naturally contain melatonin and have strong anti-inflammatory properties,
                                    making them a great natural sleep aid instead of heavy over-the-counter sleep medications.
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
