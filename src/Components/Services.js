import React from 'react'
import img4 from '../assets/img4.c30081624b5e75db2d05.jpg (1).png'
import img1 from '../assets/databrain_lady3.9c1f0ac3ec2160d89264.png.png'
import { Fade, Zoom } from 'react-awesome-reveal'


const Services = () => {
  return (
    <div>
			<section>
				<div className='services-background-image'>
				<Fade direction='down' triggerOnce={true}>
					<div className='container '>
						<div className='d-flex'>
							<h5>Services</h5>
						</div>
						<h1>Premium Data Services</h1>
						<p>We use the latest data analytics technologies and best practices to ensure that our solutions are effective and efficient.</p>
					</div>
				</Fade>				
				</div>
			</section>

			<section>
				<div className='services-background-image2'>
					<div className='d-flex container'>
						<div className='services-background-image2-header'>
							<Fade direction='down' triggerOnce>
							<div className='d-flex'>
								<h5>Unleash the Power of Your Data with DataBrains</h5>
							</div>
							</Fade>
							<Fade direction='down' triggerOnce>
							<div>
								<h1>Your Top Choice for Professional Data Services!</h1>
							</div>
							</Fade>
							<Fade direction='down' triggerOnce >
							<div className='services-top-choice d-flex'>
							<i class="fa-solid fa-signal ms-4 me-5"></i>
								<div>
									<h4>Improved Decision-Making</h4>
									<p>Data analysis can help businesses make better decisions by providing insights into their customers, competitors, and market trends.</p>
								</div>
							</div>
							</Fade>
							<Fade direction='up' triggerOnce>
							<div className='services-top-choice d-flex'>
							<i class="fa-regular fa-address-card ms-4 me-5"></i>
								<div>
									<h4>Enhanced Customer Experience</h4>
									<p>Data analysis can help businesses improve the customer experience by providing personalized recommendations and targeted marketing campaigns.</p>
								</div>
							</div>
							</Fade>
						</div>
						<div className='services-image-header'>
							<Zoom direction='up' triggerOnce >
								<img src={img1} />
							</Zoom>
						</div>
							{/* <Zoom triggerOnce>
							<div className='stat'>
								<img src={analytics} />
								<img src={stats} />
							</div>
							</Zoom> */}
						
					</div>
				</div>
			</section>

			<section className=''>
				<div className='background-image-2'>
					<div className='container'>
						<div className='d-flex services-text-header'>
							<Fade direction='down' triggerOnce={true}>
							<div>
								<div className='d-flex'>
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
								<div className='d-flex'>
									<div className='background-number'>
										<h6>1</h6>
									</div>
									<div>
										<h3>Data Foundations</h3>
										<h4>Data Architecture</h4>
										<p>We help you design and implement a data architecture that meets your business needs.</p>

									</div>
								</div>
	
							</Fade>
							</div>							
							<div className='background'>
							<Fade direction='down' triggerOnce={true}>
								<div className='d-flex'>
									<div className='background-number'>
										<h6>2</h6>
									</div>
									<div>
								<h3>Data Insights</h3>
								<h4>Data Science</h4>
								<p>We help you collect, clean, and analyze data to gain insights that can improve your business decisions.</p>
								</div>
								</div>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='right' triggerOnce={true}>
								<div className='d-flex'>
									<div className='background-number'>
										<h6>3</h6>
									</div>
									<div>
								<h3>Language Intelligence</h3>
								<h4>Natural Langugage Processing</h4>
								<p>We help you understand and process human language to build chatbots, virtual assistants, and other NLP-powered applications.</p>
								</div>
								</div>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='right' triggerOnce={true}>
								<div className='d-flex'>
									<div className='background-number'>
										<h6>4</h6>
									</div>
									<div>
								<h3>Algorithmic Intelligence</h3>
								<h4>Machine Learning</h4>
								<p>We help you build and deploy machine learning models to make predictions and recommendations, and automate tasks.</p>
								</div>
								</div>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='up' triggerOnce={true}>
								<div className='d-flex'>
									<div className='background-number'>
										<h6>5</h6>
									</div>
									<div>
								<h3>Creative Intelligence</h3>
								<h4>Generative AI</h4>
								<p>We help you create new content, such as text, images, or videos, using generative AI.</p>
								</div>
								</div>
							</Fade>
							</div>
							<div className='background'>
							<Fade direction='left' triggerOnce={true}>
								<div className='d-flex'>
									<div className='background-number'>
										<h6>6</h6>
									</div>
									<div>
								<h3>Digital Insights</h3>
								<h4>Web Analytics</h4>
								<p>We help you track and analyze your website traffic to identify trends and patterns that can improve your website performance and conversion rates.</p>
								</div>
								</div>
							</Fade>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section >
				<Fade direction='right' triggerOnce={true}>
					<div className='services-social-white-bg'>								
						<div className='services-social-header-white-bg'>
							<div className=' mb-4'>
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
					<div className='services-social-image-header-white-bg'>
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
									<h1>Logo</h1>
									</a>
								</div>
	
								<div className='socials mt-3'>
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
										<p>+234.....</p>
									</div>
								</div>
								<div className='d-flex'>
									<i aria-hidden="true" class="fas fa-mail-bulk"></i>
									<div>
										<p>1234@email.com</p>
									</div>
								</div>
								<div className='d-flex'>
									<i aria-hidden="true" class="fas fa-map-marked-alt"></i>
									<div>
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