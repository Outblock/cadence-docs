import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs',
  staticImage: true
})

export default withNextra({
  reactStrictMode: true
})
