import React from 'react'
import user from '../assets/user.jpeg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpeg'
import { Fade, Zoom } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'


const PowerOfDataAnalytics = () => {
  return (
    <div>
      <section className=''>
				<div className='services-background-image data-as-new-oil-header'>
					<Fade direction='down' triggerOnce={true}>
					<div className='container'>
						<h1 className='w-75'>The Power of Data Analytics: How It Can Help You Make Better Decisions</h1>
					</div>
					<div className='d-flex container mt-4'>
						<div>
							<img src={user}/>
						</div>
						<div className='mt-2 ms-3'>
							<h5>Dr.Fauziya</h5>
							<h6>Author</h6>
						</div>
					</div>
					</Fade>
				</div>
			</section> 

			<section className='datablog-post-main-container'>
				<div className='datablog-post-container container d-flex'>
					<div className='datablog-post-header'>
						<div className='datablog-post-image-header power-data-analytics'>
							<div>
								<Fade direction='down' triggerOnce={true}>
								<img src={img4} />
								</Fade>
							</div>
							<Fade direction='up' triggerOnce={true}>
							<div>
								<h1 className='mt-3'>Introduction</h1>
								<p className='mt-3'>
								In today’s data-driven world, businesses and governments are increasingly turning to data analytics to gain insights into their operations and make better decisions. In Nigeria, there is a growing recognition of the value of data analytics, and both the government and private sector are starting to invest in data-driven initiatives.<br />

								<br/>There are many benefits to using data analytics, including:<br />

								<br /><span>Improved decision-making:</span> Data analytics can help businesses and governments make better decisions by providing insights into customers, operations, and markets.<br />
								<br /><span>Increased efficiency:</span> Data analytics can help businesses and governments become more efficient by automating tasks and identifying areas where costs can be saved.<br />
								<br /><span>Enhanced customer experience:</span> Data analytics can help businesses and governments improve the customer experience by providing personalized recommendations and targeted marketing campaigns.<br />
								<br /><span>Reduced risk:</span> Data analytics can help businesses and governments reduce risk by identifying potential problems before they occur.<br />
								</p>
							</div>
							</Fade>
							<Fade>
							<div>
								<h1>The Benefits of Data Analytics for Nigerian Government and Corporate Organisations</h1>
								<p>The Nigerian government and private corporate organisations can use data analytics to understand <br />their activities in a number of ways. For example, the government can use data analytics to:<br />

									<span><br />Track the performance of its programs and services.<br/></span>
									<span><br />Identify areas where resources are being wasted.<br/></span>
									<span><br />Target its interventions more effectively.<br/></span>
									<span><br />Understand the needs of its citizens.<br/></span>
									<span><br />Make better decisions about policy and planning.<br/></span>
									Private corporate organisations can use data analytics to:<br/>

									<span><br/>Understand their customers’ needs.<br/></span>
									<span><br/>Identify new market opportunities.<br/></span>
									<span><br/>Improve their operational efficiency.<br/></span>
									<span><br/>Reduce costs.<br/></span>
									<span><br/>Increase profits.<br/></span>
								</p>
							</div>
							</Fade>
							<Fade bottdirection='up' triggerOnce={true}om>
							<div>
								<h1>Why You Should Consider DataBrains Technology Consulting Ltd. for Your Data-Related Services</h1>
								<p><br/>You should consider DataBrains Technology Consulting Ltd. for your data-related services for many reasons. Here are just a few:<br/>
										<span><br/>We have a team of experienced data scientists and analysts:</span> Our team has a wealth of experience in using data to solve business problems. We have worked with a wide range of clients, from small businesses to large corporations, and we have a proven track record of success.<br/>
										<span><br/>We offer a wide range of data-related services:</span> We offer a wide range of data-related services, including data collection, cleaning, analysis, and visualization. We can help you collect data from various sources, clean and prepare it for analysis, and visualize the results in a way that is easy to understand.<br/>
										<span><br/>We are committed to providing excellent customer service:</span> We are committed to providing excellent customer service. We understand that your data is important, and we will work with you to ensure your project is completed on time and within budget.<br/></p>
							</div>
							</Fade>
							<div>
							<Fade direction='up' triggerOnce={true}>
								<h1 className='mb-4'>Conclusion</h1>
								<p>In conclusion, data analytics is a powerful tool that can be used by businesses and governments alike to improve their operations and make better decisions. If you are looking for a data-related services company that can help you understand your activities more, don’t hesitate to contact DataBrains Technology Consulting Ltd. today. We would be happy to discuss your needs and how we can help you to achieve your goals.</p>
							</Fade>
							</div>
						</div>

					</div>
					<div>
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
										<h6>Data as the New Oil: Unlocking the Untapped Potential</h6>
										<p>July 31,2023</p>
									</div>
									
								</div>

								<div className='d-flex'>
									<div>
										<img src={img4}/>
									</div>
									<div className='ms-3'>
										<h6>Helping Businesses Achieve Data Mission and Profitable Growth with Latest Technology</h6>
										<p>June 22,2023</p>
									</div>
								</div>

								<div className='d-flex'>
									<div>
										<img src={img3}/>
									</div>
									<div className='ms-3'>
										<h6>The Power of Data Analytics: How It Can Help You Make Better Decisions</h6>
										<p>June 21,2023</p>
									</div>
								</div>
							</div>
						</Fade>
						<Fade direction='right' triggerOnce={true} delay={200}>
							<div className='recent-post-social-header'>
								<div className='recent-post-social'>
									<div className='d-flex recent-post-social-follow-us'>
										<i class="fas fa-dot-circle mt-1 me-2 mb-4"></i>
										<h6>Follow us to ahieve more</h6>
									</div>
									<div className='socials'>
										<i class="fab fa-facebook"></i>
										<i class="fab fa-twitter"></i>
										<i class="fab fa-instagram"></i>
										<i class="fab fa-youtube"></i>
										<i class="fab fa-linkedin"></i>
										<i class="fab fa-tiktok"></i>
									</div>
									<div>
										<h1>The Power of Data Analytics</h1>
										<p>Share the Love</p>
									</div>
									<div className='home-socials'>
										<i class="fab fa-facebook"></i>
										<i class="fab fa-twitter"></i>
										<i class="fab fa-linkedin"></i>
										<i class="fas fa-envelope"></i>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				</div>
				<div className='d-flex container about-author mt-5'>
					<div className=''>
						<img src={user}/>
					</div>
					<div>
						<h2>Dr. Fauziya</h2>
						<p>Dr. Fauziya is a data scientist with over 5 years of experience in the field. She has a Master's degree in Data Science from the University of Chicago and has worked at a variety of startups and small businesses. Miss Lady is an expert in data visualization and predictive analytics, and she has a passion for using data to help businesses make better decisions. She is a frequent contributor to open source data science projects and is a mentor to aspiring data scientists.</p>
					</div>
				</div>

				<div className='container mb-5 pb-5 leave-reply' >
					<div>
					<Fade direction='down' triggerOnce={true}>
						<h1 className='mb-4'>Leave a Reply</h1>
						<p>Your email address will not be published. Required fields are marked *</p>
					</Fade>
					</div>
					<Zoom triggerOnce={true}>
					<form action="/submit" method="post ">
						<div class="form-group col-8">
							<label for="comments" className='mb-2 label'>Comments <span class="required">*</span></label>
							<textarea rows='8' class="form-control" id="comments" name="comments" required></textarea>
							<span class="error-message">This field is required.</span>
						</div>

							<div class="form-group col-8">
								<label for="first_name" className='mb-2 label'>Name <span class="required">*</span></label>
								<input type="text" class="form-control" id="first_name" name="first_name"  required/>
								<span class="error-message">This field is required.</span>
							</div>


							
							<div class="form-group col-8">
								<label for="email" className='mb-2 label'>Email <span class="required">*</span></label>
								<input	type="email" class="form-control" id="email" name="email" required/>
								<span class="error-message">This field is required.</span>
							</div>	

							<div class="form-group col-8">
								<label for="email" className='mb-2 label'>Website <span class="required">*</span></label>
								<input	type="email" class="form-control" id="email" name="email" required/>
								<span class="error-message">This field is required.</span>
							</div>	

						<input type="submit" class="btn btn-primary mt-4 post-btn" value="Post Comment"/>
					</form>
					</Zoom>
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

export default PowerOfDataAnalytics