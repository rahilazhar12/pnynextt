'use client'
// components/CategoryDropdown.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"; // Ensure this path and export are correct

const CategoryDropdown = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelect = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setSelectedCategory(lowerCaseCategory);
    router.push(`/courses/${lowerCaseCategory}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          {selectedCategory || 'Select Category'}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map((category) => (
          <DropdownMenuItem
            key={category._id}
            onClick={() => handleSelect(category.name)}
          >
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryDropdown;