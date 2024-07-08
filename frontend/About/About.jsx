import React from 'react'
import aboutHero from "../src/assets/aboutHero.jpg";
import book1 from "../src/assets/book1.png";
const About = () => {
  return (
    <div className='w-full max-w-screen-2xl container mx-auto  '>
      <div className='pt-20'>
        <img src={aboutHero} alt="" />
      </div>
      <div className='grid md:grid-cols-2 mx-auto md:px-20 px-10 md:py-14 py-12'>
        <div className='flex justify-center'>
            <div >
            <img src={book1} alt="@dued" className='height' />
            </div>
        </div>
        <div >
            <div className='px-10'>
                <h3 className=' text-3xl font-bold text-yellow-300 px-4 lg:px-0'>Benefits Of Book Reading</h3>
                <p className='text-justify py-6 px-4 lg:px-0'>Reading books offers numerous benefits. It enhances cognitive function, improving focus, concentration, and memory. Regular reading stimulates the brain, reducing the risk of cognitive decline as we age. It also expands vocabulary, improves language skills, and boosts creativity. Reading fiction, in particular, fosters empathy by allowing readers to experience diverse perspectives and emotions. Non-fiction books provide knowledge on various subjects, aiding personal and professional growth. Additionally, reading reduces stress, promoting relaxation and mental well-being. It also encourages lifelong learning and intellectual curiosity. By exposing readers to different cultures and ideas, books broaden horizons and foster a deeper understanding of the world. Overall, book reading is a valuable habit that enriches the mind and soul.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
