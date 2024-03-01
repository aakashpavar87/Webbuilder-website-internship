import { download } from "../assets"

const SecondCard = () => {
  return (
    <div className="flex flex-col w-1/3 bg-slate-100 justify-items-center items-center rounded-md p-1">
        <div className="flex justify-center my-4 p-5 items-center w-full h-36">
            <img src={download} className="object-cover h-full" alt="" />
        </div>
        <div className="flex gap-2 my-2 justify-items-center items-center w-3/4">
            <span className="px-2 bg-slate-500 text-slate-200 rounded w-full">20% Off</span>
            <span className="px-2 bg-slate-500 text-slate-200 rounded text-nowrap">Limited Time</span>
        </div>
        <div className="flex flex-col my-2">
            <p>Computer Modern classic with wix support</p>
            <div className="flex items-baseline gap-3">
                <h4 className="text-md">$39.96</h4>
                <h5 className="text-sm line-through text-slate-400">$49.96</h5>
                <span className="text-xs text-red-700">(20% off)</span>
            </div>
        </div>
        <button className="w-[85%] p-2 my-3 rounded-lg text-gray-50 bg-blue-500">View Deal</button>
    </div>    
  )
}

export default SecondCard