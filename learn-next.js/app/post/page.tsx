
import Postcard from "./PostDetails";

export interface IPost {
    userId : number;
    id : number;
    title : string;
    body : string;
}

type TPost = {
    post : IPost[]
}

// export const getStaticProps : GetStaticProps<TPost> = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const post = await res.json()
//     return { props: { post } }
// }

const page = async() => {


    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const post = await res.json()

    console.log(post)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Array.isArray(post) 
        && post.map((item : IPost) => <Postcard key={item.id} data={item} />)
        }
    </div>
  )
}

export default page;
