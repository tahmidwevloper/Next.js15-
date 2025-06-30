import Link from "next/link"


const PostDetails = async({params}) => {

    const detailsPostId = await params
    console.log( detailsPostId?.id)

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${detailsPostId?.id}`, {
        next: { revalidate: 60 }
    })
    const postDetails = await res.json()
    console.log(postDetails)

  return (
    <div className="h-fit flex flex-col items-center justify-center p-4 m-4 border rounded-lg shadow-lg">
        <h2 className="text-3xl text-cyan-400 font-medium text-center">{postDetails.title}</h2>
        <p className="text-center">{postDetails.body}</p>
            <div className="bottom-2 left-2">
                <Link href="/post" className="flex items-center justify-end">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-xl">Back to Posts</button>
                </Link>
            </div>
    </div> 
  )
}

export default PostDetails;
