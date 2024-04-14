import React from 'react'
import img4 from '../assets/img4.jpg'
import user from '../assets/user.jpeg'
import img1 from '../assets/databrain_lady3.png'
import stats from '../assets/Stats03.png'
import analytics from '../assets/Analytics.png'
import { Fade, Zoom } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'



const Services = () => {
  return (
    <div>
			<section>
				<div className='services-background-image'>
				<Fade direction='down' triggerOnce={true}>
					<div className='container '>
						<h5>Services</h5>
						<h1>Premium Data Services</h1>
						<p>We use the latest data analytics technologies and best practices to ensure that our solutions are effective and efficient.</p>
					</div>
				</Fade>				
				</div>
			</section>


			<section className=''>
				<div className='background-image-2'>
					<div className='container'>
						<div className='d-flex services-text-header'>
							<Fade direction='down' triggerOnce={true}>
							<div>
								<div className='d-flex'>
									<i class="fas fa-dot-circle mt-1 me-2"></i>
									<h5>Boost Your Business with Intelligence</h5>
								</div>
								<div>
									<h1>Transforming Data into Actionable Insights: Our Wide Range of Data Services</h1>
								</div>
							</div>
							<div>
								<p>At DataBrains, we are committed to excellence. We use the latest data analytics technologies and best practices to ensure that our clients get the most out of their data. We are also committed to building long-term relationships with our clients. We believe that by working together, we can help our clients achieve their business goals.</p>
							</div>
							</Fade>
						</div>
						<div className='background-header d-flex'>
							<div className='background'>
							<Fade direction='left' triggerOnce={true}>
								<h3>Data Foundations</h3>
								<h4>Data Architecture</h4>
								<p>We help you design and implement a data architecture that meets your business needs.</p>
								<h6><a href=''>Read more ...</a></h6>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='down' triggerOnce={true}>
								<h3>Data Insights</h3>
								<h4>Data Science</h4>
								<p>We help you collect, clean, and analyze data to gain insights that can improve your business decisions.</p>
								<h6><a href=''>Read more ...</a></h6>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='right' triggerOnce={true}>
								<h3>Language Intelligence</h3>
								<h4>Natural Langugage Processing</h4>
								<p>We help you understand and process human language to build chatbots, virtual assistants, and other NLP-powered applications.</p>
								<h6><a href=''>Read more ...</a></h6>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='right' triggerOnce={true}>
								<h3>Algorithmic Intelligence</h3>
								<h4>Machine Learning</h4>
								<p>We help you build and deploy machine learning models to make predictions and recommendations, and automate tasks.</p>
								<h6><a href=''>Read more ...</a></h6>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='up' triggerOnce={true}>
								<h3>Creative Intelligence</h3>
								<h4>Generative AI</h4>
								<p>We help you create new content, such as text, images, or videos, using generative AI.</p>
								<h6><a href=''>Read more ...</a></h6>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='left' triggerOnce={true}>
								<h3>Digital Insights</h3>
								<h4>Web Analytics</h4>
								<p>We help you track and analyze your website traffic to identify trends and patterns that can improve your website performance and conversion rates.</p>
								<h6><a href=''>Read more ...</a></h6>
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
						<div className='services-contact d-flex mt-5'>
							<div className='d-flex me-5'>
								<div>
									<img />
								</div>
								<div>
									<h2 className='text-light'>Dr. Fauziya</h2>
									<p>Lead Data Engineer</p>
								</div>							
							</div>
							<div className='d-flex ms-5'>
								<div className='me-4'>
									<i class="fas fa-phone-alt"></i>
								</div>
								<div>
									<h2 className='text-light'>+234........</h2>
									<p>WhatsApp & SMS</p>
								</div>						
							</div>
						</div>
						<div className='services-connect'>
							<div className='d-flex'>
								<i class="fas fa-dot-circle mt-1 me-2 mb-4"></i>
								<h5>Let's Connect on Social</h5>
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
					</div>
					</div>
				</Fade>
				<div className='services-social-image-header'>
					<Fade direction='left' triggerOnce={true}>						
					<img src={img4} />
					</Fade>
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
									<img src={footerlogo} />
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

export default Services