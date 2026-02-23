import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="page-container">
            <header className="page-header bg-beige">
                <div className="container">
                    <h1 className="page-title">About Well With Bell</h1>
                    <p className="page-subtitle">
                        My journey to finding balance, strength, and joy after 40.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1rem' }}>
                            <img
                                src="/lesley-2.jpg"
                                alt="Lesley in a garden setting"
                                style={{ borderRadius: '12px', width: '100%', aspectRatio: '1/1', objectFit: 'cover', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                            />
                            <img
                                src="/lesley-5.jpg"
                                alt="Lesley enjoying the outdoors"
                                style={{ borderRadius: '12px', width: '100%', aspectRatio: '1/1', objectFit: 'cover', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                            />
                        </div>

                        <div className="content-block">
                            <h2>Hi, I'm Lesley.</h2>
                            <p>
                                A few years ago, my body completely changed on me. Despite eating the same way and maintaining the same exercise routines I had in my 30s, the scale started creeping up. My energy plummeted by 3 PM every day, my sleep became fragmented, and I felt a constant, low-grade anxiousness that wasn't like me at all.
                            </p>
                            <p>
                                When I brought these concerns up at my annual checkup, I was told, "Well, you're just getting older."
                            </p>

                            <div style={{ float: 'right', width: '280px', margin: '1rem 0 1rem 2rem' }}>
                                <img
                                    src="/lesley-1.jpg"
                                    alt="Lesley at an event"
                                    style={{ borderRadius: '12px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                                />
                            </div>

                            <p>
                                I refused to accept that feeling exhausted and uncomfortable in my own skin was just my new normal. I started diving into the research around perimenopause, female hormones, and longevity.
                            </p>

                            <h2 style={{ marginTop: '3rem' }}>The Shift That Changed Everything</h2>
                            <p>
                                I learned that my declining estrogen and fluctuating progesterone required a completely different approach to wellness. Instead of doing hours of cardio and slashing calories (which was only raising my cortisol and destroying my muscle mass), I started lifting weights, prioritizing protein, and supporting my gut health and nervous system.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '3rem 0' }}>
                                <img
                                    src="/lesley-4.jpg"
                                    alt="Lesley skiing"
                                    style={{ borderRadius: '12px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                                />
                                <img
                                    src="/lesley-3.jpg"
                                    alt="Lesley at a formal event"
                                    style={{ borderRadius: '12px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                                />
                            </div>

                            <p>
                                Within a few months, my energy returned, I slept through the night, the stubborn midsection weight began to shift, and I felt strong and resilient again.
                            </p>

                            <div style={{ background: 'var(--bg-beige)', padding: '2rem', borderRadius: '12px', margin: '3rem 0' }}>
                                <h3 style={{ marginBottom: '1rem', fontStyle: 'italic', color: 'var(--accent-sage-dark)' }}>My Mission</h3>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                                    I created Well With Bell to share the practical, science-backed protocols that actually work for women navigating midlife. There's no hype here, no impossible strict diets, and no "anti-aging" pressure — just honest support for feeling incredibly healthy and confident in your 40s, 50s, and beyond!
                                </p>
                            </div>

                            <h2>What You'll Find Here</h2>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '3rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Evidence-based articles</strong> breaking down the 'why' behind menopause symptoms.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Practical guides</strong> covering protein, strength training, and hormone health.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Curated product recommendations</strong> for supplements and gear that I actually use and love.</li>
                            </ul>

                            <div style={{ textAlign: 'center' }}>
                                <Link to="/resources" className="btn btn-primary">See My Favorite Wellness Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
