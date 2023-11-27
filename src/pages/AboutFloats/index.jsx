import React from 'react'

function AboutFloat() {
  return (
    <section className='container' style={{paddingTop:"60px"}}>
        <h1 style={{borderBottom: "1px solid #8e8e8e", paddingBottom:"60px"}}>Clearing Floats</h1>
        <p style={{ paddingTop:"10px"}}>The last item in this page’s content is a floated image. Make sure any elements after it are clearing properly.</p>
        <div style={{ paddingTop:"20px"}}>
            <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/07/manhattansummer-300x225.jpg" alt="" />
        </div>
    </section>
  )
}

export default AboutFloat