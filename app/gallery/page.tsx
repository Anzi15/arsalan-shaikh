"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid, Sparkles } from "lucide-react";

// Sample gallery images - Replace these with your actual images
const galleryImages = [
    {
        id: 1,
        src: "/gallery/1.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 2,
        src: "/gallery/2.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 3,
        src: "/gallery/3.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 4,
        src: "/gallery/4.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 5,
        src: "/gallery/5.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 6,
        src: "/gallery/6.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 7,
        src: "/gallery/7.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 8,
        src: "/gallery/8.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 9,
        src: "/gallery/9.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 10,
        src: "/gallery/10.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 11,
        src: "/gallery/11.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 12,
        src: "/gallery/12.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 13,
        src: "/gallery/13.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 14,
        src: "/gallery/14.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 15,
        src: "/gallery/15.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 16,
        src: "/gallery/16.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 17,
        src: "/gallery/17.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 18,
        src: "/gallery/18.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 19,
        src: "/gallery/19.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 20,
        src: "/gallery/20.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 21,
        src: "/gallery/21.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    },
    {
        id: 22,
        src: "/gallery/22.jpeg",
        title: "Community Engagement",
        category: "Community",
        description: "A political leader engaging with community members at a public gathering, promoting unity, dialogue, and local development."
    }

];

const categories = ["All", "Community", "Events", "Media", "Projects"];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredImages, setFilteredImages] = useState(galleryImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredImages(galleryImages);
        } else {
            setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
        }
    }, [selectedCategory]);

    const openLightbox = (image: typeof galleryImages[0], index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const navigateImage = (direction: "prev" | "next") => {
        const newIndex = direction === "next"
            ? (currentIndex + 1) % filteredImages.length
            : (currentIndex - 1 + filteredImages.length) % filteredImages.length;

        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === "ArrowLeft") navigateImage("prev");
            if (e.key === "ArrowRight") navigateImage("next");
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, currentIndex, filteredImages]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                >
                    <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/50 mb-6"
                        >
                            <Grid className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Memories & Moments</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Our
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Gallery</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            A visual journey through milestones, community engagement, and transformative initiatives
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 sticky top-16 bg-white/80 backdrop-blur-md z-20 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                                onClick={() => openLightbox(image, index)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
                                            <p className="text-gray-200 text-sm">{image.description}</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-yellow-500 text-black text-xs rounded-full">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-gray-500 text-lg">No images found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-10"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("prev");
                            }}
                            className="absolute left-6 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("next");
                            }}
                            className="absolute right-6 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Image Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>

                            {/* Image Info */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                            >
                                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                                <p className="text-gray-200">{selectedImage.description}</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                                    {selectedImage.category}
                                </span>
                            </motion.div>

                            {/* Image Counter */}
                            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                                {currentIndex + 1} / {filteredImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}