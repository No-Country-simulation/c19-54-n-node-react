/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@mail.com
 *               password:
 *                 type: string
 *                 example: hashed_password
 *               billingAddress:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                     example: Country
 *                   street1:
 *                     type: string
 *                     example: Street 1
 *                   street2:
 *                     type: string
 *                     example: Street 2
 *                   city:
 *                     type: string
 *                     example: City
 *                   province:
 *                     type: string
 *                     example: Province
 *                   zip:
 *                     type: string
 *                     example: ZIP
 *               shippingAddress:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                     example: Country
 *                   street1:
 *                     type: string
 *                     example: Street 1
 *                   street2:
 *                     type: string
 *                     example: Street 2
 *                   city:
 *                     type: string
 *                     example: City
 *                   province:
 *                     type: string
 *                     example: Province
 *                   zip:
 *                     type: string
 *                     example: ZIP
 *               roles:
 *                 type: string
 *                 example: user,admin
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: OK!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         billingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: Argentina
 *                             street1:
 *                               type: string
 *                               example: Calle1 345
 *                             city:
 *                               type: string
 *                               example: Buenos Aires
 *                             province:
 *                               type: string
 *                               example: Capital Federal
 *                             zip:
 *                               type: string
 *                               example: 35d2
 *                         shippingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: Argentina
 *                             street1:
 *                               type: string
 *                               example: Calle1 345
 *                             city:
 *                               type: string
 *                               example: Buenos Aires
 *                             province:
 *                               type: string
 *                               example: Capital Federal
 *                             zip:
 *                               type: string
 *                               example: 35d2
 *                         _id:
 *                           type: string
 *                           example: 669874be9491ccf0ebeec67a
 *                         name:
 *                           type: string
 *                           example: John Doe
 *                         email:
 *                           type: string
 *                           example: jd@mail.com
 *                         image:
 *                           type: string
 *                           example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                         password:
 *                           type: string
 *                           example: pastafrola
 *                         roles:
 *                           type: array
 *                           items:
 *                             type: string
 *                         createdAt:
 *                           type: string
 *                           example: 2024-07-18T16:48:06.581Z
 *                         updatedAt:
 *                           type: string
 *                           example: 2024-07-18T16:48:06.581Z
 *                         __v:
 *                           type: integer
 *                           example: 0
 *       '400':
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
 *                   example: Debes enviar una imagen
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
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@mail.com
 *               password:
 *                 type: string
 *                 example: your_password
 *     responses:
 *       '200':
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 669874be9491ccf0ebeec67a
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@mail.com
 *                 image:
 *                   type: string
 *                   example: https://example.com/path/to/image.jpg
 *                 roles:
 *                   type: array
 *                   items:
 *                     type: string
 *                 accessToken:
 *                   type: string
 *                   example: your_jwt_access_token
 *       '40X':
 *         description: User not found or wrong password
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
 *                   example: User not found or Wrong Password
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
 *    */
