import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import './markdown.scss'

export interface PreviewProps {
    value: string;
}

export function MarkdownPreview({ value }: PreviewProps) {
    return (
        <div
        data-color-mode="light"
        >
            <MDEditor.Markdown
            source={value}
            rehypePlugins={[[rehypeSanitize]]}  
            style={{maxWidth: '100%'}}
            />
        </div>
    )
}
    