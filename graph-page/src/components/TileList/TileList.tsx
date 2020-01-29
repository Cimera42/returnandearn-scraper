import React from "react";
import './TileList.scss';
import { Link } from "react-router-dom";
import items from '../../data';

const TileList: React.FC = () => {
    return (
        <div>
            <h1 className="page-title">Graph Viewer</h1>
            <div className="tile-list">
                {items.map((v, i) => {
                    return (
                        <Link to={`/page/${i}`}>
                            <div className="tile-item" key={i}>
                                <div className="tile-item-sizer">
                                    <div className="thumbnail">
                                        <div className={v.contain ? 'contain' : ''} style={{backgroundImage: `url(${v.img})`}}></div>
                                    </div>
                                    <div className="details">
                                        <div className="row">
                                            <span>{v.date}</span>
                                            <h3>{v.name}</h3>
                                        </div>
                                        {v.description}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TileList;
