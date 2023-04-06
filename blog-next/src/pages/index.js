import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { getAllpost } from '@/utils/posts'
import Card from '@/components/card'
const inter = Inter({ subsets: ['latin'] })

export default function Home({postData}) {
  
  return (
    
    <Layout>
      <h1> Hello </h1>
      <p>
        Gli articoli del blog
      </p>
      
      {postData?.map((post, index) => (
          <Card key={index} props={post} />
        ))}
     
      
    </Layout>
    
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