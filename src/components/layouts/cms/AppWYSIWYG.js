import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';

export default function AppWYSIWYG({ value, onModelChange }) {
    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    };

    function imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                // Replace this URL with your image upload API endpoint
                const response = await fetch('/api/uploads', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();

                const quill = this.quill;
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', data.url);
            }
        };
    }

    return (
        <ReactQuill
            value={value} // Controlled editor value
            onChange={onModelChange} // Update parent state
            placeholder="Edit Your Content Here!" // Placeholder text
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
