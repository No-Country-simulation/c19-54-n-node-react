/**
 * @openapi
 * /stores:
 *   get:
 *     tags:
 *      - Stores
 *     summary: Get all stores
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
 *                      stores:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: 669947465b3a1b695f4a544d
 *                            sellerId:
 *                              type: string
 *                              example: 669874be9491ccf0ebeec67a
 *                            name:
 *                              type: string
 *                              example: Cueros de calidad
 *                            images:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                            status:
 *                              type: string
 *                              example: Unpublished
 *                            intro:
 *                              type: string
 *                              example: Vendemos productos de cuero de máxima calidad
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
 *      - Stores
 *     summary: Register a new store
 *     description: Create a new store.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Cueros de calidad
 *               sellerId:
 *                 type: string
 *                 example: 669874be9491ccf0ebeec67a
 *               intro:
 *                 type: string
 *                 example: Vendemos productos de calidad
 *               images:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: OK! Store successfully registered
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                     type: string
 *                  data:
 *                   type: object
 *                   properties:
 *                      store:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: 669947465b3a1b695f4a544d
 *                            sellerId:
 *                              type: string
 *                              example: 669874be9491ccf0ebeec67a
 *                            name:
 *                              type: string
 *                              example: Cueros de calidad
 *                            images:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                            status:
 *                              type: string
 *                              example: Unpublished
 *                            intro:
 *                              type: string
 *                              example: Vendemos productos de cuero de máxima calidad
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
 * /stores/{id}:
 *   get:
 *     tags:
 *      - Stores
 *     summary: Get a specific store
 *     description: Returns the details of a specific store by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the store to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK! Store details
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                     type: string
 *                  data:
 *                   type: object
 *                   properties:
 *                      store:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              example: 669947465b3a1b695f4a544d
 *                            sellerId:
 *                              type: string
 *                              example: 669874be9491ccf0ebeec67a
 *                            name:
 *                              type: string
 *                              example: Cueros de calidad
 *                            images:
 *                              type: array
 *                              items:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                            status:
 *                              type: string
 *                              example: Unpublished
 *                            intro:
 *                              type: string
 *                              example: Vendemos productos de cuero de máxima calidad
 *                            createdAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            updatedAt:
 *                              type: string
 *                              example: 2024-07-18T16:48:06.581Z
 *                            __v:
 *                              type: integer
 *                              example: 0
 *       '400':
 *         description: Error - Invalid store ID
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
 *                   example: Store not found
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
 * 
 *   put:
 *     tags:
 *       - Stores
 *     summary: Update store details
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the store
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Store Name
 *               intro:
 *                 type: string
 *                 example: This is an introduction to the store.
 *     responses:
 *       '200':
 *         description: Successfully updated store
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
 *                     store:
 *                       type: object
 *                       properties:
 *                         sellerId:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c85
 *                         name:
 *                           type: string
 *                           example: New Store Name
 *                         images:
 *                           type: array
 *                           items:
 *                             type: string
 *                             example: https://example.com/image.jpg
 *                         status:
 *                           type: string
 *                           example: Unpublished
 *                         intro:
 *                           type: string
 *                           example: This is an introduction to the store.
 *                         createdAt:
 *                           type: string
 *                           example: 2023-01-01T00:00:00.000Z
 *                         updatedAt:
 *                           type: string
 *                           example: 2023-01-01T00:00:00.000Z
 *       '404':
 *         description: Store not found
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
 *                   example: Store not found
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
 *       - Stores
 *     summary: Delete a store by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the store to delete
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     responses:
 *       '200':
 *         description: Store successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Store with id = 60d21b4667d0d8992e610c85 deleted
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
 * /stores/user/{id}:
 *   get:
 *     tags:
 *       - Stores
 *     summary: Get a store by user ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     responses:
 *       '200':
 *         description: Store successfully retrieved
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
 *                     store:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           sellerId:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c85
 *                           name:
 *                             type: string
 *                             example: My Store
 *                           images:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["/path/to/image1.jpg", "/path/to/image2.jpg"]
 *                           status:
 *                             type: string
 *                             example: Unpublished
 *                           intro:
 *                             type: string
 *                             example: Welcome to my store
 *                           createdAt:
 *                             type: string
 *                             example: 2024-07-31T12:34:56.789Z
 *                           updatedAt:
 *                             type: string
 *                             example: 2024-07-31T12:34:56.789Z
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
