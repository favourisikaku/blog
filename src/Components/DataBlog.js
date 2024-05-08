import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img5.021f9dd8f8e68151a72f.jpeg-1.png'
import img3 from '../assets/img3.af4f50811d29b7c87650.jpg.png'
import img4 from '../assets/img5.021f9dd8f8e68151a72f.jpeg.png'
import img5 from '../assets/img4.c30081624b5e75db2d05.jpg.png'
import { Fade } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'


const DataBlog = () => {
  return (
    <div>
			<section>
				<div className='services-background-image'>
					<Fade direction='down' triggerOnce={true}>
					<div className='container datablog-main'>
						<div className='d-flex'>
							<i class="fas  fa-dot-circle mt-1  me-2"></i>
							<h5>Data Blog</h5>
						</div>
						<h1>Learn From The Experts</h1>
						<p>By reading these articles, you can gain insights into your customers, identify opportunities for growth, and make better decisions.</p>
					</div>
					</Fade>
				</div>
			</section>

			<section>
				<div className='datablog-post-container d-flex container'>
					<div className='datablog-post-header d-flex'>
						<Fade direction='down' triggerOnce={true}>
							<div className='datablog-post'>
								<img src={img5} />
								<h6>Data as the New Oil: Unlocking the Untapped Potential</h6>
								<div><i aria-hidden="true" class="fas fa-user"></i><span>Name</span></div>
								<p>As a data science consultant, I’ve had the opportunity to...</p>
								<div>
									<a href='/DataAsNewOil'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
								</div>
							</div>
						</Fade>
						<Fade direction='down' triggerOnce={true}  delay={200}>
						<div className='datablog-post'>
							<img src={img4}/>
							<h6>The Power of Data Analytics: How It Can Help You Make Better Decisions</h6>
							<div><i aria-hidden="true" class="fas fa-user"></i><span>Name</span></div>
							<p>Introduction In today's data-driven world, businesses and governments are increasingly...</p>
							<div>
								<a href='/PowerOfDataAnalytics'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
							</div>
						</div>
						</Fade>
						<Fade direction='down' triggerOnce={true} delay={400}>
							<div className='datablog-post'>
								<img src={img3}/>
								<h6>Helping Businesses Achieve Data Mission and Profitable Growth with Latest Technology</h6>
								<div><i aria-hidden="true" class="fas fa-user"></i><span>Name</span></div>
								<p>Introduction: In today's data-driven world, businesses need to use data...</p>
								<div>
									<a href='/HelpingBusinessAchieveData'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
								</div>
							</div>
						</Fade>
						<Fade direction='down' triggerOnce={true} delay={600}>
							<div className='datablog-post'>
								<img src={img2}/>
								<h6>How Big Data is Changing the Way Multinational Companies Deliver Products and Services</h6>
								<div><i aria-hidden="true" class="fas fa-user"></i><span>Name</span></div>
								<p>Introduction: In today's data-driven world, big data is revolutionizing the...</p>
								<div>
									<a href='/BigDataIsChanging'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
								</div>

							</div>
						</Fade>

						{/* <Fade direction='down' triggerOnce={true} delay={400}>
							<div className='datablog-post'>
								<img src={img1}/>
								<h6>How Artificial Intelligence and Data Analytics Are Helping Businesses Grow Beyond Imagination</h6>
								<div><i aria-hidden="true" class="fas fa-user"></i><span>Dr. Fauziya</span></div>
								<p>Introduction: The recent proliferation of artificial intelligence (AI) and data...</p>
								<div className='mb-5'>
									<a href='/ArtificialIntelligence'>Read more</a>
									<i aria-hidden="true" class="fas fa-arrow-right"></i>
								</div>
							</div>
						</Fade> */}
					</div>
					<div className='recent-post-header'>
						<Fade direction='right' triggerOnce={true}>
							<div className='recent-post'>
								<div>
									<h3>Recent Posts</h3>
								</div>
								<div className='d-flex'>
									<div>
										<img src={img5} />
									</div>
									<div className='ms-3'>
										<a href='/DataAsNewOil'>

										<h6>Data as the New Oil: Unlocking the Untapped Potential</h6>
										</a>
										<p>July 31,2023</p>
									</div>
									
								</div>

								<div className='d-flex'>
									<div>
										<img src={img4}/>
									</div>
									<div className='ms-3'>
										<a href='/HelpingBusinessAchieveData'>
										<h6>Helping Businesses Achieve Data Mission and Profitable Growth with Latest Technology</h6>
										</a>
										<p>June 22,2023</p>
									</div>
								</div>

								<div className='d-flex'>
									<div>
										<img src={img3}/>
									</div>
									<div className='ms-3'>
										<a href='/PowerOfDataAnalytics'>
										<h6>The Power of Data Analytics: How It Can Help You Make Better Decisions</h6>
										</a>
										<p>June 21,2023</p>
									</div>
								</div>
							</div>
						</Fade>
					
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

export default DataBlog