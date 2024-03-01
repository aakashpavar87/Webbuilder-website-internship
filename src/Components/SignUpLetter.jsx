import { ArrowRight } from "lucide-react"

const SignUpLetter = () => {
  return (
    <div className="flex justify-around mt-10 mb-10 ml-8 items-center w-full">
        <div className="w-2/6 text-wrap font-light text-2xl">
            <h4>Sign Up and get Exclusive special deals</h4>
        </div>
        <div className="w-4/6">
            <div className="rounded h-15 flex w-[80%] bg-blue-100 items-center justify-center">
                <input type="text" className="text-slate-600 w-3/5 m-2 p-3 focus:outline-none bg-blue-100 focus:border-b-4 border-slate-100" placeholder="Enter Email" />
                <div className="w-2/5 flex justify-center items-center gap-2">
                    <span className="text-slate-400 text-xl hover:text-gray-700 cursor-pointer">Sign Up </span>
                    <button className="h-12 bg-blue-600 rounded-full p-3 hover:-rotate-180 duration-1000 rotate-90 text-gray-100 "><ArrowRight /> </button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpLetter