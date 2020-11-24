import React from "react";

import "./NewsTile.css";

const NewsTile = ({ url, featured_image, title, published_date, news_site }) => (
	<div className="col-12 col-sm-6 col-lg-4 mb-3 pr-0">
		<div className="col-12 px-0">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<img
					src={featured_image}
					style={{
						objectFit: "cover",
						width: "100%",
						minHeight: 200,
						maxHeight: 200,
					}}
					alt={title}
				/>
				<div className="text-box position-absolute p-2">			
					<div className="row mb-3 news-site">
						<p className="col-7 m-0">{news_site}</p>
						<p className="col-5 m-0">
							{new Date(published_date).toDateString()}
						</p>
					</div>
					<h6>{title}</h6>
				</div>
			</a>
		</div>
	</div>
);

export default NewsTile;
