export default function OurServicesCard({image, title, position, children}) {

    return (
        <article className={`our-services-card ${position}`}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p> {children} </p>
        </article>
    )
}