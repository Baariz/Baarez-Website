import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from '../../utils/blogs';


// Brand Palette Constants
const COLORS = {
  MAROON: "#760015",
  ORANGE: "#ef7f25",
  LIGHT_BG: "#fdfbf9", // Very warm off-white (Paper)
  TEXT_MAIN: "#4a4a4a" // Softer than black, readable
};

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. Categories
  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  // 2. Sort & Filter
  const filteredBlogs = useMemo(() => {
    let data = [...blogs].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    if (selectedCategory !== "All") {
      data = data.filter(b => b.category === selectedCategory);
    }
    return data;
  }, [selectedCategory]);

  const featuredPost = filteredBlogs[0]; // First item is featured
  const gridPosts = filteredBlogs.slice(1); // Rest are grid

  return (
    <div className="min-h-screen bg-white font-sans pt-32 pb-24">
      
      {/* --- 1. HEADER & FILTER --- */}
      <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ef7f25] mb-4 block">
            Thought Leadership
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-12" style={{ color: COLORS.MAROON }}>
            Baarez Insights.
          </h1>
        </motion.div>

        {/* Filter Pills */}
        <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-full bg-[#fcf9f6] border border-gray-100 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "text-white shadow-md transform scale-105"
                  : "text-gray-500 hover:text-[#760015] hover:bg-white"
              }`}
              style={{ backgroundColor: selectedCategory === cat ? COLORS.MAROON : 'transparent' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- 2. FEATURED POST (Side-by-Side Layout) --- */}
        <AnimatePresence mode="wait">
          {featuredPost && (
            <motion.div 
              key={featuredPost.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-24"
            >
              <Link to={`/blogs/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Image Side */}
                <div className="relative overflow-hidden rounded-2xl aspect-w-16 aspect-h-10 lg:aspect-none lg:h-[450px]">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#fff5eb] text-[#ef7f25] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">
                      {new Date(featuredPost.publishedDate).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-bold leading-[1.1] mb-6 transition-colors group-hover:text-[#ef7f25]" style={{ color: COLORS.MAROON }}>
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-all group-hover:gap-5" style={{ color: COLORS.MAROON }}>
                    Read Story <span>&rarr;</span>
                  </div>
                </div>

              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 3. THE GRID (Clean, No Borders) --- */}
        <div className="border-t border-gray-100 pt-16">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            <AnimatePresence>
              {gridPosts.map((post) => (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="group cursor-pointer flex flex-col"
                >
                  <Link to={`/blogs/${post.slug}`} className="flex flex-col h-full">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-w-3 aspect-h-2">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Orange line on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ef7f25] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-[#ef7f25] uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-tight mb-3 transition-colors group-hover:text-[#760015]" style={{ color: "#2d2a2a" }}>
                        {post.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-auto group-hover:text-[#ef7f25] transition-colors">
                        Read Now &rarr;
                      </div>
                    </div>

                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-lg">No articles found in this category.</p>
              <button 
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-[#ef7f25] font-bold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Blogs;