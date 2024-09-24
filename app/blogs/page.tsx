
import BlogCard from "../myCustomComponents/blogCard";
import BlogImage1 from "../assets/blog1.jpg"
import BlogImage2 from "../assets/blog_2.jpeg"
import Link from "next/link";
const BlogsPage = ()=>{
  return(
    <>
    <div className="flex justify-center">
    <h1 className="text-black mb-16">
      Blogs
    </h1>
    </div>
    <Link href="/Why-Blood-Donation-is-Important">
    <BlogCard heading={" Why Blood Donation is Important"} blogImage={BlogImage1.src}/>
    </Link>
    <Link href="/The-Lifesaving-Act">
    <BlogCard heading={" The Lifesaving Act"} blogImage={BlogImage2.src}/>
    </Link>

    </>
  )
}
export default BlogsPage;