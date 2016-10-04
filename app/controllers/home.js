


const index = async (ctx , _next) => {
    await ctx.render('index', {title: 'Hello World Koadda!'});
}



export default {
     index
};