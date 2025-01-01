import FadeIn from "./FadeIn";

export default function Heading({name, addedClass}) {

  return (
    <FadeIn preventReHide={true}>
      <h2 className={`${addedClass ? `${addedClass} ` : ''} text-3xl font-medium md:text-5xl md:font-normal text-dark-blue mb-6 text-center`}>{name}</h2>
    </FadeIn>
  )
}
