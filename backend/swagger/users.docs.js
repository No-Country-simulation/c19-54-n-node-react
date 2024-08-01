/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get all users
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
 *                      users:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                             billingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             shippingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             _id:
 *                                type: string
 *                                example: 669874be9491ccf0ebeec67a
 *                             name:
 *                                type: string
 *                                example: John Doe
 *                             email:
 *                                type: string
 *                                example: jd@mail.com
 *                             image:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                             password:
 *                                type: string
 *                                example: pastafrola
 *                             roles:
 *                                type: array
 *                                items:
 *                                  type: string
 *                             createdAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             updatedAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             __v:
 *                                type: integer
 *                                example: 0
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
 *
 *   post:
 *     tags:
 *      - Users
 *     summary: Register a new user
 *     description: Allows registering a new user on the platform with detailed profile information.
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
 *                 type: string
 *                 format: json
 *                 example: {"country":"Country","street1":"Street 1","street2":"Street 2","city":"City","province":"Province","zip":"ZIP"}
 *               shippingAddress:
 *                 type: string
 *                 format: json
 *                 example: {"country":"Country","street1":"Street 1","street2":"Street 2","city":"City","province":"Province","zip":"ZIP"}
 *               roles:
 *                 type: string
 *                 example: user,admin
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: OK! User successfully registered
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
 *                      user:
 *                          type: object
 *                          properties:
 *                             billingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             shippingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             _id:
 *                                type: string
 *                                example: 669874be9491ccf0ebeec67a
 *                             name:
 *                                type: string
 *                                example: John Doe
 *                             email:
 *                                type: string
 *                                example: jd@mail.com
 *                             image:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                             password:
 *                                type: string
 *                                example: pastafrola
 *                             roles:
 *                                type: array
 *                                items:
 *                                  type: string
 *                             createdAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             updatedAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             __v:
 *                                type: integer
 *                                example: 0
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
 * /users/{id}:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get a specific user
 *     description: Returns the details of a specific user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK! User details
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
 *                      user:
 *                          type: object
 *                          properties:
 *                             billingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             shippingAddress:
 *                                type: object
 *                                properties:
 *                                  country:
 *                                    type: string
 *                                    example: Argentina
 *                                  street1:
 *                                    type: string
 *                                    example: Calle1 345
 *                                  city:
 *                                    type: string
 *                                    example: Buenos Aires
 *                                  province:
 *                                    type: string
 *                                    example: Capital Federal
 *                                  zip:
 *                                    type: string
 *                                    example: 35d2
 *                             _id:
 *                                type: string
 *                                example: 669874be9491ccf0ebeec67a
 *                             name:
 *                                type: string
 *                                example: John Doe
 *                             email:
 *                                type: string
 *                                example: jd@mail.com
 *                             image:
 *                                type: string
 *                                example: https://firebasestorage.googleapis.com/v0/b/arte-sano.appspot.com/o/images%2F60f01a50-9ee6-457f-acd1-3dad1cf10f1c.webp?alt=media&token=aad2a33b-825b-49b4-8756-0be227e2ee11
 *                             password:
 *                                type: string
 *                                example: pastafrola
 *                             roles:
 *                                type: array
 *                                items:
 *                                  type: string
 *                             createdAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             updatedAt:
 *                                type: string
 *                                example: 2024-07-18T16:48:06.581Z
 *                             __v:
 *                                type: integer
 *                                example: 0
 *       '400':
 *         description: Error - Invalid user ID
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
 *         description: Error - User not found
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
 *                   example: User not found
 * 
 *   put:
 *     tags:
 *       - Users
 *     summary: Update a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: string
 *           example: 60d21b4667d0d8992e610c85
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               image:
 *                 type: string
 *                 example: /path/to/image.jpg
 *               password:
 *                 type: string
 *                 example: new_password
 *               billingAddress:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                     example: USA
 *                   street1:
 *                     type: string
 *                     example: 123 Main St
 *                   street2:
 *                     type: string
 *                     example: Apt 4B
 *                   city:
 *                     type: string
 *                     example: New York
 *                   province:
 *                     type: string
 *                     example: NY
 *                   zip:
 *                     type: string
 *                     example: 10001
 *               shippingAddress:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                     example: USA
 *                   street1:
 *                     type: string
 *                     example: 123 Main St
 *                   street2:
 *                     type: string
 *                     example: Apt 4B
 *                   city:
 *                     type: string
 *                     example: New York
 *                   province:
 *                     type: string
 *                     example: NY
 *                   zip:
 *                     type: string
 *                     example: 10001
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["user", "admin"]
 *     responses:
 *       '200':
 *         description: User successfully updated
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
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: 60d21b4667d0d8992e610c85
 *                         name:
 *                           type: string
 *                           example: John Doe
 *                         email:
 *                           type: string
 *                           example: john.doe@example.com
 *                         image:
 *                           type: string
 *                           example: /path/to/image.jpg
 *                         billingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: USA
 *                             street1:
 *                               type: string
 *                               example: 123 Main St
 *                             street2:
 *                               type: string
 *                               example: Apt 4B
 *                             city:
 *                               type: string
 *                               example: New York
 *                             province:
 *                               type: string
 *                               example: NY
 *                             zip:
 *                               type: string
 *                               example: 10001
 *                         shippingAddress:
 *                           type: object
 *                           properties:
 *                             country:
 *                               type: string
 *                               example: USA
 *                             street1:
 *                               type: string
 *                               example: 123 Main St
 *                             street2:
 *                               type: string
 *                               example: Apt 4B
 *                             city:
 *                               type: string
 *                               example: New York
 *                             province:
 *                               type: string
 *                               example: NY
 *                             zip:
 *                               type: string
 *                               example: 10001
 *                         roles:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: ["user", "admin"]
 *                         createdAt:
 *                           type: string
 *                           example: 2024-07-31T12:34:56.789Z
 *                         updatedAt:
 *                           type: string
 *                           example: 2024-07-31T12:34:56.789Z
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
 *         description: User not found
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
 *                   example: User not found
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
 *       - Users
 *     summary: Delete a user by ID
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
 *         description: User successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: User with id = 60d21b4667d0d8992e610c85 deleted
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
 *         description: User not found
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
 *                   example: User not found
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
 * /users/role/{role}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get users by role
 *     parameters:
 *       - name: role
 *         in: path
 *         required: true
 *         description: The role of the users to retrieve
 *         schema:
 *           type: string
 *           example: admin
 *     responses:
 *       '200':
 *         description: Users successfully retrieved
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
 *                     users:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 60d21b4667d0d8992e610c85
 *                           name:
 *                             type: string
 *                             example: John Doe
 *                           email:
 *                             type: string
 *                             example: john.doe@example.com
 *                           image:
 *                             type: string
 *                             example: https://example.com/image.jpg
 *                           roles:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["admin"]
 *                           createdAt:
 *                             type: string
 *                             example: 2021-06-23T18:25:43.511Z
 *                           updatedAt:
 *                             type: string
 *                             example: 2021-06-23T18:25:43.511Z
 *       '400':
 *         description: Invalid role
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
 *                   example: Invalid role
 *       '404':
 *         description: Users not found
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
 *                   example: Users not found
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
