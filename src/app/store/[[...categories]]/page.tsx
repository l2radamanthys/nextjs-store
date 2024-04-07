interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams: {
        q?: string,
        social?: string
    }
}

export default function Category(props: CategoryProps) {
    console.log(props)

    const { categories } = props.params;
    console.log(categories)
    return (
        <h1>Categoria: {categories}</h1>
    )
}