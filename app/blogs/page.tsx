
import BlogCard from "../myCustomComponents/blogCard";
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
    <BlogCard heading={" Why Blood Donation is Important"}/>
    </Link>
    </>
  )
}
export default BlogsPage;