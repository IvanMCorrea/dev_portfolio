import Image from 'next/image'
import React from 'react'

type Props = {}

const Landing = (props: Props) => {
  return (
    <section>
        <Image
          src="/prog.svg"
          alt="Working Developer"
          width={250}
          height={250}
          priority
        />
    </section>
  )
}

export default Landing