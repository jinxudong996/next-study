import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 检查请求头是否为 application/json
    // if (request.headers.get('Content-Type') !== 'application/json') {
    //   return NextResponse.json({ error: 'Invalid Content-Type' }, { status: 400 });
    // }

    // // 尝试解析请求体
    // const body = await request.json();
    // 处理请求逻辑
    return NextResponse.json({
      code: 200,
      data: 123
    });
  } catch (error) {
    console.error(error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}