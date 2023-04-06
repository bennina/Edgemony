import Image from "next/image";
import Layout from "@/components/layout";

//posts utils
import { getAllSlugs, getPostData } from "@/utils/posts";

export default function Post(props) {
    const {image, title, date, body } = props.postData;
    return (
        <Layout>
            <p>{date}</p>
            <h1>{title}</h1>
            <Image src={image} width={400} height={300} alt={title} />
            <div>
                {body}
            </div>
        </Layout>
    )
}

export const getStaticPaths = () => {
    const paths = getAllSlugs();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = ({params}) => {
    const postData = getPostData(params.slug);
    return {
        props: {
            postData
        }
    }
}