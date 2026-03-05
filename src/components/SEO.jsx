import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    canonical,
    type = 'website',
    schemaData
}) {
    const siteTitle = "Well With Bell | Wellness for Women 40+";
    const fullTitle = title ? `${title} | Well With Bell` : siteTitle;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || "Holistic wellness, fitness, and nutrition guidance for women navigating perimenopause and menopause."} />

            {/* Canonical Link */}
            {canonical && <link rel="canonical" href={`https://wellwithbell.com${canonical}`} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical ? `https://wellwithbell.com${canonical}` : "https://wellwithbell.com"} />
            <meta property="og:site_name" content="Well With Bell" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data (JSON-LD) */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}

            {/* Default Organization Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Well With Bell",
                    "url": "https://wellwithbell.com",
                    "logo": "https://wellwithbell.com/vite.svg",
                    "description": "Empowering women 40+ to navigate perimenopause and menopause with grace and confidence.",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "email": "lesley@wellwithbell.com"
                    }
                })}
            </script>
        </Helmet>
    );
}
