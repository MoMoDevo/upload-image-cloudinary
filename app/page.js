 
import BlogCard from "./components/BlogCard"
import { Blogs } from "./libs/data"
  
const Home = () => {
  return (
    <div  className="home">
      <div className="container">





      {
        Blogs.map((blog)=>(
          
          <BlogCard key={blog.title} blog= {blog} />
          ))
        }

        </div>
 









    </div>
  )
}

export default Home