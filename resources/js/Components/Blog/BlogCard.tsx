import {formatDate, imageStorageUrl} from "@/Utils/Helper";
import {Link} from "@inertiajs/react";
import {BlogPost} from "@/types";

export default function BlogCard({post} : {post: BlogPost}) {
    return (
        <div className="overflow-hidden bg-white group" key={post.id}>
            <Link href={route('blog.detail', {slug: post.slug})}
                  className={"block relative overflow-hidden w-full h-52"}>
                <img
                    src={imageStorageUrl(post.image)}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                    alt={post.title}
                />
            </Link>

            <div className="py-4">
                <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-all duration-500 ease-in-out">
                    <Link href={route('blog.detail', {slug: post.slug})}>
                        {post.title}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-primary-500">
                    <time>{formatDate(post.created_at)}</time>
                </p>
                <p dangerouslySetInnerHTML={{__html: post.excerpt + '...'}} className={"text-gray-500 text-sm mt-3"}>
                </p>
            </div>
        </div>
    )
}
