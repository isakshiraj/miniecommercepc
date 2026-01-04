# Mini E-Commerce Product & Cart

This project is a Mini E-Commerce application built using React functional components as part of the Betterway Online Assessment.  
The focus of the assignment is on React fundamentals, clean component design, proper state management, and handling edge cases correctly.

The application avoids unnecessary complexity and prioritizes clarity, correctness, and maintainable code.

---

## Objective

The goal of this project is to build a simple e-commerce interface where users can:

- View a list of products
- Search, filter, and sort products
- Add products to a cart
- Update and remove cart items
- View cart totals

---

## Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- Plain CSS
- Public REST API for product data

No UI libraries or backend services are used.

---

## Constraints Followed

- No UI libraries (Material UI, Ant Design, Chakra UI, etc.)
- No backend implementation
- Only React functional components
- Basic CSS for styling
- Clean and readable code structure

---

## Features Implemented

### Product Listing
- Displays 15–20 products in a grid layout
- Each product card shows:
  - Product name
  - Price
  - Category
  - Stock status
  - Add to Cart button (disabled when out of stock)

### Search, Filter, and Sort
- Search products by name
- Filter products by category
- Sort products by price (Low to High / High to Low)
- Clear all filters option
- All filters work together

### Cart Functionality
- Add items to cart
- Remove items from cart
- Update item quantity
- Quantity cannot exceed available stock
- Cart updates are reflected immediately

### Cart Summary
- Displays total number of items
- Displays total cart price

### UI and State Handling
- Product list does not re-render unnecessarily on cart updates
- Product and cart states are managed separately
- Empty state handling:
  - No products found
  - Cart is empty

---

## Bonus Features

- Cart data persisted using localStorage
- Debounced search input for better performance
- Product details modal

---

## API Used

Product data is fetched from:

https://dummyjson.com/products

---

## Project Structure

src/
├── App.js
├── main.js
├── styles.css
├── hooks/
│   └── useDebounce.js
└── components/
    ├── Filters.js
    ├── ProductList.js
    ├── ProductCard.js
    ├── ProductModal.js
    ├── Cart.js
    └── CartItem.js

---

## How to Run

1. Install dependencies
   npm install

2. Start the development server
   npm run dev

   (or npm start if using Create React App)

---

## Evaluation Focus

- React fundamentals
- Component structure and separation of concerns
- State management and updates
- Edge case handling
- Code readability and maintainability

---

## Notes

- The implementation focuses on correctness over styling.
- Overengineering and unnecessary abstractions are intentionally avoided.
- The solution closely follows the Betterway OA requirements.

---

## Author

Sakshi Raj
