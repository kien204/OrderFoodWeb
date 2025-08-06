import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
    const { categorySlug } = useParams(); // ex: "thit-ca-hai-san"
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (!categorySlug) return;
        
        async function loadData() {
            const catRes  = await fetch('/mock/category_groups.json');
            const categories = await catRes.json();
            const currentCat = categories.find(c => c.slug === categorySlug);
            console.log(currentCat.id);
           
            
        }

        loadData();
    }, [categorySlug]);

    return (
        <>
            ds
        </>
    );
}

export default CategoryPage;
