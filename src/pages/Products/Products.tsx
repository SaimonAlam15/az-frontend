import { useState, useEffect } from 'react';
import { _get } from '../../services/apiClient';

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        _get('/products/').then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data.map((product: any) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}
