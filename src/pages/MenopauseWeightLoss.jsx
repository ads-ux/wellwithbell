import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function MenopauseWeightLoss() {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Sustainable Weight Loss After 40</h1>
                    <p className="page-subtitle">
                        Understand why your body is changing and discover supportive, non-restrictive
                        ways to build strength, support your metabolism, and feel confident again.
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
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Supportive Products I Recommend</h2>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <div style={{ width: '150px', height: '150px', backgroundColor: '#E2D9CD', borderRadius: '8px', flexShrink: 0 }}></div>
                            <div>
                                <h3>Clean Whey Protein Isolate</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    A high-quality protein powder is the easiest way to hit your daily protein goals.
                                    This brand uses clean ingredients, no artificial sweeteners, and mixes smoothly.
                                </p>
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View Product</button>
                            </div>
                        </div>

                        <div className="product-card" style={{ display: 'flex', gap: '2rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                            <div style={{ width: '150px', height: '150px', backgroundColor: '#D3DCD0', borderRadius: '8px', flexShrink: 0 }}></div>
                            <div>
                                <h3>Adjustable Dumbbell Set</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                                    Perfect for home workouts. These space-saving dumbbells allow you to gradually increase weight as you get stronger, which is the key to progressive overload and building muscle.
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
