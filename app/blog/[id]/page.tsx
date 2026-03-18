'use client'
import { useState, useEffect } from 'react';
import { createClient } from "@/lib/supabase/client";
import { useParams } from "next/navigation";
import Link from 'next/link';
import { Loader2 } from "lucide-react";
import MarkdownRenderer from '@/components/MarkdownRenderer';


export default function ProductPage() {
    const { id } = useParams();
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<any>(null);
    
    const fetchPost = async () => {
        const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

        if (!error) setPost(data || null);
        setLoading(false);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 size={28} className="animate-spin text-[var(--teal)]" />
                </div>
            ) : post === null ? (
                <div className="h-[40vh] overflow-hidden bg-[var(--header)] flex flex-col items-center justify-end gap-4">
                    <p className="text-lg text-gray-600">Post not found</p>
                    <Link href="/" className="text-[var(--rust)] hover:underline">
                        Back to Home
                    </Link>
                </div>
            ) : (
                <MarkdownRenderer md={post.content}/>
            )}
        </div>
    );
}