import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { prodYear, title, plots, posters, genre } = location.state;
            return (
                <div className="detail">
                    <img src={posters.split('|')[0]} onError={(e) => {
                        e.target.src = process.env.PUBLIC_URL + "/images/no-image-icon-0.jpg"; e.target.onError = null
                    }} alt={title} title={title} />
                    <div className="detail__data">
                        <h1 className="detail__title">{title}</h1>
                        <h5 className="detail__year">{prodYear}</h5>
                        <div className="detail__genres">{genre}
                        </div>
                        <p className="detail__summary">{plots.plot[0].plotText}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;