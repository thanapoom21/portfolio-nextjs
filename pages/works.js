import Head from 'next/head'
import Layout from '../components/layout'
import HeadingOne from '../components/headingOne'
import { Box, Image } from '@chakra-ui/react'
import utilStyles from '../styles/utils.module.css'
import RandomMachine from './fcc-tutorials-projects/random-quote-machine'
import TodoApp from './fcc-tutorials-projects/todo-app'
import InfoSite from './scrimba-tutorial/InfoSite'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'

const imageSources = {
	drstile: [
		{
			src: '/assets/works/drstile-website/drstile-website-1.webp',
			fallbackSrc: '/assets/works/drstile-website/drstile-website-1.jpg',
			alt: 'drstile-website-1',
		},
		{
			src: '/assets/works/drstile-website/drstile-website-2.webp',
			fallbackSrc: '/assets/works/drstile-website/drstile-website-2.jpg',
			alt: 'drstile-website-2',
		},
		{
			src: '/assets/works/drstile-website/drstile-website-3.webp',
			fallbackSrc: '/assets/works/drstile-website/drstile-website-3.jpg',
			alt: 'drstile-website-3',
		},
		{
			src: '/assets/works/drstile-website/drstile-website-2.webp',
			fallbackSrc: '/assets/works/drstile-website/drstile-website-2.jpg',
			alt: 'drstile-website-4',
		},
	],

	doubleMoon: [
		{
			src: '/assets/works/double-moon/double-moon-1.webp',
			fallbackSrc: '/assets/works/double-moon/double-moon-1.jpg',
			alt: 'double-moon-1',
		},
		{
			src: '/assets/works/double-moon/double-moon-2.webp',
			fallbackSrc: '/assets/works/double-moon/double-moon-2.jpg',
			alt: 'double-moon-2',
		},
		{
			src: '/assets/works/double-moon/double-moon-3.webp',
			fallbackSrc: '/assets/works/double-moon/double-moon-3.jpg',
			alt: 'double-moon-3',
		},
	],

	logos: [
		{
			src: '/assets/works/logos/harmoneyes-3.webp',
			fallbackSrc: '/assets/works/logos/harmoneyes-3.jpg',
			alt: 'harmoneyes-3',
		},
		{
			src: '/assets/works/logos/red-cardinal.webp',
			fallbackSrc: '/assets/works/logos/red-cardinal.jpg',
			alt: 'red-cardinal',
		},
		{
			src: '/assets/works/logos/scfoundation-1.webp',
			fallbackSrc: '/assets/works/logos/scfoundation-1.jpg',
			alt: 'scfoundation-1',
		},
		{
			src: '/assets/works/logos/scfoundation-2.webp',
			fallbackSrc: '/assets/works/logos/scfoundation-2.jpg',
			alt: 'scfoundation-2',
		},
	],

	posters: [
		{
			src: '/assets/works/posters/exordium-main-poster-w990.webp',
			fallbackSrc: '/assets/works/posters/exordium-main-poster-w990.jpg',
			alt: 'exordium-main-poster-w990',
		},
		{
			src: '/assets/works/posters/exordium-poster-w990.webp',
			fallbackSrc: '/assets/works/posters/exordium-poster-w990.jpg',
			alt: 'exordium-poster-w990',
		},
	],

	booklets: [
		{
			src: '/assets/works/booklets/geometry-artwork-1.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-1.jpg',
			alt: 'geometry-artwork-1',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-2.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-2.jpg',
			alt: 'geometry-artwork-2',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-3.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-3.jpg',
			alt: 'geometry-artwork-3',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-4.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-4.jpg',
			alt: 'geometry-artwork-4',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-5.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-5.jpg',
			alt: 'geometry-artwork-5',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-6.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-6.jpg',
			alt: 'geometry-artwork-6',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-7.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-7.jpg',
			alt: 'geometry-artwork-7',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-8.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-8.jpg',
			alt: 'geometry-artwork-8',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-9.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-9.jpg',
			alt: 'geometry-artwork-9',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-10.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-10.jpg',
			alt: 'geometry-artwork-10',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-11.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-11.jpg',
			alt: 'geometry-artwork-11',
		},
		{
			src: '/assets/works/booklets/geometry-artwork-12.webp',
			fallbackSrc: '/assets/works/booklets/geometry-artwork-12.jpg',
			alt: 'geometry-artwork-12',
		},
	],
}

