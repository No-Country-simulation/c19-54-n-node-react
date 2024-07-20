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
 *                   type: array
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 669947465b3a1b695f4a544d
 *                       sellerId:
 *                         type: string
 *                         example: 669874be9491ccf0ebeec67a
 *                       name:
 *                         type: string
 *                         example: Cueros de calidad
 *                       images:
 *                         type: array
 *                         items:
 *                            type: string
 *                            example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                       status:
 *                         type: string
 *                         example: Unpublished
 *                       intro:
 *                         type: string
 *                         example: Vendemos productos de cuero de máxima calidad
 *                       createdAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z
 *                       updatedAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z
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
 *                   type: array
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 669947465b3a1b695f4a544d
 *                       sellerId:
 *                         type: string
 *                         example: 669874be9491ccf0ebeec67a
 *                       name:
 *                         type: string
 *                         example: Cueros de calidad
 *                       images:
 *                         type: array
 *                         items:
 *                            type: string
 *                            example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                       status:
 *                         type: string
 *                         example: Unpublished
 *                       intro:
 *                         type: string
 *                         example: Vendemos productos de cuero de máxima calidad
 *                       createdAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z
 *                       updatedAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z   
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
 *                   type: array
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 669947465b3a1b695f4a544d
 *                       sellerId:
 *                         type: string
 *                         example: 669874be9491ccf0ebeec67a
 *                       name:
 *                         type: string
 *                         example: Cueros de calidad
 *                       images:
 *                         type: array
 *                         items:
 *                            type: string
 *                            example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                       status:
 *                         type: string
 *                         example: Unpublished
 *                       intro:
 *                         type: string
 *                         example: Vendemos productos de cuero de máxima calidad
 *                       createdAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z
 *                       updatedAt:
 *                         type: string
 *                         example: 2024-07-18T16:48:06.581Z 
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
 */ 