import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { getAllpost } from '@/utils/posts'
import Card from '@/components/card'
const inter = Inter({ subsets: ['latin'] })

export default function Home({postData}) {
  
  return (
    <>
    <Layout></Layout>
      <h1> Hello </h1>
      <p>
        Gli articoli del blog
      </p>
      <Card />
      {postData?.map((post, index) => (
          <Card key={index} props={post} />
        ))}
     
      
     </>
    
  )
}

export const getStaticProps = () => {
  const postData = getAllpost();

  return {
    props: {
      postData,
    }
  }
}