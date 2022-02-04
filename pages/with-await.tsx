// Similar to https://github.com/isaachinman/next-i18next/blob/ee5965183436d9b13d85c9187b3e09983b34ce7f/examples/simple/pages/second-page.js
// This has getStaticProps but not getStaticPaths
// Using 'await' with serverSideTranslations breaks next-auth useSession()

import Layout from "../components/layout"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import TranslationTestContent from "../components/translationTest"

const TestPage = ({ mood }) => {
  return (
    <Layout>
      {/* This is fun. Mood is {mood}. The word for "word" is: {i18n.t("word")}. */}
      <TranslationTestContent mood={mood} usesAwait={true} />
    </Layout>
  )
}

export const getStaticProps = async ({ params, locale }) => {
  const mood = "determined"
  console.log("locale is ", locale)
  return {
    props: {
      mood,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default TestPage
