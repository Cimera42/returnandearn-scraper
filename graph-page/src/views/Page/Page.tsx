import React from "react";
import './Page.scss';
import { RouteComponentProps } from 'react-router-dom';
import items from '../../data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TextPartType, ImagePartType, CodePartType, SideBySidePartType, Part } from '../../data_types';

interface MatchParams {
    pageId: string,
};

interface PageProps extends RouteComponentProps<MatchParams> {};

interface PartProps<T> {
    part: T
};

const TextPart: React.FC<PartProps<TextPartType>> = ({ part }) => {
    return (
        <div>{part.text}</div>
    );
};

const ImagePart: React.FC<PartProps<ImagePartType>> = ({ part }) => {
    return (
        <img className="part image" src={part.src}/>
    );
};

const CodePart: React.FC<PartProps<CodePartType>> = ({ part }) => {
    return (
        <SyntaxHighlighter
            language={part.language}
            showLineNumbers
            style={style}
        >
            {part.text}
        </SyntaxHighlighter>
    );
};

const SideBySidePart: React.FC<PartProps<SideBySidePartType>> = ({ part }) => {
    const LeftType = partMapping[part.left.type];
    const RightType = partMapping[part.right.type];
    return (
        <div className="part side">
            <div className="side-left"><LeftType part={part.left}/></div>
            <div className="side-left"><RightType part={part.right}/></div>
        </div>
    );
};

type Mapping = {
    [key: string]: any
}

const partMapping: Mapping = {
    'text': TextPart,
    'image': ImagePart,
    'code': CodePart,
    'side': SideBySidePart,
}

const Page: React.FC<PageProps> = ({ match }) => {
    const item = items[Number(match.params.pageId)];

    return (
        <div className="page-container">
            <h1 className="page-title">{item.name}</h1>
            <div className="page-body">
                {
                    item.parts.map(part => {
                        const Type = partMapping[part.type];
                        return <Type part={part}/>;
                    })
                }
            </div>
        </div>
    );
};

export default Page;
