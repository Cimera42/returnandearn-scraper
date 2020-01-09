import React, {useState} from "react";
import './Sidebar.scss';

type SidebarProps = {shown: boolean};

const Sidebar: React.FC<SidebarProps> = ({shown}: SidebarProps) => {
    let classes: [string] = ['sidebar'];
    if(shown) {
        classes.push('shown');
    }
    return (
        <div className={classes.join(' ')}>
            <div className="sidebar-slider">
                <h1>Title</h1>
            </div>
        </div>
    );
};

const SidebarWrapper: React.FC = ({children}) => {
    const [shown, setShown] = useState(false);

    let classes: [string] = ['sidebar-burger'];
    if(shown) {
        classes.push('shown');
    }

    return (
        <div>
            <div className="sidebar-wrapper">
                <Sidebar shown={shown}/>
                <button
                    className={classes.join(' ')}
                    onClick={() => setShown(!shown)}
                >
                </button>
            </div>
            <div className="sidebar-body">
                {children}
            </div>
        </div>
    );
};

export default SidebarWrapper;
