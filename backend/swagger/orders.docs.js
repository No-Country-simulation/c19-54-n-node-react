/**
 * @openapi
 * /orders:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Get all orders
 *     responses:
 *       '200':
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           status:
 *                             type: string
 *                             example: Pending
 *                           products:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 productId:
 *                                   type: string
 *                                   example: 60d21b4667d0d8992e610c85
 *                                 quantity:
 *                                   type: number
 *                                   example: 1
 *                                 price:
 *                                   type: string
 *                                   example: 19.99
 *                           shippingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: Country
 *                               street1:
 *                                 type: string
 *                                 example: Street 1
 *                               street2:
 *                                 type: string
 *                                 example: Street 2
 *                               city:
 *                                 type: string
 *                                 example: City
 *                               province:
 *                                 type: string
 *                                 example: Province
 *                               zip:
 *                                 type: string
 *                                 example: ZIP
 *                           billingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: Country
 *                               street1:
 *                                 type: string
 *                                 example: Street 1
 *                               street2:
 *                                 type: string
 *                                 example: Street 2
 *                               city:
 *                                 type: string
 *                                 example: City
 *                               province:
 *                                 type: string
 *                                 example: Province
 *                               zip:
 *                                 type: string
 *                                 example: ZIP
 *                           userId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c85
 *                           storeId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c86
 *                           total:
 *                             type: number
 *                             example: 99.99
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2024-07-20T16:48:06.581Z
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2024-07-20T16:48:06.581Z
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 *   post:
 *     tags:
 *       - Orders
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               storeId:
 *                 type: string
 *                 example: 60d21b4667d0d8992e610c86
 *               userId:
 *                 type: string
 *                 example: 60d21b4667d0d8992e610c85
 *               products:
 *                 type: string
 *                 example: '{"products":[{"productId":"60d21b4667d0d8992e610c85","quantity":1,"price":19.99},{"productId":"60d21b4667d0d8992e610c85","quantity":2,"price":39.98}]}'
 *               shippingAddress:
 *                 type: string
 *                 example: '{"country":"Country","street1":"Street 1","street2":"Street 2","city":"City","province":"Province","zip":"ZIP"}'
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       '200':
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     newOrder:
 *                       type: object
 *                       properties:
 *                         status:
 *                           type: string
 *                           example: Pending
 *                         products:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               productId:
 *                                 type: string
 *                                 example: 60d21b4667d0d8992e610c85
 *                               quantity:
 *                                 type: number
 *                                 example: 1
 *                               price:
 *                                 type: number
 *                                 example: 19.99
 *                         shippingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: Country
 *                             street1:
 *                               type: string
 *                               example: Street 1
 *                             street2:
 *                               type: string
 *                               example: Street 2
 *                             city:
 *                               type: string
 *                               example: City
 *                             province:
 *                               type: string
 *                               example: Province
 *                             zip:
 *                               type: string
 *                               example: ZIP
 *                         userId:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c85
 *                         storeId:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c86
 *                         total:
 *                           type: number
 *                           example: 99.99
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2024-07-20T16:48:06.581Z
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2024-07-20T16:48:06.581Z
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Debes enviar un producto
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 * 
 * /orders/{id}:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Get an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       '200':
 *         description: Order found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     order:
 *                       type: object
 *                       properties:
 *                         status:
 *                           type: string
 *                           example: Pending
 *                         products:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               productId:
 *                                 type: string
 *                                 example: 60d21b4667d0d8992e610c85
 *                               quantity:
 *                                 type: number
 *                                 example: 1
 *                               price:
 *                                 type: string
 *                                 example: 19.99
 *                         shippingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: Country
 *                             street1:
 *                               type: string
 *                               example: Street 1
 *                             street2:
 *                               type: string
 *                               example: Street 2
 *                             city:
 *                               type: string
 *                               example: City
 *                             province:
 *                               type: string
 *                               example: Province
 *                             zip:
 *                               type: string
 *                               example: ZIP
 *                         billingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: Country
 *                             street1:
 *                               type: string
 *                               example: Street 1
 *                             street2:
 *                               type: string
 *                               example: Street 2
 *                             city:
 *                               type: string
 *                               example: City
 *                             province:
 *                               type: string
 *                               example: Province
 *                             zip:
 *                               type: string
 *                               example: ZIP
 *                         userId:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c85
 *                         storeId:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c86
 *                         total:
 *                           type: number
 *                           example: 99.99
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2024-07-20T16:48:06.581Z
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2024-07-20T16:48:06.581Z
 *       '400':
 *         description: Invalid order ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Invalid order ID
 *       '404':
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Order not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 *      
 *   delete:
 *     tags:
 *       - Orders
 *     summary: Delete an order by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order to delete
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     responses:
 *       '200':
 *         description: Order deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Order with id = 60d21b4667d0d8992e610c85 deleted
 *       '400':
 *         description: Invalid order ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Invalid order ID
 *       '404':
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Order not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 * 
 * /orders/store/{id}:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Get all orders for a specific store
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the store
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     responses:
 *       '200':
 *         description: Successfully retrieved orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c85
 *                           status:
 *                             type: string
 *                             example: Pending
 *                           products:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 productId:
 *                                   type: string
 *                                   example: 60d21b4667d0d8992e610c86
 *                                 quantity:
 *                                   type: number
 *                                   example: 2
 *                                 price:
 *                                   type: string
 *                                   example: 19.99
 *                           shippingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: USA
 *                               street1:
 *                                 type: string
 *                                 example: 123 Main St
 *                               street2:
 *                                 type: string
 *                                 example: Apt 4
 *                               city:
 *                                 type: string
 *                                 example: New York
 *                               province:
 *                                 type: string
 *                                 example: NY
 *                               zip:
 *                                 type: string
 *                                 example: 10001
 *                           billingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: USA
 *                               street1:
 *                                 type: string
 *                                 example: 123 Main St
 *                               street2:
 *                                 type: string
 *                                 example: Apt 4
 *                               city:
 *                                 type: string
 *                                 example: New York
 *                               province:
 *                                 type: string
 *                                 example: NY
 *                               zip:
 *                                 type: string
 *                                 example: 10001
 *                           userId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c87
 *                           storeId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c88
 *                           total:
 *                             type: number
 *                             example: 39.98
 *                           createdAt:
 *                             type: string
 *                             example: 2024-07-31T16:48:06.581Z
 *                           updatedAt:
 *                             type: string
 *                             example: 2024-07-31T16:48:06.581Z
 *       '400':
 *         description: Invalid store ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Invalid store ID
 *       '404':
 *         description: Orders not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Orders not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 * 
 * /orders/user/{id}:
 *   get:
 *     tags:
 *       - Orders
 *     summary: Get all orders for a specific user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c87
 *     responses:
 *       '200':
 *         description: Successfully retrieved orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   type: object
 *                   properties:
 *                     orders:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c85
 *                           status:
 *                             type: string
 *                             example: Pending
 *                           products:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 productId:
 *                                   type: string
 *                                   example: 60d21b4667d0d8992e610c86
 *                                 quantity:
 *                                   type: number
 *                                   example: 2
 *                                 price:
 *                                   type: string
 *                                   example: 19.99
 *                           shippingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: USA
 *                               street1:
 *                                 type: string
 *                                 example: 123 Main St
 *                               street2:
 *                                 type: string
 *                                 example: Apt 4
 *                               city:
 *                                 type: string
 *                                 example: New York
 *                               province:
 *                                 type: string
 *                                 example: NY
 *                               zip:
 *                                 type: string
 *                                 example: 10001
 *                           billingAddress:
 *                             type: object
 *                             properties:
 *                               country:
 *                                 type: string
 *                                 example: USA
 *                               street1:
 *                                 type: string
 *                                 example: 123 Main St
 *                               street2:
 *                                 type: string
 *                                 example: Apt 4
 *                               city:
 *                                 type: string
 *                                 example: New York
 *                               province:
 *                                 type: string
 *                                 example: NY
 *                               zip:
 *                                 type: string
 *                                 example: 10001
 *                           userId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c87
 *                           storeId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c88
 *                           total:
 *                             type: number
 *                             example: 39.98
 *                           createdAt:
 *                             type: string
 *                             example: 2024-07-31T16:48:06.581Z
 *                           updatedAt:
 *                             type: string
 *                             example: 2024-07-31T16:48:06.581Z
 *       '400':
 *         description: Invalid user ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Invalid user ID
 *       '404':
 *         description: Orders not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Orders not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
