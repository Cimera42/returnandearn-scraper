import React from "react";
import './Page.scss';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    pageId: string,
};

interface PageProps extends RouteComponentProps<MatchParams> {};

const Page: React.FC<PageProps> = ({ match }) => {
    return (
        <div>
            <h1 className="page-title">Project Page {match.params.pageId}</h1>
        </div>
    );
};

export default Page;
