import React from "react";
import "../styles/Features.css";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
const Features = () => (
  <section className="features" id="features">
    <div className="homepage-container">
      <div className="content-container">
        {/* Left Side: Text Section */}
        <div className="text-section">
          <span className="highlight-text">Power of AI in your resume</span>
          <h1>
            <strong className="fw-bold">10x</strong>{" "}
            <span>your shortlisting chances with </span>
            <strong className="fw-bold">AI Powered</strong> customized Resumes
          </h1>
          <p>
            Our AI knows what employers look for in candidates across 150 roles.
            Get your own customized AI powered resume.
          </p>
          <br />
          <br />
          <br />
          <div className="cta-container">
            <a href="/login" className="cta-button">
              Make my resume
            </a>
            <span className="subtext">Takes only 3 steps</span>
          </div>
        </div>

        {/* Right Side: Carousel Section */}
        <div className="image-section">
          <Carousel>
            <Carousel.Item>
              <div className="slider_tagline">
                <h5>
                  <span className="love_text">
                    <img
                      src="https://myoutspark.com/images/heart-icon.png"
                      className="heart_icon"
                      alt=""
                    />
                    By Engineers
                  </span>
                </h5>
              </div>
              <div className="testimonial">
                <img
                  src="https://myoutspark.com/images/rohit.png"
                  alt="Rohit Attri"
                  className="testimonial-image"
                />
                <p>
                  Customized resumes for each job application was a game
                  changer. It has helped me get so many more interview calls!
                </p>
                <div className="testimonial-author">
                  - Rohit Attri, Senior Java Developer
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>

    {/* Feature Section */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mr-auto align-content-end">
          <div className="feature-content">
            <h2 className="font-weight-bold">
              <p>One size doesn't fit all</p>
            </h2>
            <h3 className="font-weight-bold">
              Get different resumes for different job openings
            </h3>
            <p className="desc mt-4">
              Every job opening is unique and requires a certain skillset. Our
              resumes are tailormade for each job opening you apply for,
              increasing your selection likeliness manifold.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <div className="hm_cta_btn d-flex flex-column align-items-center w-fit-content">
                <a href="/login" className="btn-main-md open-in-chrome">
                  Make my resume
                </a>
                <span className="mini_text">Takes only 3 steps </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ml-auto">
          <div className="image-content">
            <img
              className="img-fluid figure-img"
              src="https://myoutspark.com/images/bnr1.png"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-content-end mt-5">
          <div className="feature-content center-mob">
            <h2 className="font-weight-bold">
              <p>What they say about us</p>
            </h2>
            <p className="desc mt-4">
              Read what people have to say about resumes created from OutSpark
              and other bonuses that helped them in their careers.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <div className="hm_cta_btn d-flex flex-column align-items-center w-fit-content">
                <a href="/login" className="btn-main-md open-in-chrome">
                  Make my resume
                </a>
                <span className="mini_text">Takes only 3 steps</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 ml-auto align-self-center"
          style={{ overflow: "hidden" }}
        >
          <div className="service-box">
            <div className="row align-items-center animate_testmonials">
              {[
                {
                  name: "Rohit Attri",
                  image: "https://myoutspark.com/images/ra.png",
                  tagline: "Recruiters Love My Tailored Resumes",
                  text: "Getting a tailored resume for each application was a dream. I've never received so much positive feedback from recruiters!",
                },
                {
                  name: "Rishi Kalantri",
                  image: "https://myoutspark.com/images/rk.png",
                  tagline: "From Interviews to Dream Job",
                  text: "I had interviews but no offers. That changed after using this platform. The interview prep tips were invaluable, and I secured my dream job!",
                },
              ].map((testimonial, index) => (
                <div className="col-md-6 col-xs-12" key={index}>
                  <div className="service-item">
                    <div className="profile_dt">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="image dp"
                      />
                      <p>
                        {testimonial.name}
                        <img
                          src="https://myoutspark.com/images/rating_icons.png"
                          alt="rating"
                          className="rating_cl"
                        />
                      </p>
                    </div>
                    <span className="mini_tagline">{testimonial.tagline}</span>
                    <p className="lightText">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Promo Banner Section */}
    <div className="grid promoBannerGrid">
      <div className="promoBannerContent">
        <h2 className="promoBannerTitle">Try Our Easy-To-Use Resume Builder</h2>
        <p className="promoBannerDescription">
          Experience our intuitive resume builder and take a shortcut to your
          dream career. Discover why thousands of job seekers and HR experts
          trust us. Create your best resume quickly and easily today.
        </p>
        <a
          href="/resume-builder"
          className="button button--medium button--whiteBlue"
        >
          Build Your Resume Now
        </a>
      </div>
      <div className="promoBannerImageWrapper">
        <img
          className="promoBannerImage"
          decoding="auto"
          src="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp"
          alt="Zety resume builder in action"
          width="872"
        />
      </div>
    </div>
  </section>
);

export default Features;
