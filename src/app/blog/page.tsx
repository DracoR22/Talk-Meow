import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { posts } from "@/constants/landing-page"
import Link from "next/link"
import parse from 'html-react-parser'
import { getMonthName } from "@/lib/utils"
import Image from "next/image"
import NavBar from "@/components/landing/navbar"

const BlogPage = () => {
  return (
    <>
      <NavBar/>
       <div className="mt-[140px] container">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-3">
        Learn how to leverage AI to deal with customer support inquiries in your business.
        </p>
       </div>
       <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts && posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image unoptimized fill src={post.image} alt="post featured image"/>
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))}
      </section>
    </>
  )
}

export default BlogPage
