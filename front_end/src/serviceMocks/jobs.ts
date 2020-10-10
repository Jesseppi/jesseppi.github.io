import { Job } from "../pages/resume";

function getJobsMock(): Job[] {
    let jobsArray: Job[] = [
        {
            period: "Jan 2018 - Present",
            organisation: {
                location: {
                    city: "Brisbane",
                    state: "QLD",
                },
                name: "TechnologyOne"
            },
            position: "Senior Developer - New Technologies Team",
            description: [
                "Being a part of the New Technologies team has allowed me to define myself as a leader. I lead a team of 4 developers, with oversight from a director.I have overseen a project from inception to a working product and have been crucial in its success.The project has utilised the ReactJs library using JavaScript, TypeScript and CSS to create an multi SPA product running both as a web app and a native app using ReactNative.The project has progressed through both research and development phases utilising the Agile Methodology, which allowed the team to remain focussed and driven.I ran all stand ups and coordinated sprint planning as well the workload of junior developers.",
                "The project involved creating an extensive component library of node packages which have since been used by multiple other internal teams.I created the first SPA app within the product, which acted as the main portal for accessing other apps.My app consumed many of the node components through npm as well as some app specific components.I also developed the back end infrastructure to supply the client with a RESTful API.",
                "I jointly defined the deployment model for the apps client side code. I developed the deployment infrastructure within TeamCity and AWS where code can progress from being checked in, to live in production within 2-5 minutes. The deployment stack uses many AWS resources including CloudFront, ApiGateway and S3. My aim was to remove as much manual handling within the deployment pipeline as possible. Apart from code check in, the pipeline has no need for human input to deliver code to the client machine.",
                "The project has required that I upskill in a lot of areas. I have had to manage people, liaise with many internal teams, provide assistance and training as well as deliver code of my own. I have stepped well outside my comfort zone because I saw a challenge that would provide me with a wealth of experience and great learning curve. I have really enjoyed pushing myself and  was reminded why I am so passionate about software development."
            ],
            achievements: [
                "Delivering a new product with a new tech stack",
                "Leading a high performing team",
                "Developing an automated release pipeline"
            ],
            image: {
                imageUrl: "https://media-exp1.licdn.com/dms/image/C4E0BAQGPtK6Y9-mAEQ/company-logo_200_200/0?e=2159024400&v=beta&t=HZwmV9o79iTXFkxtcciBfvJugq0hk6bDevGVNdLlI9Q",
                imageAlt: "TechnologyOne logo"
            }
        },
        {
            period: "Jan 2016 - Jan 2018",
            organisation: {
                location: {
                    city: "Brisbane",
                    state: "QLD",
                },
                name: "TechnologyOne"
            },
            position: "Junior >> Senior Developer - Platform Team",
            description: [
                "I worked within the core platform team, delivering feature libraries for internal teams to utilise.",
                "My role required me to redesign how user access was implemented across the enterprise suite as well as how functions and their components were provisioned.This required me to me work with senior developers to map out the schema and entity relationships required to facilitate efficient set based SQL calls which would then be packaged in an API for all product teams to utilise.Once the schema was completed I applied OO principles and TDD to develop the API as well as build up the user interface for system administrators to manage their users.",
                "My development stack included SQL,PostgreSQL,C#, JavaScript, HTML5, and CSS. In the platform team I mainly worked on server side code which is then used by proprietary patterns to render the client side using the MVC framework.My work has been a combination of working within these patterns to create new functional screens within the product and creating new code to be used by the patterns in their operation."
            ],
            achievements: [
                "Extensive involvement in the redesign of user access across the whole of the enterprise suite",
                "Development of a deployment tool used for internal testing and support cases that removes all need for technical knowledge to get an suite environment up and running"
            ],
            image: {
                imageUrl: "https://media-exp1.licdn.com/dms/image/C4E0BAQGPtK6Y9-mAEQ/company-logo_200_200/0?e=2159024400&v=beta&t=HZwmV9o79iTXFkxtcciBfvJugq0hk6bDevGVNdLlI9Q",
                imageAlt: "TechnologyOne logo"
            }
        },
        {
            period: "July 2015 - Jan 2016",
            organisation: {
                location: {
                    city: "Brisbane",
                    state: "QLD",
                },
                name: "Lifeware"
            },
            position: "Junior Developer",
            description: [
                "Being a Junior developer at Lifeware allowed me to get involved with the full web stack across multiple frameworks.",
                "I tackled ground up web builds, Wordpress sites, Shopify sites and many in between. I worked on existing projects, developing custom analytic tools, load testing and functionality improvements with a peppering of front end design alterations.",
                "The work was fast paced and dictated by client deadlines. I reported directly to the lead developer, who structured my workflow and provided me assistance when needed."
            ]
        },
        {
            period: "August 2012 - July 2015",
            organisation: {
                location: {
                    city: "Brisbane",
                    state: "QLD",
                },
                name: "Gear Shop Brisbane"
            },
            position: "Business Manager",
            description: [
                "This role allowed me to combine my passion for cycling whilst developing and honing many of my business skills.To successfully manage the business on behalf of the owner, I had to utilise my skills including financial and staff management, stock control, customer liaison and most importantly, time management.",
                "I combined this role with studying full time to complete my Information Technology degree which has required me to make sure that tasks are strictly prioritised and executed to ensure the business’ continual success."
            ],
            achievements: [
                "Improving daily cash holdings to ensure the business operates at a sustainable level",
                "Implementing a timely management financial reporting process",
                "Matching product lines to customer requirements",
                "Developing a customised ordering system that enables actual costs to be measured in varying currencies so that the correct sales margins can be applied",
                "Coordination and development of a website with e-commerce functionality"
            ],
            image: {
                imageUrl: "",
                imageAlt: "Gear logo"
            }
        },
        {
            period: "Feb 2012 - August 2012",
            organisation: {
                location: {
                    city: "Brisbane",
                    state: "QLD",
                },
                name: "Apple"
            },
            position: "Genius (Service Technician)",
            description: [
                "As a Genius with Apple, my role was one with a large workflow scope. It required highly refined personal communication skills, and an advanced technical knowledge of all Apple’s hardware and software systems.There was a high focus on quality customer service, which required me to engage the customer but also solve problems quickly and effectively.",
                "I was required to have detailed knowledge on all Apple’s portable devices, desktops and software packages which was put into practise both dealing with customers and when performing repairs. The role was fast paced with a strict adherence to personal time management when juggling the many customer interactions throughout the day."
            ],
            image: {
                imageUrl: "https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0?e=1605744000&v=beta&t=BpGtXQcz3ypzxjuRdu-oKvOCZo5Jr3E4oNCl32qSEa0",
                imageAlt: "Apple logo"
            }
        }
    ];
    return jobsArray;
}

export { getJobsMock };
