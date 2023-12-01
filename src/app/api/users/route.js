import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient();





async function main(){
    const post = await prisma.post.create({
        data:{
            title:'post',
            body:'post'
        }
    });
    console.log(post)
}

main();