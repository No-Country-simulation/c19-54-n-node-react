/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *      - Products
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: OK
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
 *                      products:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: 66987a7c00483cb2e9aea6c3
 *                            name:
 *                              type: string
 *                              example: Sombrero de cuero
 *                            description:
 *                              type: string
 *                              example: Sombrero de cuero hecho a mano
 *                            images:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60bdec3c-dd13-4cde-b729-7e4c4b43bb06.webp?alt=media&token=c78fb7fa-c220-41b7-a683-41675a128bfa, https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2Ffd45126f-fbd2-4681-a38e-d5872cae6cb1.webp?alt=media&token=6b965ee0-1f7e-4f37-b6c8-743a1427bff8
 *                            categories:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: Cuero
 *                            status:
 *                              type: string
 *                              example: Unpublished
 *                            stock:
 *                              type: integer
 *                              example: 0
 *                            storeId:
 *                              type: string
 *                              example: 669947465b3a1b695f4a544d
 *                            createdAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            updatedAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            __v:
 *                              type: integer
 *                              example: 0
 *       500:
 *          description: Error
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      status:
 *                        type: string
 *                        example: Failed
 *                      message:
 *                        type: string
 *   post:
 *     tags:
 *      - Products
 *     summary: Register a new product
 *     description: Create a new product.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sombrero de cuero
 *               description:
 *                 type: string
 *                 example: Sombrero de cuero hecho a mano
 *               originalPrice:
 *                 type: integer
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *               images:
 *                 type: array
 *                 items:
 *                    type: string
 *                    format: binary
 *
 *     responses:
 *       '200':
 *         description: OK! Product successfully registered
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                     type: string
 *                  data:
 *                     type: object
 *                     properties:
 *                        product:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: 66987a7c00483cb2e9aea6c3
 *                            name:
 *                              type: string
 *                              example: Sombrero de cuero
 *                            description:
 *                              type: string
 *                              example: Sombrero de cuero hecho a mano
 *                            images:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60bdec3c-dd13-4cde-b729-7e4c4b43bb06.webp?alt=media&token=c78fb7fa-c220-41b7-a683-41675a128bfa, https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2Ffd45126f-fbd2-4681-a38e-d5872cae6cb1.webp?alt=media&token=6b965ee0-1f7e-4f37-b6c8-743a1427bff8
 *                            categories:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: Cuero
 *                            status:
 *                              type: string
 *                              example: Unpublished
 *                            stock:
 *                              type: integer
 *                              example: 0
 *                            storeId:
 *                              type: string
 *                              example: 669947465b3a1b695f4a544d
 *                            createdAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            updatedAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            __v:
 *                              type: integer
 *                              example: 0
 *       400:
 *          description: Error
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      status:
 *                        type: string
 *                        example: Failed
 *                      message:
 *                        type: string
 *                        example: Debes enviar una imagen
 *       500:
 *          description: Error
 *          content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        status:
 *                          type: string
 *                          example: Failed
 *                        message:
 *                          type: string
 *
 * /products/{id}:
 *    get:
 *      tags:
 *        - Products
 *      summary: Get a product by id.
 *      description: Returns the details of a specific product by their ID.
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to retrieve
 *         schema:
 *           type: string
 *      responses:
 *       '200':
 *         description: OK! Product details
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                     type: string
 *                  data:
 *                     type: object
 *                     properties:
 *                        product:
 *                           type: object
 *                           properties:
 *                                _id:
 *                                  type: string
 *                                  example: 66987a7c00483cb2e9aea6c3
 *                                name:
 *                                  type: string
 *                                  example: Sombrero de cuero
 *                                description:
 *                                  type: string
 *                                  example: Sombrero de cuero hecho a mano
 *                                images:
 *                                  type: array
 *                                  items:
 *                                    type: string
 *                                    example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60bdec3c-dd13-4cde-b729-7e4c4b43bb06.webp?alt=media&token=c78fb7fa-c220-41b7-a683-41675a128bfa, https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2Ffd45126f-fbd2-4681-a38e-d5872cae6cb1.webp?alt=media&token=6b965ee0-1f7e-4f37-b6c8-743a1427bff8
 *                                categories:
 *                                  type: array
 *                                  items:
 *                                    type: string
 *                                    example: Cuero
 *                                status:
 *                                  type: string
 *                                  example: Unpublished
 *                                stock:
 *                                  type: integer
 *                                  example: 0
 *                                storeId:
 *                                  type: string
 *                                  example: 669947465b3a1b695f4a544d
 *                                createdAt:
 *                                  type: string
 *                                  example: 2024-07-18T16:48:06.581Z
 *                                updatedAt:
 *                                  type: string
 *                                  example: 2024-07-18T16:48:06.581Z
 *                                __v:
 *                                  type: integer
 *                                  example: 0
 *
 *       '400':
 *          description: Error - Invalid store ID
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Failed
 *                 message:
 *                   type: string
 *                   example: Invalid product ID
 *       '404':
 *         description: Error - Store not found
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
 *                   example: Product not found
 *       '500':
 *         description: Error
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
 */
