import conventionalImage from '../../assets/images/family-pic.jpeg';
import fhaImage from '../../assets/images/family-pic-dog.jpeg';
import vaImage from '../../assets/images/military-dad-with-kids.jpeg';
import usdaImage from '../../assets/images/front-door-steps.jpeg';
import renovationImage from '../../assets/images/man-and-woman.jpeg';
import jumboImage from '../../assets/images/renovated-kitchen.jpeg';
import specialtyProductsImage from '../../assets/images/man-and-woman-hugged-up.jpeg';
import downPaymentAssistanceProgramImage from '../../assets/images/man-woman-and-baby.jpeg';

export const loanProgramsShort = [
    {
      active:true,
      image: {
        src: conventionalImage,
        alt: 'Conventional Program'
      },
      name: 'Conventional',
      href: '/loan-programs/conventional-loan/',
      description: 'Industry standard loan programs with purchase and refinance options for most borrowers. These programs follow lending rules set by Fannie Mae and Freddie Mac and have the reputation for being the most affordable and quickest to close in the mortgage industry.'
    },
    {
      active:true,
      image: {
        src: fhaImage,
        alt: 'FHA Loan Program'
      },
      name: 'FHA',
      href: '/loan-programs/fha-loan/',
      description: 'Insured by the Federal Housing Administration, these loans are a great option for homebuyers looking to put the minimum amount down as possible, homeowners looking for simple refinance options, and for borrowers with less than perfect credit.'
    },
    {
      active:true,
      image: {
        src: vaImage,
        alt: 'VA Loan Program'
      },
      name: 'VA',
      href: '/loan-programs/va-loan/',
      description: 'Just for veterans and surviving spouses! Finance up to 100% of your new home’s value with no money down, and no private mortgage insurance; or refinance your home quickly and easily with minimal paperwork.'
    },
    {
      active:true,
      image: {
        src: usdaImage,
        alt: 'USDA Loan Program'
      },
      name: 'USDA',
      href: '/loan-programs/usda-loan/',
      description: 'Purchase or refinance property located in a rural area (as designated by the U.S. Department of Agriculture). These loans are available to most borrowers and will lend up to 100% of a property’s value.'
    }
  ];

  export const loanProgramsAll = [
    ...loanProgramsShort,
    {
        active: false,
        image: {
          src: renovationImage,
          alt: "Renovation Loan Program",
        },
        name: 'Renovation',
        href: '/loan-programs/renovation-loan/',
        description: 'Programs that won’t just finance your home, but also include the cost of improvements you want to make. Renovation loans actually allow you to build equity in your home through the transaction!'
      },
      {
        active: false,
        image: {
          src: jumboImage,
          alt: "Jumbo Loan Program",
        },
        name: 'Jumbo',
        href: '/loan-programs/jumbo-loan/',
        description: 'If you’re looking for a BIG loan amount, we can handle it. Jumbo loans are available for loan amounts in the $500,000-$2,000,000 range, and sometimes higher.'
      },
      {
        active: false,
        image: {
          src: specialtyProductsImage,
          alt: "Specialty Products",
        },
        name: 'Specialty Products',
        href: '/loan-programs/specialty-products/',
        description: 'Are you Self-Employed and need to qualify with your bank statements, instead of your tax returns? Do you need a loan on an Investment property and don’t want to provide income documentation? Do you have a special circumstance that other lenders can’t accommodate? Odds are that we have a specialty product that can help you out.'
      },
      {
        active: false,
        image: {
          src: downPaymentAssistanceProgramImage,
          alt: "Down Payment Assistance Program",
        },
        name: 'Down Payment Assistance Program',
        href: '/loan-programs/down-payment-assistance/',
        description: 'Do you have the income to afford monthly mortgage payments, but are struggling to come up with the cash needed for a down payment and closing costs? You may be able to take advantage of low interest rates, become a homeowner, and lock in your housing payment for the next 30 years. The Company offers several Down Payment Assistance programs to help homebuyers with the upfront cost of buying a home.'
      }
  ]