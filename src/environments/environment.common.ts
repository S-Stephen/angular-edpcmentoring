// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

let site_config = {
  page_title: "EDPC Mentoring",
  local_footer_col1: [
    {
      label: "About the Scheme",
      link: "https://edpc.eng.cam.ac.uk/mentoring"
    }
  ],
  local_footer_col2: [
    {
      label: "About the EDPC",
      link: "https://edpc.eng.cam.ac.uk/aboutus"
    }
  ],
  quicklinks: [
    {
      link: "http://www.cam.ac.uk/for-staff",
      label: "For staff"
    },
    {
      link: "http://www.cam.ac.uk/current-students",
      label: "For current students"
    },
    {
      link: "http://www.alumni.cam.ac.uk",
      label: "For alumni"
    },
    {
      link: "http://www.cam.ac.uk/for-business",
      label: "For business"
    },
    {
      link: "http://www.cam.ac.uk/colleges-and-departments",
      label: "Colleges & departments"
    },
    {
      link: "http://www.lib.cam.ac.uk/libraries/",
      label: "Libraries & facilities"
    },
    {
      link: "http://www.cam.ac.uk/museums-and-collections",
      label: "Museums & collections"
    },
    {
      link: "http://www.cam.ac.uk/email-and-phone-search",
      label: "Email & phone search"
    }
  ],
  global_nav: [
    {
      label: "Study at Cambridge",
      link: "http://www.cam.ac.uk/study-at-cambridge",
      anchor: "studyatcambridge",
      sub: [
        {
          label: "Undergraduate",
          link: "http://www.study.cam.ac.uk/undergraduate/",
          sub: [
            {
              label: "Course",
              link: "http://www.undergraduate.study.cam.ac.uk/courses"
            },
            {
              label: "Applying",
              link: "http://www.undergraduate.study.cam.ac.uk/applying"
            },
            {
              label: "Events and open days",
              link: "http://www.undergraduate.study.cam.ac.uk/events"
            },
            {
              label: "Fees and Finances",
              link: "http://www.undergraduate.study.cam.ac.uk/financess"
            },
            {
              label: "Student blogs and videos",
              link: "http://www.becambridge.com/"
            }
          ]
        },
        {
          label: "Graduate",
          link: "http://www.graduate.study.cam.ac.uk",
          sub: [
            {
              label: "Why Cambridge",
              link:
                "http://www.graduate.study.cam.ac.uk/why-cambridge/welcome-vice-chancellor"
            },
            {
              label: "How to apply",
              link: "http://www.graduate.study.cam.ac.uk/how-do-i-apply"
            },
            {
              label: "Fees and funding",
              link: "http://www.cambridgestudents.cam.ac.uk/fees-and-funding"
            },
            {
              label: "Frequently asked questions",
              link: "http://www.graduate.study.cam.ac.uk/faqs/applicant"
            }
          ]
        },
        {
          label: "International students",
          link: "http://www.internationalstudents.cam.ac.uk"
        },
        {
          label: "Continuing education",
          link: "http://www.ice.cam.ac.uk"
        },
        {
          label: "Executive and professional education",
          link: "http://www.epe.admin.cam.ac.uk/"
        },
        {
          label: "Courses in education",
          link: "http://www.educ.cam.ac.uk"
        }
      ]
    },
    {
      label: "About the University",
      link: "http://www.cam.ac.uk/about-the-university",
      anchor: "abouttheuniversity",
      sub: [
        {
          sub: [
            {
              label: "How the University and Colleges work",
              link:
                "http://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work",
              sub: []
            },
            {
              label: "History",
              link: "http://www.cam.ac.uk/about-the-university/history"
            },
            {
              label: "Visiting the University",
              link:
                "http://www.cam.ac.uk/about-the-university/visiting-the-university"
            },
            {
              label: "Term dates and calendars",
              link:
                "http://www.cam.ac.uk/about-the-university/term-dates-and-calendars"
            },
            {
              label: "Map",
              link: "http://map.cam.ac.uk"
            }
          ]
        },
        {
          sub: [
            {
              label: "For media",
              link: "http://www.communications.cam.ac.uk/"
            },
            {
              label: "Video and audio",
              link: "http://www.cam.ac.uk/video-and-audio"
            },
            {
              label: "Find an expert",
              link: "http://webservices.admin.cam.ac.uk/fae/"
            },
            {
              label: "Publications",
              link: "http://www.cam.ac.uk/about-the-university/publications"
            },
            {
              label: "Global Cambridge",
              link: "http://www.cam.ac.uk/global-cambridge"
            }
          ]
        },
        {
          sub: [
            {
              link: "http://www.cam.ac.uk/news",
              label: "News"
            },
            {
              link: "http://www.admin.cam.ac.uk/whatson/",
              label: "Events"
            },
            {
              link: "http://www.cam.ac.uk/public-engagement",
              label: "Public engagement"
            },
            {
              link: "http://www.jobs.cam.ac.uk",
              label: "Jobs"
            },
            {
              link: "https://philanthropy.cam.ac.uk",
              label: "Give to Cambridge"
            }
          ]
        }
      ]
    },
    {
      label: "Research at Cambridge",
      link: "http://www.cam.ac.uk/research"
    }
  ]
};

// Place in here all our config keys:

export let environment_common = {
  config: site_config,
  production: false,
  mock: true
};
