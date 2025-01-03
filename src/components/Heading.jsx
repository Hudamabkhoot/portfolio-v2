import FadeIn from "./FadeIn";

export default function Heading({name}) {

  return (
    <FadeIn preventReHide={true} direction={'up'}>
      <h2 className={`text-center text-3xl font-medium md:text-5xl md:font-normal text-dark-blue mb-6`}>{name}</h2>
    </FadeIn>
  )
}
