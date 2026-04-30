"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/data";

interface BlogGridProps {
  searchQuery: string;
  activeCategory: string;
}

export default function BlogGrid({ searchQuery, activeCategory }: BlogGridProps) {
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-black relative min-h-[600px]">
      <div className="container mx-auto px-6">
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col bg-zinc-950 border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_80px_-20px_rgba(255,45,45,0.15)]"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.img} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1 font-accent text-[9px] font-bold text-white uppercase tracking-widest z-10 shadow-lg">
                    {post.category}
                  </div>
                  {/* Tactical Scan Line Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-1.5 w-full opacity-0 group-hover:opacity-100 animate-scan pointer-events-none z-20" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-accent text-white/30 text-[9px] uppercase tracking-widest">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    <span className="font-accent text-white/30 text-[9px] uppercase tracking-widest">{post.readTime}</span>
                  </div>

                  <h3 className="font-heading text-2xl text-white uppercase tracking-wider mb-4 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="font-body text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {post.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="font-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Read Intel —&gt;</span>
                    
                    {/* Tiny Author Link */}
                    <div className="flex items-center gap-2">
                       <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
                          <Image src={post.author.img} alt={post.author.name} fill className="object-cover" />
                       </div>
                       <span className="font-accent text-white/40 text-[9px] uppercase tracking-widest">{post.author.name}</span>
                    </div>
                  </div>
                </div>

                {/* Corner Hover Decors */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 m-3" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h3 className="font-heading text-4xl text-white/20 uppercase mb-4 tracking-widest">No Intelligence Found</h3>
            <p className="font-body text-white/40 text-sm uppercase tracking-widest">Try adjusting your search or filters</p>
          </div>
        )}

      </div>
    </section>
  );
}
