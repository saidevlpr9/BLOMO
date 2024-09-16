// Card Component
export function Card({ title, description, context }) {
  return (
    <div className="text-white rounded-2xl p-10 bg-[black] h-1/2 w-2/6 m-4 max-sm:w-auto max-sm:p-4">
      <h1 className="text-[white] text-4xl" style={{fontFamily:"DosisBold"}}>{title}</h1>
      <p className="text-gray-400 mt-1">~{context}</p>
      <p className="text-[white] mt-2">{description}</p>
    </div>
  );
}





