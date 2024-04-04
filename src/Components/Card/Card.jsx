function Card(image, heading, paragraph, imageOnLeft) {
  return (
    <div>
        { 
          imageOnLeft ? (
            <div className="w-full max-w-[1920px]">
                <div className="w-[80%]"></div>
            </div>
            ) : (
              <div></div>
          )

        }
    </div>
  )
}

export default Card