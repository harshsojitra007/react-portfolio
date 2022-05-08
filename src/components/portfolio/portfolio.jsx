import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>

        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

            <article className="portfolio__item">

                <div className="portfolio__item__image">
                    <img src="https://cdn.dribbble.com/userupload/2671207/file/original-3c3c15001c0e74784dc0976834274615.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200" alt="" />
                </div>
                <h3>Dummy</h3>

                <div className="portfolio__item__cta">
                    <a href="#noWhere" className='btn'>Github</a>
                    <a href="#noWhere" className='btn btn-primary'>Live Demo</a>
                </div>
                
            </article>

            <article className="portfolio__item">

                <div className="portfolio__item__image">
                    <img src="https://cdn.dribbble.com/users/6682392/screenshots/18182051/media/eada5237fc1fa6d33baa0a662376067d.png?compress=1&resize=400x300&vertical=top" alt="" />
                </div>
                <h3>Dummy</h3>

                <div className="portfolio__item__cta">
                    <a href="#noWhere" className='btn'>Github</a>
                    <a href="#noWhere" className='btn btn-primary'>Live Demo</a>
                </div>
                
            </article>

            <article className="portfolio__item">

                <div className="portfolio__item__image">
                    <img src="https://cdn.dribbble.com/userupload/2672525/file/still-2c3ab3e26e6973de11ab99c1540a6ef8.png?compress=1&resize=400x300&vertical=top" alt="" />
                </div>
                <h3>Dummy</h3>

                <div className="portfolio__item__cta">
                    <a href="#noWhere" className='btn'>Github</a>
                    <a href="#noWhere" className='btn btn-primary'>Live Demo</a>
                </div>
                
            </article>

            <article className="portfolio__item">

                <div className="portfolio__item__image">
                    <img src="https://cdn.dribbble.com/userupload/2671207/file/original-3c3c15001c0e74784dc0976834274615.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200" alt="" />
                </div>
                <h3>Dummy</h3>

                <div className="portfolio__item__cta">
                    <a href="#noWhere" className='btn'>Github</a>
                    <a href="#noWhere" className='btn btn-primary'>Live Demo</a>
                </div>

            </article>

            <article className="portfolio__item">

                <div className="portfolio__item__image">
                    <img src="https://cdn.dribbble.com/userupload/2672525/file/still-2c3ab3e26e6973de11ab99c1540a6ef8.png?compress=1&resize=400x300&vertical=top" alt="" />
                </div>
                <h3>Dummy</h3>

                <div className="portfolio__item__cta">
                    <a href="#noWhere" className='btn'>Github</a>
                    <a href="#noWhere" className='btn btn-primary'>Live Demo</a>
                </div>

            </article>
        </div>
    </section>
  )
}

export default portfolio