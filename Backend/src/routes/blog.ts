import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, CreateBlogInput,updateBlogInput } from "@lavkush25/medium-common";
import { date } from "zod/v4";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string,
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('authorization');
    const user = await verify(authHeader || "",c.env.JWT_SECRET);
    if(user) {
        //@ts-ignore
        c.set('userId',user.id);
        await next();
    }
    else {
        return c.json({
            "message": "You are not logged In",
        })
    }
})

blogRouter.post(`/`, async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");

    const { success } = createBlogInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct",
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId,
            date: new Date(Date.now())
        }
    })

    return c.json({
        id: blog.id,
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const { success } = updateBlogInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct",
        })
    }

    const blog = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
            date: new Date(Date.now())
        }
    })

    return c.json({
        id: blog.id,
    })
})


blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            date: true,
            author: {
                select: {
                    username: true,
                }
            }
        }
    })

    return c.json({
        blogs 
    }) 
})


blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.post.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            title: true,
            content: true,
            date: true,
            author: {
                select: {
                    username: true,
                }
            }
        }
    })

    return c.json({
        blog
    })
})

