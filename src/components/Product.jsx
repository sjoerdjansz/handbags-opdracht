export function Product({
                            title,
                            imgUrl,
                            price,
                            label
                        }) {
    return (
        <article>
            <span>{label}</span>
            <img src={imgUrl} alt={title}/>
            <p>{title}</p>
            <h4>€{price},–</h4>
        </article>
    );
}