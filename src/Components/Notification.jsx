import React from 'react'
import { ChevronDown } from 'lucide-react';
import {image1, image2} from "../assets"

const Notification = () => {
  return (
    <>
      <div className="border text-slate-600 border-t-slate-600 border-b-slate-600 mt-6 h-10 flex justify-between">
        <div className="flex gap-3 items-center">
            <p className="flex items-center gap-1"><span><img src={image1} height={20} width={20} alt="" srcset="" /></span> Last Updated - February 2020</p>
            <p className="flex items-center gap-1"><span><img src={image2} alt="" srcset="" /></span> Advertising Disclosure</p>
        </div>
        <div className="flex gap-3 items-center">
            <h3>Top Relevant </h3><span className="cursor-pointer"> <ChevronDown/> </span>
        </div>
      </div>
      <div className="text-slate-600 my-6 h-10 flex  gap-11 pl-4 cursor-pointer">
        <h3>Tools</h3>
        <h3>AWS Builder</h3>
        <h3>Start Build</h3>
        <h3>Build Supplies</h3>
        <h3>Tooling</h3>
        <h3>Blue Hosting</h3>
      </div>
    </>
  )
}

export default Notification