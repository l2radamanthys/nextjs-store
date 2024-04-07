interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    console.log(props)
    return (
        <h1>Categoria dinamica</h1>
    )
}