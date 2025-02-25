import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import 'react-phone-input-2/lib/style.css';

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                /> */}
                <img
                  src={require(`../../assets/images/${ContactData["avatar_image_path"]}`)}
                  alt=""
                />
              </div>
              <br />
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                {/* <SocialMedia theme={theme} /> */}
                <div className="form">
                  {/* <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  /> */}

                  <section class="contact-section">
                    <div class="contact-intro">
                      {/* <p class="contact-header-detail-text subTitle">
                        Get In Touch!
                      </p> */}
                    </div>
                    <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
                      <input type="hidden" name="access_key" value="d47fcdd4-6e21-493f-9f90-46da1edfa425" />
                      <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
                      <input type="hidden" name="from_name" value="Ajayraj's Portfolio Website" />

                      <div class="form-group-container">
                        <div class="form-group">
                          <label for="name" class="form-label">Name</label>
                          <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
                        </div>


                        <div class="form-group">
                          <label for="email" class="form-label">Email</label>
                          <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
                        </div>


                        {/* <div class="form-group">
                          <label for="phone" class="form-label">Phone</label>
                          <input id="phone" name="phone" class="form-input" placeholder="+91 1234567890" type="text" />
                        </div> */}


                        {/* <div class="form-phone">
                          <label htmlFor="phone" class="form-phone-label">
                            Phone
                          </label>
                          <PhoneInput
                            id="phone"
                            country={'in'}
                            enableSearch={true}
                            placeholder="+91 1234567890"
                            inputProps={{
                              name: 'phone',
                              required: true,
                            }}
                            class="form-input-phone"
                          />
                        </div> */}


                        <div class="form-group">
                          <label for="message" class="form-label">Message</label>
                          <textarea class="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
                        </div>
                      </div>
                      <button class="form-submit" type="submit" theme={theme}>Send Message</button>
                    </form>
                  </section>


                </div>
              </div>
            </div>
          </Fade>


          {/* <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div"> */}
          {/* <img
											src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
          {/* <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade> */}


          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                {/* <AddressImg theme={theme} /> */}

                {/* <img
                  src={require("../../assets/images/ajay_pfp.png")}
                  alt="Ajayraj Rathod"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                /> */}

              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="My Resume"
                    newTab={true}
                    href={"https://drive.google.com/file/d/1muGKYBB_8Bpz-hJkykzCwmT0WijKkTeR/view?usp=sharing"}
                    theme={theme}
                  />
                </div>

                {/* <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div> */}


                <br />
                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
