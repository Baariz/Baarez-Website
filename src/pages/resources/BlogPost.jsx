import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogs } from '../../utils/blogs';

// Brand Constants
const COLORS = {
  MAROON: "#760015",
  ORANGE: "#ef7f25",
  TEXT_MAIN: "#2d2a2a",
  TEXT_LIGHT: "#4a4a4a"
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  
  // Reading Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.MAROON }}>Article Not Found</h2>
        <Link to="/blogs" className="text-lg font-bold hover:underline" style={{ color: COLORS.ORANGE }}>&larr; Back to Insights</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white font-sans text-[#2d2a2a] pt-32 pb-24">
      
      {/* --- READING PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 z-50 origin-left" 
        style={{ backgroundColor: COLORS.ORANGE, scaleX }} 
      />

      {/* --- 1. BREADCRUMB (Top Navigation) --- */}
      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <Link to="/blogs" className="inline-block text-xs font-bold text-gray-400 hover:text-[#760015] uppercase tracking-widest transition-colors">
          &larr; Back to Journal
        </Link>
      </div>

      {/* --- 2. HERO IMAGE (Wide) --- */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="aspect-w-16 aspect-h-8 w-full overflow-hidden rounded-2xl shadow-sm">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* --- 3. DOCUMENT BODY (Title + Content Grouped) --- */}
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* --- ARTICLE HEADER --- */}
        <header className="mb-10 pb-10 border-b border-gray-100">
          
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#fff5eb] text-[#ef7f25] text-[10px] font-bold uppercase tracking-widest rounded-sm">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              {new Date(post.publishedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8" style={{ color: COLORS.MAROON }}>
            {post.title}
          </h1>

          {/* Author Meta */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-sm" style={{ backgroundColor: COLORS.MAROON }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-[#2d2a2a]">{post.author}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{post.role || "Author"}</p>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <div className="prose prose-lg max-w-none 
          prose-headings:font-bold prose-headings:text-[#760015] prose-headings:mt-10 prose-headings:mb-4
          prose-p:text-[#4a4a4a] prose-p:leading-[1.9] text-lg
          prose-a:text-[#ef7f25] prose-a:font-bold hover:prose-a:text-[#760015] hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-[#ef7f25] prose-blockquote:bg-[#fcf9f6] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-[#760015]
          prose-strong:text-[#2d2a2a] prose-strong:font-bold
          prose-li:text-[#4a4a4a] prose-ul:list-disc prose-ul:pl-5
          whitespace-pre-line">
          {post.content}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-[#fdfbf9] p-8 rounded-2xl border border-gray-100">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.MAROON }}>Need more insights?</h3>
              <p className="text-sm text-gray-500">Discover how Baarez is shaping the future of enterprise.</p>
            </div>
            <Link to="/contact" className="px-8 py-3 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: COLORS.MAROON }}>
              Talk to an Expert
            </Link>
          </div>
        </div>

      </div>

    </article>
  );
};

export default BlogPost;