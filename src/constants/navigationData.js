import { loanProgramsAll } from "./loadProgramsData";
import { loanOfficerData } from "./loanOfficerData";

const los = Object.keys(loanOfficerData).reduce((list, lo) => {
  return [...list, loanOfficerData[lo]]
}, [])

export const navigationData = [
    {
      name: 'Home',
      href: '/',
      links: []
    },
    {
      name: 'About Us',
      href: '/about-us',
      links: []
    },
    {
      name: 'Loan Programs',
      href: '/loan-programs',
      links: [...loanProgramsAll.map(program => {
        return {
            ...program,
            links: []
        }
      }),
      {
        name: 'All Programs',
        href: '/loan-programs',
        links: []
      }
    ]
    },
    {
      name: 'Resources',
      href: '/resources',
      links: [
          {
            name: 'Mortgage Calculator',
            href: '/resources/mortgage-calculator',
            links: []
          },
          {
            name: 'Refinance Calculator',
            href: '/resources/refinance-calculator',
            links: []
          },
          {
            name: 'Mortgage Checklist',
            href: '/resources/mortgage-checklist',
            links: []
          }
          
      ]
    },
    {
        name: 'Blog',
        href: 'https://pmllcorp.com/blog/',
        blank: true,
        links: []
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
      links: []
    },
    {
        name: 'Portal',
        href: '/portal',
        links: [],
        hide: true
      },
      {
        name: 'Application',
        href: '/application',
        links: [...los],
        hide: true
      }
  ]