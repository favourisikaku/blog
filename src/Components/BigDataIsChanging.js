import React from 'react'
import user from '../assets/user.jpeg'
import img3 from '../assets/img3.af4f50811d29b7c87650.jpg.png'
import img4 from '../assets/img5.021f9dd8f8e68151a72f.jpeg.png'
import img5 from '../assets/img4.c30081624b5e75db2d05.jpg.png'
import img2 from '../assets/img5.021f9dd8f8e68151a72f.jpeg-1.png'
import { Fade, Zoom } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'


const BigDataIsChanging = () => {
  return (
    <div>
      <section className=''>
				<div className='services-background-image data-as-new-oil-header'>
					<Fade direction='down' triggerOnce={true}>
					<div className='container'>
						<h1 className='w-75'>How Big Data is Changing the Way Multinational Companies Deliver Products and Services</h1>
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
						<div className='datablog-post-image-header helping-business-achieve-data container'>
							<div>
								<Fade direction='down' triggerOnce={true}>
								<img src={img2} />
								</Fade>
							</div>
							<Fade direction='up' triggerOnce={true}>
							<div>
								<div>
									<h6 className='mt-3'>Introduction:</h6>
									<p className='mt-3'>
									In today’s data-driven world, big data is revolutionizing the way businesses operate. Big data is the collection of large and complex datasets that can be analyzed to gain insights into customer behaviour, market trends, and other factors. This information can improve decision-making, optimize operations, and deliver products and services that meet customer expectations.
									</p>								
									</div>
								<div>
									<h6 className='mt-3'>Body:</h6>
									<p className='mt-3'>
									Big data is particularly valuable for multinational companies that operate in multiple markets. By analyzing data from different countries and regions, these companies can identify trends and patterns that would be invisible if they only looked at data from a single market. This information can be used to tailor products and services to the specific needs of each market, which can lead to increased sales and profits.<br/>

									<br/>For example, a multinational company that sells clothing wants to increase sales in China. By analyzing data from Chinese customers, the company can identify the colours, styles, and sizes that are most popular in China. The company can then use this information to adjust its product offerings to meet Chinese customers’ needs better.<br/>

									<br/>In addition to improving product offerings, big data can also be used to optimize operations. For example, a multinational company operating a truck fleet can use big data to identify the most efficient routes between different locations. This can help the company to reduce fuel costs and improve delivery times.<br/>
									</p>
									<div>
										<h6>Conclusion</h6>
										<p>Big data is a powerful tool that can improve how multinational companies deliver products and services. By analyzing data from different markets and optimizing operations, these companies can increase sales, improve profits, and provide a better customer experience.</p>
									</div>
									<div>
										<h6>Call to Action</h6>
										<p>If you are a multinational company looking to improve the way you deliver products and services, big data is a valuable tool you should consider using. There are a number of different ways to use big data so that you can tailor your approach to the specific needs of your business.</p>
									</div>
									<div>
										<h6>Additional Information:</h6>
										<p>In addition to the information mentioned above, here are some other ways that multinational companies are using big data to deliver customer-expected products and services:</p>
										<p>
											<span>Personalization:</span> Big data can be used to personalize products and services to each customer’s specific needs. For example, a company that sells online could use big data to recommend products to customers based on their past purchases and browsing history.<br />
											<br /><span>Predictive analytics:</span> Big data can be used to predict customer behaviour. This information can be used to improve customer service, target marketing campaigns, and prevent fraud.<br />
											<br /><span>Risk management:</span> Big data can be used to identify and manage risks. For example, a financial services company could use big data to identify customers at risk of defaulting on their loans.<br />
											Big data is a rapidly growing field, and there are many new and innovative ways that businesses are using it. If you are a multinational company that is looking to stay ahead of the competition, big data is a technology that you should keep an eye on.										</p>
									</div>
								</div>
		
							</div>
							</Fade>
						</div>

					</div>
					<div>
						<Fade direction='right' triggerOnce={true}>
						<div className='recent-post container'>
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
								<div className='socials text-center'>
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

export default BigDataIsChanging