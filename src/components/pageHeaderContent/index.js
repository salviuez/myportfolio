import "./style.css";

export function PageHeaderContent(props) {
    const { headerText, icon } = props;
    return (
        <div className="wrapper">
            <h2 className="hText">{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}