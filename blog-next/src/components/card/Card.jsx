import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    const {post} = props;
    return (
        <Link href={"/blog/" + post?.slug}>
            <Image 
                src={post.image} 
                width={400} 
                height={300} 
                alt={post?.title}
            />
            <p>{post.date}</p>
            <h3>{post.title}</h3>
        </Link>
    )
}

export default Card;