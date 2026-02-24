export default defineEventHandler(async (event) => {

  const method = event.node.req.method

  if (method === 'GET') {
    const { name } = getQuery(event)

    return {
      message: `Hello, ${name}`
    }
  }

  if (method === 'POST') {
    const body = await readBody(event);    
    
    //use $fetch in server side to make third party api calls

    return {
      message: `Hello, ${body.age}`
    }
  }

});