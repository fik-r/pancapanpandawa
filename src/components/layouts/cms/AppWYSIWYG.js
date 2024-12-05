import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';

export default function AppWYSIWYG({ value, onModelChange, placeholder = "Edit Your Content Here!" }) {
    return (
        <ReactQuill
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
