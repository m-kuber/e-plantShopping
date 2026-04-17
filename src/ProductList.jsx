import React, { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // ✅ RESTORED FULL DATA (IMPORTANT)
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        }
    ];

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const isAdded = (name) => {
        return cartItems.some((item) => item.name === name);
    };

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div>
            <div className="navbar">
                <a href="#" onClick={handleHomeClick}>Home</a>
                <a href="#" onClick={handlePlantsClick}>Plants</a>
                <a href="#" onClick={handleCartClick}>Cart ({totalItems})</a>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>

                            {category.plants.map((plant, i) => (
                                <div key={i}>
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.cost}</p>

                                    <button
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={isAdded(plant.name)}
                                    >
                                        {isAdded(plant.name)
                                            ? "Added to Cart"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;