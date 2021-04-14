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
            const { title, pubDate, image, director, actor, userRating, link } = location.state;
            return (
                <div className="detail">
                    <img src={image} onError={(e) => {
                        e.target.src = process.env.PUBLIC_URL + "/images/no-image-icon-0.jpg"; e.target.onError = null
                    }} alt={title} title={title} />
                    <div className="detail__data">
                        <h1 className="detail__title">{title}</h1>
                        <h5 className="detail__year">{pubDate}</h5>
                        <div className="detail__director">감독 : {director}</div>
                        <div className="detail__actor">배우 : {actor}</div>
                        <div className="detail__rating">평점 : {userRating} / 10.0</div>
                        <p className="more_info">더 자세한 내용을 알고 싶다면 <a href={link} target="_blank">여기</a>를 클릭하세요.</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Detail;