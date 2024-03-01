import React from 'react'
import { download } from '../assets'
import { ChevronDown } from 'lucide-react'
import { image4,image3 } from '../assets'

const HighLightInfo = () => {
    return (
            <p className='text-sm leading-snug pl-4 tracking-tight'>
                [What You Get]: Receive the WixPro website builder suite,
                access to premium design templates, an extensive library of
                widgets and apps, and detailed step-by-step guides.
            </p>
    )
}

const PropMainHighLight = ({highlight}) => {
    return (
        <>
            <div className='inline min-w-[100%] pl-10'>
                <div className='text-sm min-h-12 w-full -mt-4 mb-2 ml-10 p-4 rounded-lg bg-red-100 flex flex-col gap-2'>
                    <div className='flex justify-items-center items-center gap-2'>
                        <span className='bg-slate-100 rounded-lg p-1 '>9.9</span> <p className='text-nowrap'> Building Responsive</p>
                    </div>
                    <div className='flex justify-items-center items-center gap-2'>
                        <span className='bg-slate-100 rounded-lg p-1'>8.9</span> <p className='text-nowrap'> Cool</p>
                    </div>
                    <div className='flex justify-items-center items-center gap-2'>
                        <span className='bg-slate-100 rounded-lg p-1'>8.9</span> <p className='text-nowrap'> Docs</p>
                    </div>
                </div>
                <div className='text-sm flex flex-col'>
                    <div className='flex justify-items-center my-2 items-center'>
                        <span> <img src={image3} alt="" /> </span> <p>Documentation</p>
                    </div>
                    <p className='hidden'>{highlight}</p>
                    <div className='flex justify-items-center my-2 items-center'>
                        <span> <img src={image3} alt="" /> </span> <p>Easy Use</p>
                    </div>
                    <div className='flex justify-items-center my-2 items-center'>
                        <span> <img src={image3} alt="" /> </span> <p>Out of Box</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Card = ({ index,head, content, rating, firstCaption, mainHighlight }) => {
    return (
        <div className="flex flex-col justify-items-start items-baseline">
            <div className='p-3 px-5 rounded-full text-base border border-slate-600'>{index}</div>
            <div className={mainHighlight?'w-full min-h-96 flex':'w-full  min-h-52 flex'}>
                <div className="w-2/6 h-full flex p-2 justify-center items-center flex-col">
                    <img src={download} className='object-cover h-24' alt="" />
                    <h3 className='text-sm text-slate-600'>{firstCaption}</h3>
                </div>
                <div className="w-4/6 h-full flex p-2 justify-center items-center flex-col">
                    <p className='text-sm leading-snug tracking-tight'>
                        <span className='font-bold'>{head}</span> - {content}
                    </p>
                    <div className={mainHighlight?'flex justify-start items-start relative flex-col':'flex justify-center items-center flex-col'}>

                        <div className={mainHighlight?'absolute -left-48':''}>
                            <h3 className='text-sm font-bold'>Main Highlights</h3>
                            { mainHighlight ? <PropMainHighLight highlight={mainHighlight} /> : <HighLightInfo /> }
                            <h5 className='text-sm font-bold mt-3 text-blue-500 flex cursor-pointer'>Show More <ChevronDown /> </h5>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 h-full flex p-2 justify-center items-center gap-9 flex-col">
                    <div className='w-80% bg-blue-100 border rounded-lg p-2 border-none gap-1 flex justify-center items-center flex-col'>
                        <h3 className='text-3xl text-slate-600'>{rating}</h3>
                        <h5 className='text-slate-950 text-sm font-normal'>Exceptional</h5>
                        <img src={image4} alt="" srcset="" />
                    </div>
                    <div className='w-full h-15%'>
                        <button className='w-full h-70% bg-blue-600 text-slate-100 rounded-xl p-3'>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card