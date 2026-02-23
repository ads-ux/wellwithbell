import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Thanks for your message! I will get back to you soon.');
        e.target.reset();
    };

    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Me</h1>
                    <p className="page-subtitle">
                        Have a question about a guide, product, or just want to say hello? I'd love to hear from you.
                    </p>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem' }}>
                        {status && (
                            <div style={{ padding: '1rem', background: 'var(--bg-beige)', color: 'var(--accent-sage-dark)', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '500' }}>
                                {status}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-input" required placeholder="Your name" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-input" required placeholder="Your email address" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <select id="subject" className="form-input" required style={{ appearance: 'none' }}>
                                    <option value="">Select a topic...</option>
                                    <option value="question">Question about an article</option>
                                    <option value="product">Product recommendation inquiry</option>
                                    <option value="partnership">Brand partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea id="message" className="form-textarea" required placeholder="How can I help you?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
                        </form>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-light)' }}>
                        <p>For urgent inquiries, email directly at: hello@wellwithbell.example.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
