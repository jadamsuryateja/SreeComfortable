import { useParams, Navigate } from 'react-router-dom';
import { works } from '../data/works';
import { TestimonialSlider } from '@/components/ui/testimonial-slider';
import { motion } from 'framer-motion';
import { Star, User, Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const work = works.find(w => w.id === Number(id));

    if (!work) {
        return <Navigate to="/works" replace />;
    }

    // Combine main image and gallery images, ensuring uniqueness
    const rawImages = work.images ? [work.image, ...work.images] : [work.image];
    const displayImages = Array.from(new Set(rawImages));

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Back Button */}
                <Link
                    to={`/works/${work.category.toLowerCase()}`}
                    className="inline-flex items-center text-stone-400 hover:text-amber-500 transition-colors mb-4 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Works
                </Link>

                {/* Header */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {work.workName}
                    </h1>
                    <span className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-500 text-sm font-medium bg-amber-500/10">
                        {work.category}
                    </span>
                </div>

                {/* Image Slider */}
                <div className="w-full">
                    <TestimonialSlider
                        reviews={displayImages.map((img, idx) => ({
                            id: idx,
                            name: work.workName,
                            affiliation: work.category,
                            quote: work.description,
                            imageSrc: img,
                            thumbnailSrc: img
                        }))}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl"
                    />
                </div>

                {/* Reviews Layout */}
                <div className="max-w-4xl mx-auto">
                    {/* Reviews Column */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-4">
                            Client Reviews
                        </h2>
                        <div className="space-y-4">
                            {work.reviews.length > 0 ? (
                                work.reviews.map((review, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
                                    >
                                        <Quote className="absolute top-4 right-4 w-6 h-6 text-amber-500/20" />
                                        <div className="flex items-center gap-1 text-amber-500 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'opacity-30'}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-stone-300 italic mb-4 text-sm leading-relaxed">
                                            "{review.comment}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <span className="text-white font-medium text-sm">
                                                {review.user}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-stone-400 text-center italic">
                                    No reviews yet for this project.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
