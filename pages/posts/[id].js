import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// ビルドするときに静的なページとして用意してもらうための関数
export async function getStaticPaths() {
  // Return a list of possible value for id
  // 記事に基づいたidからpathを取得
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
  // return{
  //    path:[
  //      {
  //          params: {id: 'ssg-ssr}
  //      },
  //      {
  //          params:{id: 'pre-rendering'}
  //      }
  //    ],
  //  fallback: false
  // }
}

// データの取得getPostDateで読み込み
// getStaticPropsの返却値はオブジェクト型
// idに基づいた記事のデータを取得
// getPostDataが非同期になったのでawaitを追加
export async function getStaticProps({ params }) {
  // const postData = await getPostData(params.id.join("/"));
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
