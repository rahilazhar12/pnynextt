import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Category from '@/app/models/categories.model';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        await dbConnect();

        const newCategory = new Category({ name });
        await newCategory.save();

        return NextResponse.json({ message: 'Category created successfully', category: newCategory }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}


export async function GET() {
    try {
        await dbConnect();

        const categories = await Category.find({});

        return NextResponse.json({ categories }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}
