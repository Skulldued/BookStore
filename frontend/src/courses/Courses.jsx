import React from 'react'
import list from "../../public/list.json";
import { Link } from 'react-router-dom';
import Card from "../component/Card";
const Courses = () => {
    console.log(list);
  return (
    <div className='min-h-screen bg-base-100 '>
    <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-40 md:my-36'>
       <div className=''>
        <h2 className='text-3xl font-bold text-center'>We're Delighted To Have You Here : )</h2>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veniam esse, dicta veritatis, dignissimos nulla fugiat, cumque aliquid dolorem earum id voluptates. Doloribus repudiandae reprehenderit quod velit repellendus. Facilis exercitationem quisquam reprehenderit inventore rem consectetur magni? Facere vel ullam temporibus nesciunt assumenda similique quam porro asperiores, corporis aut, ducimus sint.</p>
        <div className=' flex justify-center'>
            <Link to="/" className='bg-pink-500 rounded-full px-4 py-2 ' ><button>Back</button></Link>
        </div>
       </div>
       {/* card section start */}
       <div className="grid md:grid-cols-3 mx-auto">
            {
                list.map((items,index)=>(
                    <Card key={items.id} item={items}/>
                ))
            }
       </div>
       {/* card section end */}
    </div>
    </div>
  )
}

export default Courses
