import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
