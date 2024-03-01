import BreadCrumb from "./BreadCrumb"
import Card from "./Card"
import Head from "./Head"
import Notification from "./Notification"
import SecondCard from "./SecondCard"
import SignUpLetter from "./SignUpLetter"


const Hero = () => {
  const data = [
    {
      head: "WixPro 72-Inch Responsive Website Builder",
      content: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      rating: "9.8",
      firstCaption: "Builder"
    },
    {
      head: "SiteCraft 68-Inch Ultimate Web Design Studio",
      content: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      rating: "9.5",
      firstCaption: "Builder 1"
    },
    {
      head: "WixPro 72-Inch Responsive Website Builder",
      content: " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      rating: "9.3",
      firstCaption: "Builder 2"
    },
    {
      head: "CDK Resposive Builder",
      content: "An extensive library of widgets and apps, and detailed step-by-step guides",
      rating: "9.1",
      firstCaption: "CDK",
      highlight: "key"
    }
  ]
  return (
    <div className="w-[60%] lg:mx-72 mx-auto mt-6">
        <Head heading={"Best Website Builders in the US"}/>
        <Notification />
        <BreadCrumb />
        {
          data.map((obj, idx)=>(
          <Card 
            head={obj.head} 
            content={obj.content} 
            rating={obj.rating} 
            firstCaption={obj.firstCaption}
            mainHighlight={obj.highlight??""}
            index={idx+1}
            key={idx}
          />
          ))
        }
        <div className="my-5 px-2">
          <Head heading={"Related Deals You Might Like For"} style={{"fontSize": "29px", "fontWeight": "300"}}/>
        </div>
        <div className="flex justify-around items-center gap-3">
          <SecondCard />
          <SecondCard />
          <SecondCard />
        </div>
        <SignUpLetter />
    </div>
  )
}

export default Hero