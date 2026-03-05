import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Menopause Weight Loss', 'Hormone Balance', 'Energy', 'Sleep', 'Collagen', 'Supplements'];

    const posts = blogPosts;

    const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

    return (
        <div className="page-container">
            <header className="page-header bg-beige">
                <div className="container">
                    <h1 className="page-title">Wellness Articles & Guides</h1>
                    <p className="page-subtitle">
                        Research-informed advice for navigating perimenopause, menopause, and healthy aging.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    border: `1px solid ${filter === cat ? 'var(--accent-sage)' : 'var(--border-color)'}`,
                                    background: filter === cat ? 'var(--accent-sage)' : 'var(--white)',
                                    color: filter === cat ? 'var(--white)' : 'var(--text-charcoal)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="articles-grid">
                        {filteredPosts.map((post, index) => (
                            <article key={index} className="article-card">
                                <img src={post.image} alt={post.title} className="article-image-placeholder" style={{ objectFit: 'cover' }} />
                                <div className="article-content">
                                    <span className="article-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.slug}`} className="read-more">Read Article <ArrowRight size={16} /></Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center" style={{ padding: '3rem 0', color: 'var(--text-light)' }}>
                            No articles found in this category.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
