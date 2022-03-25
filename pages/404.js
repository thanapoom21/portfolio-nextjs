import Head from 'next/head'
import Layout from '../components/layout'
import { Box } from '@chakra-ui/react'
import { SplitText } from '../components/SplitText'
import { AnimatePresence, motion } from 'framer-motion'
import utilStyles from '../styles/utils.module.css'
import { SITE_TITLE } from '../lib/constants'

export default function Custom404() {
  const thePageIsNotHere = `The page you're looking for is not here.😞`
  const code404 = '404'

  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Box
          flexDirection='column'
          display='flex'
          height='60vh'
          justifyContent='center'
          alignItems='center'
        >
          <AnimatedText animateScale={{ opacity: 1, scale: [1, 2, 2, 1, 1] }}>
            {code404}
          </AnimatedText>
          <AnimatedText animateScale={{ opacity: 1 }}>
            {thePageIsNotHere}
          </AnimatedText>
        </Box>
      </section>
    </Layout>
  )
}

function AnimatedText({ children, animateScale }) {
  return (
    <div className={utilStyles.superBoldText3rem}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={animateScale}
          exit={{ opacity: 0 }}
        >
          <SplitText
            splitBy=' '
            initial={{ y: '100%' }}
            animate='visible'
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.05,
                },
              }),
            }}
          >
            {children}
          </SplitText>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
