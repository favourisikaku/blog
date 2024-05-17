import React from 'react'
import img3 from '../assets/img4.c30081624b5e75db2d05.jpg.png'
import img4 from '../assets/img3.af4f50811d29b7c87650.jpg.png'
import img5 from '../assets/img5.021f9dd8f8e68151a72f.jpeg.png'
import user from '../assets/user.jpeg'
import { Fade, Zoom } from 'react-awesome-reveal'


const DataAsNewOil = () => {
  return (
    <div>
      <section className=''>
				<div className='services-background-image data-as-new-oil-header'>
					<div className='container'>
						<Fade direction='down' triggerOnce={true}>
						<h1>Data as the New Oil: Unlocking the Untapped Potential</h1>
						</Fade>
					</div>
					{/* <div className='d-flex container mt-4'>
						<Fade top>
						<div>
							<img src={user}/>
						</div>
						<div className='mt-2 ms-3'>
							<h5>Dr.Fauziya</h5>
							<h6>Author</h6>
						</div>
						</Fade>
					</div> */}
				</div>
			</section> 

			<section className='datablog-post-main-container'>
				<div className='datablog-post-container container d-flex'>
					<div className='datablog-post-header'>
						<div className='datablog-post-image-header container'>
							{/* <Fade direction='down' triggerOnce={true}>
							<img src={img5} />
							</Fade> */}
							<Fade direction='up' triggerOnce={true}>
							<p className=''>	
								As a data science consultant, I’ve had the opportunity to speak with many large organizations that provide data about other companies. When I realized how much these firms cost for a given amount of data, I began to wonder why such a high price was being charged for such a service. <br />

								<br />Data is often a set of numerical values that may be evaluated and used to make decisions. Data can also refer to digital information that can be stored and accessed by a computer. Machine learning (ML) models, for example, are trained on data and then utilized to make the most crucial decisions. Machine learning is a branch of artificial intelligence (AI) and computer science that aims to replicate human learning by improving its accuracy via the use of data and algorithms. Machine learning is used in about 77% of today’s devices (“What Consumers Really Think About AI: A Global Study,” Pegasystems, 2017). Machine learning is enabling us to accomplish more than we could previously, in a fast and confident manner.<br />

								<br />Companies like Uber and Lyft, for example, use data to reduce wait times, anticipate client demands, and identify the most cost-effective pricing in the transportation industry. Online merchants utilize machine learning to provide more relevant search results and useful product recommendations. You may have noticed that some applications, such as those for streaming movies and social media, regularly push adverts for items that are eerily like those you’ve just viewed, purchased, or looked for. Machine learning and artificial intelligence handle the entire process. The implementation of ML into the process of filtering through positive and negative comments written by customers on product review sites and social media to make modifications to the product depending on the input obtained is the most exciting element (sentiment analysis). Customer service companies use ML to transcribe and analyse calls in real-time and in the past for sentiment scores. Aside from prioritizing based on customer feedback categories, ML can enable software to offer operators with real-time solutions to enquiries.<br />

								<br />The big grocery stores strive to make shopping there as painless and efficient as possible. Making your way through a large store might feel like an expedition. Some of these grocery stores help their customers out by using Facebook Messenger or a mobile app to host location-based artificial intelligence chatbots that can direct them to the items and services they need. Another use of ML and AI in shopping is the idea of “dynamic pricing,” which determines the optimal pricing strategy for various items. Algorithms examine data from several sources, such as past sales, competition prices, stock levels, and special events, to do this. Cross-selling a reduced item (e.g., bread) with a complementary product (butter) at full price is one of the dynamic pricing methods. This technique reduces food waste by decreasing the pricing of commodities that are about to expire. <br />

								<br />Artificial intelligence is used by financial organizations to recognize information on mobile check deposits. Businesses that take credit or debit cards can detect fraudulent activity through the use of machine learning. Your application for a loan is analysed by ML to do a risk assessment and decide whether or not you are eligible for the loan. According to research, during the next few years, AI and ML will power more than eight billion smart voice assistants (“Digital Voice Assistants in Use to Triple to eight billion by 2023, Driven by Smart Home Devices,” Juniper, 2018). The most common is your phone’s SIRI, which answers your questions in a fraction of a second. In addition, the most recent and popular tool, “ChatGPT,” employs AI to provide responses to your queries.<br />

								<br />One use of AI and ML services in the industrial sector is asset management. Methods such as analysing data from running machines to predict prospective problems and using computer vision to detect flaws in machinery are examples of this.<br />

								<br />ML and AI can anticipate patient care and hospital operations in near real-time, such as hospital capacity and the length of individual patients’ stays, using data, allowing healthcare systems and physicians to make better judgments. As a result, new medical treatments and pharmaceuticals can be developed at a faster pace. Hospitals require situational awareness data to better identify patient demographics, forecast future care needs, and successfully carry out processes.<br />

								<br />Doctors’ usage of AI has resulted in a 50% gain in efficiency (McKinsey Global Institute, 2017). Robotic surgery is one application of such technologies. The robotic device works similarly to a supercomputer, transforming the surgeon’s actions in real-time into the machine’s own for pinpoint accuracy. The surgeon guides the robotic surgical tools using the master controls on the surgeon console during a robotic-assisted procedure. The instruments within you will move in rhythm with the surgeon due to the computer’s translation of his or her motions. Your surgeon will always have control of the robot, and the surgical system will follow their instructions.<br />

								<br />The National Football League (NFL) is only one example of a sports organization that benefits from machine learning. They employ real-time stadium data to deliver innovative statistics, improve player health and safety, and improve the game-day experience for fans, players, and teams. One such example is the Next Gen Stats (NGS) platform, which assists clubs in analysing trends and player performance while also improving the in-stadium, online, and on-air fan experience. NGS-based ML models absorb the data. As a result, the time required to obtain results is reduced, while accuracy, speed, and insights are all improved because of the models’ ongoing training and improvement.<br />

								<br />“(Machine learning) will empower and strengthen every business, every government entity, and every philanthropy—basically, there’s no institution in the world that cannot be improved with machine learning,” stated Amazon founder Jeff Bezos.<br />

								<br />Now that you understand some of the reasons why data is so useful, you can start thinking about how you might use the information you’ve gathered from your sales book or from your customers’ feedback on your products to improve your business and, eventually, your earnings.
							</p>
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
					<Fade direction='down' triggerOnce={true}>
					<div className=''>
						<img src={user}/>
					</div>
					<div>
						<h2>Dr. Fauziya</h2>
						<p>Dr. Fauziya is a data scientist with over 5 years of experience in the field. She has a Master's degree in Data Science from the University of Chicago and has worked at a variety of startups and small businesses. Miss Lady is an expert in data visualization and predictive analytics, and she has a passion for using data to help businesses make better decisions. She is a frequent contributor to open source data science projects and is a mentor to aspiring data scientists.</p>
					</div>
					</Fade>
				</div>

				<div className='container mb-5 pb-5 leave-reply' >
					<div>
					<Fade direction='down' triggerOnce={true}>
						<h1 className='mb-4'>Leave a Reply</h1>
						<p>Your email address will not be published. Required fields are marked *</p>
					</Fade>
					</div>
					<Zoom>
					<form action="/submit" method="post ">
						<div class="form-group col-8">
							<label for="comments" className='mb-2 label' >Comments <span class="required">* (required)</span></label>
							<textarea rows='8' class="form-control" id="comments" name="comments" placeholder='Input text' required></textarea>
							
						</div>

							<div class="form-group col-8">
								<label for="first_name" className='mb-2 label'>Name <span class="required">* (required)</span></label>
								<input type="text" class="form-control" id="first_name" name="first_name" placeholder='Input Name'  required/>
							</div>


							
							<div class="form-group col-8">
								<label for="email" className='mb-2 label'>Email <span class="required">* (required)</span></label>
								<input	type="email" class="form-control" id="email" name="email" placeholder='Input Valid Email Address' required/>
							</div>	

							<div class="form-group col-8">
								<label for="email" className='mb-2 label'>Website <span class="required">* (required)</span></label>
								<input	type="email" class="form-control" id="email" name="website" required placeholder='Input'/>
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

export default DataAsNewOil