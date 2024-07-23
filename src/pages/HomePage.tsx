import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";


const HomePage = () => {
  return(
    <div className = "flex-col gap-12">
        <div className = "bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-500">
                Don't know what to eat?    
            </h1>   
            <span className="text-xl"> 
                We've got you covered.
            </span>
        </div>     
        <div className="grid md:grid-cols-2 gap-5 mt-5">
            <img src= {landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">  
                <span className = "font-bold text-3xl tracking-tighter">
                    Order Takeaway Even Faster!
                </span>
                <span>
                    Download the QuickEats App for even faster ordering!
                </span>
                <img src={appDownloadImage}/>
            </div>
        </div> 
       
    </div> 
    
  )
}

export default HomePage;
 //-mt-16 adds negative margin to the top, pushes the element up
 //flex-col puts all elements on page in a column gap-12 puts spacing of 12
 //grid creates a css grid, for medium screens the grid will have 2 columns with a gap of 5, let grid styles resize image