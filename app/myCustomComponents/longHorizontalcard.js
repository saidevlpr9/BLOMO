import Image from "next/image";
export function LongHorizontalCardLeft({title,description,icon}){
  return(
    <div className="flex justify-start">
    <div className=" w-1/2 h-1/4 bg-[black] p-7 flex gap-3 rounded-3xl mt-10 left-1/2 max-sm:w-auto max-sm:h-auto">
      <div>
        <Image height={100} width={100} src={icon.src} alt={title}></Image>
      </div>
      <div>
      <h1 className="text-white text-4xl" style={{fontFamily:"DosisBold"}}>{title}</h1>
        <p className="text-white">
          {description}
        </p>

      </div>
    </div>
    </div>
  )

}
export function LongHorizontalCardRight({title,description,icon}){
  return(

    <div className="flex justify-end">
    <div className=" w-1/2 h-1/4 bg-[black] p-7 flex gap-3 rounded-3xl mt-10 max-sm:w-auto max-sm:h-auto">
      <div>
        <Image height={100} width={100} src={icon.src} alt={title} className="h-auto w-auto"></Image>
      </div>
      <div>
      <h1 className="text-white text-4xl" style={{fontFamily:"DosisBold"}}>{title}</h1>
        <p className=" text-white">
          {description}
        </p>

      </div>
    </div>
    </div>
    
  )

}
export default {LongHorizontalCardLeft,LongHorizontalCardRight};