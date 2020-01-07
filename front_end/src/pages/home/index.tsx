import * as React from "react";

import "./index.less";

class HomePage extends React.Component {
    render() {
        return (
            <div id="resumeContainer" className="mainContainer flex">
                <div id="resumeTitle" className="rightContent">
                    <h1>Curruculum Vitae</h1>
                </div>
                <div className="resumeDetailBlock resumePersonalDetails rightContent">
                    <h3>{"Jesse Cunningham-Creech".toUpperCase()}</h3>
                    <h3>{"M  0400 012 803".toUpperCase()}</h3>
                    <h3>{"E  jesse.creech@gmail.com".toUpperCase()}</h3>
                    <h3>{"Li  www.linkedin.com/in/jesse-creech".toUpperCase()}</h3>
                </div>
                <div className="resumeDetailBlock resumeCopyBlock rightContent">
                    <div>
                        <p>I am a Web Developer with a good knowledge of core OO principles. I have extensive knowledge of the enterprise software development life cycle as well as previous expertise in front end UX design. I aspire to be a key member of a high performing development team, utilising the latest technologies and development practises. I look for opportunities that will challenge me so that I can continuously improve as a developer, whilst working on projects that I find fascinating.</p>
                    </div>
                </div>
                <div className="resumeSectionBlock leftContent">
                    <h3>{"Employment".toUpperCase()}</h3>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Jan 2018 - Present".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"TechnologyOne, QLD".toUpperCase()}</h4>
                    <h4>{"Senior Developer - New Technologies Team".toUpperCase()}</h4>
                    <p> Being a part of the New Technologies team has allowed me to define myself as a leader.
                    I lead a team of 4 developers, with oversight from a director. I have overseen a project
                    from inception to a working product and have been crucial in its success. The project has
                    utilised the ReactJs library using JavaScript, TypeScript and CSS to create an multi SPA
                    product running both as a web app and a native app using ReactNative. The project has
                    progressed through both research and development phases utilising the Agile Methodology,
                    which allowed the team to remain focussed and driven. I ran all stand ups and coordinated
                    sprint planning as well the workload of junior developers.</p>

                    <p>The project involved creating an extensive component library of node packages which have
                    since been used by multiple other internal teams. I created the first SPA app within the
                    product, which acted as the main portal for accessing other apps. My app consumed many of
                    the node components through npm as well as some app specific components. I also developed
                    the back end infrastructure to supply the client with a RESTful API.</p>

                    <p>I jointly defined the deployment model for the apps client side code. I developed the
                    deployment infrastructure within TeamCity and AWS where code can progress from being
                    checked in, to live in production within 2-5 minutes. The deployment stack uses many
                    AWS resources including CloudFront, ApiGateway and S3. My aim was to remove as much manual
                    handling within the deployment pipeline as possible. Apart from code check in, the
                    pipeline has no need for human input to deliver code to the client machine.</p>

                    <p>The project has required that I upskill in a lot of areas. I have had to manage people,
                    liaise with many internal teams, provide assistance and training as well as deliver code
                    of my own. I have stepped well outside my comfort zone because I saw a challenge that would
                    provide me with a wealth of experience and great learning curve. I have really enjoyed
                    pushing myself and  was reminded why I am so passionate about software development.</p>

                    <div>
                        <h4>{"Achievements".toUpperCase()}</h4>
                        <ul>
                            <li>Delivering a new product with a new tech stack</li>
                            <li>Leading a high performing team</li>
                            <li>Developing an automated release pipeline</li>
                        </ul>
                    </div>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Jan 2016 - Jan 2018".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"TechnologyOne, QLD".toUpperCase()}</h4>
                    <h4>{"Junior >> Senior Developer - Platform Team".toUpperCase()}</h4>
                    <p> I worked within the core platform team, delivering feature
                            libraries for internal teams to utilise.</p>
                    <p>My role required me to redesign how user access was implemented across the enterprise
                        suite as well as how functions and their components were provisioned . This required me to
                    me work with senior developers to map out the schema and entity relationships required to
                    facilitate efficient set based SQL calls which would then be packaged in an API for all
                    product teams to utilise. Once the schema was completed I applied OO principles and TDD to
                    develop the API as well as build up the user interface for system administrators to manage
                    their users.</p>
                    <p>My development stack included SQL,PostgreSQL,C#, JavaScript, HTML5, and CSS. In the
                    platform team I mainly worked on server side code which is then used by proprietary
                    patterns to render the client side using the MVC framework. My work has been a combination
                    of working within these patterns to create new functional screens within the product and
                    creating new code to be used by the patterns in their operation.</p>
                    <div>
                        <h4>{"Achievements".toUpperCase()}</h4>
                        <ul>
                            <li>Extensive involvement in the redesign of user access across the whole of the enterprise suite</li>
                            <li>Development of a deployment tool used for internal testing and support cases that removes
                        all need for technical knowledge to get an suite environment up and running</li>
                        </ul>
                    </div>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Jul 2015 - Jan 2016".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Lifeware, QLD".toUpperCase()}</h4>
                    <h4>{"Junior Developer".toUpperCase()}</h4>
                    <p> Being a Junior developer at Lifeware allowed me to get involved with the full web stack
                    across multiple frameworks.</p>

                    <p>I tackled ground up web builds, Wordpress sites, Shopify sites and many in between.
                    I worked on existing projects, developing custom analytic tools, load testing and
                    functionality improvements with a peppering of front end design alterations.</p>

                    <p>The work was fast paced and dictated by client deadlines. I reported directly to the lead
                    developer, who structured my workflow and provided me assistance when needed.</p>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Aug 2012 - Jul 2015".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Gear Shop Brisbane, QLD".toUpperCase()}</h4>
                    <h4>{"Business Manager".toUpperCase()}</h4>
                    <p> This role allowed me to combine my passion for cycling whilst developing and honing many
                    of my business skills. To successfully manage the business on behalf of the owner, I had
                    to utilise my skills including financial and staff management, stock control, customer
                    liaison and most importantly, time management. I combined this role with studying full
                    time to complete my Information Technology degree which has required me to make sure that
                    tasks are strictly prioritised and executed to ensure the business’ continual success.</p>
                    <div>
                        <h4>{"Achievements".toUpperCase()}</h4>
                        <ul>
                            <li>Improving daily cash holdings to ensure the business operates at a sustainable level</li>
                            <li>Implementing a timely management financial reporting process</li>
                            <li>Matching product lines to customer requirements</li>
                            <li>Developing a customised ordering system that enables actual costs to be measured in varying
                            currencies so that the correct sales margins can be applied</li>
                            <li>Coordination and development of a website with e-commerce functionality</li>
                        </ul>
                    </div>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Feb 2012 - Aug 2012".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Apple, Brisbane, QLD".toUpperCase()}</h4>
                    <h4>{"Genius (Service Technician)".toUpperCase()}</h4>
                    <p> As a Genius with Apple, my role was one with a large workflow scope. It required highly
                    refined personal communication skills, and an advanced technical knowledge of all Apple’s
                    hardware and software systems. There was a high focus on quality customer service, which
                    required me to engage the customer but also solve problems quickly and effectively.</p>

                    <p>I was required to have detailed knowledge on all Apple’s portable devices, desktops and software
                    packages which was put into practise both dealing with customers and when performing repairs.
                    The role was fast paced with a strict adherence to personal time management when juggling
                    the many customer interactions throughout the day.</p>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"Dec 2010 - Aug 2011".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"The Fox Hotel Group, Brisbane, QLD".toUpperCase()}</h4>
                    <h4>{"Group Designer".toUpperCase()}</h4>
                    <p> As a Genius with Apple, my role was one with a large workflow scope. It required highly
                    refined personal communication skills, and an advanced technical knowledge of all Apple’s
                    hardware and software systems. There was a high focus on quality customer service, which
                    required me to engage the customer but also solve problems quickly and effectively.</p>

                    <p>I was required to have detailed knowledge on all Apple’s portable devices, desktops and software
                    packages which was put into practise both dealing with customers and when performing repairs.
                    The role was fast paced with a strict adherence to personal time management when juggling
                    the many customer interactions throughout the day.</p>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h3>{"Education".toUpperCase()}</h3>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"2013 - 2015".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Queensland University of Technology, Brisbane, QLD"}</h4>
                    <h4>{"Bachelor of Information Technology with Distinction - GPA: 6.5".toUpperCase()}</h4>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"2009".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Shillington College, Brisbane, QLD"}</h4>
                    <h4>{"Certificate IV in Design".toUpperCase()}</h4>
                </div>

                <div className="resumeSectionBlock leftContent">
                    <h5>{"2005 - 2008".toUpperCase()}</h5>
                </div>

                <div className="resumeDetailBlock resumeJobBlock rightContent">
                    <h4>{"Queensland University of Technology, Brisbane, QLD"}</h4>
                    <h4>{"Bachelor of Business (Accounting / Professional Accounting) - GPA: 5.25".toUpperCase()}</h4>
                </div>
            </div >);
    }
}

export default HomePage;
