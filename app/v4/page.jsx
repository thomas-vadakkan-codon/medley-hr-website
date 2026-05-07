import NavV4 from '@/components/v4/NavV4'
import HeroV4 from '@/components/v4/HeroV4'
import ProblemV4 from '@/components/v4/ProblemV4'
import HowItWorksV4 from '@/components/v4/HowItWorksV4'
import FeaturesV4 from '@/components/v4/FeaturesV4'
import PricingV4 from '@/components/v4/PricingV4'
import FoundersNoteV4 from '@/components/v4/FoundersNoteV4'
import FAQV4 from '@/components/v4/FAQV4'
import FinalCTAV4 from '@/components/v4/FinalCTAV4'
import FooterV4 from '@/components/v4/FooterV4'

export const metadata = {
  title: 'MedleyHR — HR and payroll your team can own.',
  description: 'The self-serve HRMS that any company can set up, run, and scale — without an implementation project.',
}

export default function V4Page() {
  return (
    <>
      <NavV4 />
      <main>
        <HeroV4 />
        <ProblemV4 />
        <HowItWorksV4 />
        <FeaturesV4 />
        <PricingV4 />
        <FoundersNoteV4 />
        <FAQV4 />
        <FinalCTAV4 />
        <FooterV4 />
      </main>
    </>
  )
}
