import React from 'react'
import user from '../assets/user.jpeg'
import img2 from '../assets/img4.c30081624b5e75db2d05.jpg (1).png'
import img6 from '../assets/databrains-team-isle-2048x1365.466352a642ae9bed5d03.jpg.png'
import img7 from '../assets/unsplash_5QgIuuBxKwM-1024x683.115800ef8b985faca11c.jpg.png'
import img8 from '../assets/Stats03.png'
import { Fade, Zoom } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'
import user1 from '../assets/img2.bbcf183bb4aedea86f9e.jpg.png'
import user2 from '../assets/img2.bbcf183bb4aedea86f9e.jpg-1.png'
import user3 from '../assets/img2.bbcf183bb4aedea86f9e.jpg-2.png'

const About = () => {
  return (
    <div className='about-container'>
			<section>
				<div className='about-background-image'>
					<Fade direction='down' triggerOnce={true}>
					<div className='container'>
						<div className='d-flex'>
							<i className="fas fa-dot-circle mt-1 pe-2"></i>
							<h5>About Us</h5>
						</div>
						<h1>Get to know us</h1>
						<p>We use the latest data analytics technologies and best practices to ensure that our solutions are effective and efficient.</p>
					</div>
					</Fade>
				</div>				
			</section>

			<section className=' about-section-attachment-header'>
				<div className='container d-flex'>
					
					<div className='growing-demand-data-analytics-header'>
						<Fade direction='left' triggerOnce={true}>
						<div className='d-flex mb-4'>
							<i class="fas fa-dot-circle mt-1 me-2"></i>
							<h5>A strategy driven consulting company</h5>
						</div>	
						<div className='mb-5'>
							<h1>Missions and Visions</h1>
						</div>
						</Fade>
						<Fade direction='left' delay={400} triggerOnce={true}>				
						<div className='d-flex mt-5 growing-demand-data-analytics-header-number'>
							<p>Lorem ipsum dolor sit amet consectetur. Integer eu enim congue neque interdum velit sit in tristique. Dui faucibus adipiscing quam at pellentesque nibh pretium laoreet quisque. Aliquam enim at egestas pretium. Semper non sit a lorem lobortis justo. Vestibulum odio gravida sollicitudin et enim a habitasse a. Libero sed odio convallis enim mi varius vel. Nulla at lacinia at diam feugiat. Sit sit pretium feugiat urna urna sed diam. Hendrerit lorem amet turpis netus scelerisque et cras morbi. Ultrices dolor elementum arcu sagittis. Faucibus egestas adipiscing ut eget neque pellentesque feugiat ornare. Feugiat egestas amet amet in. Convallis nisl in purus amet. Vitae odio urna neque semper pulvinar sit. Praesent scelerisque consequat in nibh rhoncus. Volutpat arcu leo ante nullam nunc vel amet ut. Semper feugiat amet turpis velit facilisi faucibus. Neque tortor in non libero sit dui enim. Imperdiet adipiscing integer nisl morbi nulla. Integer facilisi ultrices urna sed ornare egestas sed. Augue leo nulla consectetur dictumst consectetur bibendum nunc pharetra. Varius est gravida molestie quam lectus enim sollicitudin risus neque. Et maecenas a penatibus tempor proin a. Varius est gravida molestie quam lectus enim sollicitudin risus neque. Et maecenas a penatibus tempor proin a.</p>
						</div>
						</Fade>

					</div>
					
					
					<div className='home-attachment-header'>
						<div className='home-attachment' >
						<Fade direction='right' triggerOnce={true}>
							<img src={img6} />
						</Fade>
						</div>
						<div className='d-flex'>							
							<div className='home-attachment2'>
								<Fade direction='right' delay={400} triggerOnce={true}>
								<img src={img8} />	
								</Fade>						
							</div>
							<div className='home-attachment3'>
								<Fade direction='right' delay={700} triggerOnce={true}>
								<img src={img7} />
								</Fade>
							</div>
						</div>
					</div>
					
				</div>
			</section>

		<section >
				<Fade direction='right' triggerOnce={true}>
					<div className='services-social'>								
						<div className='services-social-header'>
							<div className='d-flex mb-4'>
								<i class="fas fa-dot-circle mt-1 me-2"></i>
								<h5>We Have Got You Covered</h5>
							</div>
							<div>
								<h1 className='mb-3'>Let Us Help You See the Big Picture</h1>
								<p className='mb-5'>DataBrains is a data analytics company that helps businesses of all sizes make better decisions with data. We have a team of experts with decades of experience in data management, business intelligence, and advanced analytics.</p>
							</div>
							<div className='d-flex'>
								<i class="fas fa-chevron-circle-right mt-1 me-3"></i>
								<p>We help you understand your data and identify patterns and trends.</p>
							</div>
							<div className='d-flex'>
								<i class="fas fa-chevron-circle-right mt-1 me-3"></i>
								<p>We create visualizations that make your data easy to understand and act on.</p>
							</div>
							<div className='d-flex'>
								<i class="fas fa-chevron-circle-right mt-1 me-3"></i>
								<p>We recommend actions that can help you improve your business performance.</p>
							</div>

						</div>
					</div>
				</Fade>
				<div className='services-social-image-header'>
					<Fade direction='left' triggerOnce={true}>				
					<img src={img2} />
					</Fade>	
				</div>
		</section>

			<section>
				<div className='about-background-image2'>
					
					<div className='container user-header'>
						<div>
						<div className='d-flex'>
							<Fade direction='down' triggerOnce={true}>
							<i class="fas  fa-dot-circle me-2"></i>
							<h6 className=''>Our Team Lead</h6>
							</Fade>
						</div>
							<div>
								<Fade direction='down' triggerOnce={true}>
								<h2>The Brains Behind Your Data</h2>
								</Fade>
							</div>
						</div>
						<div className='user-images-header d-flex'>
							<Fade  triggerOnce={true} delay={400}>
							<div className='user'>
								<img src={user1} />
								<h5>Jane Doe</h5>
								<p>Co-Founder/Data Analyst</p>
							</div>
							<div className='user'>
								<img src={user2} />
								<h5>Jane Doe</h5>
								<p>Co-Founder/Data Analyst</p>
							</div>
							<div className='user'>
								<img src={user3} />
								<h5>Jane Doe</h5>
								<p>Co-Founder/Data Analyst</p>
							</div>
							</Fade> 
						</div>
					</div>
				</div>
			</section>


			<footer className=''>
				<Fade direction='up' triggerOnce={true}>
				<div className='footer-container'>
					<div className='container'>
						<div className='footer-header'>
							<div className='logo-section'>
								<div>
									<a href='/'>
									<h1>Logo</h1>
									</a>
									<p className='mt-4'>At DataBrains, we are committed to excellence. We use the latest data analytics technologies and best practices to ensure our clients get the most out of their data. We are also committed to building long-term relationships with our clients. We believe that by working together, we can help our clients achieve their business goals.</p>
								</div>
								<div className='d-flex lets-connect-header'>
									<i className="fas fa-dot-circle mt-1 pe-2"></i>
									<h6 className='mb-4 text'>Let's Connect on Social</h6>
								</div>
								<div className='socials'>
									<i class="fab fa-facebook"></i>
									<i class="fab fa-twitter"></i>
									<i class="fab fa-instagram"></i>
									<i class="fab fa-youtube"></i>
									<i class="fab fa-linkedin"></i>
									<i class="fab fa-tiktok"></i>
								</div>
							</div>
							<div className='link-section'>
								<div className='mb-3'>
									<h5>Quick Links</h5>
								</div>
								<ul>							
									<li><i class="icon icon-right-arrow1"></i><a href='/'>Home</a></li>
									<li><i class="icon icon-right-arrow1"></i><a href='/About'>About Us</a></li>
									<li><i class="icon icon-right-arrow1"></i><a href='/Services'>Services</a></li>
									<li><i class="icon icon-right-arrow1"></i><a href='/DataBlog'>Data Blog</a></li>
									<li><i class="icon icon-right-arrow1"></i><a href='/Contact'>Contact Us</a></li>
								</ul>
							</div>
							<div className='company-section'>
								<div className='mb-3'>
									<h5>Company</h5>
								</div>
								<div className='d-flex'>
									<i aria-hidden="true" class="fas fa-phone-alt"></i>
									<div>
										<h6>Phone Number</h6>
										<p>+234.....</p>
									</div>
								</div>
								<div className='d-flex'>
									<i aria-hidden="true" class="fas fa-mail-bulk"></i>
									<div>
										<h6>Email Us</h6>
										<p>1234@email.com</p>
									</div>
								</div>
								<div className='d-flex'>
									<i aria-hidden="true" class="fas fa-map-marked-alt"></i>
									<div>
										<h6>Address</h6>
										<p>+1234 road lagos</p>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>	
				</Fade>	
			</footer>
		</div>
  )
}

export default About