import React from 'react'

export default function MainBlock() {
	return (
		<div className='main--container'>
			<h1 className='main--title text-sm md:text-lg'>Fun facts about React</h1>
			<ul className='main--facts text-sm md:text-lg'>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	)
}
