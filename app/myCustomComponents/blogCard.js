
import Image from "next/image";
const BlogCard = ({heading,blogImage})=>{
  return(
    <>
    <div className="flex justify-center">
    <div className=" border-2 border-black h-full p-10 rounded-3xl w-1/2 m-3">
    <div className="h-full w-full flex justify-center">
      <Image src={blogImage} alt={"bloodDonation"} height={1000} width={1000} className="h-1/2 w-1/2"></Image>
    </div>
    <h1 className="text-5xl text-black">
   {heading}
    </h1>
    
    </div>
    </div>
    </>
  )
}
export default BlogCard;