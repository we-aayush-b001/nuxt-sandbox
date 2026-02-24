export default defineEventHandler(async (event) => {
   
    const {code} = event.context.params;
    console.log("Testing Backend====>", code);  //Dynamic Routes in Backend

});