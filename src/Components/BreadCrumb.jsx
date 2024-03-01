import { ChevronRight } from 'lucide-react';
const BreadCrumb = () => {
    const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
  return (
    <div className="my-1 h-10 flex text-slate-500 gap-3 text-xs cursor-pointer ">
        <span>Home</span>
        {rightArrow}
        <span>Hosting For All</span>
        {rightArrow}
        <span>Hosting</span>
        {rightArrow}
        <span>Hosting 5</span>
        {rightArrow}
        <span>Hosting 6</span>
    </div>
  )
}

export default BreadCrumb