function ImageSection({ project }) {
	return (
		<>
			{project.map((obj) => {
				return (
					<section key={obj.alt}>
						<div className='mb-5'>
							<Image
								src={obj.src}
								fallbackSrc={obj.fallbackSrc}
								alt={obj.alt}
							/>
						</div>
					</section>
				)
			})}
		</>
	)
}

export default function Works() {
	return (
		<Layout>
			<Head>
				<title>{SITE_TITLE}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<HeadingOne>Works</HeadingOne>
				<Box my={6}>
					<h3 className='text-xl md:text-3xl font-bold'>drstile</h3>
				</Box>
				<Box
					my={6}
					className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-6 md:gap-y-16'
				>
					<ImageSection project={imageSources.drstile} />
				</Box>

				<Box my={6}>
					<h3 className='text-xl md:text-3xl font-bold'>double moon</h3>
				</Box>
				<Box
					my={6}
					className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-16'
				>
					<ImageSection project={imageSources.doubleMoon} />
				</Box>

				<Box my={6}>
					<h3 className='text-xl md:text-3xl font-bold'>logos</h3>
				</Box>
				<Box
					my={4}
					className='grid grid-cols-2 lg:grid-cols-4 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16'
				>
					<ImageSection project={imageSources.logos} />
				</Box>

				<Box my={6}>
					<h3 className='text-xl md:text-3xl font-bold'>posters</h3>
				</Box>
				<Box
					my={4}
					className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16'
				>
					<ImageSection project={imageSources.posters} />
				</Box>

				<Box my={6}>
					<h3 className='text-xl md:text-3xl font-bold'>booklets</h3>
				</Box>
				<Box
					my={4}
					className='grid grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16'
				>
					<ImageSection project={imageSources.booklets} />
				</Box>

				<Box>
					<h3 className='text-xl md:text-3xl font-bold'>APIs</h3>
				</Box>
				<Box className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 md:grid-cols-2 md:gap-y-16'>
					<Box mt={6}>
						<Box>
							<h4>Random Quote Machine — freecodecamp.com</h4>
						</Box>
						<Box mt={4} className='grid grid-cols-1 lg:grid-cols-1'>
							<section>
								<div id='random-quote-machine' className='mb-5'>
									<RandomMachine />
								</div>
							</section>
						</Box>
					</Box>
					<Box mt={6}>
						<Box>
							<h4>Todo App</h4>
						</Box>
						<Box mt={4} className='grid grid-cols-1 lg:grid-cols-1'>
							<section>
								<div id='todo-app' className='mb-5'>
									<TodoApp />
								</div>
							</section>
						</Box>
					</Box>
					<Box mt={6}>
						<Box>
							<h4>Top 20 Movies of All Time from A Sample Movies Collection</h4>
						</Box>
						<Box mt={4} className='grid grid-cols-1 lg:grid-cols-1'>
							<section>
								<div id='movies-of-all-time' className='mb-5 text-center'>
									<div className='todo-app'>
										<Link href='/movies'>
											<a className='hover:underline text-white'>20 Movies</a>
										</Link>
									</div>
								</div>
							</section>
						</Box>
					</Box>
					<Box mt={6}>
						<Box>
							<h4>Scrimba - Tutorial 1</h4>
						</Box>
						<Box mt={4} className='grid grid-cols-1 lg:grid-cols-1'>
							<section>
								<div id='scrimba-tutorial' className='mb-5'>
										<InfoSite />
								</div>
							</section>
						</Box>
					</Box>
				</Box>
			</section>
		</Layout>
	)
}
