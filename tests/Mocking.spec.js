import { test, expect } from '@playwright/test';

test('Mock API Test', async ({ page }) => {

    await page.route(
        'https://demoqa.llq.vn/api/book-table/search?page=1&limit=5&search=',
        async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    status: 200,
                    message: "OK",
                    data: {
                        content: [
                            {
                                id: 161,
                                firstName: "Lavanya",
                                lastName: "Test123",
                                email: "lavanya@gmail.com",
                                salary: 25000,
                                department: "Test1"
                            }
                        ]
                    }
                })
            });
        }
    );

    await page.goto('https://demoqa.llq.vn/webtables?gender=Male');
    await page.waitForTimeout(2000);

});