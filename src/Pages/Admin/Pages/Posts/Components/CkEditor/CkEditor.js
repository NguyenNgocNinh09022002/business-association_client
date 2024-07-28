import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    AccessibilityHelp,
    Autoformat,
    AutoLink,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    Indent,
    IndentBlock,
    Italic,
    Link,
    Paragraph,
    SelectAll,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    TextPartLanguage,
    TextTransformation,
    Title,
    Underline,
    Undo,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import './CkEditor.css';

export default function CkEditorComponent({  disabled, data, onEvent }) {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
    
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'highlight',
                'outdent',
                'indent',
            ],
            shouldNotGroupWhenFull: false,
        },
        plugins: [
            AccessibilityHelp,
            Autoformat,
            AutoLink,
            Autosave,
            BalloonToolbar,
            BlockQuote,
            Bold,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
           
            Highlight,
            HorizontalLine,
            HtmlEmbed,
            Indent,
            IndentBlock,
            Italic,
            Link,
            Paragraph,
            SelectAll,
            SpecialCharacters,
            SpecialCharactersArrows,
            SpecialCharactersCurrency,
            SpecialCharactersEssentials,
            SpecialCharactersLatin,
            SpecialCharactersMathematical,
            SpecialCharactersText,
            Strikethrough,
            TextPartLanguage,
            TextTransformation,
           
            Underline,
            Undo,
        ],
        balloonToolbar: ['bold', 'italic', '|', 'link'],
        
        
        
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
        },
      
        placeholder: 'Type or paste your content here!',
        
    };

    return (
        <div>
            <div className="main-container">
                <div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {isLayoutReady && (
                                <CKEditor 
                                    data={data}
                                    disabled={disabled}
                                    onChange={(event, editor) => onEvent(editor.getData())}
                                    editor={ClassicEditor}
                                    config={editorConfig}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
