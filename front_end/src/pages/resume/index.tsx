import * as React from "react";
import ResumeBlock, { ResumeBlockType } from "./components/resumeDetailBlock";
import Heading, { HeadingLevel } from "./components/heading";
import List, { ListType } from "./components/list";
import "./index.less";

class HomePage extends React.Component {
    render() {
        return (
            <div id="resumeContainer" className="mainContainer flex">
                <div id="resumeTitle" className="rightContent">
                    <Heading level={HeadingLevel.h1} value="Curruculum Vitae" uppercase={true} />
                </div>
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeDetailBlock", "resumePersonalDetails"]}>
                    <Heading level={HeadingLevel.h3} value="Jesse Cunningham-Creech" uppercase={true} />
                    <Heading level={HeadingLevel.h3} value="M  0400 012 803" uppercase={true} />
                    <Heading level={HeadingLevel.h3} value="E  jesse.creech@gmail.com" uppercase={true} />
                    <Heading level={HeadingLevel.h3} value="Li  www.linkedin.com/in/jesse-creech" uppercase={true} />
                </ResumeBlock>
                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeCopyBlock"]}>
                    <p>I am a Web Developer with a good knowledge of core OO principles. I have extensive knowledge of the enterprise software development life cycle as well as previous expertise in front end UX design. I aspire to be a key member of a high performing development team, utilising the latest technologies and development practises. I look for opportunities that will challenge me so that I can continuously improve as a developer, whilst working on projects that I find fascinating.</p>
                </ResumeBlock>
                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h3} value="Employment" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Jan 2018 - Present" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="TechnologyOne, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Senior Developer - New Technologies Team" uppercase={true} />
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
                        <Heading level={HeadingLevel.h4} value="Achievements" uppercase={true} />
                        <List listType={ListType.unordered}
                            listItems={[
                                "Delivering a new product with a new tech stack",
                                "Leading a high performing team",
                                "Developing an automated release pipeline"
                            ]} />
                    </div>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Jan 2016 - Jan 2018" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="TechnologyOne, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Junior >> Senior Developer - Platform Team" uppercase={true} />
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
                        <Heading level={HeadingLevel.h4} value="Achievements" uppercase={true} />
                        <List listType={ListType.unordered}
                            listItems={[
                                "Extensive involvement in the redesign of user access across the whole of the enterprise suite",
                                "Development of a deployment tool used for internal testing and support cases that removes all need for technical knowledge to get an suite environment up and running"
                            ]} />
                    </div>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Jul 2015 - Jan 2016" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Lifeware, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Junior Developer" uppercase={true} />
                    <p> Being a Junior developer at Lifeware allowed me to get involved with the full web stack
                    across multiple frameworks.</p>

                    <p>I tackled ground up web builds, Wordpress sites, Shopify sites and many in between.
                    I worked on existing projects, developing custom analytic tools, load testing and
                    functionality improvements with a peppering of front end design alterations.</p>

                    <p>The work was fast paced and dictated by client deadlines. I reported directly to the lead
                    developer, who structured my workflow and provided me assistance when needed.</p>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Aug 2012 - Jul 2015" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Gear Shop Brisbane, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Business Manager" uppercase={true} />
                    <p> This role allowed me to combine my passion for cycling whilst developing and honing many
                    of my business skills. To successfully manage the business on behalf of the owner, I had
                    to utilise my skills including financial and staff management, stock control, customer
                    liaison and most importantly, time management. I combined this role with studying full
                    time to complete my Information Technology degree which has required me to make sure that
                    tasks are strictly prioritised and executed to ensure the business’ continual success.</p>
                    <div>
                        <Heading level={HeadingLevel.h4} value="Achievements" uppercase={true} />
                        <List listType={ListType.unordered}
                            listItems={[
                                "Improving daily cash holdings to ensure the business operates at a sustainable level",
                                "Implementing a timely management financial reporting process",
                                "Matching product lines to customer requirements",
                                "Developing a customised ordering system that enables actual costs to be measured in varying currencies so that the correct sales margins can be applied",
                                "Coordination and development of a website with e-commerce functionality"
                            ]} />
                    </div>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Feb 2012 - Aug 2012" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Apple, Brisbane, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Genius (Service Technician)" uppercase={true} />
                    <p> As a Genius with Apple, my role was one with a large workflow scope. It required highly
                    refined personal communication skills, and an advanced technical knowledge of all Apple’s
                    hardware and software systems. There was a high focus on quality customer service, which
                    required me to engage the customer but also solve problems quickly and effectively.</p>

                    <p>I was required to have detailed knowledge on all Apple’s portable devices, desktops and software
                    packages which was put into practise both dealing with customers and when performing repairs.
                    The role was fast paced with a strict adherence to personal time management when juggling
                    the many customer interactions throughout the day.</p>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="Dec 2010 - Aug 2011" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="The Fox Hotel Group, Brisbane, QLD" uppercase={true} />
                    <Heading level={HeadingLevel.h4} value="Group Designer" uppercase={true} />
                    <p> As a Genius with Apple, my role was one with a large workflow scope. It required highly
                    refined personal communication skills, and an advanced technical knowledge of all Apple’s
                    hardware and software systems. There was a high focus on quality customer service, which
                    required me to engage the customer but also solve problems quickly and effectively.</p>

                    <p>I was required to have detailed knowledge on all Apple’s portable devices, desktops and software
                    packages which was put into practise both dealing with customers and when performing repairs.
                    The role was fast paced with a strict adherence to personal time management when juggling
                    the many customer interactions throughout the day.</p>
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h3} value="Education" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="2013 - 2015" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Queensland University of Technology, Brisbane, QLD" uppercase={false} />
                    <Heading level={HeadingLevel.h4} value="Bachelor of Information Technology with Distinction - GPA: 6.5" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="2009" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Shillington College, Brisbane, QLD" uppercase={false} />
                    <Heading level={HeadingLevel.h4} value="Certificate IV in Design" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.section}>
                    <Heading level={HeadingLevel.h5} value="2005 - 2008" uppercase={true} />
                </ResumeBlock>

                <ResumeBlock blockType={ResumeBlockType.detail} rightJustifiedBlock={true} classes={["resumeJobBlock"]}>
                    <Heading level={HeadingLevel.h4} value="Queensland University of Technology, Brisbane, QLD" uppercase={false} />
                    <Heading level={HeadingLevel.h4} value="Bachelor of Business (Accounting / Professional Accounting) - GPA: 5.25" uppercase={true} />
                </ResumeBlock>
            </div >);
    }
}

export default HomePage;
