import NavDark from '@/components/v2/NavDark'
import HeroDark from '@/components/v2/HeroDark'
import SocialProofDark from '@/components/v2/SocialProofDark'
import ProductsDark from '@/components/v2/ProductsDark'
import TechSelectorDark from '@/components/v2/TechSelectorDark'
import SolutionsDark from '@/components/v2/SolutionsDark'
import PricingDark from '@/components/v2/PricingDark'
import FooterDark from '@/components/v2/FooterDark'

export default function V2() {
  return (
    <>
      <NavDark />
      <main style={{ paddingTop: 64 }}>
        <HeroDark />
        <SocialProofDark />
        <ProductsDark />
        <TechSelectorDark />
        <SolutionsDark />
        <PricingDark />
        <FooterDark />
      </main>
    </>
  )
}
