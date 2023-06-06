 "use client"
 
 import Image from "next/image"
import classes from "./blogcard.module.css"
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { useState } from "react"

const BlogCard = ({blog}) => {
  const [isLiked,setIsLilked]=useState(false)
  const blogLikes=10
  const handleLike=()=>{

  }

  return (
    <div className={classes.blogcard}>
    <Image src= {blog.img} width="300" height="250" className={classes.img }alt="blog-img" />

        

      <p  className={classes.desc}> {blog.title} </p>
      <p  className={classes.desc}> {blog.authorId} </p>

      {
         <div className={classes.right}>
         {blogLikes} {" "} {isLiked
           ? (<AiFillLike onClick={handleLike} size={20} />)
           : (<AiOutlineLike onClick={handleLike} size={20} />)}
            </div>
      }
    </div>
  )
}

export default BlogCard