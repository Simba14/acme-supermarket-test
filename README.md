# ACME Supermarket

A simple supermarket web app built using React.
The app allows users to add items to their basket and

Styled Components has been used to style.
Redux has been used to manage the application's state.
Jest and Enzyme have been used to write unit tests.

![app](https://i.imgur.com/2bLLll5.png)

Run Locally:
-----
1. Open your terminal
2. Change into the directory where the app is stored: `cd acme-supermarket-test`
3. Run `npm run dev`
4. Open your browser and go to http://localhost:8080/
5. Shop away!

To run tests, type in `npm run test`

Things To Improve On:
-----

- Write unit tests for components.
- Add responsive styling to allow for different screen sizes.
- Enable remove items functionality.
- Indicate on the product cards UI an item's discount.

## Description of the problem

ACME's quest for global domination has prompted us to open a supermarket – we sell only three products:

    Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

The interface to our basket looks like this (shown in JavaScript):

    var basket = new Basket(pricingRules)
    basket.add(item)
    basket.add(item)
    var price = basket.total()

Implement a basket system that fulfills these requirements in JavaScript.

Test Data:

    Basket: FR1, SR1, FR1, CF1
    Total price expected: £19.34

    Basket: FR1, FR1
    Total price expected: £3.11

    Basket: SR1, SR1, FR1, SR1
    Total price expected: £16.61
