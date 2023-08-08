const FAQ = () => {
  return (
    <div>
      <h2 className='text-2xl lg:text-5xl font-bold text-center'>FAQ</h2>
      <p className='text-xl my-6'>
      Welcome to our Frequently Asked Questions (FAQ) section, designed to provide swift answers to your queries about our job hunting services. Discover valuable insights on navigating our platform, optimizing your job search, and making the most of our resources. 
      </p>
      <div className="p-4 lg:p-0 lg:hidden">
          <img
            src="assets/images/question.jpg"
            alt="question"
          />
        </div>
      <div className="lg:grid grid-cols-2fr">
        <div className="px-12 space-y-2">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Why should you take our services?
            </div>
            <div className="collapse-content">
              <p>
              Our services provide comprehensive support for your job search. We offer personalized guidance, a vast job matching system, and a range of resources to boost your career prospects. Join us to access the tools you need for a successful job hunting journey.{" "}
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What are our services?
            </div>
            <div className="collapse-content">
              <p>
              Our services include: <br/>

1. Personalized job matching: Tailored job recommendations based on your skills and preferences.<br/>
2. Expert guidance: Valuable insights from professionals to refine your job search strategy.<br/>
3. Interview preparation: Tools and tips to excel in interviews and stand out to employers.<br/>
4. Resume building: Create compelling resumes that highlight your strengths effectively.<br/>
5. Direct employer connection: Engage directly with potential employers and network within your industry.
<br/>
We're here to ensure your job hunting journey is productive and successful.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              How to evaluate your progress?
            </div>
            <div className="collapse-content">
              <p>
              Evaluating your progress is crucial. Utilize Rechart's insightful analytics to track application responses, interview invitations, and job offers. Monitor your profile's visibility and engagement metrics. Regularly assess your accomplishments against set goals. With Rechart, you gain the data-driven insights needed to adapt and optimize your job search strategy for better results.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              How we will build connection between employees & recruiter?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                At our core, we facilitate meaningful connections between employees and recruiters. Our platform offers a seamless interface where recruiters can showcase job opportunities and directly engage with potential candidates. Employees can create compelling profiles, explore job listings, and initiate conversations. Through this interactive space, we empower networking, making it easier for the right talents and recruiters to connect, fostering a dynamic environment for successful employment matches.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <img
            src="assets/images/question.jpg"
            alt="question"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
