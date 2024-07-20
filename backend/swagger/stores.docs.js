/**
 * @openapi
 * /stores:
 *   get:
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
 *                       billingAddress:
 *                         type: object
 *                         properties:
 *                           country:
 *                             type: string
 *                             example: Argentina
 *                           street1:
 *                             type: string
 *                             example: Calle1 345
 *                           city:
 *                             type: string
 *                             example: Buenos Aires
 *                           province:
 *                             type: string
 *                             example: Capital Federal
 *                           zip:
 *                             type: string
 *                             example: 35d2
 *                       shippingAddress:
 *                         type: object
 *                         properties:
 *                           country:
 *                             type: string
 *                             example: Argentina
 *                           street1:
 *                             type: string
 *                             example: Calle1 345
 *                           city:
 *                             type: string
 *                             example: Buenos Aires
 *                           province:
 *                             type: string
 *                             example: Capital Federal
 *                           zip:
 *                             type: string
 *                             example: 35d2
 *                       id:
 *                         type: string
 *                         example: 669874be9491ccf0ebeec67a
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       email:
 *                         type: string
 *                         example: jd@mail.com
 *                       image:
 *                         type: string
 *                         example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                       password:
 *                         type: string
 *                         example: pastafrola
 *       500:
 *          description: Error
 *          content:    
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      status:
 *                        type: string
 *                        example: failed
 *                      message:
 *                        type: string
 */ 