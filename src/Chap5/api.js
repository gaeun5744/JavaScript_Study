// @ts-check

/**
 * Post
 *
 * GET/ posts
 * GET/ posts/ id
 * POST /posts
 */

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My_first_post',
    content: 'Hello!',
  },
  {
    id: 'my_second_post',
    title: 'My_second_post',
    content: 'Hello!',
  },
]

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async () => ({
      // TODO : implement
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\posts$/,
    method: 'POST',
    callback: async () => ({
      // TODO : implement
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
