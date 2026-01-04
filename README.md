# Mini E-Commerce Product & Cart

This project is a Mini E-Commerce application built using React functional components.  
The focus is on React fundamentals, clean component design, proper state management, and handling edge cases correctly.

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
- JavaScript
- Plain CSS
- Public REST API for product data

No UI libraries or backend services are used.

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
- Persist cart in Local Storage

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

## API Used

Product data is fetched from:

https://dummyjson.com/products

---

## Project Structure

<img width="239" height="729" alt="image" src="https://github.com/user-attachments/assets/64339b60-2ed0-4732-a467-5a8654c292f5" />


---

## Website

<img width="1901" height="954" alt="image" src="https://github.com/user-attachments/assets/e15e1b12-e1e4-48a5-8129-1fc4e7846dd0" />
<img width="1906" height="955" alt="image" src="https://github.com/user-attachments/assets/1abec8d0-9c93-4810-b251-e738cd0e2c63" />
<img width="1911" height="958" alt="image" src="https://github.com/user-attachments/assets/6ff10100-e679-4e5c-96c3-5fea37e3def4" />

---
## How to Run

1. Install dependencies
   npm install

2. Start the development server
   npm run dev

   (or npm start if using Create React App)
---

## Author

Sakshi Raj
sakshiraj713@gmail.com
