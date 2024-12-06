"use client"
import dynamic from 'next/dynamic';

const QuillNoSSR = dynamic(() => import('react-quill-new'), { ssr: false });

export default function AppWYSIWYG({ value, onModelChange, placeholder = "Edit Your Content Here!" }) {
    return (
        <QuillNoSSR
            value={value} // Controlled editor value
            onChange={onModelChange} // Update parent state
            placeholder={placeholder} // Placeholder text
            modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }],
                    ['link', 'image'],
                ],

            }} // Toolbar configuration
            formats={[
                'header',
                'bold',
                'italic',
                'underline',
                'strike',
                'list',
                'link',
                'image',
            ]} // Supported formats
        />
    );
}
