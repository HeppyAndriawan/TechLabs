import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const prisma = new PrismaClient();

export async function GET(request, res) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const email = searchParams.get("email");

  if (key === `${process.env.NEXT_PUBLIC_API_KEY}`) {
    const getUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return NextResponse.json({
      response: getUser,
    });
  }
  if (session) {
    const getUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return NextResponse.json({
      response: getUser,
    });
  }
}

export async function POST(request) {
  const regData = await request.json();
  const { key, account_type, name, email, password } = regData;

  const newData = {
    account_type: account_type,
    name: name,
    email: email,
    password: password,
  };

  // Execute API
  try {
    if (key === `${process.env.NEXT_PUBLIC_API_KEY}`) {
      const newUser = await prisma.user.create({
        data: newData,
      });

      return NextResponse.json({
        response: newUser,
      });
    } else {
      return NextResponse.json({ status: "Can not find the page." });
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message, response: [] });
  }
}

export async function PATCH(request, res) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const regData = await request.json();
  const {account_type, address, description, email, image, name, password} = regData();

  // Execute API
  try {
    if (session !== null) {
      const response = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          account_type: account_type,
          address: address,
          description: description,
          email: email,
          image: image,
          name: name,
          password: password,
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
    const getUser = await prisma.user.delete({
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
