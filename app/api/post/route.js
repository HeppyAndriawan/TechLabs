import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { SortDSC } from "@/tool/SortASC/SortASC";
import { Key } from "lucide-react";

const prisma = new PrismaClient();

export async function GET(request, res) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const key = searchParams.get("key");
  console.log(searchParams);

  try {
    if (session) {
      if (email !== null) {
        const getUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        const getPost = await prisma.post.findMany({
          where: {
            userId: getUser.id,
          },
        });

        const sortData = await SortDSC("time", getPost);

        if (getPost !== null) {
          return NextResponse.json({
            response: sortData,
          });
        } else {
          return NextResponse.json({
            response: {
              data: [],
              message: "Empty Result",
            },
          });
        }
      }
      if (email === null) {
        const getPost = await prisma.post.findMany();
        const sortData = await SortDSC("time", getPost);

        if (sortData !== null) {
          return NextResponse.json({
            response: sortData,
          });
        } else {
          return NextResponse.json({
            response: {
              data: [],
              message: "Empty Result",
            },
          });
        }
      }
    } else if (key === `${process.env.NEXT_PUBLIC_API_KEY}`) {
      const getPost = await prisma.post.findMany();
      const sortData = await SortDSC("time", getPost);

      if (sortData !== null) {
        return NextResponse.json({
          response: sortData,
        });
      } else {
        return NextResponse.json({
          response: {
            data: [],
            message: "Empty Result",
          },
        });
      }
    }
    return NextResponse.json({ error: error.message, response: [] });
  } catch (error) {
    return NextResponse.json({ error: error.message, response: [] });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const regData = await request.json();
  const { userId, user, title, information, image, time } = regData;

  const newData = {
    userId: userId,
    user: user,
    title: title,
    information: information,
    image: image,
    time: time,
  };

  // Execute API
  try {
    if (session) {
      const newUser = await prisma.post.create({
        data: newData,
      });

      return NextResponse.json({
        response: newUser,
      });
    } else {
      return NextResponse.json({
        status: "Can not find the page.",
        response: [],
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, response: [] });
  }
}

export async function PATCH(request, res) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const regData = await request.json();
  const { userId, user, title, information, image, time } = regData;

  // Execute API
  try {
    if (session !== null) {
      const response = await prisma.post.update({
        where: {
          id: id,
        },
        data: {
          userId: userId,
          user: user,
          title: title,
          information: information,
          image: image,
          time: time,
        },
      });

      return NextResponse.json({ response });
    }

    return NextResponse.json({ status: "Can not find the page." });
  } catch (error) {
    return NextResponse.json({ error: error.message, response: [] });
  }
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Execute API
  if (session) {
    const getUser = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      response: getUser,
    });
  }

  return NextResponse.json({ error: error.message, response: [] });
}
