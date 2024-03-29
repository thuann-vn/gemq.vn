import {BlogCategory, BlogPost} from "@/types";
import SidebarBlogCard from "@/Components/Blog/SidebarBlogCard";

export default function BlogSidebar({featuredPosts, categories, tags}: { featuredPosts: BlogPost[], categories: BlogCategory[], tags: string[] }) {
    return (
        <div>
            <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900">Featured Posts</h3>
                <div className="mt-3">
                    {
                        featuredPosts.map((post, key) => (
                            <SidebarBlogCard post={post} key={key}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
