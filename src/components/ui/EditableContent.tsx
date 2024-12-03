import React, { Fragment, useState } from 'react';

interface EditableDiv {
    id: number;
    description: string;
    className?: string;
    maxLength?: number;
    isEditing?: boolean;
    rows?: number;
}

const EditableContent = ({ id, description, className, maxLength, isEditing, rows }: EditableDiv) => {
    const [content, setContent] = useState<EditableDiv[]>([
        {
            id: id,
            description: description
        }
    ]);



    const handleContentChange = (id: number, newContent: string) => {
        setContent((prevContent) =>
            prevContent.map((item) =>
                item.id === id ? { ...item, description: newContent } : item
            )
        );
    };

    return (
        <>
            {content.map((item) => (
                <Fragment key={item.id}>
                    {isEditing ? (
                        <textarea
                            maxLength={maxLength}
                            value={item.description}
                            onChange={(e) =>
                                handleContentChange(item.id, e.target.value)
                            }
                            rows={rows ? rows : 3}
                            className={className + " " + 'w-full'}
                        />
                    ) : (
                        <text className={className + " " + 'font-default block'}>{item.description}</text>
                    )}
                </Fragment>
            ))}
        </>
    );
};

export default EditableContent;
