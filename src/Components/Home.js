import React from 'react'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/databrains-team-isle-2048x1365.jpg'
import img7 from '../assets/unsplash_5QgIuuBxKwM-1024x683.jpg'
import img8 from '../assets/Stats03.png'
import uba from '../assets/uba.png'
import firstbank from '../assets/firstbank-2048x552.png'
import facebook from '../assets/facebook-2048x396.png'
import dstv from '../assets/dstv.png'
import dhl from '../assets/dhl-2048x286.png'
import main from '../assets/databrain_man1.png'
import user from '../assets/user.jpeg'
import { Fade, Zoom } from 'react-awesome-reveal'
import stat from '../assets/Stats01.png'
import sales from '../assets/Group-921.png'
import footerlogo from '../assets/db_logo_grey.png'


const Home = () => {
  return (
    <div className=''>
      <section >
		<div className='background-image'>
			<div className='container d-flex'>
				<div className='background-image-header'>
					<Fade direction='down' triggerOnce={true}>
					<div className='d-flex'>
						<i class="fas fa-dot-circle mt-1 me-2"></i>
						<h6>DataBrains Technology Consulting</h6>
					</div>
					<div>
						<h1>The Data Analytics Experts You Can Trust</h1>
						<p>We're a data analytics company that helps businesses of all sizes make better decisions with data. Our team of experts has decades of experience in data management, business intelligence, and advanced analytics.</p>
					</div>
					</Fade>
					<div className='home-btn-header d-flex'>
						<Fade direction='up' triggerOnce={true}>
						<div className='home-btn mt-5'>
							<a href='/About'><button >About Us</button></a>		
						</div>
						<div className='home-btn-2 mt-5'>
							<a href='/Contact'><button>Contact Us</button></a>
						</div>
						</Fade>
					</div>					
				</div>
				<div>
					<Zoom direction="up" delay={1000} triggerOnce={true}>
					<img src={main}/>
					</Zoom>
					<div className='home-img1'>
						<Zoom triggerOnce={true}>
						<img  src={sales} />
						</Zoom>
					</div>
					<div className='home-img2'>
						<Zoom triggerOnce={true}>
						<img  src={stat} />
						</Zoom>
					</div>
					<div className='home-img3'>
						<Zoom triggerOnce={true}>
						<img  src={img8} />
						</Zoom>
					</div>
				</div>
			</div>
		</div>
			
		</section>

			<section>
				<div className='container'>
					<div className='d-flex home-carousel-header pt-5 pb-5'>
						<div className='mt-4 home-carousel'>
							<Fade direction='left' triggerOnce={true}>
							<div>
								<h3>Leaders who trust data analytics for growth</h3>
							</div>
							<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">						
								<div class="carousel-inner d-flex">
									<div class="carousel-item active d-flex">
										<img src={uba} class="d-block " alt="..."/>
										<img src={firstbank} class="d-block " alt="..."/>
										<img src={dhl} class="d-block " alt="..."/>
										<img src={facebook} class="d-block " alt="..."/>
										<img src={dstv} class="d-block w-25" alt="..."/>
									</div>	
								</div>
							</div>
							</Fade>
						</div>
						<div>							
							<div className='home-rating'>
								<Fade direction='right' triggerOnce={true}>
								<div >
									<i class="elementor-star-full">★</i>
									<i class="elementor-star-full">★</i>
									<i class="elementor-star-full">★</i>
									<i class="elementor-star-full">★</i>
									<i class="elementor-star-full">★</i>
								</div>
								
								<div>							
									<h1>97.2<span>%</span></h1>
									<p>of big companies around the world are investing in big data and analytics projects.</p>
								</div>
								</Fade>
							</div>
						</div>
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
									<div className='me-3'>
										<img src={user}/>
									</div>
									<div>
										<h2 className='text-light'>Dr. Fauziya</h2>
										<p>Lead Data Engineer</p>
									</div>							
								</div>
								<div className='d-flex services-contact-whatsapp ms-5'>
									<div className='me-3'>
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

			<section className='home-section-attachment-header'>
				<div className='container d-flex'>
					
					<div>
						<Fade direction='left' triggerOnce={true}>
						<div className='d-flex mb-4'>
							<i class="fas fa-dot-circle mt-1 me-2"></i>
							<h5>A strategy driven consulting company</h5>
						</div>	
						<div className='mb-5'>
							<h1>The Growing Demand for Data Analytics</h1>
						</div>
						</Fade>
						<Fade direction='left' delay={400} triggerOnce={true}>				
						<div className='d-flex mt-5'>
							<h2 >90 %</h2>
							<p>Of the world’s data has been created in the last two years.</p>
						</div>
						</Fade>
						<Fade direction='left' delay={600} triggerOnce={true}>
						<div className='d-flex mt-5'>
							<h2>58 %</h2>
							<p>Data-driven companies are more likely to beat revenue goals.</p>
						</div>
						</Fade>
						<Fade direction='left' delay={800} triggerOnce={true}>
						<div className='d-flex mt-5'>
							<h2>$ 274 +</h2>
							<p>The global data analytics market is expected to reach $274.3 billion by 2025.</p>
						</div>
						</Fade>
						<Fade direction='left' delay={1000} triggerOnce={true}>
						<div className='home-connect-social'>
							<div className='d-flex mt-5'>
								<i class="fas fa-dot-circle mt-1 me-2 mb-4"></i>
								<h6>Let's Connect on Social</h6>
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

			<section className='home-background-image4'>
				<div className='container home-articles-header d-flex'>
					<Fade direction='down' triggerOnce={true}>
					<div className='mb-5'>
						<div className='d-flex mb-2'>
							<i class="fas fa-dot-circle mt-1 me-2"></i>
							<h6>Simple Steps to Grow With DataBrains</h6>
						</div>
						<div>
							<h1>From our Data Blog</h1>
						</div>
					</div>
					<div>
						<a href='/DataBlog'><button>Discover More</button></a>
					</div>
					</Fade>
				</div>
				<div className='home-articles container'>
					<Fade direction='left' triggerOnce={true}>
					<div className='home-articles-post'>
						<div>
							<img src={img5} />
							<h6>Data as the New Oil: Unlocking the Untapped Potential</h6>
							<div>
								<i aria-hidden="true" class="fas fa-user me-2"></i><span>Dr. Fauziya</span>
							</div>
							<div>
								<p>As a data science consultant, I’ve had the opportunity to speak with many large organizations that provide data about other...</p>
							</div>
							<div>
								<a href='/DataAsNewOil'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
							</div>
						</div>
					</div>
					</Fade>
					<Fade direction='down' triggerOnce={true}>
					<div className='home-articles-post'>
						<div>
							<img src={img4} />
							<h6>The Power of Data Analytics: How It Can Help You Make Better Decisions</h6>
							<div>
								<i aria-hidden="true" class="fas fa-user me-2"></i><span>Dr. Fauziya</span>
							</div>
							<div>
								<p>Introduction In today's data-driven world, businesses and governments are increasingly turning to data analytics to gain insights into their operations...</p>
							</div>
							<div>
								<a href='/PowerOfDataAnalytics'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
							</div>
						</div>
					</div>
					</Fade>
					<Fade direction='right' triggerOnce={true}>
					<div className='home-articles-post'>
						<div>
							<img src={img3} />
							<h6>Helping Businesses Achieve Data Mission and Profitable Growth with Latest Technology</h6>
							<div>
								<i aria-hidden="true" class="fas fa-user me-2"></i><span>Dr. Fauziya</span>
							</div>
							<div>
								<p>Introduction: In today's data-driven world, businesses need to use data to achieve their goals. However, many businesses struggle to do...</p>
							</div>
							<div>
								<a href='/HelpingBusinessAchieveData'><button >Read more<i aria-hidden="true" class="fas fa-arrow-right ms-2"></i></button></a>					
							</div>
						</div>
					</div>
					</Fade>
				</div>
				<div className='home-connect'>
					<Fade direction='up' triggerOnce={true}>
					<div className='d-flex home-connect-text'>
						<i class="fas fa-dot-circle mt-1 me-2 mb-4"></i>
						<h6>Let's Connect on Social</h6>
					</div>
					<div className='home-socials'>
						<i class="fab fa-facebook"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-linkedin"></i>
						<i class="fas fa-envelope"></i>
					</div>
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

export default Home