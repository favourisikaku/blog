import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal'
import footerlogo from '../assets/db_logo_grey.png'


const Contact = () => {
  return (
    <div>
      <section>
		<div className='services-background-image'>
			<Fade direction='down' triggerOnce={true}>
			<div className=' contactus-header'>
				<h5>Contact Us</h5>
				<h1>Get Support from us Anytime</h1>
				<p>We use the latest data analytics technologies and best practices to ensure that our solutions are effective and efficient.</p>
			</div>
			</Fade>
		</div>
			
		</section>

		<section>
			<div className='contatus-container'>		
				<Fade direction='up' triggerOnce={true}>
					<div className='contatus-container-main'>
						<h2>Contact us Anytime</h2>
						<p>We're here to help! Please fill out the form below, and we'll get back to you soon.</p>
					</div>
				</Fade>
				<div >
					<div className='form-container' >
						<div>
							<Fade direction='down' triggerOnce={true}>
							<h2>Send your Query Here</h2>
							</Fade>
						</div>
						<Zoom  triggerOnce={true}>
							<form action="/submit" method="post ">
								<div class="row">
									<div class="form-group col-6">
										<label for="first_name" className='mb-2 label'>First Name <span class="required">*</span></label>
										<input type="text" class="form-control" id="first_name" name="first_name" placeholder='First name here' required/>
										<span class="error-message">This field is required.</span>
									</div>

									<div class="form-group col-6">
										<label for="last_name" className='mb-2 label'>Last Name <span class="required">*</span></label>
										<input type="text" class="form-control" id="last_name" name="last_name" placeholder='Last name here' required/>
										<span class="error-message">This field is required.</span>
									</div>
								</div>
								<div className='row'>
									
									<div class="form-group col-6">
										<label for="email" className='mb-2 label'>Email Address <span class="required">*</span></label>
										<input	type="email" class="form-control" id="email" name="email" placeholder='Add Email' required/>
										<span class="error-message">This field is required.</span>
									</div>	

									<div class="form-group col-6">
										<label for="subject className='mb-2 label'">Subject <span class="required">*</span></label>
										<input type="text" class="form-control" id="subject" name="subject " placeholder='How can we help you?' required/>
										<span class="error-message">This field is required.</span>
									</div>
								</div>

								<div class="form-group col-12">
									<label for="comments" className='mb-2 label'>Comments / Questions <span class="required">*</span></label>
									<textarea rows='8' class="form-control" id="comments" name="comments"placeholder='Comments' required></textarea>
									<span class="error-message">This field is required.</span>
								</div>

								<input type="submit" class="btn btn-primary mt-4" value="Send Message"/>
							</form>
						</Zoom>
					</div>
				</div>
			</div>
		</section>

      <section>
		<div className='contact-background-image2'>
			<div className='container'>
			< Fade direction='down' triggerOnce={true}>
			<div className='contactus-social'>
				<div className='d-flex'>
					<i class="fas fa-dot-circle mt-1 me-2"></i>
					<h5>Boost Your Business with Intelligence</h5>
				</div>
				<div>
				<h1>Contact us & get support anytime</h1>
				</div>
			</div>
			</Fade>
			<Zoom  triggerOnce={true}>
			<div className='d-flex'>
				<div className='contactus-item ps-5'>
				<div>
					<i aria-hidden="true" class="fas fa-phone-alt"></i>
				</div>
				<div>
					<h4>Contact Us</h4>
					<h6>+234.......</h6>
				</div>
				</div>
				<div className='contactus-item ps-5'>
				<div>
					<i aria-hidden="true" class="fas fa-mail-bulk"></i>
				</div>
				<div>
					<h4>Mail Us</h4>
					<h6>1234@mail.com</h6>
				</div>
				</div>
				<div className='contactus-item ps-5'>
				<div>
				<i aria-hidden="true" class="fab fa-facebook-messenger"></i>
				</div>
				<div>
					<h4>Live Chat</h4>
					<h6>Whatsapp</h6>
				</div>
				</div>
				<div className='contactus-item ps-5'>
				<div>
				<i aria-hidden="true" class="fas fa-location-arrow"></i>
				</div>
				<div>
					<h4>Our HQ</h4>
					<h6>Lagos Nigeria</h6>
				</div>
				</div>
			</div>
			</Zoom>
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

export default Contact