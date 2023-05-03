import { loanProgramsAll } from "../components/loanPrograms/programs";
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
            name: 'Checklist',
            href: '/resources/checklist',
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