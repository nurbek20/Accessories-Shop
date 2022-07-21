import React, { useState } from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Header from './components/header';
import data from './data/products.json';
import Product from './components/product';

const App = () => {
    const [product, setProduct] = useState(data);
    const [title, setTitle] = useState('Главная')
    const [val, setVal] = useState('')
    const handleCategoryFilter = (id, title) => {
        const category = data.filter(elem => elem.category_id === id);
        const newArr = [...category]
        setProduct(newArr);
        setTitle(title)
    }

    const handleClikDiscount = () => {
        const discount = data.filter(elem => elem.discount !== null)
        const newArr = [...discount]
        setProduct(newArr)
        setTitle("Скидка")
    }

    const handleClikHome = () => {
        setProduct(data)
        setTitle("Главная")
    }
    const handleSearch = () => {
        const search = data.filter(elem=> {
            return elem.title.toLocaleLowerCase().indexOf
            (val.toLocaleLowerCase())>-1
        })

        setProduct(search)
        console.log("val>>>", val)
        setTitle(val)
    }

    return (
        <div className='app'>
            <Header
                handleClikDiscount={handleClikDiscount}
                handleClikHome={handleClikHome}
                handleCategoryFilter={handleCategoryFilter}
                setVal={setVal}
                handleSearch={handleSearch}
            />
            <Container>
                <h1 className='center'>{title}</h1>
                <Product product={product} />
            </Container>
        </div>
    )
};

export default App;