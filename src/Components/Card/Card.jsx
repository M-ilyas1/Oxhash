import video from "../../assets/videos/one.mp4"
function Card({Image, Heading, paragraph, imageOnLeft}) {
  return (
    <div>
        { 
          imageOnLeft ? (
            <div className="w-full max-w-[1920px] flex justify-center items-center">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 ">
                  <div className="bg-green-800 flex justify-center items-center">
                    <div className="w-[80%] bg-yellow-600">
                      <video src={video} controls autoPlay></video>
                    </div>
                  </div>
                  <div className="bg-red-800">{paragraph}</div>
                </div>
            </div>
            ) : (
              <div className="w-full max-w-[1920px]">
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
                  <div>text</div>
                  <div>teimagext</div>
                </div>
            </div>
          )
          

        }
    </div>
  )
}

export default Card