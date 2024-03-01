import { socialMedia } from "../constants/constants.index.js"
const Footer = () => {
    return (

        <footer className="min-w-full flex justify-between cursor-pointer bg-gray-800 text-slate-500 p-20">
            <div className="w-1/5 flex flex-col justify-center items-center gap-3">
            {
              socialMedia.map((icon) => (
                <div className="flex gap-2 justify-start items-center">
                    <div className="flex justify-center bg-white items-center w-10 h-10 rounded-full">
                    <img src={icon.src} alt={icon.alt} width={25} height={25} />
                    </div>
                    <span className="w-10 text-[12px]">{icon.link}</span>
                </div>
              ))
            }
            </div>
            <div className="w-1/5 flex flex-col justify-center items-baseline gap-3">
                <h3 className="capitalize text-slate-50">categories</h3>
                <h5 className="text-base font-light hover:text-slate-50">Web Builder</h5>
                <h5 className="text-base font-light hover:text-slate-50">Hosting</h5>
                <h5 className="text-base font-light hover:text-slate-50">Data Center</h5>
                <h5 className="text-base font-light hover:text-slate-50">Robotic-Automation</h5>
            </div>
            <div className="w-1/5 flex flex-col justify-center items-baseline gap-3">
                <h3 className="capitalize text-slate-50">contact</h3>
                <h5 className="text-base font-light hover:text-slate-50">Contact</h5>
                <h5 className="text-base font-light hover:text-slate-50">Privacy Policy</h5>
                <h5 className="text-base font-light hover:text-slate-50">Terms Of Service</h5>
                <h5 className="text-base font-light hover:text-slate-50">Categories</h5>
                <h5 className="text-base font-light hover:text-slate-50">About</h5>
            </div>
            <div className="w-1/5 flex flex-col justify-center items-baseline gap-3">
                <h3 className="capitalize text-slate-50">services</h3>
                <h5 className="text-base font-light hover:text-slate-50">Word Press Website</h5>
                <h5 className="text-base font-light hover:text-slate-50">AI Integration </h5>
                <h5 className="text-base font-light hover:text-slate-50">Data base Management</h5>
                <h5 className="text-base font-light hover:text-slate-50">UI UX Desing of Website</h5>
            </div>
        </footer>
    )
}
export default Footer