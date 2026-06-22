"use client"

import { HomeSection } from "@/components/home/home-section"
import { CertificationRow } from "@/components/home/award-row"
import type { Certification } from "@/constants/types"

type HomeCertificationsSectionProps = {
  certifications: Certification[]
}

export const HomeCertificationsSection = ({
  certifications,
}: HomeCertificationsSectionProps) => {
  return (
    <HomeSection id="certifications" title="Certifications">
      <div className="flex w-full flex-col gap-framer-3">
        {certifications.map((certification) => (
          <CertificationRow
            key={`${certification.name}-${certification.year}`}
            {...certification}
          />
        ))}
      </div>
    </HomeSection>
  )
}
