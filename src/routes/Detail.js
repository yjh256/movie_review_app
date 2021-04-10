import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { title, year, summary, genres, medium_cover_image } = location.state;
            return (
                <div className="detail">
                    <img src={medium_cover_image} alt={title} title={title} />
                    <div className="detail__data">
                        <h1 className="detail__title">{title}</h1>
                        <h5 className="detail__year">{year}</h5>
                        <div className="detail__genres">{genres.reduce((res, genre) =>
                            res = res +", "+ genre
                        )}
                        </div>
                        <p className="detail__summary">{summary}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;