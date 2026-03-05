import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="page-container">
                <div className="container text-center" style={{ padding: '5rem 0' }}>
                    <h2>Article Not Found</h2>
                    <p style={{ marginBottom: '2rem' }}>Sorry, the article you are looking for does not exist.</p>
                    <Link to="/blog" className="btn btn-secondary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <header className="page-header bg-beige" style={{ padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Link to="/blog" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-sage-dark)', marginBottom: '2rem', textDecoration: 'none', fontWeight: '500' }}>
                        <ArrowLeft size={18} /> Back to Blog
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            <Tag size={14} /> {post.category}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>
                    <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '0' }}>{post.title}</h1>
                </div>
            </header>

            <article className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '16px', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                    />

                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: 'var(--text-charcoal)'
                        }}
                    ></div>

                    <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Enjoyed this article?</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Share it with a friend who might find it helpful!</p>
                        <Link to="/blog" className="btn btn-secondary">Explore More Articles</Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
