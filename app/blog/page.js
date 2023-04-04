import { Content } from 'next/font/google';
import React from 'react';
import styles from '../../app/page.module.css';
 
const blogContent = {
    title: 'My first blog',
    date: '2023-03-24',
    author: 'Jared Foy',
    content: 'This is some text that will display.',
    comments: true,
    leaveComment: 'A field will go here.'

}
export default function Blog() {

    return (
        <div className='blog-wrapper'>
            <div className='blog-title'>
                <h1>{blogContent.title}</h1>
            </div>
            <div className='blog-date'>
                {blogContent.date}
            </div>
            <div className='blog-author'>
                {blogContent.author}
            </div>
            <div className='blog-content'>
                {blogContent.content}
            </div>
            <div className='blog-leave-comment'>
                {blogContent.leaveComment}
            </div>
        </div>
    )
};

