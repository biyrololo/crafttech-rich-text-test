import MDEditor, {commands} from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import './markdown.scss'

export interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: EditorProps) {
    
    return (
        <div
        data-color-mode="light"
        >
            <MDEditor
            preview='edit'
            value={value}
            onChange={s => onChange(s || '')}
            commands={[
                commands.bold,
                commands.italic,
                commands.code,
                commands.quote,
                commands.title1,
                commands.title2,
                commands.title3,
            ]}
            extraCommands={[]}
            previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
            }}
            />
        </div>
    )
}
    