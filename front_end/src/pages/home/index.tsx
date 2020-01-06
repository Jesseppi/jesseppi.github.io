import * as React from "react";

import "./index.less";

class HomePage extends React.Component {
    render() {
        return (
            <div id="resumeContainer" className="mainContainer">
                <div id="resumeTitle">
                    <h1>Curruculum Vitae</h1>
                </div>
                <div className="resumeDetailBlock resumePersonalDetails">
                    <h3>{"Jesse Cunningham-Creech".toUpperCase()}</h3>
                    <h3>{"M  0400 012 803".toUpperCase()}</h3>
                    <h3>{"E  jesse.creech@gmail.com".toUpperCase()}</h3>
                    <h3>{"Li  www.linkedin.com/in/jesse-creech".toUpperCase()}</h3>
                </div>
                <div className="resumeDetailBlock resumeCopyBlock">
                    <div>
                        <p>I am a Web Developer with a good knowledge of core OO principles. I have extensive knowledge of the enterprise software development life cycle as well as previous expertise in front end UX design. I aspire to be a key member of a high performing development team, utilising the latest technologies and development practises. I look for opportunities that will challenge me so that I can continuously improve as a developer, whilst working on projects that I find fascinating.</p>
                    </div>
                </div>
                <div className="resumeDetailBlock resumeJobBlock">
                    <h4>TechnologyOne, QLD</h4>
                    <h4>Senior Developer - New Technologies Team</h4>
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
                <div className="resumeDetailBlock resumeJobBlock">
                    <h4>TechnologyOne, QLD</h4>
                    <h4>Junior >> Senior Developer - Platform Team</h4>
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
                </div>
                <div>
                    <h4>{"Achievements".toUpperCase()}</h4>
                    <ul>
                        <li>Extensive involvement in the redesign of user access across the whole of the enterprise suite</li>
                        <li>Development of a deployment tool used for internal testing and support cases that removes
                        all need for technical knowledge to get an suite environment up and running</li>
                    </ul>
                </div>
            </div >);
    }
}

export default HomePage;
