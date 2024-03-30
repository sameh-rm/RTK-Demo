# E-commerce Website Test Plan

## Objective

To ensure the functionality, usability, and performance of the e-commerce website.

## Scope

Test all features of the website, including the Shop Page, Product Details Page, Cart Pages, Checkout Page, and cart add and remove functionality.

## Resources

- Development environment
- Testing environment
- Testing tools (e.g., Jest, React Testing Library)

## Schedule

- Testing will be conducted during the development phase and before deployment to production.
- Each feature will be tested individually and then integrated testing will be performed to ensure all features work together correctly.

## Approach

- Functional Testing: Verify that each feature of the website works as expected.
- Usability Testing: Evaluate the user interface and user experience of the website.
- Performance Testing: Test the website's performance under various conditions (e.g., load testing, stress testing).
- Security Testing: Check for vulnerabilities and ensure data security.
- Regression Testing: Ensure that new changes do not negatively impact existing functionality.

## Test Cases

- Shop Page: Verify that the products are displayed correctly.
- Product Details Page: Check that the product details are displayed correctly.
- Cart Pages: Test adding and removing items from the cart.
- Checkout Page: Verify that the checkout process works correctly.
- Cart Add and Remove Functionality: Test adding and removing items from the cart.

## Testing Environment

- Use a testing environment that mimics the production environment as closely as possible.
- Use mock data and test accounts for testing.

## Reporting

- Document the test results, including any issues found during testing.
- Report bugs and issues to the development team for resolution.

## Test Report

### Date: 30/03/2024

#### Shop Page

- Test Result: Passed

#### Product Details Page

- Test Result: Passed

#### Cart Pages

- Test Result: Passed

#### Checkout Page

- Test Result: Passed

#### Cart Add and Remove Functionality

- Test Result: Passed

### Issues Found

- No issues found during testing.

## Running the Application and Tests

### Running the Application

To run the e-commerce website application, follow these steps:

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/sameh-rm/travware-test-task
   cd travware-test-task
   npm install
   npm run dev
```

### Run Test Cases

```bash
   npm test
```
