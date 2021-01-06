import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { InlineForm, InlineBlocks, InlineTextarea } from 'react-tinacms-inline'
import { useFormScreenPlugin, usePlugin } from 'tinacms'
import Footer from '@components/common/Footer'
import { featureListBlock } from '@components/blocks/FeatureList'
import { heroBlock } from '@components/blocks/Hero'
import { paragraphBlock } from '@components/blocks/Paragraph'

export default function Home({ file, navFile, preview }) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title', component: 'text' },
      { name: 'body', component: 'textarea' },
    ],
  }
  const navFormOptions = {
    label: 'Navigation',
    fields: [
      { name: 'logo', component: 'media' },
      { name: 'test', component: 'textarea' },
    ],
  }
  const [page, form] = useGithubJsonForm(file, formOptions)
  const [nav, navForm] = useGithubJsonForm(navFile, navFormOptions)
  useFormScreenPlugin(navForm)
  usePlugin(form)
  useGithubToolbarPlugins()

  return (
    <div className="container">
      <Head>
        <title>{page.title}</title>
      </Head>
      <InlineForm form={form}>
        <main>
          <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
        </main>
      </InlineForm>
      <Footer />
    </div>
  )
}

export const getStaticProps = async function ({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/index.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/index.json',
        data: (await import('../content/index.json')).default,
      },
      navFile: {
        fileRelativePath: 'content/navigation.json',
        data: (await import('../content/navigation.json')).default,
      },
    },
  }
}

const HOME_BLOCKS = {
  hero: heroBlock,
  features: featureListBlock,
  paragraph: paragraphBlock,
}
