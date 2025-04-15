/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://cadence-lang.org/'),
  title: {
    template: '%s - Cadence'
  },
  description: 'Cadence: the smart contract language for the Flow blockchain',
  applicationName: 'Cadence',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Cadence'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://flow.com'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <Image src='/logo.svg' width={20} height={20}/>
          <span className="text-xl font-bold">Cadence</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/flow"
      projectLink="https://github.com/outblock/cadence-lang.org"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head 
      faviconGlyph="✦" 
      color={{
        hue: { dark: 160, light: 160 },
        saturation: { dark: 100, light: 100 }
      }}
      />
      <body>
        <Layout
          banner={<Banner storageKey="Cadence">Cadence 1.0 is here!</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © flow.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/outblock/cadence-lang.org/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
